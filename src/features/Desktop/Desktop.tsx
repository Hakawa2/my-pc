import { Shortcut } from "@/components/Shortcut/Shortcut";
import { Window } from "@/layouts/Window/Window";
import { useApplicationStore } from "@/stores/application";
import type { Application } from "@/types/application.type";
import styles from "./Desktop.module.css";
import { applicationsConfig } from "./applications.config";

export function Desktop() {
  const { getCurrentApp, openApp } = useApplicationStore();

  const handleOpenApp = (application: Application) => {
    openApp({
      ...application,
    });
  };

  const makeShortCuts = () => {
    return applicationsConfig.map((application: Application) => (
      <Shortcut
        key={application.id}
        icon={application.icon}
        title={application.title}
        action={() => handleOpenApp(application)}
      />
    ));
  };

  const makeWindow = () => {
    const currentApp = getCurrentApp();
    return (
      currentApp?.id && (
        <Window
          content={currentApp.content}
          icon={currentApp.icon}
          title={currentApp.title}
          id={currentApp.id}
        />
      )
    );
  };

  return (
    <div className={`${styles.desktop} d-flex start column gap-sm`}>
      {makeShortCuts()}
      {makeWindow()}
    </div>
  );
}
