import { Outlet } from "react-router-dom";
import Sidebar from "./components/navigations/Sidebar";
const Layout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layout