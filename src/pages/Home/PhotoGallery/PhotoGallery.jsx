import lineImg from "../../../assets/images/line-image.png";

import gallery1 from "../../../assets/images/gallery/s1.jpg";
import gallery2 from "../../../assets/images/gallery/s2.jpg";
import gallery3 from "../../../assets/images/gallery/s3.jpg";
import gallery4 from "../../../assets/images/gallery/s4.jpg";
import gallery5 from "../../../assets/images/gallery/s5.jpg";
import gallery6 from "../../../assets/images/gallery/s6.jpg";
import gallery7 from "../../../assets/images/gallery/s7.jpg";
import gallery8 from "../../../assets/images/gallery/s8.jpeg";
import gallery9 from "../../../assets/images/gallery/s9.jpg";
import gallery10 from "../../../assets/images/gallery/s10.jpg";
import {Link} from "react-router-dom";

const PhotoGallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: gallery1
        },
        {
            id: 2,
            imgSrc: gallery2
        },
        {
            id: 3,
            imgSrc: gallery3
        },
        {
            id: 4,
            imgSrc: gallery4
        },
        {
            id: 5,
            imgSrc: gallery5
        },
        {
            id: 6,
            imgSrc: gallery6
        },
        {
            id: 7,
            imgSrc: gallery7
        },
        {
            id: 8,
            imgSrc: gallery8
        },
        {
            id: 9,
            imgSrc: gallery9
        },
        {
            id: 10,
            imgSrc: gallery10
        },
    ]
    return (
        <section className="mt-32">
            <h1 className="sad-font text-center">ফটো গ্যালারি</h1>
            <img src={lineImg} alt="underline image" className="mx-auto" />


            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                    data.map(img => (
                        <img className="h-full w-full rounded-md" src={img.imgSrc} alt="gallery image" key={img.id} />
                    ))
                }
            </div>

            <div className="my-12 text-center">
                <Link to=""><button className="btn py-2 px-8 description-font">সব দেখুন</button></Link>
            </div>
        </section>
    );
};

export default PhotoGallery;