import {Outlet, ScrollRestoration} from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";

const DashboardLayout = () => {
    return (
        <>
            <ScrollRestoration />

            <section className="flex gap-6 sidebar h-full">
                <DashboardNavBar />

                <div className="m-3 text-xl text-gray-900 font-semibold">
                    <Outlet />
                </div>
            </section >
        </>
    );
};

export default DashboardLayout;