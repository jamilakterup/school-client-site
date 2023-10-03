
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCoverflow, Pagination, Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./TeacherSection.css";

import lineImg from "../../../assets/images/line-image.png";
import swip1 from "../../../assets/images/teachers/tc1.jpeg";
import swip2 from "../../../assets/images/teachers/tc2.jpeg";
import swip3 from "../../../assets/images/teachers/tc3.jpg";
import swip4 from "../../../assets/images/teachers/tc4.jpg";
import swip5 from "../../../assets/images/teachers/tc5.jpeg";

// icons========
import {AiFillFacebook, AiTwotoneMail, AiFillPhone} from "react-icons/ai";
import {Link} from "react-router-dom";


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
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className="swiper-slides group overflow-hidden">
                        <img
                            className="lg:w-full h-full mx-auto shadow-2xl border-4"
                            src={swip1}
                            alt="teachers-image"
                        />
                        <div className="absolute w-full bottom-0 translate-y-24 group-hover:translate-y-0 duration-200">
                            <h3 className="px-4 mb-0 pb-0 leading-none group-hover:bg-slate-800 group-hover:bg-opacity-50 duration-200">গোলাম রাব্বানি</h3>
                            <div className="p-4 bg-slate-800 bg-opacity-50 w-full opacity-0 group-hover:opacity-100 duration-200">
                                <h4>প্রধান শিক্ষক </h4>
                                <div className="flex items-center gap-5">
                                    <p className="text-2xl regular-font">যোগাযোগ:</p>
                                    <Link to=""><AiFillFacebook className="text-2xl" /></Link>
                                    <Link to=""><AiTwotoneMail className="text-2xl" /></Link>
                                    <Link to=""><AiFillPhone className="text-2xl" /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides group overflow-hidden">
                        <img
                            className="lg:w-full h-full mx-auto shadow-2xl border-4"
                            src={swip2}
                            alt="teachers-image"
                        />
                        <div className="absolute w-full bottom-0 translate-y-24 group-hover:translate-y-0 duration-200">
                            <h3 className="px-4 mb-0 pb-0 leading-none group-hover:bg-slate-800 group-hover:bg-opacity-50 duration-200">দিলারা জামান</h3>
                            <div className="p-4 bg-slate-800 bg-opacity-50 w-full opacity-0 group-hover:opacity-100 duration-200">
                                <h4>সহকারী শিক্ষক </h4>
                                <div className="flex items-center gap-5">
                                    <p className="text-2xl regular-font">যোগাযোগ:</p>
                                    <Link to=""><AiFillFacebook className="text-2xl" /></Link>
                                    <Link to=""><AiTwotoneMail className="text-2xl" /></Link>
                                    <Link to=""><AiFillPhone className="text-2xl" /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides group overflow-hidden">
                        <img
                            className="lg:w-full h-full mx-auto shadow-2xl border-4"
                            src={swip3}
                            alt="teachers-image"
                        />
                        <div className="absolute w-full bottom-0 translate-y-24 group-hover:translate-y-0 duration-200">
                            <h3 className="px-4 mb-0 pb-0 leading-none group-hover:bg-slate-800 group-hover:bg-opacity-50 duration-200">মুরশেদ আলী</h3>
                            <div className="p-4 bg-slate-800 bg-opacity-50 w-full opacity-0 group-hover:opacity-100 duration-200">
                                <h4>সহকারী শিক্ষক </h4>
                                <div className="flex items-center gap-5">
                                    <p className="text-2xl regular-font">যোগাযোগ:</p>
                                    <Link to=""><AiFillFacebook className="text-2xl" /></Link>
                                    <Link to=""><AiTwotoneMail className="text-2xl" /></Link>
                                    <Link to=""><AiFillPhone className="text-2xl" /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides group overflow-hidden">
                        <img
                            className="lg:w-full h-full mx-auto shadow-2xl border-4"
                            src={swip4}
                            alt="teachers-image"
                        />
                        <div className="absolute w-full bottom-0 translate-y-24 group-hover:translate-y-0 duration-200">
                            <h3 className="px-4 mb-0 pb-0 leading-none group-hover:bg-slate-800 group-hover:bg-opacity-50 duration-200">রেবেকা তাসনিম</h3>
                            <div className="p-4 bg-slate-800 bg-opacity-50 w-full opacity-0 group-hover:opacity-100 duration-200">
                                <h4>সহকারী শিক্ষক </h4>
                                <div className="flex items-center gap-5">
                                    <p className="text-2xl regular-font">যোগাযোগ:</p>
                                    <Link to=""><AiFillFacebook className="text-2xl" /></Link>
                                    <Link to=""><AiTwotoneMail className="text-2xl" /></Link>
                                    <Link to=""><AiFillPhone className="text-2xl" /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slides group overflow-hidden">
                        <img
                            className="lg:w-full h-full mx-auto shadow-2xl border-4"
                            src={swip5}
                            alt="teachers-image"
                        />
                        <div className="absolute w-full bottom-0 translate-y-24 group-hover:translate-y-0 duration-200">
                            <h3 className="px-4 mb-0 pb-0 leading-none group-hover:bg-slate-800 group-hover:bg-opacity-50 duration-200">দিপঙ্কর সাহা</h3>
                            <div className="p-4 bg-slate-800 bg-opacity-50 w-full opacity-0 group-hover:opacity-100 duration-200">
                                <h4>সহকারী শিক্ষক </h4>
                                <div className="flex items-center gap-5">
                                    <p className="text-2xl regular-font">যোগাযোগ:</p>
                                    <Link to=""><AiFillFacebook className="text-2xl" /></Link>
                                    <Link to=""><AiTwotoneMail className="text-2xl" /></Link>
                                    <Link to=""><AiFillPhone className="text-2xl" /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default TeacherSection;