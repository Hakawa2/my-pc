import type { ButtonBaseProps } from "@/types/button-base.type";
import { Icon } from "../Icon/Icon";
import styles from "./MainButton.module.css";

type MainButtoProps = {
  label: string;
  icon?: string;
  isActive?: boolean;
} & ButtonBaseProps;

export function MainButton({
  icon,
  label,
  isActive,
  size = "sm",
  action,
}: MainButtoProps) {
  const orientationClassMap = {
    sm: "center",
    md: "start",
    lg: "start",
  };

  return (
    <button
      className={`${styles.button} ${styles[size]} d-flex ${
        orientationClassMap[size]
      } gap-sm ${isActive ? "inverted-shadow" : "shadow"}`}
      onClick={action}
    >
      {icon && <Icon name={icon} />}

      <span>{label}</span>
    </button>
  );
}
