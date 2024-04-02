import { Outlet } from "react-router-dom";
import Sidebar from "./components/navigations/Sidebar";
import Navbar from "./components/navigations/Navbar";

const Layout = () => {
    return (
        <>
            <Sidebar />

            <div className="sm:ml-56">
                <Navbar />
                <div className="h-screen bg-bggray">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout