import { Shortcut } from "@/components/Shortcut/Shortcut";
import { Window } from "../Window/Window";
import styles from "./Desktop.module.css";

export function Desktop() {
  return (
    <div className={`${styles.desktop} d-flex start`}>
      <Shortcut icon="doom" title="DOOM" action={() => console.log("aaa")} />
      <Window />
    </div>
  );
}
