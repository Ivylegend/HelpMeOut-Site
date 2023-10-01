import React, { useEffect, useState } from "react";
import Navlogo from "../assets/images/helplogo.png";
import { Link, useParams } from "react-router-dom";
import copysmall from "../assets/images/copysmall.png";
import fb from "../assets/images/fb.png";
import whatsapp from "../assets/images/whatsapp.png";
import telegram from "../assets/images/telegram.png";
import videoImage from "../assets/images/video.png";
import edit from "../assets/images/edit.png";
import kite from "../assets/images/kite.png";
import closeicon from "../assets/images/close-circle.png";
import Footerlogo from "../assets/images/footerlogo.png";

const ReadyVideos = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [editContent, setEditContent] = useState(false);

  // let latestVid = data[data.length - 1];
  // console.log(latestVid);

  useEffect(() => {
    fetch("https://help-me-out-extension.onrender.com/uploads")
      .then((res) => res.json())
      .then((data) => setData(data.data.slice(-1)));
    console.log(data);
  }, []);

  return (
    <section className="bg-white">
      {/* NAV  */}
      <nav
        id="main-nav"
        className="bg-white flex items-center px-[100px] py-[20px] justify-between"
      >
        <Link to={"/"}>
          {" "}
          <img src={Navlogo} />
        </Link>
        <div className="flex gap-[48px] font-semibold">
          <a href="/#features">Features</a>
          <a href="/#works">How It Works</a>
        </div>
        <Link to={"/login"} className="font-bold text-lg blue">
          Get Started
        </Link>
      </nav>

      {/* MAIN */}
      <div className="main flex justify-between gap-9 px-[100px] py-[40px]">
        {/* FIRST HALF */}
        <div className="w-[50%]">
          <h2 className="text-4xl font-bold">Your video is ready!</h2>
          <div className="my-8">
            <p>Name</p>
            <span className="flex items-center gap-5">
              {data.map((item) => (
                <h2
                  key={item.id}
                  contentEditable={editContent && true}
                  className="text-xl font-semibold"
                >
                  {item.id}
                </h2>
              ))}
              <img
                className="cursor-pointer"
                onClick={() => setEditContent(true)}
                src={edit}
              />
            </span>
          </div>

          {/* VIDEO TITLE */}
          <div className="mb-9 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center">
            <input
              className="outline-none bg-transparent"
              type="text"
              placeholder="enter email of receiver"
            />
            <button className="rounded-lg bg-gray-400 text-white py-3 px-5">
              Send
            </button>
          </div>

          {/* VIDEO URL */}
          <div className="mb-9">
            <h2 className="text-xl font-semibold mb-3">Video Url</h2>
            <div className="py-2 px-2 w-[100%] bg-gray-100 rounded-lg flex justify-between items-center gap-5  border-[2px] border-black-500">
              {data.map((item) => (
                <p className="overflow-hidden w-[80%] whitespace-nowrap">
                  {item.url}
                </p>
              ))}
              <button className="rounded-lg bg-transparent border-[1px] border-black p-3 flex gap-3 items-center">
                <img src={copysmall} /> Copy
              </button>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mb-8">
            <h3 className="mb-5 text-xl font-semibold">Share your video</h3>
            <span className="flex gap-5">
              <button className="rounded-lg bg-transparent border-2 border-black p-3 flex items-center gap-3">
                <img src={fb} /> Facebook
              </button>
              <button className="rounded-lg bg-transparent border-2 border-black p-3 flex items-center gap-3">
                <img src={whatsapp} /> WhatsApp
              </button>
              <button className="rounded-lg bg-transparent border-2 border-black p-3 flex items-center gap-3">
                <img src={telegram} /> Telegram
              </button>
            </span>
          </div>
        </div>

        {/* SECOND HALF */}
        <div className="pl-8 border-l-2 flex-1">
          <div className="w-[100%]">
            {/* <img className="w-[100%]" src={videoImage} /> */}
            {data.map((item) => (
              <video key={item.id} src={item.url}></video>
            ))}
          </div>
        </div>
      </div>

      {/* SAVE VIDEO */}
      <div className="py-[50px] bg-gray-200 px-[100px] flex m-auto text-center flex-col items-center justify-center">
        <h3 className="text-xl font-medium w-[50%]">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h3>
        <button
          onClick={() => setToggle(!toggle)}
          className="my-9 bg-blue-950 text-white rounded-lg py-3 px-5"
        >
          Save Video
        </button>
        <span className="flex gap-1 font-medium text-lg">
          <p>Don’t have an account?</p>
          <Link to={"/login"} className="underline">
            Create account
          </Link>
        </span>
      </div>

      {/* FOOTER */}
      <footer className="px-[100px] bg-blue py-[58px] text-white flex justify-between items-start">
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

      {/* OVERLAY */}
      {toggle && (
        <div className="bg-black/50 w-[100%] h-[100vh] flex items-center justify-center flex-col fixed top-0">
          <div className="bg-white w-[450px] p-10 rounded-xl">
            <div className="flex justify-end">
              <img
                onClick={() => setToggle(!toggle)}
                src={closeicon}
                className="cursor-pointer"
              />
            </div>
            <div>
              <img src={kite} className="w-[200px] m-auto" />
              <p className="m-auto text-center text-lg mt-4 font-medium">
                Your video link has been sent to johnmark@gmail.com
              </p>
            </div>

            <div className="py-[50px] flex m-auto text-center flex-col items-center justify-center">
              <h3 className="text-md font-medium w-[90%]">
                Would you need to view this video later? Save to your account
                now!
              </h3>
              <button className="my-9 bg-blue-950 text-white rounded-lg py-3 px-5">
                Save Video
              </button>
              <span className="flex gap-1 font-medium text-lg">
                <p>Don’t have an account?</p>
                <Link to={"/login"} className="underline">
                  Create account
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReadyVideos;
