import Banner from "../Banner/Banner";
import Notice from "../Notice/Notice";
import DateAndTime from "../DateAndTime/DateAndTime";
import History from "../History/History";
import TeacherSection from "../TeacherSection/TeacherSection";
import BrightStudent from "../BrightStudent/BrightStudent";

const Home = () => {
    return (
        <>
            <Banner />
            <DateAndTime />
            <Notice />

            {/* content sention */}
            <section className="my-container">
                <History />
                <TeacherSection />
                <BrightStudent />
            </section>
        </>
    );
};

export default Home;