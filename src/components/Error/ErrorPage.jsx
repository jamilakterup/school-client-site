import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottie/animation_lmutfx70.json";
import {Link, useRouteError} from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <Lottie animationData={errorAnimation} loop={true} className="w-2/6" />
                <p className="error-text">Sorry, an unexpected error has occurred.</p>
                <p><i className="error-status">{error.statusText || error.error.message}</i></p>
                <Link to="/" className="jelly-btn">Back to home</Link>
            </div>
        </>
    );
};

export default ErrorPage;