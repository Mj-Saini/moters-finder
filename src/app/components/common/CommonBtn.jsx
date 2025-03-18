import Link from "next/link";
import React from "react";

const CommonBtn = ({ btnName, btnStyling }) => {
  return (
    <>
      <Link
        href={"/"}
        className={`custom_shadow   px-7 py-4 rounded-full text-white inline-block ${btnStyling}`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default CommonBtn;
