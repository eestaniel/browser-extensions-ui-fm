import type { ExtensionCardProps } from "~/types/ExtensionCardProps";

export interface ExtensionGridProps {
  activeFilter: string;
  data: ExtensionCardProps[]
  setData: (extensions: ExtensionCardProps[]) => void;
}