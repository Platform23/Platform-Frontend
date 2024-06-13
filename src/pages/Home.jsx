import WelcomeCard from "../components/cards/WelcomeCard";
import NetworkCard from "../components/cards/NetworkCard";

const networks = [
  // {
  //     name: "Imformatique",
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  // },
  // {
  //     name: "AI",
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
  // },
];

const Home = () => {
  return (
    <section className={`${!networks.length ? 'h-screen flex justify-center items-center' : ''}`}>
      <div className="flex justify-center pb-10 pl-0 pt-28 md:pl-5 md:justify-start flex-wrap gap-6">
        {networks.map((network, idx) => (
          <NetworkCard key={idx} network={network} />
        ))}
      </div>

      <div className="w-80">
        {!networks.length && <WelcomeCard />}
      </div>
    </section >
  )
}

export default Home