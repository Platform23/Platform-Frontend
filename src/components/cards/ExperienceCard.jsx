import { useState } from "react"
import { MdAdd } from "react-icons/md";
import ExperienceDialog from "../dialogBox/ExperienceDialog";
import { useUserProfile } from "../../hooks/useUserProfile";


const ExperienceCard = ({ experience }) => {

    const { loading } = useUserProfile(userId);

    const handleOpen = () => {
        // setIsOpen(!isOpen);
        console.log(`Remove experience ${experience.title}`);
    }

    return (
        <div className="m-5 shadow-md border-2 rounded-lg border-bggray">
            <h5 className="mb-4 text-lg leading-relaxed text-primary font-bold font-montserrat">
                {experience.title}
            </h5>
            <p className='font-montserrat text-base font-light leading-relaxed text-inherit'>
                {experience.organization}
            </p>
            <button onClick={handleOpen} className="justify-end">
                <MdAdd className="w-6 h-6 text-primary" />
            </button>
        </div>
    )
}

export default ExperienceCard