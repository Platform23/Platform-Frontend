import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import ForgotPasswordButton from '../components/buttons/ForgotPassButton';
import validAnimation from "../assets/lotties/valid.json";
import errorAnimation from "../assets/lotties/error.json";
import Loader from '../components/loaders/Loader';
import { API_BASE_URL } from '../utils/constants';

const EmailVerification = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [verificationStatus, setVerificationStatus] = useState({ isVerified: false, message: '' });

    const verifyEmail = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/verify/email/${token}`, {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();
            setVerificationStatus({
                isVerified: response.ok,
                message: data.message
            });
        } catch (err) {
            setVerificationStatus({
                isVerified: false,
                message: "Une erreur s'est produite lors de la vérification de l'email."
            });
        }
    }, [token]);

    useEffect(() => {
        verifyEmail();
    }, [verifyEmail]);

    const renderContent = () => {
        if (verificationStatus.isVerified) {
            return (
                <>
                    <Lottie animationData={validAnimation} />
                    <p className='text-center text-2xl text-black font-roboto mt-5'>
                        Votre email a été vérifié. Vous pouvez désormais utiliser toutes les fonctionnalités de l&apos;application.
                    </p>
                    <ForgotPasswordButton label="Reseaux" handleClick={() => navigate('/reseaux')} />
                </>
            );
        } else if (verificationStatus.message) {
            return (
                <>
                    <Lottie animationData={errorAnimation} />
                    <p className='text-center text-2xl text-black font-roboto mt-5'>
                        {verificationStatus.message}
                    </p>
                    <ForgotPasswordButton label="Connexion" handleClick={() => navigate('/connexion')} />
                </>
            );
        }
        return <Loader />;
    };

    return (
        <main className='relative'>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="w-full h-100">
                        {renderContent()}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EmailVerification;
