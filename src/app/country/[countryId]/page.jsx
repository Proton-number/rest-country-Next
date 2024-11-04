"use client"; // Mark this file as a client component

import { Typography, Box, Stack, Paper } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { infinity } from "ldrs";
import { appStore } from "@/Components/Store/appStore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

infinity.register();

export default function Info() {
  const { countryId } = useParams();
  const { darkMode } = appStore();

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countryId) {
      fetch(`https://restcountries.com/v3.1/name/${countryId}`)
        .then((response) => response.json())
        .then((data) => setCountryData(data[0])) // Assuming the API returns an array
        .catch((error) => console.error("Error fetching country data:", error));
    }
  }, [countryId]);

  if (!countryData)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80dvh",
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

  return (
    <Stack>
      <Paper
        elevation={9}
        sx={{
          width: "fit-content",
          padding: "10px",
          backgroundColor: !darkMode ? "white" : "hsl(210, 22%, 22%)",
          marginLeft: { xs: "20px", sm: 0 },
        }}
      >
        <Link
          style={{
            color: darkMode ? "white" : "hsl(210, 22%, 22%)",
            textDecoration: "none",
          }}
          href={`/`}
        >
          <Stack direction="row" spacing={2}>
            <KeyboardBackspaceIcon />
            <Typography>Back</Typography>
          </Stack>
        </Link>
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" }, // Stack items vertically on small screens, horizontally on large screens
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px",
        }}
      >
        {/* Country Flag */}
        <Box
          component="img"
          sx={{
            width: { xs: "300px", sm: "550px" },
            height: "100%",
            aspectRatio: "16/9", // Set the desired aspect ratio (e.g., 16:9)
            objectFit: "cover",
            borderRadius: 2,
            marginBottom: { xs: 3, lg: 0 }, // Add bottom margin on smaller screens for vertical spacing
          }}
          src={countryData?.flags?.png}
          alt={`${countryData.name.common} flag`}
        />

        {/* Country Details */}
        <Stack spacing={4} sx={{ flex: 1, maxWidth: "650px" }}>
          <Typography variant="h4" fontWeight="bold">
            {countryData.name.common}
          </Typography>

          <Stack direction={{ sm: "row" }} spacing={4}>
            <Stack spacing={1}>
              <Typography>
                <b>Native Name:</b>{" "}
                {countryData.name.nativeName?.[
                  Object.keys(countryData.name.nativeName)[0]
                ]?.common || "N/A"}
              </Typography>
              <Typography>
                <b>Population:</b> {countryData.population.toLocaleString()}
              </Typography>
              <Typography>
                <b>Region:</b> {countryData.region}
              </Typography>
              <Typography>
                <b>Sub Region:</b> {countryData.subregion}
              </Typography>
              <Typography>
                <b>Capital:</b> {countryData.capital?.[0]}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography>
                <b>Top Level Domain:</b> {countryData.tld?.join(", ")}
              </Typography>
              <Typography>
                <b>Currencies:</b>{" "}
                {Object.values(countryData.currencies || {})
                  .map((cur) => cur.name)
                  .join(", ")}
              </Typography>
              <Typography>
                <b>Languages:</b>{" "}
                {Object.values(countryData.languages || {}).join(", ")}
              </Typography>
            </Stack>
          </Stack>

          {/* Border Countries */}
          {countryData.borders && (
            <Stack direction="row" spacing={1} mt={2}>
              <Typography>
                <b>Border Countries:</b>
              </Typography>
              {countryData.borders.map((border, index) => (
                <Paper
                  elevation={4}
                  key={index}
                  sx={{
                    padding: "5px 10px",
                    color: darkMode ? "white" : "hsl(210, 22%, 22%)",
                    bgcolor: darkMode ? "hsl(210, 22%, 22%)" : "white",
                    cursor: "pointer",
                  }}
                >
                  {border}
                </Paper>
              ))}
            </Stack>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}
