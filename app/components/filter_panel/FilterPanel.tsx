import styles from './FilterPanel.module.css';
import fonts from '~/styles/typography.module.css';
import {FilterButton} from "~/components/filter_button/FilterButton";
import type {FilterPanelProps} from "~/types/FilterPanelProps";

export const FilterPanel = ({filters, activeFilter, setActiveFilter}: FilterPanelProps) => {



  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  }

  return (
      <section className={styles.extensions_list_container}>
        <h1 className={fonts.text_preset_1}>Extensions List</h1>

        <div className={styles.filter_buttons_container}>
          {filters.map((filter, index) => (
              <FilterButton key={index} name={filter}
                            isActive={filter === activeFilter}
                            onClick={() => handleFilterChange(filter)}

              />
          ))}
        </div>

      </section>
  );
};
