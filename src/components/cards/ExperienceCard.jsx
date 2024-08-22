import { useState } from "react"
import { MdRemove } from "react-icons/md";
import { useUserProfile } from "../../hooks/useUserProfile";


const ExperienceCard = ({ userId, experience }) => {
    const { removeUserExperience} = useUserProfile(userId);
    
    const handleRemoveExperience = () => {
        console.log(`Remove experience ${experience.title} ${experience.organization} ${experience.userId} ${experience.id}`);
        removeUserExperience(experience.id);
    }

    return (
        <div className="p-5 my-3 shadow-md border-2 rounded-lg border-bggray w-full">
            <div className="flex justify-between lg:w-9/12">
                <h5 className="mb-4 text-lg leading-relaxed text-primary font-bold font-montserrat">
                    {experience.title}
                </h5>

                {/* <button onClick={handleRemoveExperience} className="justify-end">
                    <MdRemove className="w-6 h-6 text-primary" />
                </button> */}
            </div>
            <p className='font-montserrat text-lg font-light leading-relaxed text-inherit'>
                {experience.organization}
            </p>
        </div>
    )
}

export default ExperienceCard