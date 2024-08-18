import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavLinks } from "@/ui/components/NavLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pdramirez",
  description: "Pdramirez by Pablo Diaz Ramirez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
