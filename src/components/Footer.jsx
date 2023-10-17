import React from "react";
import appleIcon from "./../assets/appleIcon.svg";
import googlePlay from "./../assets/google-play.png";

export default function Footer() {
  return (
    <div className="flex justify-between px-12 py-8">
      <div className="flex flex-col gap-2">
        <h2>B-cop</h2>

        <div className="flex flex-col">
          <span>Today's gossip is tomorrow's news</span>
          <span>Copyright @2023</span>
        </div>
      </div>

      {/* Social media icons */}
      <div className="flex flex-col gap-2">
        <h2>Get App</h2>

        <div className="flex">
          <img src={googlePlay} alt="" className="w-11" />
          <img src={appleIcon} alt="" className="w-11" />
        </div>
      </div>
    </div>
  );
}
