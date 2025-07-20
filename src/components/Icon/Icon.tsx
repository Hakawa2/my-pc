import type { SizeTypes } from "@/types/size-base.type";
import styles from "./Icon.module.css";

type IconProps = {
  name: string;
} & SizeTypes;

export function Icon({ name, size = "sm" }: IconProps) {
  return (
    <img
      className={`${styles[size]} d-flex center`}
      src={`/icons/${name}.png`}
      aria-hidden="true"
      data-testid={name}
    />
  );
}
