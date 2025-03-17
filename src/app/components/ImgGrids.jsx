import Image from "next/image";
import img4 from "../../../public/images/png/cars-1.png";
import img1 from "../../../public/images/png/cars-2.png";
import img2 from "../../../public/images/png/car3.png";
import img6 from "../../../public/images/png/car4.png";
import img5 from "../../../public/images/png/car5.png";
import img3 from "../../../public/images/png/rental-cars.png";
import img7 from "../../../public/images/png/ai-img.png";

export default function GridLayout() {
  return (
    <div className="grid-container">
      <div className="box box1 !h-[145px]">
        <Image className="w-full h-full" src={img1} alt="img-1" />
      </div>
      <div className="box box2 !h-[145px]">
        <Image className="w-full h-full" src={img2} alt="img-1" />
      </div>
      <div className="box box3 !h-[145px]">
        <Image className="w-full h-full" src={img3} alt="img-1" />
      </div>
      <div className="box box4 !h-[145px]">
        <Image className="w-full h-full" src={img4} alt="img-1" />
      </div>
      <div className="box box5 relative h-[300px]">
        <Image className="w-full absolute top-20" src={img7} alt="img-1" />
      </div>
      <div className="box box6 !h-[145px]">
        <Image className="w-full h-full" src={img6} alt="img-1" />
      </div>
      <div className="box box7 !h-[145px]">
        <Image className="w-full h-full" src={img5} alt="img-1" />
      </div>
      <div className="box box8 !h-[145px]">
        <Image className="w-full h-full" src={img1} alt="img-1" />
      </div>
    </div>
  );
}
