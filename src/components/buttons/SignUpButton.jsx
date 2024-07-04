const SignUpButton = ({ label, handleClick, agree }) => {
    return (
        <button type="submit" className={`${agree ? 'w-full block bg-primary hover:bg-secondary focus:bg-secondary text-white hover:text-primary font-bold rounded-lg px-4 py-3 mt-6' :
            'w-full block bg-light-gray hover:cursor-not-allowed text-primary font-bold rounded-lg px-4 py-3 mt-6 opacity-50'}`}
            onClick={handleClick}
            disabled={!agree}
        >
            {label}
        </button>
    )
}

export default SignUpButton