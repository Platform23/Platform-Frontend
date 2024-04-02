import useNavStore from '../../store/navStore';

const Navbar = () => {
    const { page } = useNavStore();

    return (
        <div
            className='transition-transform -translate-x-full sm:translate-x-0 text-xl text-primary font-roboto font-semibold sm:p-6'>
            {page}
        </div>
    )
}

export default Navbar