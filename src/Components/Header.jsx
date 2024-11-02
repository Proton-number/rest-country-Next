"use client";
import { IconButton, Stack, Typography, AppBar, Toolbar } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { appStore } from "./Store/appStore";

export default function Header() {
  const { darkMode, setDarkMode } = appStore();

  return (
    <AppBar
      sx={{
        backgroundColor: darkMode ? "hsl(210, 22%, 22%)" : "hsl(0, 0%, 100%)",
        color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(210, 22%, 22%)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography>Where in the world?</Typography>

        <Stack direction="row" sx={{ alignItems: "center" }}>
          {!darkMode ? (
            <>
              <IconButton onClick={() => setDarkMode(true)}>
                <DarkModeIcon sx={{  color: "black" }} />
              </IconButton>
              <Typography>Dark Mode</Typography>
            </>
          ) : (
            <>
              <IconButton onClick={() => setDarkMode(false)}>
                <LightModeIcon sx={{color: "white",}} />
              </IconButton>
              <Typography>Light Mode</Typography>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
