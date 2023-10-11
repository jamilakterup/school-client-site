import "./SignIn.css";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/animation_lmuto4rl.json";
import {Link} from "react-router-dom";
import {Button, Divider, TextField} from '@mui/material';
import {PiEyeThin, PiEyeClosed} from "react-icons/pi";
import {FcGoogle} from "react-icons/fc";
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../utils/providers/AuthProvider";


// formic style=========
import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});


const SignIn = () => {
    const [showText, setShowText] = useState(false);
    const {loginUser, loginWithGoogle, resetPassword} = useContext(AuthContext);
    const emailRef = useRef();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.log(err)
            });
    }

    // formik function===========
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            loginUser(values.email, values.password)
                .then(userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    if (!user.emailVerified) {
                        window.alert('Email is not verified')
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        },
    });


    // handleResetPassword=============
    const handleResetPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            window.alert('Password enter a valid email');
            return;
        };

        resetPassword(email)
            .then(() => {
                window.alert('Password reset email sent');
            })
            .catch(err => {
                console.log(err);
            })
    };



    return (
        <section className="my-container md:flex md:gap-32 md:mx-32 my-20">
            <div className="md:mb-0 mb-12 md:w-1/2 w-full">
                <Link to="/" className="absolute z-10 px-1 top-10 md:text-base text-sm login-btn">Back to home</Link>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>

            <div className="border bg-slate-100 drop-shadow-lg p-5 rounded-lg md:w-1/2 w-full">
                <h3 className="font-bold mb-8">Login account</h3>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        required
                        variant="standard"
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        inputRef={emailRef}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <div className="relative">
                        <TextField
                            required
                            variant="standard"
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type={showText ? "text" : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <span className="absolute right-2 top-6" onClick={() => setShowText(!showText)}>{showText ? <PiEyeThin /> : <PiEyeClosed />}</span>
                    </div>

                    <div className="flex justify-between mt-4">
                        <label htmlFor="remember"><input type="checkbox" name="remember" id="remember" /> Remember me</label>
                        <button onClick={handleResetPassword} className="underline text-blue-600">forget password?</button>
                    </div>

                    <button type="submit" className="btn w-full p-[6px] my-6">Login</button>
                </form>
                <Divider>OR</Divider>
                <div className="mt-4">
                    <Button onClick={handleGoogleLogin} variant="elevated" fullWidth className="shadow-md" startIcon={<FcGoogle />}>Google login</Button>
                </div>
                <p className="text-xs mt-5">Don't have account? <Link to="/register" className="text-blue-600 underline">Sign Up</Link></p>
            </div>
        </section>
    );
};

export default SignIn;
