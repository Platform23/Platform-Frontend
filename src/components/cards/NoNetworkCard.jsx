import { useNavigate } from "react-router-dom";
import useNavStore from '../../store/navStore';

const NoNetworkCard = () => {
    const navigate = useNavigate();
    const { setPage } = useNavStore();

    const handleClick = () => {
        setPage("Réseaux");
        navigate('reseaux');
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-white text-primary">
            <div className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>

                <span className="sr-only">Info</span>
                <h3 className="text-lg font-semibold">Aucun réseau</h3>
            </div>

            <div className="mt-2 mb-4 text-sm">
                Vous n'êtes membre d'aucun réseau. Rejoignez un réseau pour participer.
            </div>

            <button
                type="button"
                className="text-white bg-primary hover:bg-gray-700 focus:outline-nonefont-medium rounded-lg text-sm px-3 py-1.5 me-2 text-center inline-flex items-center"
                onClick={handleClick}
            >
                <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                Découvrir
            </button>
        </div>
    )
}

export default NoNetworkCard