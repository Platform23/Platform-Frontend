import { logo } from '../assets/images';
import LoginButton from '../components/buttons/LoginButton';
import { useNavigate, useParams } from 'react-router-dom';
import PasswordInput from '../components/inputs/PasswordInput';
import { useContext, useState } from 'react';
import AuthContext from '../hooks/AuthProvider';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            await resetPassword(token, password);
            navigate("/mot-de-passe-reinitialise-succes");
        } catch (responseError) {
            setError(responseError)
        }
    };

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
                        <h1 className="text-2xl font-bold leading-tight mt-10 text-center font-montserrat text-primary pb-5">
                            Réinitialisation du mot de passe
                        </h1>

                        <form className="mt-6" action="#" method="POST">
                            <PasswordInput
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Mot de passe' />

                            <PasswordInput
                                placeholder='Confirmez le mot de passe'
                                id="confirm_password"
                                name="confirm_password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <LoginButton label="Réinitialiser" handleClick={handleSubmit} />
                        </form>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default ResetPassword