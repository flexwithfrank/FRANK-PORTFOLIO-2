export default function OpenText({ h1, p1 }) {
  return (
    <div className="text-center">
      <h1 class="impact mx-auto max-w-4xl text-5xl font-extrabold uppercase text-white dark:text-gray-200 sm:text-8xl">
        {h1}
      </h1>

      <div className="mx-auto max-w-md">
        <p class="dm-sans-bold my-20 text-black dark:text-gray-400 lg:text-2xl text-xl">
          {p1}
        </p>
      </div>
    </div>
  );
}
