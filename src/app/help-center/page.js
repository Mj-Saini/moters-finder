"use client";
import { useState } from "react";
import carimg from "../../../public/images/png/carimg.png";
import Image from "next/image";
import { faqs } from "../components/common/Helper";
import { Email, Form, Profile, Wtuspp } from "../components/common/Icons";
import ReadyToMove from "../components/ReadyToMove";

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="px-[20px] md:px-[60px] pt-[88px]">
        <section className="">
          <h2 className="text-white font-normal text-[30px] lg:text-[47px] ff_gothamBold">
            Help Center
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mt-[46px]">
            <div className="  flex justify-center p-[2px] rounded-[21px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF]">
              <div className="flex flex-col sm:flex-row rounded-[21px]   items-center p-8 bg-gradient-to-r from-[#141546] to-[#110f48]  text-white w-full custom-shadow">
                <div className="border_gradient p-[20px] rounded-full  text-white">
                  <Email />
                </div>
                <div className="px-[20px] sm:px-[32px] mt-4 sm:mt-0">
                  <p className="font-light text-center sm:text-start text-lg sm:text-2xl ff_gothamMedium">
                    Email Support
                  </p>
                  <p className="font-light text-center text-2xl sm:text-[20px] sm:text-start xl:text-[32px] ff_gothamBold">
                    arihant@zmediostech.com
                  </p>
                </div>
              </div>
            </div>

            <div className="  flex justify-center p-[2px] rounded-[21px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] ">
              <div className="flex flex-col sm:flex-row  items-center p-8  rounded-[21px]  text-white w-full  bg-gradient-to-r from-[#141546] to-[#110f48]">
                <div className="border_gradient p-[20px] rounded-full  text-white">
                  <Wtuspp />
                </div>
                <div className="px-[20px] sm:px-[32px] mt-4 sm:mt-0">
                  <p className="font-light text-center sm:text-start text-lg sm:text-2xl ff_gothamMedium">
                    WhatsApp Support
                  </p>
                  <p className="font-light text-2xl text-center sm:text-[20px] sm:text-start xl:text-[32px] ff_gothamBold">
                    +91 8561073404
                  </p>
                </div>
              </div>
            </div>

            <div className="  flex justify-center p-[2px] rounded-[21px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF]">
              <div className="flex flex-col sm:flex-row  items-center p-8  rounded-[21px]  text-white w-full  bg-gradient-to-r from-[#141546] to-[#110f48]">
                <div className="border_gradient rounded-full p-[20px] text-white">
                  <Profile />
                </div>
                <div className="px-[20px] sm:px-[32px] mt-4 sm:mt-0">
                  <p className="font-light text-center sm:text-start text-lg sm:text-2xl ff_gothamMedium">
                    Help us make your experience better.
                  </p>
                  <p className="font-light text-2xl text-center sm:text-[20px] sm:text-start xl:text-[32px] ff_gothamBold">
                    Leave Feedback
                  </p>
                </div>
              </div>
            </div>

            <div className="  flex justify-center p-[2px] rounded-[21px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF]">
              <div className="flex flex-col sm:flex-row  items-center p-8  rounded-[21px]  text-white w-full  bg-gradient-to-r from-[#141546] to-[#110f48]">
                <div className="border_gradient rounded-full p-[20px] text-white">
                  <Form />
                </div>
                <div className="px-[20px] sm:px-[32px] mt-4 sm:mt-0">
                  <p className="font-light text-center sm:text-start text-lg sm:text-2xl ff_gothamMedium">
                    Fill a Form
                  </p>
                  <p className="font-light text-2xl text-center sm:text-[20px] sm:text-start xl:text-[32px] ff_gothamBold">
                    Get Quick Solution
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#F800C0] mt-[40px] md:mt-[97px]"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-14 mt-[30px] md:mt-12 px-4 md:px-8 lg:px-0">
            {[
              { title: "How to Buy", img: carimg },
              { title: "How to Sell", img: carimg },
              { title: "How to Rent", img: carimg },
            ].map((item, index) => (
              <div key={index} className="">
                <h2 className="text-white font-normal text-4xl xl:text-[47px]">
                  {item.title}
                </h2>
                <div className="mt-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#F800C0] mt-[40px] md:mt-[97px]"></div>

          <div className="pt-[30px] md:pt-[74px]">
            <div className=" text-white">
              <div className="w-full ">
                {/* Header Section */}
                <div className="flex justify-between items-center pb-6">
                  <h2 className="text-[30px] lg:text-[47px] font-normal ff_gothamBold">
                    FAQ
                  </h2>
                  <div className="flex">
                    <h2 className="text-[25px] md:text-[32px] font-normal cursor-pointer hover:text-[#F800C0] transition">
                      Buy
                    </h2>
                    <h2 className="text-[25px] md:text-[32px] font-normal ml-8 cursor-pointer hover:text-[#F800C0] transition">
                      Sell
                    </h2>
                    <h2 className="text-[25px] md:text-[32px] font-normal ml-8 cursor-pointer hover:text-[#F800C0] transition">
                      Rent
                    </h2>
                  </div>
                </div>

                {/* Accordion Section */}
                <div className="space-y-3 pb-5">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-[2px] rounded-[21px] bg-gradient-to-r from-[#7670FF] to-[#5B42FF]"
                    >
                      <div className="rounded-[21px]">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className={`w-full flex justify-between items-center p-5 
            ${
              openIndex === index
                ? "bg-[#14173F] text-white rounded-t-[21px] rounded-b-none"
                : "bg-[#1B1E3F] text-gray-300 rounded-[21px]"
            }
          `}
                        >
                          <span className="text-[20px] text-start ff_gothamBold">
                            {faq.question}
                          </span>
                          <span className="text-2xl font-bold">
                            {openIndex === index ? "−" : "+"}
                          </span>
                        </button>
                        {openIndex === index && (
                          <div className="bg-[#14173F] text-gray-400 font-bold p-5 rounded-b-[21px] mt-[-15px] ff_gothamBold">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ReadyToMove />
      </main>
    </>
  );
};

export default Page;
