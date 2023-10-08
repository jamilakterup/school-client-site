import "./SignIn.css";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/animation_lmuto4rl.json";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const SignIn = () => {
    const {register, formState: {errors}, handleSubmit} = useForm({criteriaMode: "all"});

    const onSubmit = (data) => console.log(data)

    return (
        <section className="my-container md:flex md:gap-32 md:mx-52 my-20">
            <div className="md:mb-0 mb-12 md:w-1/2 w-full">
                <Link to="/" className="absolute z-10 px-1 top-10 md:text-base text-sm login-btn">Back to home</Link>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>

            <div className="border bg-slate-200 drop-shadow-lg p-5 rounded-lg md:w-1/2 w-full">
                <h4 className="font-bold my-8">Login to your account</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("exampleRequired", {required: true})} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="w-full my-3 p-1 rounded-md outline-none" {...register("email", {required: true, maxLength: 20})} placeholder="Email" />

                    <input className="w-full my-3 p-1 rounded-md outline-none" {...register("password", {required: true, pattern: /^[A-Za-z]+$/i})} placeholder="password" />

                    <div className="flex justify-between">
                        <label htmlFor="remember"><input type="checkbox" name="remember" id="remember" /> Remember me</label>
                        <p>forget password</p>
                    </div>
                    <button type="submit" className="btn w-full p-1 mt-8">Login</button>
                </form>
                <p className="text-xs mt-5">Don't have account? <Link to="/register" className="hover:text-blue-700 underline">Sign Up</Link></p>
            </div>
        </section>
    );
};

export default SignIn;