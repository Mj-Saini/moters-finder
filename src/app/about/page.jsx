import React from "react";
import ReadyToMove from "../components/ReadyToMove";

const page = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-cover bg-center">
        <div className="max-w-[1815px] px-5 lg:px-10 mx-auto relative z-50">
          <h2 className=" font-normal text-xl sm:text-xl md:text-2xl lg:text-[47px] text-white ">
            Abut Motors Finder Ai
          </h2>
          <div className=" inline-block md:w-[213px]">
            <h2 className="lg:pt-[24px] pt-5 font-normal text-base sm:text-lg md:text-xl lg:text-[32px] text-white">
              About
            </h2>
            <div className="h-[3px] w-full rounded-[90px]  shadow-[0px_0px_8px_0px_#4B4CFF] bg-[#5B42FF] mt-3 lg:mt-[16px]"></div>
          </div>
          <p className=" font-light text-sm sm:text-base md:text-lg text-white pt-5 lg:pt-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus,
            quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec
            nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit
            est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit
            amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id
            ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt
            id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris
            egestas vulputate ante sed imperdiet. In placerat euismod justo.
          </p>
          <p className=" font-light text-sm sm:text-base md:text-lg text-white pt-5 lg:pt-[35px]">
            Aenean id dolor semper velit aliquam fermentum at id ex. Mauris
            placerat felis turpis, sit amet ornare sapien dignissim ut. Etiam ac
            est orci. Mauris ultricies, massa ac blandit scelerisque, odio diam
            ornare leo, ac lobortis nisl sapien sit amet erat. Fusce elementum
            lacinia velit eu fringilla. Suspendisse eu lobortis odio. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <ReadyToMove />
        </div>
      </div>
    </div>
  );
};
export default page;
