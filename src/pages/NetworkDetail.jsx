import { useParams } from "react-router-dom"
import useNavStore from '../store/navStore';
import { useEffect } from "react";
import NetworkDetailBar from "../components/navigations/NetworkDetailBar";
import Chat from "../components/chat/Chat";
import {networks} from "../constants"


const NetworkDetail = () => {
    const { name } = useParams(); // Retreive the network name from the path
    const { title, setTitle } = useNavStore();
    let previousPageName = title;
    const access = true;

    // Get network description using network name
    const networkDescription = (name) => {
        const network = networks.find((network) => network.name === name);
        return network ? network.description : "No description found";
      };

    useEffect(() => {
        setTitle(name);
        return () => {
            setTitle(previousPageName);
        };
    }, [title]);

    return (
        // If access false, display button in the middle of the screen
        <section className={`${!access ? 'h-screen flex justify-center items-center' : ''}`}>
            {!access ? // If access is false, displays request acces button. Else show chat and network sidebar
                <div className="w-80">
                    <button
                        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-cente uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-aqua bg-primary hover:bg-gray-700 active:bg-gray-700"
                        type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>

                        Demande d’accès
                    </button>
                </div>
                
                :
                <div className="h-screen flex">
                    <div className="flex-1 pt-24 mr-64">
                        <Chat />
                    </div>

                    <div className="fixed right-0">
                        <NetworkDetailBar
                            name={name}
                            description={networkDescription(name)} />
                    </div>
                </div>
            }

        </section >
    )
}

export default NetworkDetail