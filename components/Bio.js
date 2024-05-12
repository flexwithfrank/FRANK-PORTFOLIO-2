/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bio() {
  //   useEffect(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#bgRed",
  //         start: "bottom center",
  //         end: "+=500",
  //         scrub: 1
  //       }
  //     });
  //     const fo = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#grow",
  //         start: "center",
  //         end: "+=300",
  //         scrub: 1
  //       }
  //     });
  //     tl.to("#bgRed", {
  //       backgroundColor: "",
  //       duration: 1
  //     });
  //     fo.to("#whiteFont", {
  //       color: "#ff3c00",
  //       duration: 0.5
  //     });
  //   }, []);

  return (
    <div id="bgRed" class="bg-transparent">
      <div class="px-4">
        <blockquote class="mx-auto max-w-4xl">
          <p
            id="whiteFont"
            class="inter-medium text-xl tracking-tight text-black sm:text-2xl md:text-3xl md:leading-tight">
            Hey there! I'm a Salesforce Developer who loves crafting
            seamless digital experiences and creating content that
            converts like magic.
            <svg
              className="inline-flex w-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </p>
          {/* <div className="avatar h-20 w-20">
            <img
              className="transform rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
              src="https://ik.imagekit.io/is20rnl48/DSC_5283%20(1).jpg?updatedAt=1709309781808"
              alt="image description"
            />
          </div> */}
          <footer class="mt-4">
            <div class="mt-3 flex flex-wrap gap-2">
              <a
                href="mailto:vfrodriguez@pm.me"
                target="_blank"
                class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-xs text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-sm">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/victor-frank-rodriguez-5b4041212/"
                target="_blank"
                class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-xs text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-sm">
                LinkedIn
              </a>
              <a
                href="https://github.com/frankiecodeycode"
                target="_blank"
                class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-xs text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-sm">
                Github
              </a>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
