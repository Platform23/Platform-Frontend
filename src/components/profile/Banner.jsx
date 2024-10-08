import { API_BASE_URL } from '../../utils/constants';


const Banner = ({ user }) => {
    const backgroundUrl = user && user.background
    ? `${API_BASE_URL}/uploads/backgrounds/${user.background}`
    : 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80';
    
    return (
        <>
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        `url(${backgroundUrl})`,
                }}
            >
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div >
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </>
    )
}

export default Banner;