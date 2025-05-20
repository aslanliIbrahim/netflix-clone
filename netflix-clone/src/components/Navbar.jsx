import React, { use, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bellIcon from "../assets/bell_icon.svg";
import profileImg from "../assets/profile_img.png";
import caretIcon from "../assets/caret_icon.svg";
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add("bg-[#141414]");
      } else {
        navRef.current.classList.remove("bg-[#141414]");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className="w-full py-[20px] px-[6%] flex justify-between fixed text-[14px] text-[#e5e5e5] bg-gradient-to-b from-black/70 via-transparent to-transparent z-10 "
    >
      <div className="flex items-center gap-4 ">
        <img src={logo} alt="logo" className="w-[90px] object-contain" />
        <ul className="flex gap-[20px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Tv Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={searchIcon}
          alt="seacrh_icon"
          className="w-[20px] cursor-pointer "
        />
        <p>children</p>
        <img
          src={bellIcon}
          alt="bell_Icon"
          className="w-[20px] cursor-pointer "
        />
        <div className="group flex items-center justify-center cursor-pointer gap-2 relative">
          <img
            src={profileImg}
            alt="profile"
            className=" rounded-[4px] w-[35px] h-[35px] cursor-pointer"
          />
          <img
            src={caretIcon}
            alt="profile"
            className="w-[15px] cursor-pointer "
          />
          <div className="group-hover:block hidden absolute top-full right-0 w-max bg-[#191919] p-4 rounded-[10px] text-uppercase z-[1]">
            <p className="text-[13px] cursor-pointer underline">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
