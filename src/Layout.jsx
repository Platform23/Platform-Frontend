import { Outlet } from "react-router-dom";
import Sidebar from "./components/navigations/Sidebar";
import Navbar from "./components/navigations/Navbar";

const Layout = () => {
    return (
        <div className="flex h-screen bg-bggray">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-y-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout