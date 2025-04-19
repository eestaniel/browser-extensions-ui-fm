import styles from './ExtensionCard.module.css'
import fonts from "~/styles/typography.module.css"
import {FilterButton} from "~/components/filter_button/FilterButton";
import {Toggle} from "~/components/toggle/Toggle";
import type {ExtensionCardPropsWithHandlers} from "~/types/ExtensionCardProps";



export const ExtensionCard = ({
                                name,
                                description,
                                logo,
                                isActive = false,
                                onToggleChange,
                                onRemove,
                              }: ExtensionCardPropsWithHandlers) => {
  return (
      <div className={styles.extension_container}>
        <div className={styles.extension_info}>
          <img src={logo} alt={name} className={styles.extension_logo} />
          <div className={styles.extension_details}>
            <div className={`${styles.extension_name} ${fonts.text_preset_2}`}>{name}</div>
            <div className={`${styles.extension_description} ${fonts.text_preset_5}`}>{description}</div>
          </div>
        </div>
        <div className={styles.extension_actions}>
          <FilterButton name="Remove" onClick={onRemove}/>
          <Toggle isActive={isActive} onChange={onToggleChange} />
        </div>
      </div>
  );
};
