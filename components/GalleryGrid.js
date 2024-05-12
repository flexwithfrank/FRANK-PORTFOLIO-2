"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/* eslint-disable @next/next/no-img-element */
export default function GalleryGrid() {
  useEffect(() => {
    const hoverEffect = document.querySelector(".hover-effect");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgStart",
        start: "top center",
        end: "+=400",
        scrub: 1
      }
    });
    tl.to("#img1", {
      scale: 1.2, // Change this to control the zoom level
      duration: 1
    });
    hoverEffect.addEventListener("mouseenter", () => {
      gsap.to(hoverEffect, {
        scale: 1.8, // Change this to control the scale level
        duration: 0.5,
        ease: "power1.out"
      });
    });

    hoverEffect.addEventListener("mouseleave", () => {
      gsap.to(hoverEffect, {
        scale: 1, // Reset the scale to the original size
        duration: 0.5,
        ease: "power1.out"
      });
    });
  }, []);

  return (
    <>
      <div
        id="imgStart"
        class="mx-auto flex max-w-[85rem] flex-col gap-5 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* grid 1 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.0 }}
          viewport={{ once: true }}
          class="grid grid-cols-1 gap-2 sm:grid-cols-1">
          <div className="h-28 overflow-hidden rounded-3xl object-cover lg:h-40">
            <img
              id="img1"
              class="w-full rounded-3xl object-cover"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/bfl/zlx/zlk/pawel-czerwinski-8uZPynIu-rQ-unsplash%20%281%29.jpg"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 1 */}
        {/* grid 2 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          class="grid grid-cols-12 gap-5">
          <div class="col-span-4 h-28 overflow-hidden rounded-3xl object-cover lg:col-span-2 lg:h-40">
            <img
              id="hoverEffect"
              class="hover-effect h-28 w-full rounded-3xl object-cover lg:h-40"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/acf/lgz/ygo/bia-w-a-PO8Woh4YBD8-unsplash%20%281%29.jpg"
              alt="Image Description"
            />
          </div>
          <div class="col-span-8 lg:col-span-10">
            <img
              class="h-28 w-full rounded-3xl object-cover lg:h-40"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/5c0/9k4/0h5/daniel-olah-VS_kFx4yF5g-unsplash%20%281%29.jpg"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 2 */}
        {/* grid 1 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true }}
          class="grid grid-cols-1 gap-2 sm:grid-cols-1">
          <div>
            <img
              class="h-28 w-full rounded-3xl object-cover lg:h-40"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/zrz/gj7/uyq/pawel-czerwinski-NTYYL9Eb9y8-unsplash%20%281%29.jpg"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 1 */}
        {/* grid 2 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          viewport={{ once: true }}
          class="grid grid-cols-12 gap-5">
          <div class="col-span-8 lg:col-span-8">
            <img
              class="h-28 w-full rounded-3xl object-cover lg:h-40"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/g2s/bjm/909/rodion-kutsaiev-F573ZRbKOEw-unsplash%20%281%29.jpg"
              alt="Image Description"
            />
          </div>
          <div class="col-span-4 lg:col-span-4">
            <img
              class="h-28 w-full rounded-3xl object-cover lg:h-40"
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/fj7/fvc/flt/pawel-czerwinski-oykbZuvajO0-unsplash%20%281%29.jpg"
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* grid 2 */}
      </div>
    </>
  );
}
