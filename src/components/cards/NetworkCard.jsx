
const NetworkCard = ({ network }) => {
    return (
        <div className="w-32 p-4 border border-gray-300 rounded-lg bg-white text-primary truncate">
            <h3 className="text-lg font-semibold mb-2">{network.name}</h3>
            <hr />
            <p className="mt-2 mb-2">{network.description}</p>
        </div>
    )
}

export default NetworkCard