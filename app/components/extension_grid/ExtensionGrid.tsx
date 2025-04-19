import styles from './ExtensionGrid.module.css';
import type {ExtensionGridProps} from "~/types/ExtensionGridProps";
import {ExtensionCard} from "~/components/extension_card/ExtensionCard";



export const ExtensionGrid = ({data, activeFilter, setData}: ExtensionGridProps) => {

  const filteredExtensions = data?.filter(extension => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Active") return extension.isActive;
    if (activeFilter === "Inactive") return !extension.isActive;
    return true;
  }) ?? [];

  return (
      <section className={styles.extensions_container}>
        {filteredExtensions.map((extension, index) => (
            <ExtensionCard
                key={index}
                name={extension.name}
                description={extension.description}
                logo={extension.logo}
                isActive={extension.isActive}
                onToggleChange={(newValue: boolean) => {
                  if (!data) return;
                  const updated = [...data];
                  const originalIndex = data.findIndex(d => d.name === extension.name);
                  if (originalIndex !== -1) {
                    updated[originalIndex] = {
                      ...updated[originalIndex],
                      isActive: newValue,
                    };
                    setData(updated);
                  }
                }}
                onRemove={() => {
                  if (!data) return;
                  const filtered = data.filter(d => d.name !== extension.name);
                  setData(filtered);
                }}
            />
        ))}
      </section>
  );
};
