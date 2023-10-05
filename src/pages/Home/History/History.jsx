import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import school from '../../../assets/images/5.jpg';
import sir from "../../../assets/images/sir.jpeg";
import mam from "../../../assets/images/mam.jpeg";
import mujib from "../../../assets/images/mujib100.png";
import mujibCorner from "../../../assets/images/mujib_cornar.png";
import hotLine from "../../../assets/images/hot_line.jpg";
import menu1 from "../../../assets/images/menu01.png";
import menu2 from "../../../assets/images/menu02.png";
import menu3 from "../../../assets/images/menu03.png";
import menu4 from "../../../assets/images/menu04.png";
import {BiSolidUserBadge} from "react-icons/bi";
import {CiBoxList} from "react-icons/ci";
import {BsArrowRightCircle, BsPersonFillCheck} from "react-icons/bs";
import {MdOutlineHistoryEdu, MdHistoryEdu, MdCardMembership} from 'react-icons/md';
import {FaLink, FaDownload} from "react-icons/fa";
import {FaLocationDot, FaPersonHarassing} from "react-icons/fa6";
import {PiStudentFill, PiDownloadThin} from "react-icons/pi";
import {GiTeacher, GiSwordwoman} from "react-icons/gi";
import {SiMicrosoftacademic, SiGoogleclassroom} from "react-icons/si";



