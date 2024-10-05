import Banner from "../components/profile/Banner"
import ProfileCard from "../components/cards/ProfileCard"
import ExperienceSection from "../components/profile/ExperienceSection";
import SkillsSection from "../components/profile/SkillsSection";
import { useUserProfile } from "../hooks/useUserProfile";
import { useParams } from "react-router-dom";

const Profile = ({ userId: propUserId }) => {
    // const { userId } = useParams()
    // Use userId from params only if it's not provided as a prop
    const { userId: paramUserId } = useParams();
    const userId = propUserId || paramUserId;

    const { user, loading } = useUserProfile(userId);

    // if (loading) {
    //     // return;
    //     console.log("======>User not verified-----")
    // }

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

                            <ExperienceSection
                                userId={userId}
                            />

                            <SkillsSection
                                userId={userId}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile