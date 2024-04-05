import Banner from "../components/profile/Banner"
import ProfileCard from "../components/profile/ProfileCard"
import { MdEdit } from "react-icons/md";

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

                            <div className="my-5 py-10 shadow-xl border-2 rounded-lg border-bggray">
                                <div className="flex flex-wrap">
                                    <div className="flex justify-between mb-4 w-full lg:w-9/12 px-4">
                                        <h2 className="mb-4 text-lg leading-relaxed text-primary font-bold font-montserrat">
                                            Formations & Certifications
                                        </h2>
                                        <MdEdit className="w-6 h-6 text-primary"/>
                                    </div>
                                </div>
                            </div>

                            <div className="my-5 py-10 shadow-xl border-2 rounded-lg border-bggray">
                                <div className="flex flex-wrap">
                                    <div className="flex justify-between mb-4 w-full lg:w-9/12 px-4">
                                        <h2 className="mb-4 text-lg leading-relaxed text-primary font-bold font-montserrat">
                                            Préférences
                                        </h2>
                                        <MdEdit className="w-6 h-6 text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile