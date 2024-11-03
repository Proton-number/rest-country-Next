"use client"; // Mark this file as a client component

import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Info() {
  const { countryId } = useParams();

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countryId) {
      fetch(`https://restcountries.com/v3.1/name/${countryId}`)
        .then((response) => response.json())
        .then((data) => setCountryData(data[0])) // Assuming the API returns an array
        .catch((error) => console.error("Error fetching country data:", error));
    }
  }, [countryId]);

  if (!countryData) return <div>Loading country details...</div>;

  return (
    <div>
      <Typography variant="h2">{countryData.name.common}</Typography>
      <Typography variant="body1">Capital: {countryData.capital}</Typography>
      <Typography variant="body1">Region: {countryData.region}</Typography>
      <Typography variant="body1">
        Population: {countryData.population}
      </Typography>
    </div>
  );
}
