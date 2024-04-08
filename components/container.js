import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        " px-0 mx-auto xl:px-0",
        props.large ? "w-full" : "w-full",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
