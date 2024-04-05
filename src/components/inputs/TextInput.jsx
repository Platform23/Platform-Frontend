const TextInput = ({ placeholder}) => {

    return (
        <div className="mt-5">
            <input type="email" name="" id="Email" placeholder={placeholder} className="w-full px-4 py-3 rounded-lg bg-bggray mt-2 border focus:border-primary focus:bg-white-smoke focus:outline-none" autoComplete required />
        </div>
    )
}

export default TextInput