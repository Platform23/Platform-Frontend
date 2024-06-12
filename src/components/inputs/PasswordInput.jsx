const PasswordInput = ({placeholder }) => {
    return (
        <div className="mt-5">
            <input type="password" name="password" id="Password" placeholder={placeholder} minLength="6" className="w-full px-3 py-2 rounded-lg mt-2 border border-primary focus:outline-none" required />
        </div>
    )
}

export default PasswordInput