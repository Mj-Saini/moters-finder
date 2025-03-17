"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import img4 from "../../../public/images/png/cars-1.png";
import img1 from "../../../public/images/png/cars-2.png";
import img2 from "../../../public/images/png/car3.png";
import img6 from "../../../public/images/png/car4.png";
import img5 from "../../../public/images/png/car5.png";
import img3 from "../../../public/images/png/rental-cars.png";
import img7 from "../../../public/images/png/ai-img.png";

const ImgGrids = () => {
  useEffect(() => {
    const images = gsap.utils.toArray(".box:not(.box5)");

    gsap.set(images, {
      position: "absolute ",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    const tl = gsap.timeline();
    tl.to(images, {
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      top: "0%",
      left: "0%",
      position: "relative",
      duration: 0.8,
      stagger: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="grid-container relative min-h-[500px]">
      <div className="box box1 lg:!h-[145px]">
        <Image className="w-full xl:h-full" src={img1} alt="img-1" />
      </div>
      <div className="box box2 lg:!h-[145px] ">
        <Image className="w-full xl:h-full" src={img2} alt="img-2" />
      </div>
      <div className="box box3 lg:!h-[145px] ">
        <Image className="w-full xl:h-full" src={img3} alt="img-3" />
      </div>
      <div className="box box4 lg:!h-[145px]">
        <Image className="w-full xl:h-full" src={img4} alt="img-4" />
      </div>
      <div className="box box5 relative lg:h-[300px] hidden sm:block z-10">
        <Image
          className="w-full lg:absolute sm:top-20"
          src={img7}
          alt="img-5"
        />
      </div>
      <div className="box box6 lg:!h-[145px]">
        <Image className="w-full xl:h-full" src={img6} alt="img-6" />
      </div>
      <div className="box box7 lg:!h-[145px] max-sm:mt-[50px]">
        <Image className="w-full xl:h-full" src={img5} alt="img-7" />
      </div>
      <div className="box box8 lg:!h-[145px] max-sm:mt-[50px]">
        <Image className="w-full xl:h-full" src={img1} alt="img-8" />
      </div>
    </div>
  );
};
export default ImgGrids;






