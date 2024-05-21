import { logo } from '../assets/images';
import SignUpButton from '../components/buttons/SignUpButton';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../components/inputs/PasswordInput';
import TextInput from '../components/inputs/TextInput';
import TermsOfUse from '../components/buttons/TermsOfUse';
import { useState } from "react"


const Sign_up = () => {
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    return (
        <main className='relative'>
            <section className=" flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100 py-5">
                        <img
                            className="mx-auto mt-5"
                            alt="Logo"
                            src={logo}
                        />
                        <h1 className="text-2xl font-bold leading-tight mt-10 text-center font-montserrat text-primary pb-2">Créer un compte</h1>
                        <form className="mt-6" action="#" method="POST">
                            {/* <TextInput placeholder="Entrer le code" /> */}

                            <TextInput placeholder="Nom d'utilisateur" />

                            <TextInput placeholder="Adresse e-mail" />

                            <PasswordInput placeholder='Mot de passe' />

                            <PasswordInput placeholder='Confirmez le mot de passe' />

                            <TermsOfUse agree={agree} setAgree={setAgree}/>

                            <SignUpButton agree={agree} label="Inscription" handleClick={() => { navigate('/formulaire') }} />
                        </form>

                        <p className="mt-8 text-center text-lg font-semibold">Vous avez déjà un compte?<Link to="/connexion" className="text-primary font-bold"> Se connecter</Link></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Sign_up