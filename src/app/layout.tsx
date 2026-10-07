import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ene-Sep 2026 — DELIKOS Sell-In",
  description: "Presentación ejecutiva enero-septiembre 2026 — facturación sell-in DELIKOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
