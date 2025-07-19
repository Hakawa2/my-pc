import { Header } from "../Header/Header";
import styles from "./Window.module.css";

type WindowProps = {
  content: any;
};

export function Window({ content }: WindowProps) {
  const actionsMock = {
    onMinimize: () => console.log("minimizou"),
    onMaximize: () => console.log("maxizimou"),
    onClose: () => console.log("fechou"),
  };

  return (
    <section className={`${styles.window} ${styles.opened}`}>
      <Header actions={actionsMock} icon="doom" name="estou rodando doom" />
      <div className={styles.content}>{content}</div>
    </section>
  );
}
