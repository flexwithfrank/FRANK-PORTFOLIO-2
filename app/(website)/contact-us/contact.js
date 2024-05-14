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

export default function Contact() {
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
                  Contact Us
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
                I redesigned Fisker Inc's existing Contact Us page to
                feature a user-friendly form, enabling users to submit
                queries and receive responses within 24 hours. The
                form seamlessly integrates with Salesforce, ensuring
                all inquiries are logged, tracked, and routed to the
                appropriate team. The outcome? Enhanced lead
                management efficiency and an improved user experience.
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
                      JavaScript, AMPScript, HTML/CSS
                    </span>
                  </div>
                </li>
                <li class="text-md -mt-px inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Revenue:</span>
                    <span>N/A</span>
                  </div>
                </li>
                <li class="font-semibold-mt-px text-md inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Date:</span>
                    <span>September. 2023</span>
                  </div>
                </li>
                <li class="font-semibold-mt-px text-md inline-flex items-center gap-x-2 px-4 py-3 first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  <div class="flex w-full items-center justify-between">
                    <span>Preview:</span>
                    <span>
                      <a
                        href="https://www.fiskerinc.com/contact" target="_blank"
                        className="font-bold underline">
                        Contact Us
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
        <div class="object-fit h-96 w-full rounded-2xl bg-[url('https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/uj2/56v/qx8/Group%20120%20%281%29.png')] bg-cover bg-center bg-no-repeat sm:h-[650px] lg:object-contain"></div>
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
                  Pre qualify leads for quicker customer resolution.
                </h2>
              </div>

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-light w-full">
              <div className="text-[#000]">
                By pre-qualifying leads, our Contact Us form
                efficiently directs inquiries to the right teams for
                faster resolution. This enhancement boosted customer
                satisfaction by 50% and increased conversion rates by
                30%.
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
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/cmo/1jg/ppi/Group%20121.png"
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
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/sfl/b7s/jv6/Group%20123.png"
              alt="Image Description"
            />
          </div>
          <div class="w-full">
            <img
              class="w-full rounded-3xl object-cover"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/oxs/qzq/nr3/Group%20122.png"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 2 */}
      </div>
    </div>
  );
}
