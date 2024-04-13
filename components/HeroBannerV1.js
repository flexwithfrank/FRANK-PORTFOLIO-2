/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import ButtonV1 from "@/components/ButtonV1";
import { Parallax, Background } from "react-parallax";
import LargeText from "./LargeText";

const styles = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
};

export default function HeroBannerV1() {
  // useEffect(() => {
  //   const image = document.getElementById("myImage");
  //   const startSize = 48;
  //   const startScroll = 0;

  //   window.addEventListener("scroll", () => {
  //     const scrollPosition = Math.max(
  //       0,
  //       (window.scrollY - startScroll) / window.innerHeight
  //     );
  //     image.style.width = `${Math.max(startSize, startSize + scrollPosition * 100)}vw`;
  //   });
  // }, []);

  return (
    <div className="relative mx-auto mt-8 px-0 pb-28 lg:px-0">
      <div className="relative">
        <div className="absolute right-0 top-0 hidden lg:block lg:w-[40rem]">
          <img
            className="transform rounded shadow-2xl transition-transform duration-500 ease-in-out"
            id="myImage"
            src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/9p7/ac1/osj/Group%2030%20%281%29.png"
            alt="image description"
          />
        </div>

        <div className="mx-auto px-6 pt-6 lg:px-12">
          <img
            className="z-50 h-32 w-32 transform rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
            src="https://ik.imagekit.io/is20rnl48/DSC_5283%20(1).jpg?updatedAt=1709309781808"
            alt="image description"
          />
        </div>

        <div className="relative z-50 mx-auto px-6 lg:px-12">
          <p className="inter-medium mt-4 max-w-3xl text-xl text-[#ff3c00] lg:text-2xl">
            Welcome to my digital frontier! As a passionate web and
            email developer specializing in Salesforce, I thrive on transforming concepts into
            captivating online experiences. With a sharp eye for detail
            and a commitment to seamless functionality, I am dedicated
            to building delightful digital solutions.
          </p>

          <div className="py-12">
            <ButtonV1
              href="#projects"
              text="GET IN TOUCH"
              color="text-white"
              buttonText="View Projects"
              className="py-12"
            />
          </div>
        </div>

        <div className="relative z-0">
          <LargeText
            h1="CODE*CREATE*BUILD*DELIGHT*"
            h2="CODE*CREATE*BUILD*DELIGHT*"
            color="#ff3c00"
          />
        </div>
      </div>
    </div>
  );
}
