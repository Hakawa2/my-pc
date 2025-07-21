import type { Application } from "@/types/application.type";
import { InternetExplorer } from "../InternetExplorer/InternetExplorer";

export const applicationsConfig: Application[] = [
  {
    id: "doom",
    title: "Doom",
    icon: "doom",

    content: InternetExplorer,
  },
  {
    id: "ie",
    title: "Internet Explorer",
    icon: "msie1-0",
    tabBarIco: "html-1",
    content: InternetExplorer,
  },
  {
    id: "lorem",
    title: "lorem",
    icon: "lorem",
    content: InternetExplorer,
  },
];
