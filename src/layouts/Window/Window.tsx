import { useApplicationStore } from "@/stores/application";
import { Header } from "../Header/Header";
import styles from "./Window.module.css";

type WindowProps = {
  content: React.ReactNode;
  icon: string;
  title: string;
  id: string;
  isMaximized?: boolean;
};

export function Window({ content, icon, title, id, isMaximized }: WindowProps) {
  const { closeApp, toggleMinimize, toggleMaximize } = useApplicationStore();

  const actionsMock = {
    onMinimize: () => toggleMinimize(id),
    onMaximize: () => toggleMaximize(id),
    onClose: () => closeApp(id),
  };

  return (
    <section
      className={`${styles.window} ${styles.opened} ${
        isMaximized ? styles.full : ""
      } shadow`}
    >
      <Header actions={actionsMock} icon={icon} name={title} />
      <div className={styles.content}>{content}</div>
    </section>
  );
}
