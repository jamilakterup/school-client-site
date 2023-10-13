import {Outlet, ScrollRestoration} from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import DashboardFooter from "../components/DashboardFooter/DashboardFooter";

const DashboardLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <DashboardNavBar />
            {/* <div className="min-h-[calc(100vh-50px)]">
                <Outlet />
            </div> */}
            <DashboardFooter />
        </>
    );
};

export default DashboardLayout;