"use client";

import { useEffect } from "react";
import { appStore } from "./Store/appStore";

const BackgroundSetter = () => {
  const { darkMode } = appStore();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? "hsl(210, 22%, 22%)"
      : "hsl(0, 0%, 100%)";
       document.body.style.color = !darkMode
         ? "hsl(210, 22%, 22%)"
         : "hsl(0, 0%, 100%)";
  }, [darkMode]);

  return null; // Render nothing, this component is only for setting the background
};

export default BackgroundSetter;
