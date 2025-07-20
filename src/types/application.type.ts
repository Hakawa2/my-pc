export type Application = {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
  isMinimized?: boolean;
  isFocused?: boolean;
};
