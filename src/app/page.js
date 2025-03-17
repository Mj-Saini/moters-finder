import Image from "next/image";
import ImgGrids from "./components/ImgGrids";
import bgImg from "../../public/images/png/welcome-bg-img.png";
import lens from "../../public/images/png/google-lens.png";
import mike from "../../public/images/png/mike.png";
import sendIcon from "../../public/images/png/send-icon.png";
import ball from "../../public/images/png/Group 1000009390.png";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-106px)] bg_img_hero ">
        <Image
          className="absolute top-0 left-0 w-full min-h-[calc(100vh-106px)] z-0 "
          src={bgImg}
          alt="bgImg"
        />
        <div className="relative z-10 px-5">
          <ImgGrids />
        </div>
        <div className="z-10 relative px-5">
          <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-[#7670FF] text-center ff_gothamMedium pt-8">
            Find Your Motor with AI-Powered Agent
          </h2>
          <div className="my-9 flex items-center w-full custom_shadow header_border_gradient max-w-[1460px] mx-auto">
            <input
              className="w-[75%] relative z-10  md:ms-6 p-3 md:p-5 text-white font-light text-xl md:text-3xl lg:text-4xl xl:text-[40px] outline-none"
              type="text"
              placeholder="| Ask me anything about motors..."
            />
            <div className="flex gap-2 md:gap-3.5 items-center relative z-10 p-3 md:p-5">
              <Image
                className="w-10 xl:w-[85px] h-10 xl:h-[85px] cursor-pointer hidden md:block"
                src={lens}
                alt="img"
              />
              <Image
                className="w-10 xl:w-20 h-10 xl:h-20 cursor-pointer hidden md:block"
                src={mike}
                alt="img"
              />
              <Image
                className="w-12 xl:w-[115px] h-12 xl:h-[115px] lg:ms-7 cursor-pointer"
                src={sendIcon}
                alt="img"
              />
            </div>
          </div>
          <h2 className="flex justify-center items-center text-[#F800C0] text-lg lg:text-xl gap-2.5">
            {" "}
            <Image src={ball} alt="img" /> Register with Motors
          </h2>
        </div>
        <div className="relative z-10 px-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
