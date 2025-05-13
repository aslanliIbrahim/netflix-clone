import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
const Footer = () => {
  return (
    <footer className="p-5 w-2xl mx-auto max-w-5xl">
      <div className="footer-icons flex gap-5 my-10 mx-0">
        <img
          src={facebook_icon}
          alt="icons"
          className="w-[30px] cursor-pointer"
        />
        <img
          src={instagram_icon}
          alt="icons"
          className="w-[30px] cursor-pointer"
        />
        <img
          src={twitter_icon}
          alt="icons"
          className="w-[30px] cursor-pointer"
        />
        <img
          src={youtube_icon}
          alt="icons"
          className="w-[30px] cursor-pointer"
        />
      </div>
      <ul className="grid grid-cols-4 gap-5 text-[#757575] mb-10">
        <li>Audi Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefences</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">Copyright 2024</p>
    </footer>
  );
};

export default Footer;
