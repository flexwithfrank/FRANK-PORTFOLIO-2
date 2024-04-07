export default function LargeText({ h1, h2, color }) {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap text-left">
      <h1
        style={{ color: color }}
        class="impact horizontal-scrolling-items text-8xl  font-extrabold uppercase sm:text-[11rem] relative">
        {h1} {h2}
      </h1>
    </div>
  );
}
