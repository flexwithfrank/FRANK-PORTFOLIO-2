/* eslint-disable react/jsx-no-target-blank */
"use client";

import React from "react";
import Link from "next/link";
import Weather from "@/components/weather";
import { motion } from "framer-motion";

export default function NavbarV4() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.0 }}>
      <header className="oswald-medium z-50 flex w-full  flex-wrap border-b bg-[#fff] py-3 text-sm uppercase sm:flex-nowrap sm:justify-start sm:py-0">
        <nav
          class="relative mx-auto flex w-full max-w-[85rem] basis-full flex-wrap items-center px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global">
          <div class="flex items-center justify-between">
            <Link href="/" className="p-2 lg:w-full">
              <h1 class="text-md mx-auto hidden w-full font-bold text-[#000000] lg:block">
                Frank Rodriguez | Marketing Developer
              </h1>
              <h1 class="text-md oswald-medium mx-auto block max-w-4xl font-bold text-[#000000] lg:hidden">
                F. Rodriguez | Developer
              </h1>
            </Link>
          </div>

          <div class="ms-auto flex items-center sm:order-3 sm:ms-0">
            <div class="hidden">
              <button
                type="button"
                class="centima inline-flex items-center justify-center gap-2 rounded-lg border p-2 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#navbar-offcanvas-example"
                aria-controls="navbar-offcanvas-example"
                aria-label="Toggle navigation">
                MENU
                <svg
                  class="size-4 hs-overlay-open:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>

            <div class="align-center flex flex-row items-center justify-between gap-6 ps-3 sm:ms-6 sm:border-s sm:border-gray-300 sm:ps-6">
              {/* search icon */}
              {/* <button
                type="button"
                class="flex size-9 items-center justify-center rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#navbar-secondary-content"
                aria-controls="navbar-secondary-content"
                aria-label="Toggle navigation">
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button> */}
              {/* search icon */}
              <Weather />
              <button
                type="button"
                class="flex size-9 items-center justify-center rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#navbar-secondary-content"
                aria-controls="navbar-secondary-content"
                aria-label="Toggle navigation">
                <svg
                  class="size-6 flex-shrink-0 hs-collapse-open:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hidden size-6 flex-shrink-0 hs-collapse-open:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-offcanvas-example"
            class="hs-overlay fixed start-0 top-0 z-[60] hidden h-full w-full max-w-xs grow basis-full -translate-x-full transform border-e transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-r-gray-700 dark:bg-gray-800 sm:static sm:z-40 sm:order-2 sm:block sm:h-auto sm:w-auto sm:max-w-none sm:basis-auto sm:translate-x-0 sm:border-r-transparent sm:transition-none sm:dark:border-r-transparent"
            tabindex="-1"
            data-hs-overlay-close-on-resize>
            <div class="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:ps-7">
              <a
                href="https://drive.google.com/file/d/1VhQJRjAcaxgzWF3UySGMa3ibmXbT2BV7/view" target="_blank"
                className="w-28 px-6 sm:px-0 sm:py-6">
                <h1 class="oswald-medium text-md mx-auto font-extrabold text-gray-800">
                  Resume
                </h1>
              </a>

              <a
                href="https://vfr-porfolio.vercel.app/#projects"
                className="w-28 px-6 sm:px-0 sm:py-6">
                <h1 class="oswald-medium text-md mx-auto font-extrabold text-gray-800">
                  Projects
                </h1>
              </a>

              <Link
                href="/contact"
                className="w-28 px-6 sm:px-0 sm:py-6">
                <h1 class="oswald-medium text-md mx-auto font-extrabold text-gray-800">
                  Contact
                </h1>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="navbar-secondary-content"
        class="hs-overlay fixed start-0 top-0 z-[60] hidden h-full w-full max-w-2xl -translate-x-full transform bg-[#1f1f1e] transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-gray-800"
        tabindex="-1">
        <div class="flex items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="w-60">
            <h1 class="oswald-medium mx-auto block w-full text-sm font-bold uppercase text-[#fff]">
              Frank Rodriguez | SFMC Developer
            </h1>
          </Link>
          <button
            type="button"
            class="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1f1f1e] focus:ring-offset-2 focus:ring-offset-[#1f1f1e] dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#navbar-secondary-content">
            <span class="sr-only">Close offcanvas</span>
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div class="mx-auto max-w-2xl p-4 lg:px-8">
          <div className="space-y-3">
            {/* <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  type="submit"
                  className="focus:outline-none focus:ring">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="ml-3 h-5 w-5 text-white dark:text-gray-400">
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="centima w-full border border-white bg-transparent py-2 pl-10 text-sm focus:outline-none dark:border-transparent dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
              />
            </div> */}
            <div className="flex-1 text-left">
              <ul className="flex flex-col gap-8 space-y-3 pb-4 pt-8 text-left text-sm lg:gap-12 lg:pt-12">
                <li className="rounded-sm">
                  <a
                    href="https://drive.google.com/file/d/1VhQJRjAcaxgzWF3UySGMa3ibmXbT2BV7/view" target="_blank"
                    className="oswald-medium text-md mx-auto rounded-md py-2 font-extrabold uppercase text-white sm:px-0 sm:py-6">
                    Resume
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="https://vfr-portfolio.vercel.app/#projects"
                    className="oswald-medium text-md mx-auto rounded-md py-2 font-extrabold uppercase text-white sm:px-0 sm:py-6">
                    Projects
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="https://vfr-porfolio.vercel.app/contact"
                    className="oswald-medium text-md mx-auto rounded-md py-2 font-extrabold uppercase text-white sm:px-0 sm:py-6">
                    Contact
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="mailto:vfrodriguez@proton.me"
                    target="_blank"
                    className="oswald-medium text-md mx-auto rounded-md font-extrabold uppercase text-white sm:px-0 sm:py-6">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
