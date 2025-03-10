import React, { useEffect } from 'react';
import useNavStore from "../../store/navStore";
import { useNavigate } from 'react-router-dom';


const Chat = () => {
    useEffect(() => {
        // Dynamically import the ArgoChat module
        const loadArgoChat = async () => {
            try {
                const { ArgoChat } = await import('https://cdn.jsdelivr.net/npm/@hestia.ai/argo-chat@latest/dist/argo-chat.es.js');
                console.log('-------------------ArgoChat module loaded------------------');

                const chat = new ArgoChat({
                    title: 'Assistant IA',
                    apiKey: 'QsN3tOghTPEk4805HK0tIs7GNtBjUsJWltUVb0p-C3c', // Replace with your actual API key
                    apiEndpoint: 'https://api.argo.hestia.ai/v1/chat/completions',
                    greeting: "Bienvenue! Comment puis'je vous aider?",
                    position: 'bottom-right',
                    placeholder: 'Entrez votre message...',
                    theme: {
                        primaryColor: '#007bff',
                        textColor: '#ffffff',
                        fontFamily: 'Inter, sans-serif',
                    },
                    toggleButton: {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>',
                        icon_size: '24px',
                        btn_size: '56px',
                    },
                });

                // Add the chat widget to the body
                document.body.appendChild(chat);

                // Cleanup when the component unmounts
                return () => {
                    chat.remove();
                };
            } catch (error) {
                console.error('Failed to load ArgoChat:', error);
            }
        };

        loadArgoChat();
    }, []);

    return null; // The chat widget is directly appended to the body
};


const NetworkDetailBar = ({ name, description, users, subjects }) => {
    const { setTitle, title } = useNavStore();
    const navigate = useNavigate();


    const handleClick = (subject) => {
        // setTitle(item);
        if (subject?.link) {
            window.open(subject.link, '_blank');
        }
    };

    const handleOpenProfile = (user) => {
        console.log(user)
        console.log(user.pseudo)
        // Navigate to the profile page of the selected user
        // Set to true when viewing another user's profile
        navigate(`/profil/${user.uuid}`, { state: { viewingOtherProfile: true } });
    };

    // const handleOpenDialog = (user) => {
    //     setSelectedUser(user); // Set the selected user
    //     setDialogOpen(true); // Open the dialog
    // };

    // const handleCloseDialog = () => {
    //     setDialogOpen(false); // Close the dialog
    //     setSelectedUser(null); // Clear the selected user
    // };

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
                        Projets
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
                                            onClick={() => handleOpenProfile(user)} // Open the dialog on click
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
            <div className="py-4">
                <Chat/>
            </div>
        </div>
    )
}

export default NetworkDetailBar
