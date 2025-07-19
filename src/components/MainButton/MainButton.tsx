import { useHoverClass } from "@/hooks/useHoverClass";
import type { ButtonBaseProps } from "@/types/button-base.type";
import { Icon } from "../Icon/Icon";
import styles from "./MainButton.module.css";

type MainButtoProps = {
  label: string;
  icon?: string;
} & ButtonBaseProps;

export function MainButton({ icon, label, size = "sm" }: MainButtoProps) {
  const ref = useHoverClass<HTMLButtonElement>("inverted-shadow");

  const orientationClassMap = {
    sm: "center",
    md: "start",
    lg: "start",
  };

  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles[size]} d-flex ${orientationClassMap[size]} gap-sm shadow`}
    >
      {icon && <Icon name={icon} />}

      <span>{label}</span>
    </button>
  );
}
