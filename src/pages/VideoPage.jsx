import React, { useEffect, useState } from "react";
import Navlogo from "../assets/images/helplogo.png";
import edit from "../assets/images/edit.png";
import fb from "../assets/images/fb.png";
import whatsapp from "../assets/images/whatsapp.png";
import telegram from "../assets/images/telegram.png";
import copysmall from "../assets/images/copysmall.png";
import Profile from "../assets/images/profile-circle.png";
import BigFrame from "../assets/images/big-vid-frame.png";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoPage = () => {

  const [data, setData] = useState([]);
  // const apiUrl = `https://help-me-out-extension.onrender.com/upload/${video_id}`;

  useEffect(() => {
    fetch("https://help-me-out-extension.onrender.com/uploads")
      .then((res) => res.json())
      .then((data) => setData(data.data));
    console.log(data);
  }, []);

  return (
    <section className="px-[100px] py-[50px] bg-white">
      <div className="mb-10 flex justify-between items-center">
        <div>
          <img src={Navlogo} />
        </div>
        <div className="flex items-center gap-3">
          <img src={Profile} className="rounded-full" />
          <p>Icha Victory</p>
          <FaChevronDown color="gray" cursor={"pointer"} />
        </div>
      </div>

      {/* PATHS */}
      <div className="paths flex gap-[1rem]">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        /
        <Link to={"/home"}>
          <p>Recent Videos</p>
        </Link>
        /
        <Link to={"/home"}>
          <p>Video Title</p>
        </Link>
      </div>

      {/* VIDEO PREVIEW */}
      <div>
        <span className="flex items-center gap-5 my-8">
          <h2 className="text-3xl font-semibold">
            How to create a facebook ad listing
          </h2>
          <img className="cursor-pointer" src={edit} />
        </span>
        <div className="border-2 rounded-2xl p-4">
          <img src={BigFrame} />
        </div>
      </div>

      {/* INPUTS */}
      <div className="flex justify-between my-8">
        <div className="px-5 py-2 bg-gray-200 rounded-lg w-[40%] flex justify-between items-center">
          <input
            className="outline-none bg-transparent"
            type="email"
            placeholder="enter email of receiver"
          />
          <button className="rounded-lg bg-gray-400 text-white py-3 px-5">
            Send
          </button>
        </div>
        <div className="py-2 px-2 bg-gray-100 rounded-lg w-[50%] flex justify-between items-center  border-[2px] border-black-500">
          <p>http://localhost:5173/Untitled_Video_4a7ad4ec9fe1</p>
          <button className="rounded-lg bg-transparent border-[1px] border-black p-3 flex gap-4 items-center">
            <img src={copysmall} /> Copy URL
          </button>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="mb-8">
        <h3 className="mb-5">Share your video</h3>
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

      {/* TRANSCRIPT */}
      <div>
        <h3 className="mb-5">Transcript</h3>
        <select className="rounded-lg bg-transparent border-2 border-gray-500 p-3">
          <option>English</option>
        </select>
      </div>
    </section>
  );
};

export default VideoPage;
