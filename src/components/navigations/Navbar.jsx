import useNavStore from '../../store/navStore';

const Navbar = () => {
    const { page } = useNavStore();

    return (
        <div className="fixed w-full z-10 flex items-center justify-between h-20 bg-white text-primary border-b border-gray-200">
            <div className="flex items-center px-4">
                <button className="focus:outline-none focus:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <h3
                    className='text-xl font-roboto font-semibold pl-5'>
                    {page}
                </h3>
            </div>
        </div>
    )
}

export default Navbar