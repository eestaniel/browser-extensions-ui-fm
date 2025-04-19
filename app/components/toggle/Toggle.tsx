import styles from "./Toggle.module.css";

interface ToggleProps {
  disabled?: boolean;
  isActive: boolean; // required
  onChange?: (newValue: boolean) => void;
}

export const Toggle = ({ disabled = false, isActive, onChange }: ToggleProps) => {
  return (
      <label className={styles.switch}>
        <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => {
              if (disabled) return;
              onChange?.(e.target.checked);
            }}
            disabled={disabled}
            aria-checked={isActive}
            aria-disabled={disabled}
        />
        <span
            className={`
          ${styles.slider}
          ${styles.round}
          ${isActive ? styles.checked : ""}
          ${disabled ? styles.disabled : ""}
        `}
        />
      </label>
  );
};
