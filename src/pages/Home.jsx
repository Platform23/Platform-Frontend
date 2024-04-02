import NoNetworkCard from "../components/cards/NoNetworkCard";
import NetworkCard from "../components/cards/NetworkCard";

const networks = [
  {
    name: "Imformatique",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptatem porro molestiae eum nostrum in doloribus fugiat soluta cumque mollitia?"
  },
  {
    name: "AI",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptatem porro molestiae eum nostrum in doloribus fugiat soluta cumque mollitia?"
  }
];

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex">
        {networks.map((network, idx) => (
          <NetworkCard key={idx} network={network} />
        ))}
      </div>

      <div className="">
        {networks.length === 0 && <NoNetworkCard />}
      </div>
    </section>
  )
}

export default Home