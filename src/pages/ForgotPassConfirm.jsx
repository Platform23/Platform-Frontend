import { logo } from '../assets/images';
import ForgotPasswordButton from '../components/buttons/ForgotPassButton';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordConfirm = () => {
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
                        <p className='text-center text-2xl text-black font-roboto mt-5'>
                            Bien reçue. Un email de récupération vous sera envoyé à votre adresse. 
                        </p>

                        <form className="mt-5" action="#" method="POST">

                            <ForgotPasswordButton label="Retour" handleClick={() => { navigate('/connexion') }} />
                        </form>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default ForgotPasswordConfirm