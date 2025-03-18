"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/images/svg/logo.svg";
import { headerData } from "./Helper";
import CommonBtn from "./CommonBtn";

const Header = () => {
  const pathName = usePathname();

  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);

  return (
    <>
      <div className={`mx-auto !pt-6 `}>
        <div
          className={` flex items-center gap-6 justify-between px-5 md:px-10`}
        >
          <Link href="/">
            <Image
              width={86}
              height={47}
              className="w-[180px] h-[81px]"
              src={logo}
              alt="logo"
            />
          </Link>
          <div
            className={` flex gap-6 max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:flex-row bg-white lg:bg-transparent duration-300 ${
              !toggleNav ? "-left-[100vw]" : "left-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-end">
              <div className="header_border_gradient_header  flex gap-3 px-9  max-lg:flex-col max-lg:!bg-white">
                {headerData.map((tab, index) => (
                  <div key={index} className="relative py-3 px-4">
                    <Link
                      href={tab.path}
                      className={`font-medium text-base capitalize flex items-center gap-3 justify-between duration-300 gradient_text ${
                        pathName === tab.path
                          ? "!text-[#2C4C4B]"
                          : "text-[#7670FF] lg:text-[#fff]"
                      }`}
                    >
                      {tab.tabs}
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className={`flex flex-col gap-6 items-center 2xl:absolute right-[84px] lg:hidden`}
              >
                <Link
                  href={"/auth"}
                  className={`capitalize font-bold text-[#fff] bg-[#2C4C4B] rounded-2xl px-5 py-3  whitespace-nowrap`}
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <CommonBtn btnName="sign in" btnStyling="" />
          </div>
          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="flex flex-col justify-between h-5 w-8 lg:hidden z-[100] relative cursor-pointer duration-300"
          >
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav
                  ? "translate-y-[7px] -rotate-45 border-[#7670FF]"
                  : "border-[#7670FF]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "rotate-45 border-[#7670FF]" : "border-[#7670FF]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "opacity-0 border-[#7670FF]" : "border-[#7670FF]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
