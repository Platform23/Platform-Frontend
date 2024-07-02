import Banner from "../components/profile/Banner"
import ProfileCard from "../components/cards/ProfileCard"
import ExperienceCard from "../components/cards/ExperienceCard";
import InterestsCard from "../components/cards/InterestsCard";
import { useUserProfile } from "../hooks/useUserProfile";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { userId } = useParams()
    const { user, loading } = useUserProfile(userId);

    if (loading) {
        return;
    }

    return (
        <main className='relative'>
            {/* Background banner */}
            <section className="relative block" style={{ height: "500px" }}>
                <Banner user={user} />
            </section>

            <section className="relative py-10 bg-white-smoke">
                <div className="container mx-auto px-10">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <ProfileCard
                                userId={userId}
                            />

                            <ExperienceCard
                                userId={userId}
                            />

                            <InterestsCard />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile