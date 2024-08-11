import Policy from '../../utils/Politique_de_confidentialité_Platform.pdf'


const TermsOfUse = ({agree, setAgree}) => {

    const handleCheckboxChange = () => setAgree(!agree);

    return(
        <div className="max-w-lg mx-auto">
            <div className="flex items-center mt-5 mb-4">
                <input
                type="checkbox"
                id="agreeCheckbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={agree}
                onChange={handleCheckboxChange}
            />
                <label htmlFor="agreeCheckbox" className="ml-2 block text-md font-semibold text-primary">
                    J'accepte les <a href={Policy} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">conditions d'utilisation</a>
                </label>
            </div>
        </div>
    )
}

export default TermsOfUse