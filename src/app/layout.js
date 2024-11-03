import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Header";
import { Box } from "@mui/material";
import BackgroundSetter from "@/Components/BackgroundSetter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Rest Countries",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon-32x32.png", // Default icon for most platforms
    apple: "/favicon-32x32.png", // Specific icon for Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Box
          sx={{ paddingTop: "100px", maxWidth: { sm: "90vw" }, margin: "auto" }}
        >
          <BackgroundSetter />
          {children}
        </Box>
      </body>
    </html>
  );
}
