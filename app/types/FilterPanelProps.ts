export interface FilterPanelProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: string[];
}