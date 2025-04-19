export interface ExtensionCardProps {
  name?: string;
  description?: string;
  logo?: string;
  isActive?: boolean;
}

export type ExtensionCardPropsWithHandlers = {
  onToggleChange: (newValue: boolean) => void;
  onRemove: () => void;
} & ExtensionCardProps;