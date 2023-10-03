import {Link} from "react-router-dom";
import lineImg from "../../../assets/images/line-image.png";
import vdo1 from "../../../assets/video/v1.mp4";
import vdo2 from "../../../assets/video/v2.mp4";
import vdo3 from "../../../assets/video/v3.mp4";
import {HiMiniMagnifyingGlassPlus} from "react-icons/hi2";

const VideoGallery = () => {

    return (
        <>
            <h1 className="medium-font text-center">ভিডিও গ্যালারি</h1>
            <img src={lineImg} alt="underline image" className="mx-auto" />


            <div className="flex justify-between mt-16">
                <div className="relative h-52 rounded-md overflow-hidden bg-cover bg-no-repeat group">
                    <video className="h-52 transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3" src={vdo1} />
                    <div className="absolute bg-black opacity-0 group-hover:opacity-50 h-full w-full top-0 duration-200"></div>
                    <HiMiniMagnifyingGlassPlus className="absolute -bottom-10 left-1/2 group-hover:bottom-1/2 duration-200 text-white text-2xl" />
                </div>
                <div className="relative h-52 rounded-md overflow-hidden bg-cover bg-no-repeat group">
                    <video className="h-52 transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3" src={vdo2} />
                    <div className="absolute bg-black opacity-0 group-hover:opacity-50 h-full w-full top-0 duration-200"></div>
                    <HiMiniMagnifyingGlassPlus className="absolute -bottom-10 left-1/2 group-hover:bottom-1/2 duration-200 text-white text-2xl" />
                </div>
                <div className="relative h-52 rounded-md overflow-hidden bg-cover bg-no-repeat group">
                    <video className="h-52 transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3" src={vdo3} />
                    <div className="absolute bg-black opacity-0 group-hover:opacity-50 h-full w-full top-0 duration-200"></div>
                    <HiMiniMagnifyingGlassPlus className="absolute -bottom-10 left-1/2 group-hover:bottom-1/2 duration-200 text-white text-2xl" />
                </div>
            </div>
            <div className="my-12 text-center">
                <Link to=""><button className="btn py-2 px-8 description-font">সব দেখুন</button></Link>
            </div>
        </>
    );
};

export default VideoGallery;