import { Shortcut } from "@/components/Shortcut/Shortcut";
import { Content } from "@/features/Doom/Content/Content";
import { useState, type JSX } from "react";
import { Window } from "../Window/Window";
import styles from "./Desktop.module.css";

export function Desktop() {
  const [currentContent, setCurrentContent] = useState<JSX.Element>();

  return (
    <div className={`${styles.desktop} d-flex start`}>
      <Shortcut
        icon={Content().icon}
        title={Content().title}
        action={() => setCurrentContent(Content().content)}
      />
      {currentContent && <Window content={currentContent} />}
    </div>
  );
}
