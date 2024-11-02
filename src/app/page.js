import { motion } from "framer-motion";
import styles from "./page.module.css";
import Info from "./country/[countryId]/page";
import Filter from "@/Components/Filter";
import Country from "./country/page";

export default function Home() {
  return (
    <>
      <Filter />
      <Country />
      <Info />
    </>
  );
}
