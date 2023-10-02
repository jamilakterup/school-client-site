import React, {useEffect, useState} from 'react';
import bgWave from "../../../assets/images/banner-wave.png";
import "./Banner.css";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [pause, setPause] = useState(false);

    const slides = [
        {
            url: "/src/assets/images/carousel/1.jpg",
            text: 'For the first'
        },
        {
            url: "/src/assets/images/carousel/2.jpg",
            text: 'Islamic islamic'
        },
        {
            url: "/src/assets/images/carousel/3.jpg",
            text: 'It is total'
        },
        {
            url: "/src/assets/images/carousel/4.jpg",
            text: <a href="">school is</a>
        },
    ]

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex)
    // }


    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goTo = (i) => {
        setCurrentIndex(i)
    }

    useEffect(() => {
        let interval = setInterval(() => {
            nextSlide();
            // if (!pause) {
            //     nextSlide();
            // } else {
            //     clearInterval(interval);
            // }
        }, 3000);
        return () => {
            clearInterval(interval)
        };
    })



    return (
        <div className='max-w-[1400px] h-[300px] sm:h-[580px] w-full pb-16 mb-2 sm:mb-0 relative'>
            <div
                // onMouseEnter={() => setPause(true)}
                // onMouseLeave={() => setPause(false)}
                className='w-full h-full bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex]?.url})`}}>
                <div className={`text-3xl text-white text-center pt-52 bg-black bg-opacity-50 h-full`}>{slides[currentIndex]?.text}</div>
            </div>
            <img src={bgWave} alt="banner wave" className='absolute bottom-10 sm:bottom-7 md:bottom-4 lg:bottom-0 w-full' />


            <div className='flex top-4 justify-center relative -my-12'>
                {
                    slides.map((slide, i) => (<button onClick={() => (goTo(i), setIsActive(i))} key={i} className={`btn text-xs sm:text-base p-3 sm:p-5 md:p-6 mx-2 lg:mx-6 ${currentIndex === i ? "active" : " "}`}>{slide?.text}</button>))
                }
            </div>
        </div>
    );
};

export default Banner;


