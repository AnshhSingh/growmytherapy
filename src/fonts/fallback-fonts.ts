import { Inter, Playfair_Display, Source_Sans_3 } from "next/font/google";

// Fallback fonts from Google Fonts if Freight fonts aren't available
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
});

// Inter as another alternative sans-serif option
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
