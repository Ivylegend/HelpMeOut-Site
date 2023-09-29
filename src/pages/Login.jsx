import React from "react";
import Navlogo from "../assets/images/helplogo.png";
import google from "../assets/images/google.png";
import fb from "../assets/images/fb.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Login = () => {
  return (
    <section className="px-[100px] py-[40px] bg-white">
      <div className="mb-[2rem]">
        <Link to={"/"}>
          <img src={Navlogo} />
        </Link>
      </div>
      <div className="bg-white w-[475px] m-auto">
        <h2 className="text-3xl font-bold text-center">Log in or Sign up</h2>
        <p className="text-center w-[70%] m-auto mb-5 mt-3">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        <button className="border-black flex gap-4 items-center border-[1.5px] justify-center w-[100%] bg-white rounded-xl px-5 py-3 mb-5">
          <img src={google} /> Continue with Google
        </button>
        <button className="border-black flex gap-4 items-center border-[1.5px] justify-center w-[100%] bg-white rounded-xl px-5 py-3 mb-5">
          <img src={fb} /> Continue with Facebook
        </button>
        <div className="flex items-center gap-5 w-[100%] justify-center mb-7">
          <hr className="w-[80%]" /> <p>or</p>
          <hr className="w-[80%]" />
        </div>
        <form className="flex flex-col gap-[.7rem]">
          <label>Email</label>
          <input
            className="border-grey border-[2px] justify-center w-[100%] bg-white rounded-xl px-5 py-3 mb-1"
            type="text"
            placeholder="Enter your email address"
          />
          <label>Password</label>
          <input
            className="border-grey border-[2px] justify-center w-[100%] bg-white rounded-xl px-5 py-3 mb-1"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-[100%] mt-5 flex gap-4 items-center border-2 justify-center btn rounded-xl px-5 py-3 mb-5"
          >
            <Link to={"/home"}>Sign Up</Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
