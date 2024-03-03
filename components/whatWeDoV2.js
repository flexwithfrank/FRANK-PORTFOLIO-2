/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

export default function WhatWeDoV2() {
  return (
    <>
      <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-xl flex-col pb-12 text-left lg:text-center">
          <h2 className="centima text-3xl font-extrabold uppercase text-[#ff3c00] dark:text-gray-200 lg:text-4xl ">
            WHAT I DO
          </h2>
          <p className="dm-sans-med text-[#ff3c00]">
            Consider me a growth-generation guru, lead-generation
            wizard, and web/email dev expert!
          </p>
        </div>
        <nav
          class="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0"
          aria-label="Tabs"
          role="tablist">
          <button
            type="button"
            class="active flex w-full flex-col rounded-xl p-3 text-start transition-all duration-300 ease-in-out hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05] md:p-5"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 flex-shrink-0 text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-white dark:hs-tab-active:text-blue-500 sm:block">
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                clipRule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>

            <span class="mt-5">
              <span class="centima block font-extrabold uppercase text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-gray-200 dark:hs-tab-active:text-blue-500">
                Growth Generation
              </span>
              <span class="dm-sans-med mt-2 hidden text-sm text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-gray-200 lg:block">
                I craft strategies that drive organic growth, boost
                brand visibility, and maximize ROI.
              </span>
            </span>
          </button>

          <button
            type="button"
            class="flex w-full flex-col rounded-xl p-3 text-start transition-all duration-300 ease-in-out hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05] md:p-5"
            id="tabs-with-card-item-2"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 flex-shrink-0 text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-white dark:hs-tab-active:text-blue-500 sm:block">
              <path
                fillRule="evenodd"
                d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>

            <span class="mt-5">
              <span class="centima block font-extrabold uppercase text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-gray-200 dark:hs-tab-active:text-blue-500">
                Web & Email Development
              </span>
              <span class="dm-sans-med mt-2 hidden text-sm text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-gray-200 lg:block">
                With my expertise, your digital platforms will be
                dynamic, user-friendly, and visually stunning.
              </span>
            </span>
          </button>

          <button
            type="button"
            class="flex w-full flex-col rounded-xl p-3 text-start transition-all duration-300 ease-in-out hover:bg-gray-100 hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-white/[.05] md:p-5"
            id="tabs-with-card-item-3"
            data-hs-tab="#tabs-with-card-3"
            aria-controls="tabs-with-card-3"
            role="tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 flex-shrink-0 text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-white dark:hs-tab-active:text-blue-500 sm:block">
              <path
                fillRule="evenodd"
                d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>

            <span class="mt-5">
              <span class="centima block font-extrabold uppercase text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-gray-200 dark:hs-tab-active:text-blue-500">
                Interactive Content
              </span>
              <span class="dm-sans-med mt-2 hidden text-sm text-gray-800 hs-tab-active:text-[#ff3c00] dark:text-gray-200 lg:block">
                I create engaging, immersive content that captivates
                and educates, leaving a lasting impression on your
                visitors.
              </span>
            </span>
          </button>
        </nav>

        <div class="mt-12 md:mt-16">
          <div
            id="tabs-with-card-1"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-1">
            <div class="relative max-w-[1140px] lg:pb-32">
              <figure class="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block">
                <div class="rounded-3xl bg-gray-100 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <img
                    class="h-auto max-w-full rounded-[1.25rem]"
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/gck/03f/mi2/screencapture-cloud-marketing-fiskerinc-fisker-newsletter-2024-03-03-14_39_06%201.png"
                    alt="Image Description"
                  />
                </div>
              </figure>

              <figure class="relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div class="relative flex max-w-[50rem] items-center rounded-t-lg border-b border-gray-100 bg-white px-24 py-2 dark:border-gray-700 dark:bg-gray-800">
                  <div class="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
                    <span class="size-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                    <span class="size-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                    <span class="size-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                  </div>
                  <div class="centima flex size-full items-center justify-center rounded-sm bg-gray-200 text-[.25rem] uppercase text-[#ff3c00] dark:bg-gray-700 dark:text-gray-200 sm:text-[.5rem]">
                    Drive Growth
                  </div>
                </div>

                <div class="rounded-b-lg bg-gray-800">
                  <img
                    class="h-auto w-full max-w-full rounded-b-lg"
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/8v7/rip/94j/Untitled%20design.gif"
                    alt="Image Description"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div
            id="tabs-with-card-2"
            class="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-2">
            <div class="relative max-w-[1140px] lg:pb-32">
              <figure class="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block">
                <div class="rounded-3xl bg-gray-700 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <img
                    class="h-auto max-w-full rounded-[1.25rem]"
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/nny/86y/zrx/screencapture-cloud-marketing-fiskerinc-vehicle-details-2024-03-03-14_50_44%201.png"
                    alt="Image Description"
                  />
                </div>
              </figure>

              <figure class="shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg">
                <div class="relative flex max-w-[50rem] items-center rounded-t-lg border-b border-gray-700 bg-gray-800 px-24 py-2">
                  <div class="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
                    <span class="size-2 rounded-full bg-gray-700"></span>
                    <span class="size-2 rounded-full bg-gray-700"></span>
                    <span class="size-2 rounded-full bg-gray-700"></span>
                  </div>
                  <div class="centima flex size-full items-center justify-center rounded-sm bg-gray-200 text-[.25rem] uppercase text-[#ff3c00] dark:bg-gray-700 dark:text-gray-200 sm:text-[.5rem]">
                    RICH CONTENT
                  </div>
                </div>

                <div class="rounded-b-lg bg-gray-800">
                  <img
                    class="h-auto w-full max-w-full rounded-b-lg"
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/l1k/bzx/gr5/Copy%20of%20GIF%20FOR%20PORTFOLIO.gif"
                    alt="Image Description"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div
            id="tabs-with-card-3"
            class="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-3">
            <div class="relative max-w-[1140px] lg:pb-32">
              <figure class="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block">
                <div class="rounded-3xl bg-gray-100 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <img
                    class="h-auto max-w-full rounded-[1.25rem]"
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/npr/1km/ima/screencapture-cloud-marketing-fiskerinc-dealer-x-2024-03-03-15_01_35%201.png"
                    alt="Image Description"
                  />
                </div>
              </figure>

              <figure class="relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div class="relative flex max-w-[50rem] items-center rounded-t-lg border-b border-gray-100 bg-white px-24 py-2 dark:border-gray-700 dark:bg-gray-800">
                  <div class="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
                    <span class="size-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                    <span class="size-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                    <span class="size-2 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                  </div>
                  <div class="centima flex size-full items-center justify-center rounded-sm bg-gray-200 text-[.25rem] uppercase text-[#ff3c00] dark:bg-gray-700 dark:text-gray-200 sm:text-[.5rem]">
                    CREATE ENGAGEMENT
                  </div>
                </div>

                <div class="rounded-b-lg bg-gray-800">
                  <img
                    class="h-auto w-full max-w-full rounded-b-lg"
                    src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/af5/z8b/6a3/Untitled%20design%20%282%29_1.gif"
                    alt="Image Description"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
