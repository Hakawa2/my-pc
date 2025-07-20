import { useApplicationStore } from "@/stores/application";
import { Header } from "../Header/Header";
import styles from "./Window.module.css";

type WindowProps = {
  content: any;
  icon: string;
  title: string;
  id: string;
};

export function Window({ content, icon, title, id }: WindowProps) {
  const { closeApp, toggleMinimize } = useApplicationStore();

  const actionsMock = {
    onMinimize: () => toggleMinimize(id),
    onMaximize: () => console.log("maxizimou"),
    onClose: () => closeApp(id),
  };

  return (
    <section className={`${styles.window} ${styles.opened}`}>
      <Header actions={actionsMock} icon={icon} name={title} />
      <div className={styles.content}>{content}</div>
    </section>
  );
}
