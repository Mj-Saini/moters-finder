"use client"
import React from "react";
import car_detail_img from "../../../../../public/images/png/car_detail_img.png";
import list_car_brand from "../../../../../public/images/png/list_car_brand.png";
import avtar_mini_img from "../../../../../public/images/png/avtar_mini_img.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Like_icon, Location_icon, Share_icon, Star_fill_icon, Star_unfill_icon, Upload_icon } from "@/app/components/common/Icons";
import CommonBtn from "@/app/components/common/CommonBtn";

const page = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    arrows: false
  };
  return <div className=" min-h-[calc(100vh-106px)] px-5 listing_detail_page">
    <div className="flex flex-wrap">
      <div className="card_bg_gradient  w-1/2 p-6  rounded-3xl card_shadow"  >
        <div className=" mb-6">
          <Slider {...settings}>
            {[1, 1, 1, 1].map((items, index) => (
              <div key={index} className="relative">
                <Image className="w-full" src={car_detail_img} alt="" />
                <div className="flex flex-col gap-3 absolute top-5 start-5">
                  <span> <Like_icon /></span>
                  <span><Location_icon /></span>
                  <span><Share_icon /></span>
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

        <div className="bg-[#F800C0] h-[1px] my-5">

        </div>
        <p className=" font-[700] text-[20px] text-[#F800C0] mb-4">Description </p>
        <p className="text-[20px] font-[300] leading-[150%] text-white"> Rent and Drive this Cadillac Escalade Platinum Sport 2023-model in Dubai, UAE  for AED 950/day & AED 22000/month. Rental cost includes basic comprehensive insurance and standard mileage limit of 250 km/day (AED 3 per additional km applicable). Security deposit of AED 2000 is required. Contact Speedy Machine Car Rental directly for bookings and inquiries...</p>
        <div className="bg-[#F800C0] h-[1px] my-5">
        </div>
        <p className=" font-[700] text-[20px] text-[#F800C0] mb-4">Overview </p>
        <div className="font-[300] leading-[150%] flex  ">
          <p className="text-[20px] text-[#F800C0]">Body Type </p>
          <p className="text-[20px] text-white"> / SUV</p>
        </div>
        <div className="font-[300] leading-[150%] flex  ">
          <p className="text-[20px] text-[#F800C0]">Salik/Toll Charges  </p>
          <p className="text-[20px] text-white"> / AED 5</p>
        </div>
        <div className="font-[300] leading-[150%] flex  ">
          <p className="text-[20px] text-[#F800C0]">Model </p>
          <p className="text-[20px] text-white"> / Escalade Platinum Sport</p>
        </div>
        <div className="font-[300] leading-[150%] flex  ">
          <p className="text-[20px] text-[#F800C0]">Seating Capacity </p>
          <p className="text-[20px] text-white"> / 7 Passengers</p>
        </div>
        <div className="font-[300] leading-[150%] flex  ">
          <p className="text-[20px] text-[#F800C0]">Fits No. of Bags </p>
          <p className="text-[20px] text-white"> /  3</p>
        </div>
        <div className="font-[300] leading-[150%] flex  ">
          <p className="text-[20px] text-[#F800C0]">Exterior / Interior Color </p>
          <p className="text-[20px] text-white"> /  Black & Blue</p>
        </div>

        <div className="mt-11 mb-15">
          <CommonBtn btnName={"Enquiry Now"} />
          <span className="ms-10"><CommonBtn btnName={"Talk to Agent"} /></span>
        </div>
        <div className="bg-[#F800C0] h-[1px] my-5">
        </div>
        <div className="flex justify-between">
          <p className=" font-[700] text-[20px] text-[#F800C0] ">Write a Review </p>
          <p className="font-[700] text-[20px] text-white ">Read Reviews</p>
        </div>
        <div className="flex justify-between items-center">
          <div> <Image src={avtar_mini_img} alt="avtar_mini_img" /></div>
          <p className=" text-[24px] font-[700] leading-[150%] text-white">Simon Quitzon</p>
          <div className="flex gap-2">
            <Star_fill_icon />
            <Star_unfill_icon />
            <Star_unfill_icon />
            <Star_unfill_icon />
            <Star_unfill_icon />
          </div>
          <div>
            <button className="flex gap-7 border_linear_gradient px-5 py-4 custom_shadow cursor-pointer">
              <span className="text-[20px] font-[700] leading-[150%] text-white">Add some photos</span>
              <Upload_icon />

            </button>

          </div>
        </div>
        <div className="mt-8 mb-3">
          <input className="border_linear_gradient custom_shadow p-8" type="text" name="" placeholder="Type your review here..." id="" />
          <CommonBtn btnName={"Submit Review"} btnStyling={""} />
        </div>
      </div>

    </div>

  </div>;
};

export default page;
