import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import play_icon from "../assets/Play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="hero relative w-full h-[100vh] max-h-[800px] overflow-hidden">
        <img
          src={heroImg}
          alt="banner"
          className="banner-img w-full h-full object-cover object-top [mask-image:linear-gradient(to_right,transparent,black_75%)] [--webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />
        <div className="hero-caption absolute bottom-0 w-full px-4 md:px-10 lg:px-[6%] py-6 md:py-10 text-white bg-gradient-to-t from-black/90 to-transparent">
          <img
            src={heroTitle}
            alt="title"
            className="w-[90%] max-w-[420px] mb-4 md:mb-6"
          />
          <p className="max-w-[700px] text-sm md:text-base lg:text-lg mb-4 md:mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            saepe totam illum aliquam, explicabo at blanditiis atque qui sit
            molestiae.
          </p>
          <div className="hero-btns flex flex-wrap gap-3 mb-6">
            <button className="btn flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-white text-black rounded hover:bg-[#e6e6e6] transition">
              <img src={play_icon} className="w-5 md:w-6" alt="play_icon" />
              Play
            </button>
            <button className="btn-dark flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-[#6d6d6eb3] text-white rounded hover:bg-[#6d6d6e66] transition">
              <img src={info_icon} className="w-5 md:w-6" alt="info_icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>

      <div className="more-cards px-4 md:px-10 lg:px-[6%] mt-8">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics For you"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
