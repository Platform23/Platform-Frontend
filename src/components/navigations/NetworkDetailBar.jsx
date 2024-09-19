import React, { useState } from 'react';
import useNavStore from "../../store/navStore";
import ViewUserDialog from '../dialogBox/ViewUserDialog'


const NetworkDetailBar = ({ name, description, users, subjects }) => {
    const { setTitle, title } = useNavStore();
    const [selectedUser, setSelectedUser] = useState(null); // State to track selected user for dialog
    const [dialogOpen, setDialogOpen] = useState(false); // State to track dialog open/close

    const handleClick = (item) => {
        setTitle(item);
    };

    const handleOpenDialog = (user) => {
        setSelectedUser(user); // Set the selected user
        setDialogOpen(true); // Open the dialog
        console.log(user);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false); // Close the dialog
        setSelectedUser(null); // Clear the selected user
    };

    return (
        <div className="hidden md:flex flex-col w-64 bg-white text-primary pt-14 px-8 h-screen">
            {/* <div className='flex flex-col'>
                <h3 className="font-montserrat text-xl font-semibold leading-snug tracking-normal">
                    {name}
                </h3>
                <p className="font-roboto text-base font-light leading-relaxed text-inherit">
                    {description}
                </p>
            </div> */}

            <nav className="flex flex-col flex-1 overflow-y-auto pt-10">
                <div className="py-4">
                    <h3 className="font-montserrat text-xl font-semibold leading-snug tracking-normal">
                        Sujets
                    </h3>

                    <ul className="font-roboto text-base font-semibold leading-relaxed text-inherit flex-1 gap-2">
                        {
                            subjects.map((subject, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => handleClick(subject)}
                                    className={subject === title ? 'rounded-lg bg-aqua' : ''}
                                >
                                    <div
                                        className="flex items-center gap-x-2 p-2 mt-1 rounded-lg hover:bg-aqua active:bg-aqua duration-150 cursor-pointer">
                                        # {subject.name}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="py-4">
                    <h3 className="font-montserrat text-xl font-semibold leading-snug tracking-normal">
                        Participants
                    </h3>

                    <ul className="font-roboto text-base font-light leading-relaxed text-inherit flex-1 gap-2">
                        {
                            users.map((user) => (
                                <li
                                    key={user.pseudo}
                                >
                                    <div
                                        className="flex items-center gap-x-2 p-2 mt-1 rounded-lg hover:bg-aqua active:bg-aqua duration-150 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        {user.pseudo}
                                        
                                        <svg
                                            onClick={() => handleOpenDialog(user)} // Open the dialog on click
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 ml-auto cursor-pointer text-primary hover:text-blue-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274 1.014-2.558 7-9.542 7-6.984 0-9.268-5.986-9.542-7z"
                                            />
                                        </svg>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            {selectedUser && (
                <ViewUserDialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    user={selectedUser} // Pass the selected user to the dialog
                />
            )}
        </div>
    )
}

export default NetworkDetailBar