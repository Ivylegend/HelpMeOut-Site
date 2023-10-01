import React, { useState, useEffect } from "react";
import Navlogo from "../assets/images/helplogo.png";
import Profile from "../assets/images/profile-circle.png";
import link from "../assets/images/link.png";
import more from "../assets/images/more.png";
import frame from "../assets/images/video-frame.png";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://help-me-out-extension.onrender.com/uploads")
      .then((res) => res.json())
      .then((data) => setData(data.data));
    console.log(data);
  }, []);

  return (
    <section className="home bg-white">
      <div className="px-[100px] py-[50px] flex justify-between items-center">
        <div>
          <img src={Navlogo} />
        </div>
        <div className="flex items-center gap-3">
          <img src={Profile} className="rounded-full" />
          <p>Icha Victory</p>
          <FaChevronDown color="gray" cursor={"pointer"} />
        </div>
      </div>

      <div className="px-[100px] items-center flex justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold mb-3">Hello, Icha Victory</h2>
          <p className="text-lg">Here are your recorded videos</p>
        </div>
        <div className="flex gap-3 bg-gray-100 py-[1rem] px-[1.5rem] w-[400px] rounded-lg items-center justify-start">
          <FaSearch color="gray" fontSize={20} cursor={"pointer"} />
          <input
            className="w-[100%] outline-none bottom-0 bg-transparent"
            type="text"
            placeholder="Search for a particular video"
          />
        </div>
      </div>

      <hr className="border-1 border-gray-300" />

      <div className="px-[100px] py-[40px]">
        <p className="text-lg font-medium mb-5">Recent Files</p>
        <div className="grid grid-cols-2 gap-[2rem]">
          {data.map((item) => (
            <div key={item.id} className="border-2 rounded-xl p-4">
              <div className="rounded-xl w-[100%] h-[208px] object-cover">
                <Link to={"/home/video"}>
                  {/* <img src={frame} className="w-[100%]" /> */}
                  <video
                    className="w-[100%] h-[100%] object-cover"
                    src={item.url}
                    autoPlay
                  ></video>
                </Link>
              </div>
              <span className="flex my-[.5rem] justify-between">
                <h3 className="font-semibold text-xl">{item.id}</h3>
                <small className="flex gap-5">
                  <img src={link} className="cursor-pointer" />
                  <img src={more} className="cursor-pointer" />
                </small>
              </span>
              <p className="date font-medium text-lg">{item.createdAt}</p>
            </div>
          ))}
          <div className="border-2 rounded-lg p-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
