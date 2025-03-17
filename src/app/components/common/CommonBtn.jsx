import Link from "next/link";
import React from "react";

const CommonBtn = ({ btnName, btnStyling }) => {
  return (
    <>
      <Link
        href={"/"}
        className={`common_btn px-7 py-4 rounded-full text-white ${btnStyling}`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default CommonBtn;
