/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

"use client";
import React, { useEffect } from "react";
import LargeText from "./LargeText";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBannerV2() {
  useEffect(() => {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#heroGrow",
        scrub: 1,
        start: "top center",
        end: "+=900",
        ease: "power4.out"
      }
    });
    growTl.from("#grow", {
      duration: 1,
      scaleX: 1,
      scaleY: 1
    });
    growTl.to("#grow", {
      duration: 1,
      scaleX: 1.5, // Grow to 100% of the original width
      scaleY: 1.5 // Grow to 100% of the original height
    });
  }, []);

  return (
    <>
      <div class="relative overflow-hidden">
        <div className="relative z-0 pt-12" id="heroGrow">
          <LargeText
            h1="FRANK*RODRIGUEZ*DEVELOPER*DESIGNER*"
            h2="CODE*CREATE*BUILD*DELIGHT*"
            color="#ff3c00"
          />
        </div>
        <div class="mx-auto max-w-full px-4 pb-20 sm:p-12">
          <div class="relative mx-auto mt-6">
            <img
              id="grow"
              src="https://source.unsplash.com/random/1920x1080"
              alt="Img"
              className="w-full object-cover"
            />

            {/* 
            <div class="absolute inset-0 size-full">
              <div class="flex size-full flex-col items-center justify-center">
                <a
                  class="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                  href="#">
                  <svg
                    class="size-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play the overview
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
