/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectGrid() {
  return (
    <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.0
        }}
        viewport={{ once: true }}
        className="flex items-center gap-3">
        <div>
          <svg
            className="ml-2 inline-flex w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </div>
        <div class="max-w-xs">
          <h2 id="projects" class="inter-medium text-2xl font-bold tracking-tight dark:text-white md:text-4xl md:leading-tight">
            Projects
          </h2>
        </div>
      </motion.div>

      <div class="grid h-full grid-cols-1 gap-4 py-12 sm:gap-6 md:gap-8 lg:grid-cols-2">
        {/* grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.15
          }}
          viewport={{ once: true }}
          className="group relative">
          <Link
            href="/configurator"
            className="flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8">
            <div class="align-center relative mx-auto items-center justify-center overflow-hidden bg-gray-100 pt-20">
              <img
                class="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 lg:max-w-md"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/g4n/v3c/9uj/Group%2079.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Vehicle Configurator
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  JavaScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}

        {/* grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.25
          }}
          viewport={{ once: true }}
          className="group relative">
          <Link
            href="/inventory-management"
            className="flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="rounded-2xl object-cover lg:max-w-md"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/g3i/zy0/ng9/Screenshot%202024-05-05%20at%209.23.42%20AM.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Inventory Management
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  JavaScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}
        {/* grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.35
          }}
          viewport={{ once: true }}
          className="group relative h-full">
          <Link
            className="flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8"
            href="/order-communication">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="rounded-2xl object-cover lg:max-w-md"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/h2q/2i8/n8p/Screenshot%202024-05-07%20at%203.04%201.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Order Communication
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  CSS
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Automation
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}

        {/* grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.45
          }}
          viewport={{ once: true }}
          className="group relative h-full">
          <Link
            className=" flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8"
            href="/loyalty-program">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="mx-auto rounded-2xl object-cover lg:max-w-[300px]"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/7yv/2so/sql/Group%2095%20%282%29.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Loyalty Program
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  JavaScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}
        {/* grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.45
          }}
          viewport={{ once: true }}
          className="group relative h-full">
          <Link
            className=" flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8"
            href="/product-details">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="mx-auto rounded-2xl object-cover px-12 lg:max-w-lg"
                src="https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/e9bcbced-1d4b-4e80-a4b9-67b531645278.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Product Details
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  JavaScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML / CSS
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  SQL
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}
        {/* grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.45
          }}
          viewport={{ once: true }}
          className="group relative h-full">
          <Link
            className=" flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8"
            href="/contact-us">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="mx-auto rounded-2xl object-cover px-12 lg:max-w-[325px]"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/57h/dhj/vky/Untitled%20design%20%287%29_1.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Contact Us
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  CSS
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Javascript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Lead Routing
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}
          {/* grid */}
          <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.45
          }}
          viewport={{ once: true }}
          className="group relative h-full">
          <Link
            className=" flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8"
            href="/loyalty-engagement">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="mx-auto rounded-2xl object-cover px-12 lg:max-w-[350px]"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/ir3/n55/tny/Group%2032%20%284%29%20%281%29%201.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                Loyalty Engagement
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  CSS
                </span>
              
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  API
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        {/* grid */}
          {/* grid */}
          <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.45
          }}
          viewport={{ once: true }}
          className="group relative h-full">
          <a
            className=" flex h-full flex-col justify-between space-y-32 rounded-3xl bg-[#f2f4f7] p-8" target="_blank"
            href="https://ev-fuel-calculator.pages.dev/">
            <div class="align-center mx-auto items-center justify-center overflow-hidden rounded-2xl bg-gray-100 pt-20 transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                class="mx-auto rounded-2xl object-cover px-12 mx-w-xl"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/zfd/mix/9cw/download%20%281%29.png"
                alt="Image Description"
              />
            </div>

            <div>
              <h3 class="inter-medium relative inline-block pb-2 text-2xl font-bold tracking-tight text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:transition group-hover:before:scale-x-100 dark:text-white">
                EV Fuel Calculator
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  HTML
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  CSS
                </span>
              
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  AMPScript
                </span>
                <span class="inter-medium inter-medium cursor-pointer rounded-full border border-black px-3 py-1.5 text-[12px] text-black transition duration-150 hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:text-xs">
                  Email
                </span>
              </div>
            </div>
          </a>
        </motion.div>
        {/* grid */}

        {/* end */}
      </div>
    </div>
  );
}
