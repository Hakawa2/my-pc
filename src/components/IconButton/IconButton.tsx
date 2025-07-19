import type { ButtonBaseProps } from "@/types/button-base.type";
import { Icon } from "../Icon/Icon";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: string;
  hasBackground?: boolean;
} & ButtonBaseProps;

export function IconButton({ icon, hasBackground }: IconButtonProps) {
  return (
    <button
      className={`${styles.iconButton} ${
        hasBackground && styles.background
      } d-flex center`}
    >
      <Icon name={icon} />
    </button>
  );
}
