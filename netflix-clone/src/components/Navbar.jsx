import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bellIcon from "../assets/bell_icon.svg";
import profileImg from "../assets/profile_img.png";
import caretIcon from "../assets/caret_icon.svg";
import menuIcon from "../assets/menu.png"; // add a hamburger icon
import closeIcon from "../assets/close.png"; // add a close icon
import { logout } from "../firebase";

const Navbar = () => {
  const navRef = useRef();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add("bg-[#141414]");
      } else {
        navRef.current.classList.remove("bg-[#141414]");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className="w-full py-[14px] px-4 md:px-[6%] flex justify-between items-center fixed text-[14px] text-[#e5e5e5] bg-gradient-to-b from-black/70 via-transparent to-transparent z-10"
    >
      {/* Left side */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="w-[80px] object-contain" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-[20px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Tv Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>

        {/* Hamburger icon (mobile) */}
        <button className="md:hidden ml-2" onClick={toggleMobileMenu}>
          <img
            src={isMobileMenuOpen ? closeIcon : menuIcon}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <img
          src={searchIcon}
          alt="search"
          className="w-[20px] cursor-pointer"
        />
        <p className="hidden sm:block">Children</p>
        <img src={bellIcon} alt="bell" className="w-[20px] cursor-pointer" />
        <div className="group flex items-center cursor-pointer gap-2 relative">
          <img
            src={profileImg}
            alt="profile"
            className="rounded-[4px] w-[35px] h-[35px]"
          />
          <img src={caretIcon} alt="caret" className="w-[15px]" />
          <div className="group-hover:block hidden absolute top-full right-0 bg-[#191919] p-4 rounded-[10px] z-[1]">
            <p
              onClick={() => logout()}
              className="text-[13px] cursor-pointer underline"
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#141414] px-6 py-4 flex flex-col gap-4 text-white md:hidden z-20">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Tv Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
