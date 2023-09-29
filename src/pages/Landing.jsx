import React from "react";
import Navlogo from "../assets/images/helplogo.png";
import Hero1 from "../assets/images/hero1.png";
import Hero2 from "../assets/images/hero2.png";
import Hero3 from "../assets/images/hero3.png";
import bgHero1 from "../assets/images/bg3.png";
import bgHero2 from "../assets/images/bghero2.png";
import Simple from "../assets/images/simple.png";
import Easy from "../assets/images/easy.png";
import Revisit from "../assets/images/revisit.png";
import Features from "../assets/images/features.png";
import Rec from "../assets/images/rec.png";
import Arrow from "../assets/images/arrow-right.png";
import Footerlogo from "../assets/images/footerlogo.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      {/* NAV  */}
      <nav
        id="main-nav"
        className="bg-white border-b-2 flex px-[100px] items-center py-[20px] justify-between"
      >
        <img src={Navlogo} />
        <div className="flex gap-[48px] font-semibold">
          <a href="/">Features</a>
          <a href="/pages/about.html">How It Works</a>
        </div>
        <Link to={"/login"} className="font-bold text-lg blue">
          Get Started
        </Link>
      </nav>

      {/* <!-- HERO --> */}
      <section
        id="main-page"
        className="hero bg-white px-[100px] h-[100vh] mb-[3rem] flex items-center justify-between gap-[2rem]"
      >
        <div className="">
          <h1 className="text-6xl font-bold">
            Show Them <br />
            Don't Just Tell
          </h1>
          <p className="text-md py-[20px] w-[90%]">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button className="btn rounded-lg px-[24px] py-[17px] text-white flex gap-[15px] items-center">
            Install HelpMeOut <img src={Arrow} />
          </button>
        </div>
        <div className="flex gap-[1rem] relative">
          <div className="flex flex-col gap-[1rem] z-10 relative">
            <img src={Hero1} className="z-10" />
            <img src={Hero2} className="z-10" />
          </div>
          <img
            src={bgHero2}
            className="w-[270px] absolute bottom-[-50px] left-[-40px]"
          />
          <div className="relative z-10">
            <img src={Hero3} className="z-20" />
          </div>
          <img
            src={bgHero1}
            className="w-[270px] absolute right-[-50px] top-[-40px]"
          />
        </div>
      </section>

      {/* <!-- FEATURES --> */}
      <section className="mb-[3rem] bg-white px-[100px] py-[80px]">
        <div className="text-center mb-[64px]">
          <h2 className="text-4xl font-bold">Features</h2>
          <p className="text-lg mt-[10px]">Key highlights of our extension</p>
        </div>
        <div className="flex justify-between gap-[2rem]">
          <div className="flex flex-col gap-[3rem]">
            <div className="flex items-start gap-[1rem]">
              <img src={Simple} />
              <span>
                <h3 className="text-2xl font-medium mb-[0.6rem]">
                  Simple Screen Recording
                </h3>
                <p className="w-[80%]">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </span>
            </div>
            <div className="flex items-start gap-[1rem]">
              <img src={Easy} />
              <span>
                <h3 className="text-2xl font-medium mb-[0.6rem]">
                  Easy-to-Share URL
                </h3>
                <p className="w-[80%]">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </span>
            </div>
            <div className="flex items-start gap-[1rem]">
              <img src={Revisit} />
              <span>
                <h3 className="text-2xl font-medium mb-[0.6rem]">
                  Revisit Recordings
                </h3>
                <p className="w-[80%]">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </span>
            </div>
          </div>
          <div>
            <img src={Features} />
          </div>
        </div>
      </section>

      {/* <!-- HOW IT WORKS --> */}
      <section id="how-it-works" className="bg-white px-[100px] py-[80px]">
        <h2 className="text-4xl font-bold text-center mb-[64px]">
          How It Works
        </h2>
        <div className="flex justify-between gap-[6rem] items-center">
          <div className="text-center flex flex-col items-center gap-[0.7rem]">
            <p className="text-white bg-blue rounded-full w-[45px] text-2xl h-[45px] flex items-center justify-center">
              1
            </p>
            <h3 className="text-2xl font-semibold">Record Screen</h3>
            <p>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <div className="shadow-xl border-lg">
              <img src={Rec} />
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-[0.7rem]">
            <p className="text-white bg-blue rounded-full w-[45px] text-2xl h-[45px] flex items-center justify-center">
              2
            </p>
            <h3 className="text-2xl font-semibold">Share Your Recording</h3>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <div className="shadow-xl border-lg">
              <img src={Rec} />
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-[0.7rem]">
            <p className="text-white bg-blue rounded-full w-[45px] text-2xl h-[45px] flex items-center justify-center">
              3
            </p>
            <h3 className="text-2xl font-semibold">Learn Effortlessly</h3>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <div className="shadow-xl border-lg">
              <img src={Rec} />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <footer className="px-[100px] bg-blue py-[68px] text-white flex justify-between items-start">
        <img className="mt-[1rem]" src={Footerlogo} />
        <ul className="leading-10">
          <li className="mb-[.5rem] font-medium">Menu</li>
          <li>
            <a href="" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link">
              {" "}
              Converter
            </a>
          </li>
          <li>
            <a href="" className="link">
              {" "}
              How It Works
            </a>
          </li>
        </ul>
        <ul className="leading-10">
          <li className="mb-[.5rem] font-medium">About Us</li>
          <li>
            <a href="" className="link">
              About
            </a>
          </li>
          <li>
            <a href="" className="link">
              {" "}
              Contact Us
            </a>
          </li>
          <li>
            <a href="" className="link">
              Privacy Policy
            </a>
          </li>
        </ul>
        <ul className="leading-10">
          <li className="mb-[.5rem] font-medium">Screen Record</li>
          <li>
            <a href="" className="link">
              Browser Window
            </a>
          </li>
          <li>
            <a href="" className="link">
              Desktop
            </a>
          </li>
          <li>
            <a href="" className="link">
              Application
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Landing;
