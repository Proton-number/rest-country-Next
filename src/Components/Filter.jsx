"use client";

import {
  Stack,
  Box,
  Typography,
  TextField,
  Popover,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { appStore } from "./Store/appStore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function Filter() {
  const { darkMode } = appStore();
  const [anchorEl1, setAnchorEl1] = useState(null);

  const continent = [
    { id: 1, name: "Africa" },
    { id: 2, name: "Asia" },
    { id: 3, name: "Europe" },
    { id: 4, name: "Oceania" },
  ];

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
      }}
    >
      <Paper elevation={4}>
        <TextField
          placeholder="Search for a country...."
          sx={{ width: { lg: "350px" } }}
          InputProps={{
            style: {
              color: darkMode ? "white" : "hsl(210, 22%, 22%)",
              backgroundColor: !darkMode ? "white" : "hsl(210, 22%, 22%)",
            },
            sx: {
              "& fieldset": {
                border: "none",
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon
                    sx={{ color: darkMode ? "white" : "hsl(210, 22%, 22%)k" }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Typography>Filter by Region</Typography>
        <IconButton
          disableTouchRipple
          disableRipple
          disableFocusRipple
          onClick={(e) => setAnchorEl1(e.currentTarget)}
        >
          <KeyboardArrowDownIcon
            sx={{ color: darkMode ? "white" : "hsl(210, 22%, 22%)k" }}
          />
        </IconButton>
        <Popover
          anchorEl={anchorEl1}
          open={Boolean(anchorEl1)}
          onClose={() => setAnchorEl1(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              textAlign: "left",
              width: "120px",
              color: darkMode ? "white" : "hsl(210, 22%, 22%)",
              backgroundColor: !darkMode ? "white" : "hsl(210, 22%, 22%)",
            }}
          >
            <Stack spacing={1}>
              {continent.map((data) => (
                <Typography key={data.id} sx={{ cursor: "pointer" }}>
                  {data.name}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Popover>
      </Stack>
    </Stack>
  );
}

export default Filter;
