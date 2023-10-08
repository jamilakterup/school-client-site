import {Outlet, ScrollRestoration, useLocation} from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import topImage from "../assets/images/top.png";

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            <ScrollRestoration />

            {location?.pathname === '/' && <img src={topImage} alt="top image" className="w-full" />}
            {location?.pathname === '/login' || location?.pathname === '/register' || <NavBar />}

            <div className="min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>

            {location?.pathname === '/login' || location?.pathname === '/register' || <Footer />}

            <ScrollToTop smooth top={500} className="ps-[5px] hover:bg-slate-100 duration-100" />
        </>
    );
};

export default MainLayout;