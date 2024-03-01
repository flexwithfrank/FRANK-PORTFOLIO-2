/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function NavbarV3() {
  return (
    <div className="absolute w-full z-50">
      <nav class="border-gray-200 bg-transparent w-full">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href="/"
            class="flex items-centers space-x-3 rtl:space-x-reverse">
            <h1 class="brita mx-auto max-w-4xl text-4xl font-extrabold uppercase text-white">
              GLZE <span class="text-xs text-white">&copy;</span>
            </h1>
           
          </Link>
          <div
            id="menuArea"
            className="absolute right-0 z-50 mr-4 p-6">
            <input type="checkbox" id="menuToggle"></input>
            <label for="menuToggle" class="menuOpen">
              <div class="open"></div>
            </label>
            <div class="menu menuEffects w-full">
            <h1 class="brita mx-auto max-w-4xl text-2xl font-extrabold uppercase text-white">
              GLZE <span class="text-xs text-white">&copy;</span>
            </h1>
              <label for="menuToggle"></label>
              <div class="menuContent">
                <ul className="brita font-extrabold">
                  <li>
                    <a href="#">TECH</a>
                  </li>
                  <li>
                    <a href="#">POSTS</a>
                  </li>
                  <li>
                    <a href="#">OCEAN</a>
                  </li>
                  <li>
                    <a href="#">PEAR</a>
                  </li>
                  <li>
                    <a href="#">ALASKA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
