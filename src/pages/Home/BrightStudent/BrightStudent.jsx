import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Autoplay} from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./BrightStudent.css";


import lineImg from "../../../assets/images/line-image.png"
import swip1 from "../../../assets/images/students/st1.jpg";
import swip2 from "../../../assets/images/students/st2.jpg";
import swip3 from "../../../assets/images/students/st3.jpg";
import swip4 from "../../../assets/images/students/st4.jpg";
import swip5 from "../../../assets/images/students/st5.jpg";
import {Link} from "react-router-dom";

// import required modules

const BrightStudent = () => {
    SwiperCore.use([Pagination, Autoplay]);

    return (
        <section className='mt-32 -translate-y-36 -mb-20'>
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
                    <div className="h-2/3 relative card-image">
                        <img
                            className="lg:w-full h-full mx-auto rounded-2xl"
                            src={swip1}
                            alt=""
                        />
                    </div>
                    <div className="h-2/6 card-body regular-font">
                        <span className="result"><strong className="gpa">GPA 5.00</strong></span>
                        <li>নামঃ মোঃ রুবেল আলি</li>
                        <li>শ্রেণীঃ দশম (ক)</li>
                        <li>বিভাগঃ বিজ্ঞান</li>
                        <li>শিক্ষাবর্ষঃ ২০১৩-১৪</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <div className="h-2/3 relative card-image">
                        <img
                            className="lg:w-full h-full mx-auto rounded-2xl"
                            src={swip2}
                            alt=""
                        />
                    </div>
                    <div className="h-2/6 card-body regular-font">
                        <span className="result"><strong className="gpa">GPA 5.00</strong></span>
                        <li>নামঃ মোঃ য়ারিফুল ইসলাম</li>
                        <li>শ্রেণীঃ দশম (ক)</li>
                        <li>বিভাগঃ বিজ্ঞান</li>
                        <li>শিক্ষাবর্ষঃ ২০১৩-১৪</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <div className="h-2/3 relative card-image">
                        <img
                            className="lg:w-full h-full mx-auto rounded-2xl"
                            src={swip3}
                            alt=""
                        />
                    </div>
                    <div className="h-2/6 card-body regular-font">
                        <span className="result"><strong className="gpa">GPA 5.00</strong></span>
                        <li>নামঃ মোঃ আলি হাসান</li>
                        <li>শ্রেণীঃ দশম (ক)</li>
                        <li>বিভাগঃ বিজ্ঞান</li>
                        <li>শিক্ষাবর্ষঃ ২০১৩-১৪</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <div className="h-2/3 relative card-image">
                        <img
                            className="lg:w-full h-full mx-auto rounded-2xl"
                            src={swip4}
                            alt=""
                        />
                    </div>
                    <div className="h-2/6 card-body regular-font">
                        <span className="result"><strong className="gpa">GPA 5.00</strong></span>
                        <li>নামঃ মোঃ স্বপ্নিল সাফকাত</li>
                        <li>শ্রেণীঃ দশম (ক)</li>
                        <li>বিভাগঃ বিজ্ঞান</li>
                        <li>শিক্ষাবর্ষঃ ২০১৩-১৪</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="free-mode-swiper-slides">
                    <div className="h-2/3 relative card-image">
                        <img
                            className="lg:w-full h-full mx-auto rounded-2xl"
                            src={swip5}
                            alt=""
                        />
                    </div>
                    <div className="h-2/6 card-body regular-font">
                        <span className="result"><strong className="gpa">GPA 5.00</strong></span>
                        <li>নামঃ মোঃ রুদ্র আহমেদ তুর্জ</li>
                        <li>শ্রেণীঃ দশম (ক)</li>
                        <li>বিভাগঃ বিজ্ঞান</li>
                        <li>শিক্ষাবর্ষঃ ২০১৩-১৪</li>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="my-12 text-center">
                <Link to=""><button className="btn py-2 px-8 description-font">সব দেখুন</button></Link>
            </div>
        </section>
    );
}

export default BrightStudent;