import type { Route } from "./+types/home";
import type { ExtensionCardProps} from "~/types/ExtensionCardProps";
import styles from './home.module.css'
import {Header} from "~/components/header/Header";
import {FilterPanel} from "~/components/filter_panel/FilterPanel";
import {useState} from "react";
import {ExtensionGrid} from "~/components/extension_grid/ExtensionGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Browser Extensions UI" },
    { name: "Extensions", content: "Browser Extensions!" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const data: ExtensionCardProps[] = await import ('~/data.json').then(m => m.default);

  return {extensions: data};
}


export default function Home({loaderData}: Route.ComponentProps) {
  const { extensions } = loaderData;
  const filters: string[] = ['All', 'Active', 'Inactive']
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);
  const [data, setData] = useState<ExtensionCardProps[]>(extensions);


  return (
      <main className={styles.main_container}>
        <div className={styles.main_content}>
          <Header />
          <div className={styles.content}>
            <FilterPanel filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <ExtensionGrid activeFilter={activeFilter} data={data} setData={setData}/>
          </div>

        </div>

      </main>
  )
}
