import React from 'react'
import bgimg from "../../../../public/images/png/welcome-bg-img.png"
import brandImg from "../../../../public/images/png/brands.png"
import list_ai from "../../../../public/images/png/list_ai.png"
import list_car from "../../../../public/images/png/list_car.png"
import list_car_brand from "../../../../public/images/png/list_car_brand.png"
import list_car2 from "../../../../public/images/png/list_car2.png"

import lens from "../../../../public/images/png/google-lens.png";
import mike from "../../../../public/images/png/mike.png";
import sendIcon from "../../../../public/images/png/send-icon.png";
import Image from 'next/image'
import Footer from '@/app/components/common/Footer';

const page = () => {
  return (
    <div className=" min-h-[calc(100vh-106px)] bg_img_hero ">
      <Image
        className="absolute top-0 left-0 w-full min-h-[calc(100vh-106px)] z-0 "
        src={bgimg}
        alt="bgImg"
      />

      <div className="z-10 relative">
        <Image className=" w-full z-0 " src={brandImg} alt="bgImg" />
      </div>

      <div className="z-10 relative flex">
        <div className='w-[50%]'>
          <div>
            <Image className=" w-[460px] z-0" src={list_ai} alt="bgImg" />
          </div>
          <div>
            <h2 className="text-white text-[64px] font-medium">
              Hey, I'm Lina
            </h2>
            <h3 className="text-white text-[40px]">
              Your personal Ai motor Agent
            </h3>
          </div>
          <div className=" flex items-center custom_shadow header_border_gradient">
            <input
              className=" relative outline-0 z-10  text-white font-light text-2xl md:text-3xl lg:text-4xl xl:text-[40px]"
              type="text"
              placeholder="| Ask me anything about motors..."
            />
            <div className="flex items-center relative z-10 ">
           
              <Image className="h-[69px]" src={mike} alt="img" />
              <Image className=" h-[80px] w-[80px]" src={sendIcon} alt="img" />
            </div>
          </div>
        </div>

        <div className='flex flex-wrap w-[50%]'>

          <div>
            <div className="relative">
              <Image className=" h-[200px] z-0 " src={list_car} alt="bgImg" />

              <div>
                <Image
                  className="absolute bottom-0 h-[65px] z-0 "
                  src={list_car_brand}
                  alt="bgImg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-[18px]">
                Cadillac Escalade Premium Luxury
              </h3>
              <h3 className="text-white text-[20px]">
                2021 | 10,721 km | Left Hand
              </h3>
              <h3 className="text-white text-[24px]">Sell - AED 345,000</h3>
              <button
                style={{
                  background:
                    "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
                }}
                className="text-[24px] px-[90px] py-[10px] rounded-2xl text-white font-semibold"
              >
                Chat with Us
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <Image className=" h-[200px] z-0 " src={list_car2} alt="bgImg" />

              <div>
                <Image
                  className="absolute bottom-0 h-[65px] z-0 "
                  src={list_car_brand}
                  alt="bgImg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-[18px]">
                Cadillac Escalade Premium Luxury
              </h3>
              <h3 className="text-white text-[20px]">
                2021 | 10,721 km | Left Hand
              </h3>
              <h3 className="text-white text-[24px]">Sell - AED 345,000</h3>
              <button
                style={{
                  background:
                    "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
                }}
                className="text-[24px] px-[90px] py-[10px] rounded-2xl text-white font-semibold"
              >
                Chat with Us
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <Image className=" h-[200px] z-0 " src={list_car} alt="bgImg" />

              <div>
                <Image
                  className="absolute bottom-0 h-[65px] z-0 "
                  src={list_car_brand}
                  alt="bgImg"
                />
              </div>
            </div>


            <div>
              <h3 className="text-white text-[18px]">
                Cadillac Escalade Premium Luxury
              </h3>
              <h3 className="text-white text-[20px]">
                2021 | 10,721 km | Left Hand
              </h3>
              <h3 className="text-white text-[24px]">Sell - AED 345,000</h3>
              <button
                style={{
                  background:
                    "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
                }}
                className="text-[24px] px-[90px] py-[10px] rounded-2xl text-white font-semibold"
              >
                Chat with Us
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <Image className=" h-[200px] z-0 " src={list_car2} alt="bgImg" />

              <div>
                <Image
                  className="absolute bottom-0 h-[65px] z-0 "
                  src={list_car_brand}
                  alt="bgImg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-[18px]">
                Cadillac Escalade Premium Luxury
              </h3>
              <h3 className="text-white text-[20px]">
                2021 | 10,721 km | Left Hand
              </h3>
              <h3 className="text-white text-[24px]">Sell - AED 345,000</h3>
              <button
                style={{
                  background:
                    "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
                }}
                className="text-[24px] px-[90px] py-[10px] rounded-2xl text-white font-semibold"
              >
                Chat with Us
              </button>
            </div>
          </div>


        </div>
      </div>

      <div className="relative z-10 px-5">
        <Footer />
      </div>
    </div>
  );
}

export default page