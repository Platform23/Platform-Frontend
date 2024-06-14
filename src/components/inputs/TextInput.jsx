const TextInput = ({ placeholder}) => {

    return (
        <div className="mt-5">
            <input type="email" name="" id="Email" placeholder={placeholder} className="w-full px-3 py-2 rounded-lg mt-2 border border-primary focus:border-primary focus:outline-none" autoComplete required />
        </div>
    )
}

export default TextInput