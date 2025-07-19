import { Shortcut } from "@/components/Shortcut/Shortcut";
import styles from "./Desktop.module.css";

export function Desktop() {
  return (
    <div className={styles.desktop}>
      <Shortcut icon="doom" title="DOOM" action={() => console.log("aaa")} />
    </div>
  );
}
