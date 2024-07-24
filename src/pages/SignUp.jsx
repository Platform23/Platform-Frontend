import { logo } from '../assets/images';
import SignUpButton from '../components/buttons/SignUpButton';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../components/inputs/PasswordInput';
import TextInput from '../components/inputs/TextInput';
import TermsOfUse from '../components/checkbox/TermsOfUse';
import DropdownInput from '../components/inputs/DropdownInput';
import { communityProfile, communities, competences } from "../utils/constants"
import { useCallback, useContext, useState } from "react"
import AuthContext from '../hooks/AuthProvider';
import ErrorModal from '../components/modal/ErrorModal';
import Skills from '../utils/Platform_competences.pdf'


const SignUp = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const { register } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        pseudo: '',
        password: '',
        confirm_password: '',
        competences: [],
        communities: [],
        profiles: [],
        remember_me: true,
    });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    const handleDropdownChange = useCallback((name, value) => {
        // If value is null, set selectedValues to an empty array to prevent null error.
        const selectedValues = value ? value.map(item => item.value) : [];
        setFormData((prevData) => ({ ...prevData, [name]: selectedValues }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            setError("Les mots de passe ne correspondent pas");
            setShowErrorModal(true);
            return;
        }

        try {
            await register(formData);
            navigate("/bienvenue");
        } catch (responseError) {
            setError(responseError)
            setShowErrorModal(true);
        }
    };

    return (
        <main className='relative'>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100 py-5 mt-40">
                        <img
                            className="mx-auto mt-20"
                            alt="Logo"
                            src={logo}
                        />
                        <h1 className="text-2xl font-bold leading-tight mt-10 text-center font-montserrat text-primary pb-2">Créer un compte</h1>
                        <form className="mt-6" method="POST">
                            {/* <TextInput placeholder="Entrer le code" /> */}
                            <TextInput
                                placeholder="Nom d'utilisateur"
                                id="pseudo"
                                name="pseudo"
                                type={'text'}
                                onChange={handleChange}
                            />

                            <TextInput
                                placeholder="Adresse e-mail"
                                id="email"
                                name="email"
                                type={'email'}
                                onChange={handleChange}
                            />

                            <PasswordInput
                                placeholder='Mot de passe'
                                id="password"
                                name="password"
                                onChange={handleChange}
                            />

                            <PasswordInput
                                placeholder='Confirmez le mot de passe'
                                id="confirm_password"
                                name="confirm_password"
                                onChange={handleChange}
                            />

                            <DropdownInput placeholder=' Compétences numériques et collaboratives'
                                option={competences}
                                onChange={(value) => handleDropdownChange('competences', value)}
                            />

                            <DropdownInput
                                placeholder=' Profil et rôle'
                                option={communityProfile}
                                onChange={(value) => handleDropdownChange('profiles', value)}
                            />

                            <DropdownInput
                                placeholder=" Communauté d'appartenance"
                                option={communities}
                                onChange={(value) => handleDropdownChange('communities', value)}
                            />

                            <div className="mt-5 block text-md font-semibold text-primary">
                                Cliquez ici pour plus d'informations sur les <a href={Skills} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">compétences.</a>
                            </div> 

                            <TermsOfUse agree={agree} setAgree={setAgree} />

                            <SignUpButton
                                agree={agree}
                                handleClick={handleSubmit}
                                label="Inscription" />
                        </form>

                        {/* Error Modal */}
                        <ErrorModal
                            show={showErrorModal}
                            onClose={() => setShowErrorModal(false)}
                            errorMessage={error}
                        />

                        <p className="mt-8 text-center text-lg font-semibold">Vous avez déjà un compte?<Link to="/connexion" className="text-primary font-bold"> Se connecter</Link></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignUp