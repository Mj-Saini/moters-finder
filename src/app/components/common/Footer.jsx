import Link from "next/link";
import React from "react";
import { FbIcon, InstaIcon, LinkdInIcon, TwiterIcon, YouTubeIcon } from "./Icons";
import bgImg from "../../../../public/images/png/welcome-bg-img.png";
import Image from "next/image";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <div className="px-5 lg:px-10 relative pt-12 lg:pt-20 pb-7">
      <div className="flex justify-between gap-5">
        <div>
          <p className="font-light text-sm text-[#4B4CFF]">
            © {getCurrentYear} Copyright motorsfinder.ai / All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <LinkdInIcon />
          <YouTubeIcon />
          <TwiterIcon />
          <FbIcon />
          <InstaIcon />
        </div>
        <div className="flex flex-wrap gap-6">
          <Link href={"/"} className="font-light text-sm text-[#fff]">
            {" "}
            <span className="text-[#4B4CFF]">Language:</span> English
          </Link>
          <Link href={"/"} className="font-light text-sm text-[#fff]">
            {" "}
            <span className="text-[#4B4CFF]">Language:</span> UAE
          </Link>
          <Link href={"/"} className="font-light text-sm text-[#fff]">
            {" "}
            <span className="text-[#4B4CFF]">About Us </span>
          </Link>
          <Link href={"/"} className="font-light text-sm text-[#fff]">
            {" "}
            <span className="text-[#4B4CFF]"> Privacy</span>
          </Link>
          <Link href={"/"} className="font-light text-sm text-[#fff]">
            {" "}
            <span className="text-[#4B4CFF]"> Help Center</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
