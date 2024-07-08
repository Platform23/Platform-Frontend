import { useNavigate } from "react-router-dom"

const NetworkCard = ({ network }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Add the network name in the path
        navigate(`/reseaux/${network.uuid}`);

    };

    return (
        <div className="relative flex flex-col text-primary bg-white shadow-md bg-clip-border rounded-xl w-56">
            <div className="p-6">
                <h5 className="block mb-2 font-montserrat text-xl font-semibold leading-snug tracking-normal">
                    {network.name}
                </h5>

                <p className="block font-roboto text-base font-light leading-relaxed text-inherit line-clamp-3" class="line-clamp-3">
                    {network.description}
                </p>
            </div>

            <div className="p-6 pt-0">
                <div className="inline-block">
                    <button
                        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-primary uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-aqua hover:bg-primary hover:text-aqua active:bg-aqua"
                        type="button"
                        onClick={handleClick}>
                        Voir plus
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NetworkCard