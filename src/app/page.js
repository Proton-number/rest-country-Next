import styles from "./page.module.css";
import Filter from "@/Components/Filter";
import Country from "./country/page";

export default function Home() {
  return (
    <>
      <Filter />
      <Country />
    </>
  );
}
