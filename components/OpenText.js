export default function OpenText({ h1, p1, color }) {
  return (
    <div className="px-8 text-left lg:max-w-7xl lg:px-12">
      <h1
        style={{ color: color }}
        class="impact mx-auto max-w-4xl text-5xl font-extrabold uppercase  sm:text-8xl">
        {h1}
      </h1>

      <div className="mx-auto">
        <p
          style={{ color: color }}
          class="centima my-0 max-w-sm text-left text-xl font-extrabold uppercase lg:text-2xl">
          {p1}
        </p>
      </div>
    </div>
  );
}
