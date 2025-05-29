import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";

const Footer = () => {
  return (
    <footer className="px-4 py-8 w-full max-w-6xl mx-auto text-[#757575] text-sm">
      {/* Social Icons */}
      <div className="footer-icons flex flex-wrap gap-4 md:gap-6 my-6">
        <img
          src={facebook_icon}
          alt="facebook"
          className="w-[25px] md:w-[30px] cursor-pointer"
        />
        <img
          src={instagram_icon}
          alt="instagram"
          className="w-[25px] md:w-[30px] cursor-pointer"
        />
        <img
          src={twitter_icon}
          alt="twitter"
          className="w-[25px] md:w-[30px] cursor-pointer"
        />
        <img
          src={youtube_icon}
          alt="youtube"
          className="w-[25px] md:w-[30px] cursor-pointer"
        />
      </div>

      {/* Footer Links */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6 mb-8">
        <li>Audi Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      {/* Copyright */}
      <p className="text-xs md:text-sm">© 2024 Netflix Clone</p>
    </footer>
  );
};

export default Footer;
