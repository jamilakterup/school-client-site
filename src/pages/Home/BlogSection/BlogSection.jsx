import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade, Pagination, Autoplay} from "swiper";
import "./BlogSection.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


import blogImg from "../../../assets/images/blog-line.png";
import swip1 from "../../../assets/images/students/st1.jpg";
import swip2 from "../../../assets/images/students/st2.jpg";
import {Link} from "react-router-dom";

// import required modules

const BlogSection = () => {
    SwiperCore.use([Pagination, Autoplay]);

    return (
        <section className='mt-32'>
            <h1 className="medium-font text-center">ব্লগ</h1>
            <img src={blogImg} alt="underline image" className="mx-auto" />
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
            >
                <SwiperSlide className="blog-card">
                    <img src={swip1} alt="" />
                    <div className="blog-card-body regular-font">
                        <li>নামঃ মোঃ রুবেল আলি</li>
                        <li>শ্রেণীঃ দশম (ক)</li>
                        <li>শিক্ষাবর্ষঃ ২০১৩-১৪ সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়, ধর্মভীরুতায়সামাজিক আচার-অনুষ্ঠানে এ জনপদের অন্য সবের উপর রয়েছে এ পরিবারের অতুলনীয় সম্মান। যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলে....<Link to="" className='bg-slate-100 px-2 text-sm rounded-md text-gray-900'>বিস্তারিত</Link></li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="blog-card">
                    <img src={swip2} alt="" />
                    <div className="blog-card-body regular-font">
                        <li>নামঃ মোঃ য়ারিফুল ইসলাম</li>
                        <li>এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়, ধর্মভীরুতায়সামাজিক আচার-অনুষ্ঠানে এ জনপদের অন্য সবের উপর রয়েছে এ পরিবারের অতুলনীয় সম্মান। যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন শিক্ষিত ব্যক্তি ।তিনি যেমন ছিলেন শিক্ষানুরাগী তেমনটি ধর্মানুরাগী এবং পরহেযগার। তাঁর দুই ছেলে সন্তান বড় ছেলের নাম মুজাম্মিল খান....<Link to="" className='bg-slate-100 px-2 text-sm rounded-md text-gray-900'>বিস্তারিত</Link></li>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="my-12 text-center">
                <Link to=""><button className="btn py-2 px-8 description-font">সব দেখুন</button></Link>
            </div>
        </section>
    );
}

export default BlogSection;