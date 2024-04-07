import Banner from "../components/profile/Banner"
import ProfileCard from "../components/cards/ProfileCard"
import { MdEdit } from "react-icons/md";
import CertificationsCard from "../components/cards/CertificationsCard";
import InterestsCard from "../components/cards/InterestsCard";

const Profile = () =>{
    return(
        <main className='relative'>
            {/* Background banner */}
            <section className="relative block" style={{ height: "500px" }}>
                <Banner />
            </section>

            <section className="relative py-10 bg-white-smoke">
                <div className="container mx-auto px-10">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <ProfileCard />

                            <CertificationsCard/>

                            <InterestsCard/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile