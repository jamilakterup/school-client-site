import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Teachers from "../pages/Teachers/Teachers";
import InstituteHistory from "../pages/InstituteHistory/InstituteHistory";
import Acknowledgement from "../pages/Acknowledgement/Acknowledgement";
import StudentInfo from "../pages/StudentInfo/StudentInfo";
import AvailableSection from "../pages/AvailableSection/AvailableSection";
import StudentPage from "../pages/StudentPage/StudentPage";
import PhotoGallery from "../pages/PhotoGallery/PhotoGallery";
import Information from "../pages/Information/Information";
import ClassRoutine from "../pages/ClassRoutine/ClassRoutine";
import VideoGallery from "../pages/VideoGallery/VideoGallery";
import MujibCorner from "../pages/MujibCorner/MujibCorner";
import AllInformation from './../pages/AllInformation/AllInformation';
import AllNotice from "../pages/AllNotice/AllNotice";
import AcademicCalender from './../pages/AcademicCalender/AcademicCalender';
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/User/SignIn";
import Register from "../pages/User/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: ([
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'teachers/:id',
                element: <Teachers />,
                loader: ({params}) => `${params.id}`
            },
            {
                path: 'history',
                element: <InstituteHistory />
            },
            {
                path: 'acknowledgement',
                element: <Acknowledgement />
            },
            {
                path: 'mpo',
                element: <Acknowledgement />
            },
            {
                path: 'student-info',
                element: <StudentInfo />
            },
            {
                path: 'available-section',
                element: <AvailableSection />
            },
            {
                path: 'student-page',
                element: <StudentPage />
            },
            {
                path: 'photo-gallery',
                element: <PhotoGallery />
            },
            {
                path: 'video-gallery',
                element: <VideoGallery />
            },
            {
                path: 'information',
                element: <Information />
            },
            {
                path: 'class-routine',
                element: <ClassRoutine />
            },
            {
                path: 'mujib-corner',
                element: <MujibCorner />
            },
            {
                path: 'all-info',
                element: <AllInformation />
            },
            {
                path: 'all-notice',
                element: <AllNotice />
            },
            {
                path: 'academic-calender',
                element: <AcademicCalender />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <SignIn />
            },
            {
                path: 'register',
                element: <Register />
            },
        ])
    }
]);

export default router;
