"use client"; // Mark this file as a client component

import { appStore } from "@/Components/Store/appStore";
import {
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

import { infinity } from "ldrs";

infinity.register();

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

  if (!query)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60dvh",
        }}
      >
        <l-infinity
          size="55"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.3"
          color={darkMode ? "white" : "hsl(210, 22%, 22%)"}
        ></l-infinity>
      </Box>
    );

  const filteredCountries = query.filter((data) => {
    const isCountrySearched =
      searchedCountry === "" ||
      data.name.toLowerCase().includes(searchedCountry.toLowerCase());
    const isContinentSelected =
      selectedContinent === null || data.region === selectedContinent;
    return isCountrySearched && isContinentSelected;
  });
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3} justifyContent="center" >
        {filteredCountries.map((data, index) => (
          <Grid item key={index} xs={10} sm={6} md={4} lg={3}>
            <Card
              elevation={4}
              sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: darkMode
                  ? "hsl(210, 22%, 22%)"
                  : "hsl(0, 0%, 100%)",
                borderRadius: 2,
              }}
            >
              <Box component={motion.div} whileHover={{ scale: 1.03 }}>
                <CardMedia
                  component="img"
                  image={data.flags}
                  alt={data.name}
                  sx={{
                    aspectRatio: "16/10",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Link
                href={`/country/${data.name}`}
                style={{
                  color: darkMode ? "white" : "hsl(210, 22%, 22%)",
                  textDecoration: "none",
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <Typography variant="h5">
                      <b>{data.name}</b>
                    </Typography>
                    <Stack>
                      <Typography variant="body2">
                        <b>Population:</b> {data.population}
                      </Typography>
                      <Typography variant="body2">
                        <b> Region:</b> {data.region}
                      </Typography>
                      <Typography variant="body2">
                        <b> Capital:</b> {data.capital}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
