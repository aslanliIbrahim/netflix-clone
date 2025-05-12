import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import play_icon from "../assets/Play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "../components/TitleCards";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero relative w-full h-screen">
        <img
          src={heroImg}
          alt="banner"
          className="banner-img w-full [mask-image:linear-gradient(to_right,transparent,black_75%)] [--webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />
        <div className="hero-caption absolute w-full pl-2 bottom-[0]">
          <img
            src={heroTitle}
            alt="title"
            className="caption-img w-[90%] max-w-[420px] mb-7"
          />
          <p className="max-w-[700px] text-[17px] mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            saepe totam illum aliquam, explicabo at blanditiis atque qui sit
            molestiae.
          </p>
          <div className="hero-btns flex gap-2.5 mb-12">
            <button className="btn py-2 px-5 flex gap-2.5 text-[15px] bg-white text-black cursor-pointer hover:bg-[#e6e6e6]">
              <img src={play_icon} className="w-[25px]" alt="plaay_icon" />
              Play
            </button>
            <button className="btn-dark py-2 px-5 flex gap-2.5 text-[15px] bg-[#6d6d6eb3] text-white cursor-pointer hover:bg-[#6d6d6e66]">
              <img src={info_icon} className="w-[25px]" alt="plaay_icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
