const ForgotPasswordButton = ({ label, handleClick }) => {
    return (
        <button type="submit" className="w-full block bg-primary hover:bg-secondary focus:bg-secondary text-white hover:text-primary font-bold rounded-lg px-4 py-3 mt-6" 
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default ForgotPasswordButton