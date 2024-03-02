/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FooterV1() {
  return (
    <div>
      <div>
        <div>
          {/* <!-- Hero --> */}
          <div class="relative min-h-screen overflow-hidden bg-[#ff3c00] opacity-90">
            <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
              <div class="text-center">
                <h1 class="impact mx-auto max-w-4xl text-5xl font-extrabold uppercase text-white dark:text-gray-200 sm:text-8xl">
                   CONNECT WITH ME.
                </h1>

                <div className="mx-auto max-w-md">
                  <p class="dm-sans-regular my-20 text-white dark:text-gray-400">
                  Stay in the loop with my latest projects! Sign up for my newsletter and never worry about receiving spam -  promise!
                  </p>
                </div>

                <div class="relative mx-auto mt-12 max-w-xl sm:lg:mt-0">
                  {/* <!-- Form --> */}
                  <form>
                    <label
                      for="search"
                      class="sr-only mb-2 text-sm font-medium text-white dark:text-white">
                      Search
                    </label>
                    <div class="relative flex flex-col items-center gap-8 align-middle lg:flex-row">
                      <input
                        type="search"
                        id="search"
                        class="centima block w-full border border-white bg-transparent p-4 text-sm uppercase leading-tight text-white focus:border-white focus:outline-0 focus:ring-0 focus:ring-white"
                        placeholder="Email"
                        required
                      />
                      <button
                        type="submit"
                        class="centima align-center text-md inline-flex w-full items-center gap-3 border-2 border-white bg-white p-4 font-extrabold uppercase leading-tight text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring-4 focus:ring-white lg:w-80">
                        Subscribe Now
                        <span class="absolute right-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mb-1 h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <footer class="bg-transparent pt-20">
                <div class="max-w-8xl align-center mx-auto flex flex-col items-center justify-between px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
                  <div class="flex justify-center text-white">
                    <span className="centima font-extrabold uppercase leading-tight">
                      GLZE MEDIA &copy;
                    </span>
                  </div>

                  <ul class="dm-sans-regular centima mt-12 flex flex-wrap justify-center gap-6 uppercase md:gap-8 lg:mt-0 lg:gap-12">
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="#">
                        {" "}
                        Project{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="#">
                        {" "}
                        Blog{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="#">
                        {" "}
                        Hobbies{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="#">
                        {" "}
                        Contact{" "}
                      </a>
                    </li>
                  </ul>

                  <ul class="mt-12 flex justify-center gap-6 md:gap-4 lg:mt-0">
                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-white transition hover:text-white/75">
                        <span class="sr-only">Facebook</span>
                        <svg
                          class="h-9 w-9"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-white transition hover:text-white/75">
                        <span class="sr-only">Instagram</span>
                        <svg
                          class="h-9 w-9"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-white transition hover:text-white/75">
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="h-9 w-9"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-white transition hover:text-white/75">
                        <span class="sr-only">GitHub</span>
                        <svg
                          class="h-9 w-9"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <span>
                  <p class="dm-sans-regular mx-auto mt-6 max-w-md text-center text-xs leading-relaxed text-gray-100 lg:mt-0">
                    Copyright © 2024 GLAZER. All Rights Reserved.
                  </p>
                </span>
              </footer>
              {/* end footer */}
            </div>

            {/* left car */}
            <div
              class="absolute start-0 top-80 z-50 hidden -translate-x-40 -translate-y-2/4 transform transition-all ease-in-out hover:-translate-x-[50rem] hover:duration-500 md:block lg:-translate-x-[55rem]"
              aria-hidden="true">
              <img
                class="duration-600 h-auto w-9/12 max-w-full"
                src="https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/72a219ac-b127-44e4-9835-eb2b8a15f9c7.png"
                alt="image description"
              />
            </div>

            {/* right car */}

            <div
              class="duration-600 absolute right-0 top-20 z-50 hidden -translate-y-3/4 translate-x-[77rem] transform transition-all ease-in-out hover:translate-x-[72rem] hover:duration-500 md:block lg:-translate-y-[2rem]"
              aria-hidden="true">
              <img
                class="h-auto w-9/12 max-w-full"
                src="https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/72a219ac-b127-44e4-9835-eb2b8a15f9c7.png"
                alt="image description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
