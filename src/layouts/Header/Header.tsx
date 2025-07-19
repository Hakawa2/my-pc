import { Icon } from "@/components/Icon/Icon";
import { IconButton } from "@/components/IconButton/IconButton";
import type { HeaderActionsType } from "@/types/header-actions.type";
import styles from "./Header.module.css";

type HeaderProps = {
  icon: string;
  name: string;
  actions: HeaderActionsType;
};

export function Header({ icon, name, actions }: HeaderProps) {
  return (
    <nav className={`${styles.header} d-flex space-between px-sm`}>
      <div className="d-flex gap-sm">
        <Icon name={icon} />
        <p>{name}</p>
      </div>
      <div className="d-flex gap-sm">
        <IconButton icon="minimize" action={actions.onMinimize} />
        <IconButton icon="maximaze" action={actions.onMaximize} />
        <IconButton icon="close" action={actions.onClose} />
      </div>
    </nav>
  );
}
