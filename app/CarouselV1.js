/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";

export default function CarouselV1() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 2.5,
      autoplay: 2200,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700"
        }
      },
      breakpoints: {
        1024: {
          perView: 2
        },
        640: {
          perView: 1
        }
      }
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with indicators outside --> */}
      <div className="glide-05 relative w-full pb-28" id="projects">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="relative">
              <div className="absolute bottom-0 left-0 mx-5 my-3">
                <p class="centima max-w-sm text-left text-sm font-extrabold uppercase text-white">
                  VEHICLE CONFIGURATOR
                </p>
              </div>
              <Link
                href="/configurator"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/ts4/np6/8fy/Group%2025%20%284%29.png"
                  className="m-auto max-h-full w-full max-w-full"
                  alt="vehicle-configurator"
                />
                <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
                  <img
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/af5/z8b/6a3/Untitled%20design%20%282%29_1.gif" // Replace
                    alt="Description"
                    className="object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 mx-5 my-3 rounded-full bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li className="relative">
              <div className="absolute bottom-0 left-0 mx-5 my-3">
                <p class="centima max-w-sm text-left text-sm font-extrabold uppercase text-white">
                  PRODUCT DETAILS
                </p>
              </div>
              <a
                href="https://mczvd2z6j1-c05qk6ttb60b92894.pub.sfmc-content.com/43r4cjua2xg"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/etj/6a4/x0h/Screenshot%202024-03-02%20at%2012.29%201.png"
                  className="m-auto max-h-full w-full max-w-full"
                  alt="vdp-page"
                />
                <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
                  <img
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/96c/xfc/ng5/Untitled%20design%20%285%29%20%281%29.png" // Replace
                    alt="Description"
                    className="h-full py-10 lg:h-3/4"
                  />
                </div>
                <span className="absolute bottom-0 right-0 mx-5 my-3 rounded-full bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="relative">
              <div className="absolute bottom-0 left-0 mx-5 my-3">
                <p class="centima max-w-sm text-left text-sm font-extrabold uppercase text-white">
                  PRODUCT COMPARISON
                </p>
              </div>
              <a
                href="https://mczvd2z6j1-c05qk6ttb60b92894.pub.sfmc-content.com/m4b5yovrlom"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/r0r/k02/zl8/Group%2026%20%283%29.png"
                  className="m-auto max-h-full w-full max-w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
                  <img
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/jxu/vfo/dgr/vid.gif" // Replace
                    alt="Description"
                    className="object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 mx-5 my-3 rounded-full bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="relative">
              <div className="absolute bottom-0 left-0 mx-5 my-3">
                <p class="centima max-w-sm text-left text-sm font-extrabold uppercase text-black">
                  REWARDS PROGRAM
                </p>
              </div>
              <a
                href="https://mczvd2z6j1-c05qk6ttb60b92894.pub.sfmc-content.com/xzfnih1dfmy?qs=121b46067820d2cd95ca9230b009274ab8626c237e1cf7bdc2c3c49d6ed49ba5a62e1fe21f7b5e7884bd8e99b9bd01cd717b907ae99599b34b12f51c35ded00dd90aa030277b953b50efd8ebfb926eda9734e08a92adfddabc7a93ec124c4a25f464fe4824a0051752be440ca08e7cb23a3dd7644c21df43e8af58425f84cb9100bb17922af951e9afc5385cb477890601be1ba3ea273f85"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/q40/mny/ae3/Group%2028%20%283%29.png"
                  alt="rewards"
                  className="m-auto max-h-full w-full max-w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
                  <img
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/144/oku/c1h/vid%20%281%29.gif" // Replace
                    alt="Description"
                    className="object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 mx-5 my-3 rounded-full bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="relative">
              <div className="absolute bottom-0 left-0 mx-5 my-3">
                <p class="centima max-w-sm text-left text-sm font-extrabold uppercase text-white">
                  COMMERCE PLATFORM
                </p>
              </div>
              <a
                href="https://www.studio3fit.com/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/plu/iwo/ony/Group%2027%20%283%29.png"
                  alt="rewards"
                  className="m-auto max-h-full w-full max-w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
                  <img
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/r2c/e7p/y9o/vid%20%282%29.gif" // Replace
                    alt="Description"
                    className="object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 mx-5 my-3 rounded-full bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]">
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none active:bg-black"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none active:bg-black"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none active:bg-black"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none active:bg-black"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=4"
            aria-label="goto slide 5">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none active:bg-black"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators outside --> */}
    </>
  );
}
