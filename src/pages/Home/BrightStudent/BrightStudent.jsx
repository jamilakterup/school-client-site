import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Autoplay} from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./BrightStudent.css";


import lineImg from "../../../assets/images/line-image.png"
import swip1 from "../../../assets/images/carousel/1.jpg";
import swip2 from "../../../assets/images/carousel/2.jpg";
import swip3 from "../../../assets/images/carousel/3.jpg";
import swip4 from "../../../assets/images/carousel/4.jpg";
import swip5 from "../../../assets/images/carousel/1.jpg";

// import required modules

const BrightStudent = () => {
    SwiperCore.use([Pagination, Autoplay]);

    return (
        <section className='mt-32 -translate-y-36'>
            <h1 className="sad-font text-center">কৃতি শিক্ষার্থী</h1>
            <img src={lineImg} alt="underline image" className="mx-auto" />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                className="mySwiper"
            >
                <SwiperSlide className="free-mode-swiper-slides">
                    <div className="h-2/3 relative">
                        <img
                            className="lg:w-full h-full mx-auto rounded-2xl"
                            src={swip1}
                            alt=""
                        />
                        <div className="shape-1"></div>
                    </div>
                    <div className="h-2/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias, labore ab blanditiis fugiat quidem ea porro illo consectetur debitis, rerum enim similique quod?</div>
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <img
                        className="lg:w-full h-full mx-auto"
                        src={swip2}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <img
                        className="lg:w-full h-full mx-auto"
                        src={swip3}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <img
                        className="lg:w-full h-full mx-auto "
                        src={swip4}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <img
                        className="lg:w-full h-full mx-auto"
                        src={swip5}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default BrightStudent;