"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SkillsFaqs() {
  return (
    <>
      <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div class="grid gap-10 md:grid-cols-1">
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
                className="ml-2 inline-flex w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <div class="max-w-xs">
              <h2 class="inter-medium text-2xl font-bold tracking-tight dark:text-white md:text-4xl md:leading-tight">
                Skills
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.15
            }}
            viewport={{ once: true }}>
            <div class="hs-accordion-group divide-y divide-neutral-400 dark:divide-neutral-700">
              {/* skill 1 */}
              <div
                class="hs-accordion active pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one inter-medium tracking-tight">
                  Salesforce Marketing Cloud
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p class="inter-light text-gray-600 dark:text-neutral-400">
                    Proficient in Salesforce Marketing Cloud, I
                    possess a comprehensive understanding of its
                    functionalities and capabilities. With hands-on
                    experience in creating targeted campaigns,
                    automating processes, and analyzing data, I ensure
                    effective engagement and conversion strategies for
                    enhanced marketing outcomes.
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* skill 1 */}
              <div
                class="hs-accordion pb-3 pt-6"
                id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two inter-medium tracking-tight">
                  AMPScript
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two inter-light">
                  <p class="text-gray-600 dark:text-neutral-400">
                    I utilize AMPScripts dynamic capabilities to
                    personalize and optimize email content, driving
                    engagement and conversions. By crafting tailored messaging and dynamic content blocks, I create emails that speak directly to our audience, boosting engagement and conversions.
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* skill 1 */}
              <div
                class="hs-accordion pb-3 pt-6"
                id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two inter-medium tracking-tight">
                  JavaScript
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two inter-light">
                  <p class="text-gray-600 dark:text-neutral-400">
                    Skilled in JavaScript, I harness its power to
                    create interactive and dynamic email and web experiences.
                    From implementing custom forms to integrating
                    interactive elements, I leverage JavaScript to
                    enhance user engagement and drive conversion
                    rates.
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* skill 1 */}
              <div
                class="hs-accordion pb-3 pt-6"
                id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two inter-medium tracking-tight">
                  HTML / CSS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two inter-light">
                  <p class="text-gray-600 dark:text-neutral-400">
                   I create visually compelling
                    and responsive email designs that effectively
                    engage audiences while ensuring
                    consistent branding and seamless user experiences
                    across email/web campaigns. Leveraging the latest
                    HTML/CSS techniques, I develop engaging layouts
                    and optimize email deliverability for maximum
                    impact.
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* skill 1 */}
              <div
                class="hs-accordion pb-3 pt-6"
                id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two inter-medium tracking-tight">
                  Email 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two inter-light">
                  <p class="text-gray-600 dark:text-neutral-400">
                  As a passionate email developer, I thrive on crafting engaging designs and optimizing user experiences for impactful campaigns. My expertise also extends to creating dynamic global emails that deliver culturally relevant content based on each user's location, ensuring a personalized touch that resonates worldwide.
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* skill 1 */}
              <div
                class="hs-accordion pb-3 pt-6"
                id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two inter-medium tracking-tight">
                  SQL
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two inter-light">
                  <p class="text-gray-600 dark:text-neutral-400">
                    Experienced in SQL, I efficiently manage and
                    analyze data to drive informed marketing decisions
                    and optimize campaign performance. With a strong
                    understanding of database management and data
                    manipulation, I ensure data integrity and accuracy
                    for effective targeting and segmentation
                    strategies.
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* skill 1 */}
              <div
                class="hs-accordion pb-3 pt-6"
                id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 md:text-lg"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two inter-medium tracking-tight">
                  API/Automation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-neutral-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two inter-light">
                  <p class="text-gray-600 dark:text-neutral-400">
                    I have a strong background in implementing
                    automation strategies to streamline processes and
                    improve operational efficiency. From setting up
                    triggered sends to creating dynamic content blocks,
                    I leverage automation tools to enhance marketing
                    workflows and drive personalized customer
                    experiences.
                  
                  </p>
                </div>
              </div>
              {/* skill 1 */}
              {/* end */}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
