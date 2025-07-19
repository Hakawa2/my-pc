import { MainButton } from "@/components/MainButton/MainButton";

import { Clock } from "@/components/Clock/Clock";
import { Divider } from "@/components/Divider/Divider";
import { IconButton } from "@/components/IconButton/IconButton";
import styles from "./Taskbar.module.css";

export function TaskBar() {
  return (
    <footer className={`${styles.taskbar} d-flex space-between w-100`}>
      <section className={`${styles.actions} d-flex start`}>
        <MainButton
          label="Start"
          icon="windows-0"
          action={() => console.log("aaa")}
        />
        <div className={`${styles.favorites} d-flex start gap-sm`}>
          <Divider />
          <IconButton icon="msie1-0" action={() => console.log("aaa")} />
          <IconButton icon="windows-0" action={() => console.log("aaa")} />
          <IconButton icon="windows-0" action={() => console.log("aaa")} />
          <Divider />
        </div>
      </section>
      <section className={`${styles.programs} d-flex start gap-sm w-100`}>
        <MainButton
          label="Doom"
          icon="windows-0"
          size="md"
          action={() => console.log("aaa")}
        />
      </section>

      <section
        className={`${styles.utilitys} d-flex gap-sm inverted-shadow px-sm`}
      >
        <IconButton
          icon="loudspeaker_rays-0"
          action={() => console.log("aaa")}
        />
        <Clock />
      </section>
    </footer>
  );
}
