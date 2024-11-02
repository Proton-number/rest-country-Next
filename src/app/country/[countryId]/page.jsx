"use client"; // Mark this file as a client component

import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <>
      <motion.h2
        whileHover={{ x: -40 }} // Apply Framer Motion props directly here
      >
        Hello World
      </motion.h2>
    </>
  );
}
