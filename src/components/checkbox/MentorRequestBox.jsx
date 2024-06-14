
const MentorRequest = ({agree, setAgree}) => {

    const handleCheckboxChange = () => setAgree(!agree);

    return(
        <div className="max-w-lg">
            <div className="flex items-center mt-5 mb-4">
                <input
                type="checkbox"
                id="agreeCheckbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={agree}
                onChange={handleCheckboxChange}
            />
                <label htmlFor="agreeCheckbox" className="ml-2 block text-md font-semibold text-primary">
                    Demande pour devenir mentor dans votre réseau
                </label>
            </div>
        </div>
    )
}

export default MentorRequest