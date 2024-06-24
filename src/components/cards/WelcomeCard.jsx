import { logo } from "../../assets/images"

const WelcomeCard = () => {

    return (
        <section className="items-center justify-center">
            <img
                className="mx-auto mb-7"
                alt="Logo"
                src={logo}
            />
            <div className="p-4 border border-gray-300 rounded-lg bg-white text-primary items-center justify-center text-center">

                <div className="mt-3">
                    <h3 className="text-2xl font-semibold">Bienvenue</h3>
                </div>

                <div className="my-6 mb-4 text-xl">
                    Bienvenue dans Plaform. 
                    Veuillez à présent vérifier votre courriel 
                    pour activer votre compte et récupérer votre code d'intégration
                </div>

            </div>
        </section>
    )
}

export default WelcomeCard