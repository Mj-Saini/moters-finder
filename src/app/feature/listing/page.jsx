'use client';
import React, { useState } from "react";
import bgimg from "../../../../public/images/png/welcome-bg-img.png";
import brandImg from "../../../../public/images/png/brands.png";
import list_ai from "../../../../public/images/png/list_ai.png";

import lens from "../../../../public/images/png/google-lens.png";
import mike from "../../../../public/images/png/mike.png";
import sendIcon from "../../../../public/images/png/send-icon.png";
import Image from "next/image";
import Footer from "@/app/components/common/Footer";
import CommonBtn from "@/app/components/common/CommonBtn";
import SimilarCard from "@/app/components/common/SimilarCard";
import { Cars_for_Sell, Company_Cars_for_Sell } from "@/app/components/common/Helper";
const Cars_data = {
  Featured: Cars_for_Sell,
  Company: Company_Cars_for_Sell,
  Listing: Cars_for_Sell,
};

const page = () => {
  
  const [activeCategory, setActiveCategory] = useState("Featured");


  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-[calc(100vh-106px)] bg_img_hero">
      <Image
        className="absolute top-0 left-0 w-full min-h-[calc(100vh-106px)] z-0 "
        src={bgimg}
        alt="bgImg"
      />

      <div className="z-10 relative">
        <Image className="w-full z-0" src={brandImg} alt="bgImg" />
      </div>

      <div className="z-10 relative flex flex-wrap justify-center mt-[51px] px-5 lg:px-10">
        <div className="w-full xl:w-5/12 md:px-3">
          <div className="flex flex-col items-center">
            <Image className="w-[460px] z-0" src={list_ai} alt="bgImg" />
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[64px] ff_gothamMedium font-medium mt-10">
              Hey, I'm Lina
            </h2>
            <h3 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-[40px] text-center">
              Your personal Ai motor Agent
            </h3>
            <div className="flex items-center custom_shadow header_border_gradient mt-16 px-5">
              <input
                className="relative outline-0 z-10 text-white font-light text-base lg:text-2xl sm:ms-4"
                type="text"
                placeholder="| Ask me anything about motors..."
              />
              <div className="flex items-center relative z-10">
                <Image className="h-9 md:h-[69px] w-9 md:w-[70px]" src={mike} alt="img" />
                <Image className="h-10 md:h-[70px] w-10 md:w-[70px]" src={sendIcon} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-7/12 md:px-3">
          <div className="bg-[#0B0B40] rounded-2xl md:px-5 2xl:px-[28px] pb-7 pt-[23px]">
            <div className="sm:flex items-center justify-between">
              <p className="font-normal 2xl:text-[24px] me-[10px] text-[18px] leading-[150%] text-white text-center sm:text-start">
                Cars for Sell 12424
              </p>

              <div className="sm:mt-0 mt-[20px] border-[1px] border-gradient-to-r from-[#7670FF] to-[#5B42FF] rounded-[90px] shadow-[0px_0px_8px_0px_#4B4CFF] flex justify-between me-[10px]">
               
                {["Featured", "Company", "Listing"].map((name) => (
                  <span key={name}>
                    <button
                      className={`font-normal 2xl:text-[20px] text-[16px] leading-[150%] text-white py-[9px] px-[15px] cursor-pointer rounded-[90px] hover:bg-gradient-to-r hover:from-[#7670FF] hover:to-[#5B42FF] hover:shadow-[0px_0px_8px_0px_#4B4CFF] ${activeCategory === name ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF]" : ""
                        }`}
                      onClick={() => handleCategoryChange(name)} 
                    >
                      {name}
                    </button>
                  </span>
                ))}
              </div>

              <div>
                <button className="font-normal flex items-center mx-auto sm:mx-0 mt-[20px] sm:mt-0 2xl:text-[20px] text-[16px] leading-[150%] text-white border-blue-600 py-[9px] px-[22px] cursor-pointer rounded-[90px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] shadow-[0px_0px_8px_0px_#4B4CFF]">
                  Sort & Filter
                  <span className="ms-[10px]">
                    <svg
                      width="13"
                      height="11"
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.35044 9.6252C6.95955 10.2571 6.04045 10.2571 5.64956 9.6252L0.948823 2.02607C0.536717 1.35987 1.0159 0.5 1.79926 0.5L11.2007 0.500001C11.9841 0.500001 12.4633 1.35987 12.0512 2.02607L7.35044 9.6252Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap justify-center">
               
                {Cars_data[activeCategory]?.map((items, index) => (
                  <div key={index} className="w-full md:w-1/2 px-4 mt-8">
                    <SimilarCard card={items} />
                  </div>
                ))}
                <div className="mt-6">
                  <CommonBtn btnName={"Load More"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-5">
        <Footer />
      </div>
    </div>
  );
};

export default page;
