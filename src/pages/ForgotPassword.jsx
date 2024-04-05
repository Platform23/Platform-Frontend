import { logo } from '../assets/images';
import ForgotPasswordButton from '../components/buttons/ForgotPassButton';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/inputs/TextInput';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <main className='relative'>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100">
                        <img
                            className="mx-auto mb-5"
                            alt="Logo"
                            src={logo}
                        />
                        <h1 className="text-2xl font-bold leading-tight text-center font-montserrat text-primary">Récupération mot de passe</h1>

                        <form className="mt-5" action="#" method="POST">
                            <TextInput placeholder="Entrer l'adresse e-mail"/>

                            <ForgotPasswordButton label="Envoyer" handleClick={() => { navigate('/mot_de_passe_oublie_confirmation') }} />
                        </form>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default ForgotPassword