"use client";

import {
  Stack,
  Box,
  Typography,
  TextField,
  Popover,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { appStore } from "./Store/appStore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function Filter() {
  const { darkMode } = appStore();
  const [anchorEl1, setAnchorEl1] = useState(null);
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
      }}
    >
      <TextField
        placeholder="Search for a country...."
        InputProps={{
          style: {
            color: darkMode ? "white" : "black",
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon sx={{ color: darkMode ? "white" : "black" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Typography>Filter by Region</Typography>
        <IconButton disableTouchRipple disableRipple disableFocusRipple onClick={(e) => setAnchorEl1(e.currentTarget)}>
          <KeyboardArrowDownIcon />
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
            }}
          >
            <Stack spacing={1}>
              <Typography sx={{ cursor: "pointer" }}>Africa</Typography>
              <Typography sx={{ cursor: "pointer" }}>Asia</Typography>
              <Typography sx={{ cursor: "pointer" }}>Europe</Typography>
              <Typography sx={{ cursor: "pointer" }}>Oceania</Typography>
            </Stack>
          </Box>
        </Popover>
      </Stack>
    </Stack>
  );
}

export default Filter;
