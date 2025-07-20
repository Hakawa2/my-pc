import { MainButton } from "@/components/MainButton/MainButton";

import { Clock } from "@/components/Clock/Clock";
import { Divider } from "@/components/Divider/Divider";
import { IconButton } from "@/components/IconButton/IconButton";
import { useApplicationStore } from "@/stores/application";
import styles from "./Taskbar.module.css";

export function TaskBar() {
  const { openApps, getApp } = useApplicationStore();

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
        {openApps.map((item) => (
          <MainButton
            key={item.id}
            label={item.title}
            icon={item.icon}
            isActive={item.isFocused}
            size="md"
            action={() => getApp(item.id)}
          />
        ))}
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
