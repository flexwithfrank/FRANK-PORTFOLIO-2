import Link from "next/link";
import React from "react";

export default function ButtonV1({
  buttonText,
  href,
  bgColor,
  color,
  borderColor
}) {
  return (
    <>
      <Link
        href={href}
        style={{
          background: bgColor,
          color: color,
          borderColor: borderColor
        }}
        className="centima align-center text-md relative inline-flex items-center gap-3 border-2 border-black bg-black p-3 font-extrabold uppercase leading-tight text-white hover:bg-transparent hover:text-black focus:outline-none focus:outline-0 focus:ring-0 focus:ring-black">
        {buttonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ms-2 h-5 w-5 rtl:rotate-180">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
    </>
  );
}
