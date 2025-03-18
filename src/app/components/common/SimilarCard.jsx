import React from "react";

import list_car_brand from "../../../../public/images/png/list_car_brand.png";
import Image from "next/image";

const SimilarCard = ({ card }) => {
    return <>
        <div className="bg-[#010122] pb-5 rounded-[18px]">
            <div className="relative">
                {/* <Image
                    className=" h-[200px] w-full z-0 "
                    src={list_car}
                    alt="bgImg"
                /> */}
                <Image className=" h-[200px] w-full z-0 " src={card.car_img} alt="car img" />

                <div>
                    <Image
                        className="absolute bottom-0 h-[65px] z-0 "
                        src={list_car_brand}
                        alt="bgImg"
                    />
                </div>
            </div>
            <div className="px-5">

                <h3 className="text-white text-base lg:text-xl pt-3 pb-2">
                    {card.car_number}
                </h3>
                <h3 className="text-white text-[18px] lg:text-[18px]">

                    {card.text}
                </h3>

                <h3 className="text-white text-lg  lg:text-xl mt-[7px]">
                    {card.date}

                </h3>
                <button
                    style={{
                        background:
                            "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
                    }}
                    className="text-lg md:text-[24px] whitespace-nowrap px-5 w-full text-center xl:px-[9 0px] py-[10px] rounded-2xl text-white font-semibold mt-4"
                >
                    Chat with Us
                </button>
            </div>
        </div>
    </>;
};

export default SimilarCard;
