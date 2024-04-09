import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        " px-0 mx-auto xl:px-0",
        props.large ? "w-full" : "w-full",
        !props.alt && "py-0 lg:py-0",
        props.className
      )}>
      {props.children}
    </div>
  );
}
