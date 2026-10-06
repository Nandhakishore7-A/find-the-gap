import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find the Gap — Startup opportunity intelligence",
  description: "Discover public launches, explore existing companies, and validate your next startup opportunity with source-linked research.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
