import { useNavigate } from "react-router-dom";
import useNavStore from '../../store/navStore';

const WelcomeCard = () => {
    const navigate = useNavigate();
    const { setPage } = useNavStore();

    const handleClick = () => {
        setPage("Réseaux");
        navigate('reseaux');
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-white text-primary">
            <div className="flex items-center">
                <h3 className="text-2xl font-semibold">Bienvenue</h3>
            </div>

            <div className="my-6 mb-4 text-xl">
                Bienvenue dans Platform, verifiez votre email.
            </div>

        </div>
    )
}

export default WelcomeCard