const History = () => {
    return (
        <>
            <div className='md:flex gap-6'>
                <div className="w-full md:w-3/4">
                    <p className='medium-font text-xl flex items-center gap-2 bg-slate-900 text-white p-2'><MdOutlineHistoryEdu /> প্রতিষ্ঠানের ইতিহাস</p>
                    <div className='md:flex md:gap-6 mt-2'>
                        <div className="w-full md:w-1/2 mb-3 md:mb-0">
                            <img src={school} alt="school image" />
                        </div>
                        <div className="w-full md:w-1/2 md:text-xl description-font mb-6 md:mb-0">
                            এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়, ধর্মভীরুতায়সামাজিক আচার-অনুষ্ঠানে এ জনপদের অন্য সবের উপর রয়েছে এ পরিবারের অতুলনীয় সম্মান। যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন শিক্ষিত ব্যক্তি ।তিনি যেমন ছিলেন শিক্ষানুরাগী তেমনটি ধর্মানুরাগী এবং পরহেযগার। তাঁর দুই ছেলে সন্তান বড় ছেলের নাম মুজাম্মিল খান এবং ছোট ছেলের নাম....<Link to="" className='bg-slate-200 px-2 text-sm md:text-lg rounded-md text-blue-800'>বিস্তারিত</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <Link to="" className='primary-font p-2 mb-4 text-xl flex items-center gap-2 border-2 border-slate-900 hover:bg-slate-200 duration-300'><BsArrowRightCircle /> পরীক্ষার ফলাফল</Link>
                    <Link to="" className='primary-font p-2 mb-4 text-xl flex items-center gap-2 border-2 border-slate-900 hover:bg-slate-200 duration-300'><BsArrowRightCircle /> নোটিশ</Link>
                    <Link to="" className='primary-font p-2 mb-4 text-xl flex items-center gap-2 border-2 border-slate-900 hover:bg-slate-200 duration-300'><BsArrowRightCircle /> কৃতি শিক্ষার্থী</Link>
                    <Link to="" className='primary-font p-2 mb-4 text-xl flex items-center gap-2 border-2 border-slate-900 hover:bg-slate-200 duration-300'><BsArrowRightCircle /> যোগাযোগ</Link>
                </div>
            </div>


            {/* what teachers say and left side section========================== */}
            <div className='md:flex gap-6 mt-12'>
                <div className="w-full md:w-3/4">
                    <div className='md:flex md:gap-6 mt-2'>
                        <div className="w-full md:w-1/2 mb-3 md:mb-0">
                            <p className='big-font text-xl mb-2 flex items-center gap-2 bg-slate-900 text-white p-2'><BiSolidUserBadge />উপঅধ্যক্ষের বাণী</p>
                            <div className="flex gap-3">
                                <div className='md:w-1/4 w-1/3'>
                                    <img src={mam} alt="mam image" />
                                </div>
                                <div className='md:w-3/4 w-2/3 curly-font'>
                                    এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায় ছিলেন শিক্ষানুরাগী তেমনটি ধর্মানুরাগী এবং পরহেযগার। তাঁর দুই ছেলে সন্তান বড় ছেলের নাম মুজাম্মিল খান এবং ছোট ছেলের নাম....<Link to="" className='bg-slate-200 px-2 text-sm rounded-md text-blue-800'>বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <p className='big-font text-xl mb-2 flex items-center gap-2 bg-slate-900 text-white p-2'><BiSolidUserBadge />অধ্যক্ষের বাণী</p>
                            <div className="flex gap-3">
                                <div className='md:w-1/4 w-1/3'>
                                    <img src={sir} alt="sir image" />
                                </div>
                                <div className='md:w-3/4 w-2/3 curly-font'>
                                    এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায় ছিলেন শিক্ষানুরাগী তেমনটি ধর্মানুরাগী এবং পরহেযগার। তাঁর দুই ছেলে সন্তান বড় ছেলের নাম মুজাম্মিল খান এবং ছোট ছেলের নাম....<Link to="" className='bg-slate-200 px-2 text-sm rounded-md text-blue-800'>বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:gap-6 mt-2'>
                        <div className="w-full md:w-1/2 mb-3 md:mb-0">
                            <p className='medium-font text-xl mb-2 flex items-center gap-2 bg-slate-900 text-white p-2'><MdCardMembership />বর্তমান গভর্নিং বডির নামের তালিকা</p>
                            <table className="table-auto w-full">
                                <thead className='regular-font text-xl font-semibold text-gray-800 bg-gray-50 text-left'>
                                    <tr>
                                        <th className='p-2'>নাম</th>
                                        <th className='p-2'>ক্যাটাগরি</th>
                                        <th className='p-2'>পদবী</th>
                                    </tr>
                                </thead>
                                <tbody className='extra-font text-md divide-y divide-gray-200'>
                                    <tr>
                                        <td className='p-2'>রফিকুল ইসলাম খোকন</td>
                                        <td className='p-2'>চেয়ারম্যান</td>
                                        <td className='p-2'>সভাপতি</td>
                                    </tr>
                                    <tr>
                                        <td className='p-2'>শাহাদাত হোসেন চৌধুরী</td>
                                        <td className='p-2'>দাতা</td>
                                        <td className='p-2'>সদস্য</td>
                                    </tr>
                                    <tr>
                                        <td className='p-2'>মো: আনোয়ার হোসেন</td>
                                        <td className='p-2'>অভিভাবক</td>
                                        <td className='p-2'>সদস্য</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <p className='medium-font text-xl mb-2 flex items-center gap-2 bg-slate-900 text-white p-2'><GiSwordwoman />স্টুডেন্ট কেবিনেট নামের তালিকা</p>
                            <table className="table-auto w-full">
                                <thead className='regular-font text-xl font-semibold text-gray-800 bg-gray-50 text-left'>
                                    <tr>
                                        <th className='p-2'>নাম</th>
                                        <th className='p-2'>রোল</th>
                                        <th className='p-2'>শ্রেণী</th>
                                        <th className='p-2'>পদবী</th>
                                    </tr>
                                </thead>
                                <tbody className='extra-font text-md divide-y divide-gray-200'>
                                    <tr>
                                        <td className='p-2'>রাইয়া জাহান আইমুন</td>
                                        <td className='p-2'>২</td>
                                        <td className='p-2'>দশম</td>
                                        <td className='p-2'>সভাপতি</td>
                                    </tr>
                                    <tr>
                                        <td className='p-2'>সারিয়া জাহান</td>
                                        <td className='p-2'>৩</td>
                                        <td className='p-2'>দশম</td>
                                        <td className='p-2'>সদস্য</td>
                                    </tr>
                                    <tr>
                                        <td className='p-2'>সাদিয়া তাসনিম দিবা</td>
                                        <td className='p-2'>১</td>
                                        <td className='p-2'>৯ম</td>
                                        <td className='p-2'>সদস্য</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <img src={mujibCorner} alt="mujib corner image" className='mt-12' />

                    {/* students and teachers corner================================ */}
                    <div className='md:flex md:gap-6 mt-12'>
                        <div className="w-full md:w-1/2 mb-3 md:mb-0">
                            <p className='medium-font text-xl mb-2 flex items-center gap-2 bg-green-600 text-white p-2'><PiStudentFill />শিক্ষার্থীদের কর্ণার</p>
                            <div className="flex gap-3">
                                <div className='md:w-1/2 flex justify-center items-center'>
                                    <img src={menu1} alt="mam image" />
                                </div>
                                <div className='md:w-1/2 curly-font'>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><SiGoogleclassroom />৬ষ্ঠ শ্রেণী</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><SiGoogleclassroom />৭ম শ্রেণী</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><SiGoogleclassroom />৮ম শ্রেণী</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><SiGoogleclassroom />৯ম শ্রেণী</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><SiGoogleclassroom />১০ম শ্রেণী</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <p className='medium-font text-xl mb-2 flex items-center gap-2 bg-orange-600 text-white p-2'><GiTeacher />শিক্ষকমন্ডলীদের কর্ণার</p>
                            <div className="flex gap-3">
                                <div className='md:w-1/2 flex justify-center items-center'>
                                    <img src={menu2} alt="sir image" />
                                </div>
                                <div className='md:w-1/2 curly-font'>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><BsPersonFillCheck />জেনারেল</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><BsPersonFillCheck />ভোকেশনাল</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><BsPersonFillCheck />স্টাফ</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><BsPersonFillCheck />সকল</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* important academic links and download links ================== */}
                    <div className='md:flex md:gap-6 mt-2'>
                        <div className="w-full md:w-1/2 mb-3 md:mb-0">
                            <p className='regular-font text-xl mb-2 flex items-center gap-2 bg-blue-600 text-white p-2'><FaDownload />সকল ডাউনলোড</p>
                            <div className="flex gap-3">
                                <div className='md:w-1/2 flex justify-center items-center'>
                                    <img src={menu3} alt="mam image" />
                                </div>
                                <div className='md:w-1/2 curly-font'>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><PiDownloadThin />ভর্তি ফর্ম</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><PiDownloadThin />পরীক্ষার রুটিন</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><PiDownloadThin />রেজিস্ট্রেশান ফর্ম</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><PiDownloadThin />রেজাল্ট শিট</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <p className='regular-font text-xl mb-2 flex items-center gap-2 bg-red-600 text-white p-2'><SiMicrosoftacademic />একাডেমিক তথ্য</p>
                            <div className="flex gap-3">
                                <div className='md:w-1/2 flex justify-center items-center'>
                                    <img src={menu4} alt="sir image" />
                                </div>
                                <div className='md:w-1/2 curly-font'>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><MdHistoryEdu />প্রতিষ্ঠানের ইতিহাস</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><MdHistoryEdu />পরীক্ষার ফলাফল</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><MdHistoryEdu />নোটিশ</Link>
                                    <Link to="" className='regular-font p-2 text-xl flex items-center gap-2  hover:bg-slate-200 duration-300'><MdHistoryEdu />একাডেমিক ক্যালেন্ডার</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                {/* right side small section========================================= */}



                <div className="w-full md:w-1/4">
                    <img src={mujib} alt="mujib image" />

                    <p className='bg-slate-900 text-white p-2 text-xl description-font flex items-center gap-2'><CiBoxList /> নোটিশ বোর্ড</p>

                    <Marquee className="mt-3 mb-6" pauseOnHover="true" gradient={true} gradientWidth={10} gradientColor="#eff8f7">
                        <Link to="" className="regular-font">যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন শিক্ষিত ব্যক্তি । তিনি যেমন ছিলেন শিক্ষানুরাগী তেমনটি</Link>
                    </Marquee>

                    {/* harasment team details================= */}
                    <p className='regular-font bg-slate-900 text-white p-2 text-xl flex items-center gap-2'><FaPersonHarassing /> যৌন হয়রানী প্রিতিরোধ কমিটি </p>
                    <table className="table-auto w-full">
                        <thead className='regular-font text-md font-semibold text-gray-800 bg-gray-50 text-left'>
                            <tr>
                                <th className='p-2'>নাম</th>
                                <th className='p-2'>ক্যাটাগরি</th>
                                <th className='p-2'>পদবী</th>
                            </tr>
                        </thead>
                        <tbody className='extra-font text-sm divide-y divide-gray-200'>
                            <tr>
                                <td className='p-2'>রাইয়া জাহান আইমুন</td>
                                <td className='p-2'>সিনিয়র শিক্ষক ইংরেজী</td>
                                <td className='p-2'>আহবায়ক</td>
                            </tr>
                            <tr>
                                <td className='p-2'>সারিয়া জাহান</td>
                                <td className='p-2'>অভিভাবক সদস্য</td>
                                <td className='p-2'>সদস্য</td>
                            </tr>
                            <tr>
                                <td className='p-2'>সাদিয়া তাসনিম দিবা</td>
                                <td className='p-2'>মহিলা অভিভাবক সদস্য</td>
                                <td className='p-2'>সদস্য</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* important links =================== */}
                    <p className='regular-font bg-slate-900 text-white p-2 text-xl  flex items-center gap-2'><FaLink />গুরুত্বপূর্ণ লিংক</p>

                    {/* hotline number image=================== */}
                    <img src={hotLine} alt="hot-line number image" />

                    <p className='regular-font bg-slate-900 text-white p-2 text-xl flex items-center gap-2'><FaLink />অফিসিয়াল লিংক</p>

                    <div className='p-2 bg-slate-200'>
                        <Link to="" className='sad-font p-2 text-xl flex items-center gap-2  hover:bg-slate-100 duration-300'><BsArrowRightCircle /> এডুকেশন ফলাফল</Link>
                        <Link to="" className='sad-font p-2 text-xl flex items-center gap-2  hover:bg-slate-100 duration-300'><BsArrowRightCircle /> বোর্ড ফলাফল</Link>
                    </div>

                    {/* location of our school============================ */}
                    <p className='regular-font bg-slate-900 text-white p-2 text-xl flex items-center gap-2'><FaLocationDot />বিদ্যালয়ের অবস্থান</p>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.603919847174!2d88.64623617415958!3d24.395078363724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf1c1664d65fb%3A0x96f90ca0a9f5c9c5!2sKharkhari%20High%20School!5e0!3m2!1sen!2sbd!4v1696053727112!5m2!1sen!2sbd" allowFullScreen="" className='w-full h-64' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;