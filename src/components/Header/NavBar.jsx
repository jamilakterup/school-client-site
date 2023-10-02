import {useEffect, useRef, useState} from "react";
import Logo from "../../assets/images/logo.png";
import MenuOption from "./MenuOption";
import MobileMenu from "./MobileMenu";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {FaHome} from "react-icons/fa";
import {BiSolidChevronDown} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import {HiMiniBars3} from "react-icons/hi2";
import {RxCross2} from "react-icons/rx";
import "./NavBar.css";



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const navBarRef = useRef(null);


    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos) {
                navBarRef.current.style.top = "0";
            } else {
                navBarRef.current.style.top = "-50px";
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollPos])



    return (
        <>
            <nav id="navbar" ref={navBarRef} style={{transition: 'top 0.3s'}} className='my-container sticky top-0 text-xl flex justify-between items-center backdrop-blur-md z-50'>
                <img src={Logo} alt="logo" className="w-32 -ml-[12px] md:hidden block" />

                <ul className="hidden md:flex flex-wrap justify-start items-center">
                    <li><NavLink to="" className="ps-0"><span className="flex items-center gap-1"><FaHome />হোম</span></NavLink></li>
                    <li><span className="flex items-center gap-1">প্রতিষ্ঠানের তথ্য <BiSolidChevronDown /></span>
                        <ul>
                            <li><NavLink to="">প্রতিষ্ঠানের ইতিহাস</NavLink></li>
                            <li><NavLink to="">প্রতিষ্ঠানের অনুমতি ও স্বীকৃতি</NavLink></li>
                            <li><NavLink to="">এমপিও এবং জাতীয়করণ তথ্য</NavLink></li>
                            <li><NavLink to="">শ্রেণী ও লিঙ্গভিত্তিক শিক্ষার্থীর তথ্য</NavLink></li>
                            <li><NavLink to="">শ্রেণীভিত্তিক অনুমোদিত শাখা</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span className="flex items-center gap-1">শিক্ষকমন্ডলী <BiSolidChevronDown /></span>
                        <ul>
                            <li><NavLink to="">জেনারেল</NavLink></li>
                            <li><NavLink to="">ভোকেশনাল</NavLink></li>
                            <li><NavLink to="">স্টাফ</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="">শিক্ষার্থী</NavLink></li>
                    <li><NavLink to="">ফটো</NavLink></li>
                    <li><NavLink to="">ভিডিও</NavLink></li>
                    <li><NavLink to="">তথ্য</NavLink></li>
                    <li><NavLink to="">ক্লাসরুটিন</NavLink></li>
                    <li>
                        <span className="flex items-center gap-1">অন্যান্য <BiSolidChevronDown /></span>
                        <ul>
                            <li><NavLink to="">মুজিব কর্ণার</NavLink></li>
                            <li><NavLink to="">সকল তথ্য</NavLink></li>
                            <li><NavLink to="">নোটিশ</NavLink></li>
                            <li><NavLink to="">একাডেমিক ক্যালেন্ডার</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="">ব্লগ</NavLink></li>
                    <li><NavLink to="">যোগাযোগ</NavLink></li>
                </ul>

                <div className="flex gap-8 items-center">
                    <a className='rounded-full min-w-[32px]'><MenuOption /></a>
                    <a className='md:hidden block bg-slate-200 p-2 rounded-sm' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <RxCross2 /> : <HiMiniBars3 />}</a>
                </div>
            </nav>


            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
                direction='left'
                className="primary-font overflow-y-scroll pb-12"
            >
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to=""><span className="flex items-center gap-1"><FaHome />হোম</span></NavLink>
                </div>
                {/* imported from mobileMenu component */}
                <MobileMenu />

                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">শিক্ষার্থী</NavLink>
                </div>
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">ফটো</NavLink>
                </div>
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">ভিডিও</NavLink>
                </div>
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">তথ্য</NavLink>
                </div>
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">ক্লাসরুটিন</NavLink>
                </div>
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">ব্লগ</NavLink>
                </div>
                <div className="ps-4 pt-3 pb-0 hover:bg-slate-100">
                    <NavLink to="">যোগাযোগ</NavLink>
                </div>
            </Drawer>
        </>
    );
};

export default NavBar;