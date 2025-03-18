'use client';
import Image from 'next/image';
import { Heart_icon, Location_icon, Share_icon } from "@/app/components/common/Icons";
import React, { useState } from "react";
import men_img from "../../../public/images/png/men_img.png"
import list_ai from "../../../public/images/png/list_ai.png"

import mike from "../../../public/images/png/mike.png"
import sendIcon from "../../../public/images/png/send-icon.png"
// import sendIcon from "../../../public/images/png/sendIcon.png"
import SimilarCard from '@/app/components/common/SimilarCard';
import CommonBtn from '@/app/components/common/CommonBtn';
import { Cars_for_Sell, Company_Cars_for_Sell } from '@/app/components/common/Helper';

const Cars_data = {
    FeaturedMotorListing: Cars_for_Sell,
    MotorListing: Company_Cars_for_Sell,
};

const page = () => {

    const [activeCategory, setActiveCategory] = useState("FeaturedMotorListing");


    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };
    return <>


        <div className="min-h-[calc(100vh-106px)] bg_img_hero">
            <div className="px-5 lg:p-10">
                <div className="bg-[#0B0B40] rounded-2xl md:px-5 2xl:px-[28px] pb-7 pt-[23px]">

                    <div className='lg:flex items-center justify-between'>
                        <Image className='lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] mx-auto lg:mx-0 ' src={men_img} />

                        <div className='ms-[27px]'>
                            <div className="2xl:flex items-center justify-between">
                                <p className="font-normal whitespace-nowrap 2xl:me-[50px] text-center 2xl:text-start sm:text-[40px] text-[]25px\ leading-[150%] text-white ff_gothamMedium mt-[20px] lg:mt-0">
                                    Company Name
                                </p>
                                <div className='md:flex md:justify-between  w-full mt-[20px] 2xl:mt-0'>
                                    <div className='flex justify-between w-full xl:me-[60px] lg:me-[30px] me-[20px] overflow-y-scroll scroll_hide'>
                                        <p className=" 2xl:text-[20px] whitespace-nowrap sm:text-[16px] text-[12px] leading-[150%] ff_gothamMedium  font-normal text-[#F800C0] me-[15px] ">
                                            Active Listing <span className="text-[white] 2xl:text-[24px] sm:text-[18px] text-[12px] ff_gothamMedium"> / 5</span>
                                        </p>
                                        <p className=" 2xl:text-[20px]  whitespace-nowrap sm:text-[16px] text-[12px]  leading-[150%] ff_gothamMedium  font-normal text-[#F800C0] me-[15px]">
                                            Agent  <span className="text-[white] 2xl:text-[24px]sm:text-[18px] text-[12px]ff_gothamMedium"> / 3</span>
                                        </p>
                                        <p className=" 2xl:text-[20px]  whitespace-nowrap sm:text-[16px] text-[12px]  leading-[150%] ff_gothamMedium  font-normal text-[#F800C0] me-[15px]">
                                            Location <span className="text-[white] 2xl:text-[24px]sm:text-[18px] text-[12px]ff_gothamMedium"> / Dubai</span>
                                        </p>
                                        <p className=" 2xl:text-[20px]  whitespace-nowrap sm:text-[16px] text-[12px]  leading-[150%] ff_gothamMedium  font-normal text-[#F800C0] me-[15px]">
                                            Review  <span className="text-[white] 2xl:text-[24px] sm:text-[18px] text-[12px] ff_gothamMedium"> / 8374</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center mt-[20px] md:mt-0">
                                        <span className="me-[25px]">
                                            <Heart_icon />
                                        </span>
                                        <span className="me-[25px]">
                                            <Location_icon />
                                        </span>
                                        <span className="me-[25px]">
                                            <Share_icon />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[white] font-light xl:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] xl:leading-[150%]  mt-[10px] opacity-70 ff_got hamMedium '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo. mamta
                            </p>
                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#F800C0] mt-[41px]'></div>

                    <div className="z-10 relative flex flex-wrap justify-center mt-[51px] px-5 lg:px-10 ">
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

                            <div className="sm:flex items-center justify-center">


                                <div className="sm:mt-0 mt-[20px] border-[1px] border-gradient-to-r from-[#7670FF] to-[#5B42FF] rounded-[90px] shadow-[0px_0px_8px_0px_#4B4CFF] flex justify-between me-[10px] ">

                                    {["FeaturedMotorListing", "MotorListing"].map((name) => (
                                        <span key={name}>
                                            <button
                                                className={`font-normal 2xl:text-[20px] text-[16px] leading-[150%] text-white py-[9px] px-[34px] cursor-pointer rounded-[90px] hover:bg-gradient-to-r hover:from-[#7670FF] hover:to-[#5B42FF] hover:shadow-[0px_0px_8px_0px_#4B4CFF] ${activeCategory === name ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF]" : ""
                                                    }`}
                                                onClick={() => handleCategoryChange(name)}
                                            >
                                                {name}
                                            </button>
                                        </span>
                                    ))}
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

            </div>
        </div>


    </>;
};

export default page;
