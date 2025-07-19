import type { SizeTypes } from "./size-base.type";

export type ButtonBaseProps = {
  action: () => unknown;
} & SizeTypes;
