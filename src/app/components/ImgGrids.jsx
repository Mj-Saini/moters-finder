



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

  export default function GridLayout() {
    const gridRef = useRef(null);

    useEffect(() => {
      const images = gsap.utils.toArray(".box");
      gsap.set(images, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline();

      tl.to(images[0], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
      });

      tl.to(
        images.slice(1),
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.5, 
          ease: "power2.out",
        },
        "-=0.3" 
      );
    }, []);

    return (
      <div ref={gridRef} className="grid-container relative min-h-[500px]">
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
        <div className="box box5 relative lg:h-[300px] hidden sm:block">
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
  }
