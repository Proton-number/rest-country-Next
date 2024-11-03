"use client"; // Mark this file as a client component

import { appStore } from "@/Components/Store/appStore";
import { Typography, Box, Stack, Grid2 } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Country() {
  const {
    darkMode,
    fetchCountries,
    query,
    searchedCountry,
    selectedContinent,
  } = appStore();
  useEffect(() => {
    fetchCountries(); // Fetches countries when the component mounts
  }, [fetchCountries]);

  if (!query) return <div>Loading...</div>;

  return (
    <>
      {query
        .filter((data) => {
          const isCountrySearched =
            searchedCountry === "" ||
            data.name.toLowerCase().includes(searchedCountry.toLowerCase());
          const isContinentSelected =
            selectedContinent === null || data.region === selectedContinent;

          if (isCountrySearched && isContinentSelected) {
            return data;
          }
          return null;
        })
        .map((data, index) => (
          <React.Fragment key={index}>
            <Link
              href={`/country/${data.name}`}
              style={{
                color: darkMode ? "white" : "hsl(210, 22%, 22%)",
                textDecoration: "none",
              }}
            >
              <Typography variant="h5">
                <b>{data.name}</b>
              </Typography>
            </Link>
          </React.Fragment>
        ))}
    </>
  );
}
