// Helper function to transform the raw country data
const transformCountryData = (data) =>
  data.map((country) => ({
    name: country?.name?.common,
    population: country?.population,
    subregion: country?.subregion,
    region: country?.region,
    capital: country?.capital?.join(", "),
    tld: country?.tld?.join(", "),
    flags: country?.flags?.png,
    currencies: Object.values(country?.currencies || {})
      .map((c) => c.name)
      .join(", "),
    languages: Object.values(country?.languages || {}).join(", "),
    nativeName: Object.values(country?.name?.nativeName || {})
      .map((n) => n.common)
      .join(", "),
    borders: country.borders
      ? country.borders
          .map((borderCode) => {
            const borderCountry = data.find((c) => c.cca3 === borderCode);
            return borderCountry ? borderCountry.name.common : null;
          })
          .filter(Boolean)
          .join(", ")
      : "No border country",
  }));

import { create } from "zustand";

export const appStore = create((set) => ({
  darkMode: true,
  setDarkMode: (darkMode) => set(() => ({ darkMode })),

  error: null,
  fetchCountries: async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) throw new Error("Failed to fetch countries");

      const data = await response.json();
      const transformedData = transformCountryData(data);

      set({ error: null, query: transformedData });
    } catch (error) {
      set({ error: error.message });
    }
  },

  query: [],
  setQuery: (query) => set(() => ({ query })),
  searchedCountry: "",
  setSearchedCountry: (searchedCountry) => set(() => ({ searchedCountry })),
  selectedContinent: null,
  setSelectedContinent: (selectedContinent) =>
    set(() => ({ selectedContinent })),
}));
