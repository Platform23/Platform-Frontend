import { logo, userIcon } from '../../assets/images';
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import useNavStore from '../../store/navStore';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../hooks/AuthProvider';
import { API_BASE_URL } from '../../utils/constants';

const navigation = [
    {
        href: '/',
        name: 'Accueil',
        icon: <TiHome size={24} />
    },
    {
        href: '/reseaux',
        name: 'Réseaux',
        icon: <FaUsers size={24} />
    },
]

const Sidebar = () => {
    const navigate = useNavigate();
    const { setTitle, title } = useNavStore();
    const { logout, user } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleClick = (item) => {
        setTitle(item.name);
        navigate(item.href);
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/connexion");
        } catch (responseError) {
            setError(responseError)
        }
    }

    if (!user) {
        return null;
    }

    return (
        <div className="hidden md:flex flex-col w-64 bg-white text-primary">
            <div className='h-20 flex items-center px-8'>
                <a href='/' className='flex-none'>
                    <img src={logo} width={140} className="mx-auto" />
                </a>
            </div>

            <nav className="flex flex-col flex-1 overflow-y-auto px-2 py-4">
                <ul className="px-4 font-roboto text-base font-medium leading-relaxed text-inherit flex-1 gap-2">
                    {
                        navigation.map((item, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleClick(item)}
                                className={item.name === title ? 'rounded-lg bg-aqua' : ''}
                            >
                                <div
                                    className="flex items-center gap-x-2 p-2 mt-1 rounded-lg hover:bg-aqua active:bg-aqua duration-150 cursor-pointer">
                                    <div>{item.icon}</div>
                                    {item.name}
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div>
                    <ul className="px-4 pb-4 font-roboto text-base font-medium leading-relaxed text-inherit">
                        <a
                            onClick={handleLogout}
                            className="flex items-center gap-x-2 p-2 rounded-lg cursor-pointer  hover:bg-aqua active:bg-aqua duration-150">
                            <FiLogOut size={24} />
                            Déconnexion
                        </a>
                    </ul>

                    <div className="py-4 px-4 border-t">
                        <div className="flex items-center gap-x-4 cursor-pointer" onClick={() => navigate(`/profil/${user.uuid}`)}>
                            <img
                                alt="avatar"
                                src={user.avatar ? `${API_BASE_URL}/uploads/avatars/${user.avatar}` : `${userIcon}`} className="w-12 h-12 rounded-full" />
                            <div className="font-roboto text-base font-medium leading-relaxed text-inherit">
                                <span className="block">{user.pseudo}</span>
                                <a
                                    className="block mt-px text-light-gray hover:text-primary text-xs"
                                >
                                    Voir le profil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar