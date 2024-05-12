/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

"use client";
import React, { useEffect } from "react";
import Bio from "./Bio";
import Skills from "./Skills";
import { motion } from "framer-motion";

export default function HeroBannerV3() {
  return (
    <>
      <div class="mx-auto max-w-[85rem] px-4 pt-12 sm:px-6 lg:px-8 lg:pt-32">
        <div class="grid gap-4 md:grid-cols-12 md:items-start md:gap-8">
          <div className="col-span-7">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.0
              }}
              class="inter-medium block text-3xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-4xl lg:text-7xl lg:leading-tight">
              Frank Rodriguez.
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.15
              }}
              class="inter-medium block text-3xl font-bold tracking-tighter text-neutral-400 dark:text-white sm:text-4xl lg:text-7xl lg:leading-tight">
              Salesforce Developer.
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.25
            }}
            class="relative col-span-5 ms-4">
            <Bio />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.35
          }}
          class="relative col-span-5">
          <Skills />
        </motion.div>
      </div>
    </>
  );
}
