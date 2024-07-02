import NetworkCard from "../components/cards/NetworkCard";
import { networks } from "../utils/constants"

const Network = () => {
    return (
        <section className="pt-28 pl-5">
            <div className="flex flex-col text-primary bg-white shadow-md bg-clip-border rounded-xl  md:w-1/2 sm:w-72 p-6">
                <h3 className="block mb-2 font-montserrat text-xl font-semibold leading-snug tracking-normal">
                    Entrer votre votre code d’intégration pour intégrer un réseau
                </h3>

                <input
                    type="text"
                    placeholder="Entrer le code d’invitation"
                    className="w-full px-4 py-3 rounded-lg bg-[#F0F0F0] mt-2 mb-6 border focus:border-[#ADADAD] focus:outline-none"
                    autoComplete="true"
                />

                <div className="inline-block">
                    <button
                        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-aqua bg-primary hover:bg-gray-700 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-non"
                        type="button">
                        Soumettre
                    </button>
                </div>
            </div>

            <div className="py-10">
                <h3 className="text-primary font-montserrat font-bold text-xl leading-snug tracking-normal pb-3">
                    Découvrez les différents réseaux
                </h3>
                <div className="flex justify-center md:justify-start flex-wrap gap-6">
                    {networks.map((network, idx) => (
                        <NetworkCard key={idx} network={network} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Network