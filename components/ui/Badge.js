/* eslint-disable react/no-unescaped-entities */
export default function Badge({ titleText, value1, value2, value3, value4, value5, value6, color  }) {

    const badges = {
        text1: value1,
        text2: value2,
        text3: value3,
        text4: value4,
        text5: value5,
        text6: value6,
      };
    
  return (
    <>
      <div class="relative mx-auto overflow-hidden">
        <div class="align-start mx-auto max-w-[85rem] items-start justify-start px-0 py-0 pb-12 text-left">
          <div class="text-left">
            <h1 style={{ color: color }} 
            class="centima text-xl font-bold uppercase tracking-tighter sm:text-2xl">
              {titleText}
            </h1>
            <div class="mx-auto mt-4 flex max-w-2xl flex-wrap sm:mt-4">
              {Object.entries(badges).map(([text, value]) => (
                <div
                  key={text}
                  style={{ color: color }}
                  className="centima m-1 inline-flex cursor-pointer items-center gap-x-2 rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm uppercase hover:bg-[#ff3c00]  shadow duration-300 ease-in-out hover:text-white hover:shadow-sm hover:transition-all disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
