import lineImg from "../../../assets/images/line-image.png";

const PhotoGallery = () => {
    return (
        <section className="mt-32">
            <h1 className="sad-font text-center">ফটো গ্যালারি</h1>
            <img src={lineImg} alt="underline image" className="mx-auto" />
        </section>
    );
};

export default PhotoGallery;