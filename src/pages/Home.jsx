import NoNetworkCard from "../components/cards/NoNetworkCard";
import NetworkCard from "../components/cards/NetworkCard";
import { useNetworks } from "../hooks/useNetworks";
import NetworkCardShimmer from "../components/cards/NetworkCardShimmer";
import { logoLarge } from '../assets/images';
import { platformDesc } from "../utils/constants"



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
      <div className="w-full p-10 bg-white-smoke">
        <h1 className="text-primary text-xl font-bold font-montserrat mb-12 mt-24 text-center">
          Platform: enhancing performances within communities of practices - 40B1-0_221552
        </h1>
        <img
          className="float-left mr-6 mb-4"
          alt="Logo"
          src={logoLarge}
          height={400}
          width={400}
        />
        <p className="text-xl text-justify font-montserrat leading-8">
          <i className="text-primary font-semibold">
            Platform: enhancing performances within communities of practices
          </i> 
          {/* {platformDesc} */}
          {/* Render the text with the appropriate line breaks */}
          {platformDesc.split('\n').map((line, index) => (
                <p key={index} className="mb-4">
                    {line}
                </p>
            ))}
        </p>
      </div>
    </section>

  )
}

export default Home