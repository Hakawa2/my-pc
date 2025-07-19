import styles from "./Shortcut.module.css";

import { Icon } from "../Icon/Icon";

type ShortcutProps = {
  icon: string;
  title: string;
  action: () => void;
};

export function Shortcut({ icon, title, action }: ShortcutProps) {
  return (
    <button
      className={`${styles.shortcut} d-flex column center gap-md`}
      onClick={action}
    >
      <Icon name={icon} size="md" />
      <p>{title}</p>
    </button>
  );
}
