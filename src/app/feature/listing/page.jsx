import React from "react";
import bgimg from "../../../../public/images/png/welcome-bg-img.png";
import brandImg from "../../../../public/images/png/brands.png";
import list_ai from "../../../../public/images/png/list_ai.png";
import list_car from "../../../../public/images/png/list_car.png";
import list_car_brand from "../../../../public/images/png/list_car_brand.png";
import list_car2 from "../../../../public/images/png/list_car2.png";

import lens from "../../../../public/images/png/google-lens.png";
import mike from "../../../../public/images/png/mike.png";
import sendIcon from "../../../../public/images/png/send-icon.png";
import Image from "next/image";
import Footer from "@/app/components/common/Footer";

const page = () => {
  return (
    <div className=" min-h-[calc(100vh-106px)] bg_img_hero">
      <Image
        className="absolute top-0 left-0 w-full min-h-[calc(100vh-106px)] z-0 "
        src={bgimg}
        alt="bgImg"
      />

      <div className="z-10 relative">
        <Image className=" w-full z-0 " src={brandImg} alt="bgImg" />
      </div>

      <div className="z-10 relative flex flex-wrap justify-center mt-[51px] px-5 lg:px-10">
        <div className="w-full xl:w-5/12 md:px-3">
          <div className="flex flex-col items-center">
            <Image className=" w-[460px] z-0" src={list_ai} alt="bgImg" />

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[64px] ff_gothamMedium font-medium mt-10">
              Hey, I'm Lina
            </h2>
            <h3 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-[40px] text-center">
              Your personal Ai motor Agent
            </h3>
            <div className=" flex items-center custom_shadow header_border_gradient mt-16 px-5">
              <input
                className=" relative outline-0 z-10  text-white font-light text-base lg:text-2xl sm:ms-4"
                type="text"
                placeholder="| Ask me anything about motors..."
              />
              <div className="flex items-center relative z-10 ">
                <Image
                  className="h-9 md:h-[69px] w-9 md:w-[70px]"
                  src={mike}
                  alt="img"
                />
                <Image
                  className="h-10 md:h-[70px] w-10 md:w-[70px]"
                  src={sendIcon}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-7/12 md:px-3">
          <div className="flex flex-wrap bg-[#0B0B40] rounded-2xl md:px-5 2xl:px-9">
            {[1, 1, 1, 1].map((items, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mt-8">
                <div className="bg-[#010122] pb-5 rounded-[18px]">
                  <div className="relative">
                    <Image
                      className=" h-[200px] w-full z-0 "
                      src={list_car}
                      alt="bgImg"
                    />

                    <div>
                      <Image
                        className="absolute bottom-0 h-[65px] z-0 "
                        src={list_car_brand}
                        alt="bgImg"
                      />
                    </div>
                  </div>
                  <div className="px-5">
                    <h3 className="text-white text-[18px] lg:text-xl">
                      Cadillac Escalade Premium Luxury
                    </h3>
                    <h3 className="text-white text-base lg:text-xl pt-3 pb-2">
                      Sell - AED 345,000
                    </h3>
                    <h3 className="text-white text-lg  lg:text-xl">
                      2021 | 10,721 km | Left Hand
                    </h3>
                    <button
                      style={{
                        background:
                          "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
                      }}
                      className="text-lg md:text-[24px] px-5 w-full text-center lg:px-[90px] py-[10px] rounded-2xl text-white font-semibold mt-4"
                    >
                      Chat with Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
