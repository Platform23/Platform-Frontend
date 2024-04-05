const PasswordInput = ({placeholder }) => {
    return (
        <div className="mt-5">
            <input type="password" name="password" id="Password" placeholder={placeholder} minLength="6" className="w-full px-4 py-3 rounded-lg bg-bggray mt-2 border focus:border-primary focus:bg-white-smoke focus:outline-none" required />
        </div>
    )
}

export default PasswordInput