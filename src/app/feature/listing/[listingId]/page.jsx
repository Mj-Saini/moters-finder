"use client";
import React, { useState } from "react";
import car_detail_img from "../../../../../public/images/png/car_detail_img.png";
import list_car_brand from "../../../../../public/images/png/list_car_brand.png";
import avtar_mini_img from "../../../../../public/images/png/avtar_mini_img.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SimilarCard from "../../../components/common/SimilarCard";
import {
  Like_icon,
  Location_icon,
  Share_icon,
  Star_fill_icon,
  Star_unfill_icon,
  Upload_icon,
} from "@/app/components/common/Icons";
import CommonBtn from "@/app/components/common/CommonBtn";

import {
  Cars_for_Sell,
  Company_Cars_for_Sell,
} from "@/app/components/common/Helper";

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
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
  };
  return (
    <div className=" min-h-[calc(100vh-106px)] px-5 listing_detail_page">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 md:px-5">
          <div className="card_bg_gradient rounded-3xl card_shadow h-full p-6">
            <div className=" mb-6">
              <Slider {...settings}>
                {[1, 1, 1, 1].map((items, index) => (
                  <div key={index} className="relative">
                    <Image className="w-full" src={car_detail_img} alt="" />
                    <div className="flex flex-col gap-3 absolute top-5 start-5">
                      <span>
                        {" "}
                        <Like_icon />
                      </span>
                      <span>
                        <Location_icon />
                      </span>
                      <span>
                        <Share_icon />
                      </span>
                    </div>
                    <span className="absolute top-5 end-5">
                      <Image src={list_car_brand} alt="list_car_brand" />
                    </span>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex justify-between">
              <div className="font-[700] flex  ">
                <p className="text-[20px] text-[#F800C0]">Daily </p>
                <p className="text-[24px] text-white"> / AED 2500</p>
              </div>
              <div className="font-[700] flex  ">
                <p className="text-[20px] text-[#F800C0]">Weekly </p>
                <p className="text-[24px] text-white"> / AED 2500</p>
              </div>
              <div className="font-[700] flex  ">
                <p className="text-[20px] text-[#F800C0]">Monthly </p>
                <p className="text-[24px] text-white"> / AED 2500</p>
              </div>
            </div>

            <div className="bg-[#F800C0] h-[1px] my-5"></div>
            <p className=" font-[700] text-[20px] text-[#F800C0] mb-4">
              Description{" "}
            </p>
            <p className="text-[20px] font-[300] leading-[150%] text-white">
              {" "}
              Rent and Drive this Cadillac Escalade Platinum Sport 2023-model in
              Dubai, UAE for AED 950/day & AED 22000/month. Rental cost includes
              basic comprehensive insurance and standard mileage limit of 250
              km/day (AED 3 per additional km applicable). Security deposit of
              AED 2000 is required. Contact Speedy Machine Car Rental directly
              for bookings and inquiries...
            </p>
            <div className="bg-[#F800C0] h-[1px] my-5"></div>
            <p className=" font-[700] text-[20px] text-[#F800C0] mb-4">
              Overview{" "}
            </p>
            <div className="font-[300] leading-[150%] flex  ">
              <p className="text-[20px] text-[#F800C0]">Body Type </p>
              <p className="text-[20px] text-white"> / SUV</p>
            </div>
            <div className="font-[300] leading-[150%] flex  ">
              <p className="text-[20px] text-[#F800C0]">Salik/Toll Charges </p>
              <p className="text-[20px] text-white"> / AED 5</p>
            </div>
            <div className="font-[300] leading-[150%] flex  ">
              <p className="text-[20px] text-[#F800C0]">Model </p>
              <p className="text-[20px] text-white">
                {" "}
                / Escalade Platinum Sport
              </p>
            </div>
            <div className="font-[300] leading-[150%] flex  ">
              <p className="text-[20px] text-[#F800C0]">Seating Capacity </p>
              <p className="text-[20px] text-white"> / 7 Passengers</p>
            </div>
            <div className="font-[300] leading-[150%] flex  ">
              <p className="text-[20px] text-[#F800C0]">Fits No. of Bags </p>
              <p className="text-[20px] text-white"> / 3</p>
            </div>
            <div className="font-[300] leading-[150%] flex  ">
              <p className="text-[20px] text-[#F800C0]">
                Exterior / Interior Color{" "}
              </p>
              <p className="text-[20px] text-white"> / Black & Blue</p>
            </div>

            <div className="mt-11 mb-15">
              <CommonBtn btnName={"Enquiry Now"} />
              <span className="ms-10">
                <CommonBtn btnName={"Talk to Agent"} />
              </span>
            </div>
            <div className="bg-[#F800C0] h-[1px] my-5"></div>
            <div className="flex justify-between">
              <p className=" font-[700] text-[20px] text-[#F800C0] ">
                Write a Review{" "}
              </p>
              <p className="font-[700] text-[20px] text-white ">Read Reviews</p>
            </div>
            <div className="flex justify-between items-center mt-7">
              <div>
                {" "}
                <Image src={avtar_mini_img} alt="avtar_mini_img" />
              </div>
              <p className=" text-[24px] font-[700] leading-[150%] text-white">
                Simon Quitzon
              </p>
              <div className="flex gap-2">
                <Star_fill_icon />
                <Star_unfill_icon />
                <Star_unfill_icon />
                <Star_unfill_icon />
                <Star_unfill_icon />
              </div>
              <div>
                <button className="flex gap-7 border_linear_gradient px-5 py-4 custom_shadow cursor-pointer">
                  <span className="text-[20px] font-[700] leading-[150%] text-white">
                    Add some photos
                  </span>
                  <Upload_icon />
                </button>
              </div>
            </div>
            <div className="mt-8 mb-3 flex items-center gap-5 lg:gap-8">
              <input
                className="border_linear_gradient custom_shadow p-8 w-full "
                type="text"
                name=""
                placeholder="Type your review here..."
                id=""
              />
              <div className=" flex">
                <button className="whitespace-nowrap text-white px-7 rounded-full custom_shadow !py-7 red_bg_gradiant text-xl lg:text-2xl">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 md:px-5  mt-6 lg:mt-0 ">
          <div className="bg-[#0B0B40] rounded-2xl md:px-5 2xl:px-[28px] pb-7 pt-[23px] h-full">
            <div className="sm:flex items-center justify-between">
              <p className="font-normal 2xl:text-[24px] me-[10px] text-[18px] leading-[150%] text-white text-center sm:text-start">
                Similar Motors 3843
              </p>

              {/* <div className="sm:mt-0 mt-[20px] border-[1px] border-gradient-to-r from-[#7670FF] to-[#5B42FF] rounded-[90px] shadow-[0px_0px_8px_0px_#4B4CFF] flex justify-between me-[10px]">
                {["Featured", "Company", "Listing"].map((name) => (
                  <span key={name}>
                    <button
                      className={`font-normal 2xl:text-[20px] text-[16px] leading-[150%] text-white py-[9px] px-[15px] cursor-pointer rounded-[90px] hover:bg-gradient-to-r hover:from-[#7670FF] hover:to-[#5B42FF] hover:shadow-[0px_0px_8px_0px_#4B4CFF] ${
                        activeCategory === name
                          ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF]"
                          : ""
                      }`}
                      onClick={() => handleCategoryChange(name)}
                    >
                      {name}
                    </button>
                  </span>
                ))}
              </div> */}

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
                  <div key={index} className="w-full 2xl:w-1/2 px-4 mt-8">
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
  );
};

export default page;
