import { logo } from '../../assets/images';
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import useNavStore from '../../store/navStore';
import useDrawerStore from '../../store/drawerStore';
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
    const { setPage, page } = useNavStore();
    const { setIsOpen } = useDrawerStore();
    const nagivate = useNavigate();

    const handleClick = (item) => {
        setPage(item.name);
        nagivate(item.href);
    };

    const handleSidebarToggle = () => {
        setIsOpen();
    };

    return (
        <section>
            <button
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-primary rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
                onClick={handleSidebarToggle}
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <nav
                className="fixed bg-white top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r text-primary font-roboto"
            >
                <div className="flex flex-col h-full">
                    <div className='h-20 flex items-center px-8'>
                        <a href='' className='flex-none'>
                            <img src={logo} width={140} className="mx-auto" />
                        </a>
                    </div>

                    <div className="flex-1 flex flex-col h-full overflow-auto">
                        <ul className="px-4 text-sm font-medium flex-1 gap-2">
                            {
                                navigation.map((item, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleClick(item)}
                                        className={item.name === page ? 'rounded-lg bg-aqua' : ''}
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
                            <ul className="px-4 pb-4 text-sm font-medium">
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
                                    <div>
                                        <span className="block text-primary text-sm font-semibold">Jane Doe</span>
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
                    </div >
                </div>
            </nav>
        </section>
    )
}

export default Sidebar