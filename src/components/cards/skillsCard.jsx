// import { useState } from "react"
// import { MdRemove } from "react-icons/md";


const SkillsCard = ({ skill }) => {

    return (
        <div className="p-5 my-3 shadow-md border-2 rounded-lg border-bggray w-full">
            <div className="flex justify-between lg:w-9/12">
                <h5 className="mb-4 text-lg leading-relaxed text-primary font-bold font-montserrat">
                    {skill.name}
                </h5>

                {/* <button onClick={handleRemoveSkill} className="justify-end">
                    <MdRemove className="w-6 h-6 text-primary" />
                </button> */}
            </div>
        </div>
    )
}

export default SkillsCard