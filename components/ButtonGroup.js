import React from "react";

export default function ButtonGroup() {
  return (
    <>
      <div className="align-center relative flex w-full flex-row items-center">
        <div className="items-start">
          <h2 className="dm-sans-med my-4 text-xs font-bold text-white">
            Custom Vehicle Configurator
          </h2>
        </div>
        <div
          class="align-end dm-sans-med inline-flex items-end justify-end rounded-md shadow-sm"
          role="group">
          <button
            type="button"
            class="rounded-s-lg border border-gray-200 bg-transparent px-3 py-1 text-sm font-medium text-white focus:z-10 focus:ring-0 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white">
            HTML
          </button>
          <button
            type="button"
            class="border-b border-t border-gray-200 bg-transparent px-3 py-1 text-sm font-medium text-white focus:z-10 focus:ring-0 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white">
            CSS
          </button>
          <button
            type="button"
            class="rounded-e-lg border border-gray-200 bg-transparent px-3 py-1 text-sm font-medium text-white focus:z-10 focus:ring-0 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white">
            JAVASCRIPT
          </button>
        </div>
      </div>
    </>
  );
}
