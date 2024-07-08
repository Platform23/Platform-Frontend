

const ErrorModal = ({ show, onClose, errorMessage }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-semibold text-red-600">Erreur</h2>
                <p className="mt-4 text-primary">{errorMessage}</p>
                <button
                    onClick={onClose}
                    className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default ErrorModal