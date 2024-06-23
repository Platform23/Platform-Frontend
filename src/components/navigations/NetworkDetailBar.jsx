import useNavStore from "../../store/navStore";

const subjects = ["AI", "Cybersecurity", "Programing"];
const users = ["John", "Toby", "Alie Jane"];

const NetworkDetailBar = ({ name, description }) => {
    const { setTitle, title } = useNavStore();

    const handleClick = (item) => {
        setTitle(item);
    };

    return (
        <div className="hidden md:flex flex-col w-64 bg-white text-primary pt-28 px-8 h-screen">
            <div className='flex flex-col'>
                <h3 className="font-montserrat text-xl font-semibold leading-snug tracking-normal">
                    {name}
                </h3>
                <p className="font-roboto text-base font-light leading-relaxed text-inherit">
                    {description}
                </p>
            </div>

            <nav className="flex flex-col flex-1 overflow-y-auto pt-10">
                {/* <div className="py-4">
                    <h3 className="font-montserrat text-xl font-semibold leading-snug tracking-normal">
                        Sujets
                    </h3>

                    <ul className="font-roboto text-base font-light leading-relaxed text-inherit flex-1 gap-2">
                        {
                            subjects.map((item, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => handleClick(item)}
                                    className={item === title ? 'rounded-lg bg-aqua' : ''}
                                >
                                    <div
                                        className="flex items-center gap-x-2 p-2 mt-1 rounded-lg hover:bg-aqua active:bg-aqua duration-150 cursor-pointer">
                                        #{item}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div> */}

                <div className="py-4">
                    <h3 className="font-montserrat text-xl font-semibold leading-snug tracking-normal">
                        Participants
                    </h3>

                    <ul className="font-roboto text-base font-light leading-relaxed text-inherit flex-1 gap-2">
                        {
                            users.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={item === title ? 'rounded-lg bg-aqua' : ''}
                                >
                                    <div
                                        className="flex items-center gap-x-2 p-2 mt-1 rounded-lg hover:bg-aqua active:bg-aqua duration-150 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>

                                        {item}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NetworkDetailBar