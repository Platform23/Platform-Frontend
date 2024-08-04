import { logo } from '../assets/images';
import LoginButton from '../components/buttons/LoginButton';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../components/inputs/PasswordInput';
import TextInput from '../components/inputs/TextInput';
import { useContext, useState } from 'react';
import AuthContext from '../hooks/AuthProvider';
import ErrorModal from '../components/modal/ErrorModal';

const SignIn = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [credentials, setCredentials] = useState({
        identifier: '',
        password: '',
    });

    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials);
            navigate("/");
        } catch (responseError) {
            setError(responseError)
            setShowErrorModal(true);
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
                        <h1 className="text-2xl font-bold leading-tight mt-10 text-center font-montserrat text-primary pb-5">Bienvenue sur Platform</h1>

                        <form className="mt-6" action="#" method="POST">
                            <TextInput
                                id="identifier"
                                name="identifier"
                                type={'text'}
                                onChange={handleChange}
                                placeholder="Adresse e-mail ou Pseudo" />

                            <PasswordInput
                                id="password"
                                name="password"
                                onChange={handleChange}
                                placeholder='Mot de passe' />

                            <div className="text-left mt-5">
                                <Link to="/mot-de-passe-oublie" className="text-lg font-bold text-primary focus:text-bggray">Mot de passe oublié?</Link>
                            </div>

                            <LoginButton label="Se Connecter" handleClick={handleSubmit} />
                        </form>

                        {/* Error Modal */}
                        <ErrorModal
                            show={showErrorModal}
                            onClose={() => setShowErrorModal(false)}
                            errorMessage={error}
                        />

                        <hr className="my-6 border-primary w-full" />

                        <p className="text-lg text-center font-semibold">Besoin d&apos;un compte?<Link to="/inscription" className="text-primary font-bold"> Créer un compte</Link></p>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default SignIn