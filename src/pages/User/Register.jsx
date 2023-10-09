import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/animation_lmutt4s2.json";
import {Link} from "react-router-dom";
import {Button, Divider, TextField} from '@mui/material';
import {PiEyeThin, PiEyeClosed} from "react-icons/pi";
import {FcGoogle} from "react-icons/fc";

import {useFormik} from 'formik';
import * as yup from 'yup';
import {useState} from "react";

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Email is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters')
        .matches(/^(?=.*\d)/, 'use a one digit')
        .matches(/^(?=.*[a-z])/, 'use least one lower case')
        .matches(/^(?=.*[!#*$%&? "])/, 'use least one special character')
        .matches(/^(?=.*[A-Z])/, 'use least one upper case')
        .required('Password is required'),
});
const Register = () => {
    const [showText, setShowText] = useState(false);
    const [showConfirmText, setShowConfirmText] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <section className="my-container md:flex md:gap-32 md:mx-32 mt-5">
            <div className="md:mb-0 mb-12 md:w-1/2 w-full">
                <Link to="/" className="absolute z-10 px-1 top-20 md:text-base text-sm login-btn">Back to home</Link>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>

            <div className="border bg-slate-100 drop-shadow-lg p-5 rounded-lg md:w-1/2 w-full">
                <h3 className="font-bold mb-2">Register account</h3>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="standard"
                        fullWidth
                        id="name"
                        name="name"
                        label="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        variant="standard"
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
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
                    <div className="relative">
                        <TextField
                            required
                            variant="standard"
                            fullWidth
                            id="password"
                            name="password"
                            label="confirm Password"
                            type={showConfirmText ? "text" : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <span className="absolute right-2 top-6" onClick={() => setShowConfirmText(!showConfirmText)}>{showConfirmText ? <PiEyeThin /> : <PiEyeClosed />}</span>
                    </div>

                    <button type="submit" className="btn w-full p-2 my-6">Sign Up</button>
                </form>

                <Divider>OR</Divider>
                <div className="mt-6">
                    <Button variant="elevated" fullWidth className="shadow-md" startIcon={<FcGoogle />}>Google login</Button>
                </div>
                <p className="text-xs mt-5">Already have an account? <Link to="/login" className="hover:text-blue-700 underline">Login</Link></p>
            </div>
        </section>
    );
};

export default Register;