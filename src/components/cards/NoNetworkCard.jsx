
const NoNetworkCard = () => {

    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-white text-primary items-center justify-center text-center">
            <div className="mt-3">
                <h3 className="text-2xl font-semibold">Aucun réseau</h3>
            </div>

            <div className="my-6 mb-4 text-xl">
                <p>Vous n&apos;avez intégré aucun réseau pour le moment.</p>
                <p>Veuillez intégré un réseau pour participer aux discussions.</p>
            </div>

        </div>
    )
}

export default NoNetworkCard