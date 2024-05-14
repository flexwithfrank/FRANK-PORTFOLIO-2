/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
"use client";
import LargeText from "@/components/LargeText";
import Badge from "@/components/ui/Badge";
import Hero from "@/components/Hero";
import OpenText from "@/components/OpenText";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Engagement() {
  return (
    <div className="mx-auto mt-0 min-h-screen w-full max-w-[85rem] bg-[#fff] text-left">
      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 pt-20 lg:px-0 ">
        <div className="lg:px-12">
          <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
            <div className="w-full max-w-xl">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.0
                }}
                viewport={{ once: true }}
                class="max-w-full pb-6">
                <Link
                  href="/"
                  class="inter-medium inline-flex items-center rounded-lg bg-transparent py-2.5 text-center text-lg font-medium text-black focus:outline-none focus:ring-4 focus:ring-transparent">
                  <svg
                    class="mr-2 h-4 w-4 rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  Back
                </Link>
                <h2 class="inter-medium text-2xl font-extrabold tracking-tight md:text-6xl md:leading-tight">
                  Loyalty Program Engagement
                </h2>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.15
                }}
                viewport={{ once: true }}
                className="inter-light col-span-4 text-[#000] lg:col-span-6">
                Developed with a solid base in AMPScript, these emails
                were crafted to keep our customers hooked every step
                of the way. Our program? It's all about showing
                appreciation for our loyal supporters, driving up
                engagement and keeping them coming back for more.
                Plus, each email is dynamically personalized, pulling
                in data based on what our customers are up to in the
                program.
              </motion.div>

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.15
              }}
              viewport={{ once: true }}
              className="inter-medium align-end w-full max-w-lg text-gray-500">
              <ul class="inter-light mt-3 flex flex-col divide-y divide-neutral-200">
                <li class="text-md -mt-px inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Tech:</span>
                    <span className="text-right">
                AMPScript, HTML/CSS
                    </span>
                  </div>
                </li>
                <li class="text-md -mt-px inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Revenue:</span>
                    <span>$450K+</span>
                  </div>
                </li>
                <li class="font-semibold-mt-px text-md inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Date:</span>
                    <span>Jan. 2023</span>
                  </div>
                </li>
                <li class="font-semibold-mt-px text-md inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Preview:</span>
                    <span>
                      <a
                        href="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/zt3/dc7/xca/Group%2032%20%284%29%20%281%29.png"
                        target="_blank"
                        className="font-bold underline">
                        Loyalty Email
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.15
        }}
        viewport={{ once: true }}
        className="w-full px-12 py-12">
        <div class="object-fit h-96 w-full rounded-2xl bg-[url('https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/ian/3yy/4ew/Group%20125.png')] bg-cover bg-center bg-no-repeat sm:h-[650px] lg:object-contain"></div>
      </motion.div>

      {/*<!-- Component: Two columns even layout --> */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.15
        }}
        viewport={{ once: true }}
        className="w-full px-8 py-12 lg:px-12">
        <div className="lg-6 container">
          <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
            <div className="w-full">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <div class="max-w-full pb-6">
                <h2 class="inter-medium text-2xl font-bold tracking-tight md:text-4xl md:leading-tight">
                  The Power of Personalization.
                </h2>
              </div>

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-light w-full">
              <div className="text-[#000]">
                Creating an ultra personalized email experience for
                our customers was key to driving engagement. We used
                dynamic content blocks to pull in data based on what
                our customers were up to in the program, and even
                included a personalized progress bar to show them how
                close they were to their next reward.
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/*<!-- End Two columns even layout --> */}

      <div
        id="imgs"
        class="mx-auto flex flex-col gap-5 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* grid 1 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.15
          }}
          viewport={{ once: true }}
          class="grid grid-cols-1 gap-2 sm:grid-cols-1">
          <div className="h-full overflow-hidden rounded-3xl object-cover">
            <img
              class="w-full rounded-3xl object-cover"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/o9j/s3s/yww/Group%20127.png"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 1 */}
        {/* grid 2 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.25
          }}
          viewport={{ once: true }}
          class="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div class="h-full overflow-hidden rounded-3xl object-cover">
            <img
              class="hover-effect w-full rounded-3xl object-cover"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/2vh/cbn/v55/Group%20129.png"
              alt="Image Description"
            />
          </div>
          <div class="w-full">
            <img
              class="w-full rounded-3xl object-cover"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/guh/ly8/1b5/Group%20128.png"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 2 */}
      </div>
    </div>
  );
}
