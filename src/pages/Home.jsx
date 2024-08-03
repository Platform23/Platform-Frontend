import NoNetworkCard from "../components/cards/NoNetworkCard";
import NetworkCard from "../components/cards/NetworkCard";
import { useNetworks } from "../hooks/useNetworks";
import NetworkCardShimmer from "../components/cards/NetworkCardShimmer";
import { logo } from '../assets/images';


const Home = () => {
  const { userNetworks, loading, error } = useNetworks();

  return (
    // <section className={`${!userNetworks.length ? 'h-screen flex justify-center items-center' : ''}`}>
    //   <div className="flex justify-center pb-10 pl-0 pt-28 md:pl-5 md:justify-start flex-wrap gap-6">
    //     {loading ? (
    //       Array(6).fill().map((_, index) => (
    //         <NetworkCardShimmer key={index} />
    //       ))
    //     ) : userNetworks.length > 0 ? (
    //       userNetworks.map((data) => (
    //         <NetworkCard key={data.network.id} network={data.network} />
    //       ))) : (
    //       <div className="w-80">
    //         {/* {!userNetworks.length && <NoNetworkCard />} */}
    //       </div>
    //     )}
    //   </div>

    <section className='h-screen flex justify-center items-center'>
      <div className="w-full h-100">
        <img
            className="mx-auto mb-5"
            alt="Logo"
            src={logo}
        />
      </div>
      <div>
        
      </div>
    </section >
  )
}

export default Home