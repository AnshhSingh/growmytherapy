import type { Metadata } from "next";
import "./globals.css";
import { freightDisplayPro, freightSansPro } from "../fonts/fonts";

export const metadata: Metadata = {
  title: "Dr. Serena Blake | Clinical Psychologist",
  description: "Offering individual psychotherapy for adults via telehealth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${freightDisplayPro.variable} ${freightSansPro.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
