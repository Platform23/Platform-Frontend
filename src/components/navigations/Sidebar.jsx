import { logo } from '../../assets/images';
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import useNavStore from '../../store/navStore';
// import useDrawerStore from '../../store/drawerStore';
import { useNavigate } from 'react-router-dom';

const navigation = [
    {
        href: '/',
        name: 'Accueil',
        icon: <TiHome size={24} />
    },
    {
        href: 'reseaux',
        name: 'Réseaux',
        icon: <FaUsers size={24} />
    },
]

const navsFooter = [
    {
        href: '',
        name: 'Déconnexion',
        icon: <FiLogOut size={24} />
    }
]

const Sidebar = () => {
    const { setTitle, title } = useNavStore();
    // const { setIsOpen } = useDrawerStore();
    const nagivate = useNavigate();

    const handleClick = (item) => {
        setTitle(item.name);
        nagivate(item.href);
    };

    // const handleSidebarToggle = () => {
    //     setIsOpen();
    // };

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
                        {
                            navsFooter.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-aqua active:bg-aqua duration-150">
                                        <div>{item.icon}</div>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="py-4 px-4 border-t">
                        <div className="flex items-center gap-x-4">
                            <img src="https://api.dicebear.com/8.x/adventurer/svg?seed=JaneDoe" className="w-12 h-12 rounded-full" />
                            <div className="font-roboto text-base font-medium leading-relaxed text-inherit">
                                <span className="block">Jane Doe</span>
                                <a
                                    href=""
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