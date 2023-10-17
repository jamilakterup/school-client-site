import React, {createElement, useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {MdOutlineDashboard} from "react-icons/md";
import {RiSettings4Line} from "react-icons/ri";
import {TbReportAnalytics} from "react-icons/tb";
import {AiOutlineUser, AiOutlineHeart} from "react-icons/ai";
import {FiMessageSquare, FiFolder, FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";
import {TbHomeStats} from "react-icons/tb";
import "./DashboardNavBar.css";
import {Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import {FiChevronDown} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';



// main function=================================
const DashboardNavBar = () => {
    const [open, setOpen] = useState(true);


    // nav option for dashboard
    const menus = [
        {name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard},
        {name: "Home", link: "/dashboard/home-content", icon: TbHomeStats},
        {name: "Home", link: "/", icon: AiOutlineUser},
        {name: "messages", icon: FiMessageSquare},
        {name: "analytics", icon: TbReportAnalytics, margin: true},
        {name: "File Manager", icon: FiFolder},
        {name: "Cart", icon: FiShoppingCart},
        {name: "Saved", icon: AiOutlineHeart, margin: true},
        {name: "Setting", icon: RiSettings4Line},
    ];



    // dropdown menu option=========================
    const AccordionItem = ({header, icon, ...rest}) => (
        <Item
            {...rest}
            header={({state: {isEnter}}) => (
                <div className="text-base w-full flex items-center justify-between">
                    <div className="mr-4">{createElement(icon)}</div>

                    <div className={`whitespace-pre duration-500 ${!open && "translate-x-52 overflow-hidden"
                        }`}>{header}</div>
                    <p className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"
                        }`}><FiChevronDown /></p>
                </div>
            )}
            buttonProps={{
                className: ({isEnter}) =>
                    `flex w-full py-2 px-3 my-3 rounded-md text-left hover:bg-gray-800 ${isEnter && "bg-gray-700"
                    }`
            }}
            contentProps={{
                className: "transition-height duration-200 ease-out"
            }}
            panelProps={{className: "p-0"}}
        />
    );


    return (
        <>
            <div
                className={`bg-[#0e0e0e] min-h-screen ${open ? "w-60" : "w-16"
                    } duration-500 text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end" >
                    <div className={`flex-1 whitespace-pre duration-300 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>School</div>
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>

                <Accordion transition transitionTimeout={200}>
                <Link to='' className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                <div><MdOutlineDashboard/></div>
                <p className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>Dashboard</p>
                </Link>

                    <AccordionItem header="প্রতিষ্ঠানের তথ্য" icon={MdOutlineDashboard}>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>প্রতিষ্ঠানের ইতিহাস</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>প্রতিষ্ঠানের অনুমতি ও স্বীকৃতি</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>এমপিও এবং জাতীয়করণ তথ্য</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>শ্রেণী ও লিঙ্গভিত্তিক শিক্ষার্থীর তথ্য</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>শ্রেণীভিত্তিক অনুমোদিত শাখা</NavLink>
                    </AccordionItem>

                    <AccordionItem header="শিক্ষকমন্ডলী" icon={TbHomeStats}>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>জেনারেল</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>ভোকেশনাল</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>স্টাফ</NavLink>
                    </AccordionItem>

                    <AccordionItem header="অন্যান্য" icon={AiOutlineUser}>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>মুজিব কর্ণার</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>সকল তথ্য</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>নোটিশ</NavLink>
                        <NavLink to="#" className='extra-font block hover:bg-gray-800 rounded-md transition-all duration-300 p-2'>একাডেমিক ক্যালেন্ডার</NavLink>
                    </AccordionItem>
                </Accordion>

                
                {/* normal nav menu============================ */}
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, {size: "20"})}</div>
                            <p
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </p>
                            <p
                                className={`${open && "hidden"
                                    } absolute left-32 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-10 group-hover:duration-300 group-hover:w-fit`}
                            >
                                {menu?.name}
                            </p>
                        </Link >
                    ))}
                </div>
            </div>
        </>
    );
};

export default DashboardNavBar;