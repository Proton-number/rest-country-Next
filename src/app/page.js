import { motion } from "framer-motion";
import styles from "./page.module.css";
import Page from "./country/[countryId]/page";
import Filter from "@/Components/Filter";


export default function Home() {
  return (
    <>
      <Filter/>
      <Page/>
    </>
  );
}
