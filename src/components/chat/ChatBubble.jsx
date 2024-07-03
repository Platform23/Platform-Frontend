import { useContext, useState } from "react";
import { API_BASE_URL } from "../../utils/constants";
import AuthContext from "../../hooks/AuthProvider";
import { formatTime } from "../../utils/utils";

const ChatBubble = ({ sender, time, message, imageUrl, onDelete }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const alignmentClass = sender.pseudo === user.pseudo ? "justify-end" : "justify-start";

    return (
        <div className={`flex ${alignmentClass} gap-2.5`}>
            <img className="w-8 h-8 rounded-full" src={sender.avatar ? `${API_BASE_URL}/uploads/avatars/${sender.avatar}` : `https://api.dicebear.com/8.x/adventurer/svg?seed=${user.pseudo}`} alt={`${sender.pseudo} image`} />

            <div className="flex flex-col gap-1">
                <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <span className="text-sm font-semibold text-gray-900">{sender.pseudo}</span>
                        <span className="text-sm font-normal text-gray-500">{formatTime(time)}</span>
                    </div>
                    <p className="text-sm font-normal text-gray-900">{message}</p>

                    {
                        imageUrl &&
                        <div className="group relative my-2.5">
                            <img
                                src={`${API_BASE_URL}/uploads/chat_images/${imageUrl}`}
                                className="rounded-lg" />
                        </div>
                    }
                </div>
            </div>

            <button
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-primary bg-white rounded-lg hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-50"
                type="button"
                onClick={toggleDropdown}>
                <svg className="w-4 h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>


            <div className={`${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-40`}>
                <ul className="py-2 text-sm text-primary">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Copier</a>
                    </li>
                    {sender.pseudo === user.pseudo &&
                        <li >
                            <button onClick={onDelete} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                                Supprimer
                            </button>
                        </li>
                    }
                    {
                        imageUrl &&
                        <li>
                            <button className="block px-4 py-2 hover:bg-gray-100">
                                Télécharger
                            </button>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default ChatBubble