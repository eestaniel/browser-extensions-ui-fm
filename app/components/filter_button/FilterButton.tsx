import styles from "./FilterButton.module.css";
import fonts from "~/styles/typography.module.css";

interface FilterButtonProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const FilterButton = ({ name, isActive, onClick }: FilterButtonProps) => {
  const textClass =
      name === "Remove"
          ? fonts.text_preset_6
          : isActive
              ? fonts.text_preset_4
              : fonts.text_preset_3;

  return (
      <button
          className={`
        ${styles.filter_button}
        ${styles.button}
        ${name === "Remove" ? styles.remove : styles.filter}
        ${isActive ? styles.active : ""}
        ${textClass}
      `}
          onClick={onClick}
      >
        {name}
      </button>
  );
};
