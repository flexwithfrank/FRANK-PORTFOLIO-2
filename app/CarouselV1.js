/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import ButtonGroup from "@/components/ButtonGroup";

export default function CarouselV1() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
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
      <div className="glide-05 relative w-full pb-28">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="relative">
              <img
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/ai4/10p/jv9/Group%2028%20%281%29.png"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/m4g/uq9/9pp/Group%2026%20%281%29.png"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/08n/nsp/6ax/Group%2025%20%282%29%20%281%29.png"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/6qr/dp4/cte/Group%2027%20%281%29.png"
                className="m-auto max-h-full w-full max-w-full"
              />
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
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4">
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators outside --> */}
    </>
  );
}
