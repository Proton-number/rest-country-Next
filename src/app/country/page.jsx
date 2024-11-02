"use client"; // Mark this file as a client component

import { appStore } from "@/Components/Store/appStore";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Country() {
  const { countries, fetchCountries } = appStore();
    useEffect(() => {
      fetchCountries(); // Fetches countries when the component mounts
    }, [fetchCountries]);

    if(!countries) return  <div>Loading...</div>;


  return (
    <>
      <motion.h2>Countries</motion.h2>
    </>
  );
}
