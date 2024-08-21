import { useState } from "react"
import { MdAdd } from "react-icons/md";
import ExperienceDialog from "../dialogBox/ExperienceDialog";
import ExperienceCard from "../cards/ExperienceCard"
import { useUserProfile } from "../../hooks/useUserProfile";


const ExperienceSection = ({ userId }) => {
    const { loading, user} = useUserProfile(userId);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    if (loading) {
        return <div>Data not found.</div>;
    }

    if (!user) {
        // Handle the case where user data is not available
        return (
            <div className="text-xl font-semibold leading-normal my-5 text-primary text-center"> 
                Expériences utilisateur introuvable.
            </div>
        );
    }

    return (
        <div className="my-5 py-10 shadow-xl border-2 rounded-lg border-bggray">
            <div className="px-5">
                <div className="flex justify-between mb-4 w-full lg:w-9/12 px-4">
                    <h2 className="mb-4 text-lg leading-relaxed text-primary font-bold font-montserrat">
                        Expériences Professionnelles
                    </h2>
                    <button onClick={handleOpen} className="justify-end">
                        <MdAdd className="w-6 h-6 text-primary" />
                    </button>
                </div>
                
                {(
                    user.experiences.map((experience) => (
                        <ExperienceCard key={experience.id} userId={userId} experience={experience} />
                    ))
                )}

                <ExperienceDialog
                    open={isOpen}
                    handleOpen={handleOpen}
                    userId={userId} 
                />
            </div>
        </div>
    )
}

export default ExperienceSection