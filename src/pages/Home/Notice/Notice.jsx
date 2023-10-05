import Marquee from "react-fast-marquee";
import './Notice.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Notice = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const speed = windowWidth < 620 ? 35 : 50;
    const gradient = windowWidth < 620 ? false : true;

    return (
        <section className="my-container mb-12 relative">
            <Marquee pauseOnHover="true" gradient={gradient} gradientWidth={50} speed={speed} gradientColor="#eff8f7">
                <Link to="" className="regular-font">যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন শিক্ষিত ব্যক্তি । তিনি যেমন ছিলেন শিক্ষানুরাগী তেমনটি</Link>
            </Marquee>


            <p className="notice extra-font text-sm md:text-xl py-2 px-4 absolute top-0 -translate-y-[6px] md:-translate-y-2 z-10">জরুরী ঘোষণা :</p>
        </section>
    );
};

export default Notice;