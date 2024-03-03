/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function WhatWeDo() {
  return (
    <>
      <div className="lg:pb-140 mx-auto max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 items-center gap-2 sm:gap-6 lg:-translate-x-10">
              <div className="col-span-4">
                <img
                  className="rounded-xl"
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/w5d/r7l/vw8/Group%2034%20%281%29.png"
                  alt="Image Description"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/j9u/rcd/42s/Group%2030%20%282%29%20%281%29.png"
                  alt="Image Description"
                />
              </div>
              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/tbm/kfy/px3/Group%2032%20%281%29.png"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="centima text-3xl font-bold uppercase text-[#ff3c00] dark:text-gray-200 lg:text-4xl">
                  WHAT I DO
                </h2>
                <p className="dm-sans-med text-[#ff3c00]">
                  Think of me as your creative genie, bringing your
                  ideas to life in the most captivating, seamless, and
                  fun ways possible. We will make magic happen.
                </p>
              </div>
              <ul
                role="list"
                className="dm-sans-bold space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-gray-50 text-[#ff3c00] dark:bg-gray-800/30 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ff3c00] sm:text-base">
                    <span className="font-bold">Web Design</span> –
                    <span className="dm-sans-med"> Development</span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-gray-50 text-[#ff3c00] dark:bg-gray-800/30 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ff3c00] sm:text-base">
                    <span className="font-bold">
                      Email Development
                    </span>{" "}
                    – <span className="dm-sans-med">Marketing</span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-gray-50 text-[#ff3c00] dark:bg-gray-800/30 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ff3c00] sm:text-base">
                    <span className="font-bold">
                      Growth Marketing
                    </span>{" "}
                    – <span className="dm-sans-med">Generation</span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-gray-50 text-[#ff3c00] dark:bg-gray-800/30 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ff3c00] sm:text-base">
                    <span className="font-bold">
                      Interactive Experiences –{" "}
                      <span className="dm-sans-med">Web</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
