import React from "react";
import CommonBtn from "./common/CommonBtn";
import appstore from "../../../public/images/svg/apple-store.svg";
import googleplay from "../../../public/images/svg/play-store.svg";
import appgally from "../../../public/images/svg/app-gallary.svg";
import carimg from "../../../public/images/png/ready-to-move.png";
import Image from "next/image";

const ReadyToMove = () => {
  return (
    <>
      <div className=" relative pt-[35px]">
        <Image
          className=" w-full h-[250px] rounded-2xl lg:rounded-4xl object-cover lg:h-full"
          src={carimg}
          alt="ready to move img"
        />
        <div className="absolute bottom-11 left-[68px]">
          <CommonBtn btnName={" Enquiry Now"} />
        </div>
      </div>
      <div className="flex gap-5 lg:gap-10 justify-center mt-16 pb-12 flex-wrap">
        <Image
          src={appstore}
          alt="App Store"
          className="w-full max-w-[200px]"
        />

        <Image
          src={googleplay}
          alt="Google Play"
          className="w-full max-w-[200px] mt-3 md:mt-0"
        />

        <Image
          src={appgally}
          alt="App Gallery"
          className="w-full max-w-[200px]"
        />
      </div>
    </>
  );
};

export default ReadyToMove;
