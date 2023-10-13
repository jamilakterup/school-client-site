import {Outlet, ScrollRestoration} from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import DashboardFooter from "../components/DashboardFooter/DashboardFooter";
import React, {useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {MdOutlineDashboard} from "react-icons/md";
import {RiSettings4Line} from "react-icons/ri";
import {TbReportAnalytics} from "react-icons/tb";
import {AiOutlineUser, AiOutlineHeart} from "react-icons/ai";
import {FiMessageSquare, FiFolder, FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";

const DashboardLayout = () => {
    const menus = [
        {name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard},
        {name: "Home", link: "/", icon: AiOutlineUser},
        {name: "messages", icon: FiMessageSquare},
        {name: "analytics", icon: TbReportAnalytics, margin: true},
        {name: "File Manager", icon: FiFolder},
        {name: "Cart", icon: FiShoppingCart},
        {name: "Saved", icon: AiOutlineHeart, margin: true},
        {name: "Setting", icon: RiSettings4Line},
    ];
    const [open, setOpen] = useState(true);

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