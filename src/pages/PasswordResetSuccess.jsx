import Lottie from 'lottie-react';
import ForgotPasswordButton from '../components/buttons/ForgotPassButton';
import { useNavigate } from 'react-router-dom';
import validAnimation from "../assets/lotties/valid.json";

const PasswordResetSuccess = () => {
    const navigate = useNavigate();

    return (
        <main className='relative'>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100">
                        <Lottie animationData={validAnimation} />

                        <p className='text-center text-2xl text-black font-roboto mt-5'>
                            Votre mot de passe a été réinitialisé avec succès.
                        </p>

                        <form className="mt-5" action="#" method="POST">
                            <ForgotPasswordButton label="Connexion" handleClick={() => { navigate('/connexion') }} />
                        </form>
                    </div>
                </div>
            </section >
        </main >)
}

export default PasswordResetSuccess