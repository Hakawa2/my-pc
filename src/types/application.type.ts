import type { JSX } from "react";

export type Application = {
  id: string;
  title: string;
  icon: string;
  tabBarIco?: string;
  content: () => JSX.Element;
  isMinimized?: boolean;
  isMaximized?: boolean;
  isFocused?: boolean;
};
