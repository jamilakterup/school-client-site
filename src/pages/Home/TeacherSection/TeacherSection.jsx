
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCoverflow, Pagination, Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./TeacherSection.css";

import lineImg from "../../../assets/images/line-image.png";

import swip1 from "../../../assets/images/carousel/1.jpg";
import swip2 from "../../../assets/images/carousel/2.jpg";
import swip3 from "../../../assets/images/carousel/3.jpg";
import swip4 from "../../../assets/images/carousel/4.jpg";
import swip5 from "../../../assets/images/carousel/1.jpg";

const TeacherSection = () => {
    SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

    return (
        <section className="mt-32 big-font">
            <h1 className="text-center">আমাদের শিক্ষক</h1>
            <img src={lineImg} alt="underline image" className="mx-auto" />

            <div className="w-full  text-white h-100% ">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 4,
                        loop: true,
                        slideShadows: true,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="swipers"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className="swiper-slides">
                        <img
                            className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
                            src={swip1}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides">
                        <img
                            className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
                            src={swip2}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides">
                        <img
                            className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
                            src={swip3}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides">
                        <img
                            className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
                            src={swip4}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides">
                        <img
                            className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
                            src={swip5}
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default TeacherSection;