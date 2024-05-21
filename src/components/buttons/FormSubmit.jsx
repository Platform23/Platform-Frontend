const SubmitForm = ({ label, handleClick }) => {
    return (
        <button type="submit" className="block bg-primary hover:bg-secondary focus:bg-secondary text-white hover:text-primary font-bold rounded-lg px-8 py-3 mt-6 mx-60" 
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default SubmitForm