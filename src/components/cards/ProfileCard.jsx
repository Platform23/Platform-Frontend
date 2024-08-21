import { useState } from "react"
import { userIcon } from "../../assets/images";
import UpdateProfileDialog from '../dialogBox/UpdateProfileDialog';
import { API_BASE_URL } from "../../utils/constants";
import { useUserProfile } from "../../hooks/useUserProfile";


const ProfileCard = ({ userId }) => {
    const { user, loading } = useUserProfile(userId);
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
                Profil utilisateur introuvable.
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                        {/* Profile picture */}
                        <img
                            alt="avatar"
                            src={user.avatar ? `${API_BASE_URL}/uploads/avatars/${user.avatar}` : `${userIcon}`}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                            style={{ maxWidth: "150px", objectFit: "cover" }}
                        />
                    </div>
                </div>

                {/* Edit profile button */}
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                            onClick={handleOpen}
                            className="bg-dark-teal active:bg-aqua uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                        >
                            Editer profil
                        </button>
                        <UpdateProfileDialog
                            open={isOpen}
                            handleOpen={handleOpen}
                            userId={userId}
                        />
                    </div>
                </div>

                {/* User unique code */}
                {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                            <h5 className="text-lg font-bold block tracking-wide text-light-gray">
                                {Profile.user.code}
                            </h5>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* User personal information */}
            <div className="text-center">
                <h3 className="text-3xl font-semibold leading-normal mb-2 text-primary">
                    {user.pseudo}
                </h3>
                <div className="text-lg leading-normal mb-2 text-primary font-bold">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {user.email}
                </div>
                <div className="text-lg mb-3 text-primary mt-5">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    {user.profession ?? ''}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard