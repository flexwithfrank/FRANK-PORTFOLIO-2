export default function LargeText({ h1, color }) {
  return (
    <div className="px-8 text-left lg:px-8 w-full overflow-hidden whitespace-nowrap">
      <h1
        style={{ color: color }}
        class="impact max-w-4xl text-5xl font-extrabold  uppercase sm:text-[11rem]">
        {h1}
      </h1>
    </div>
  );
}
