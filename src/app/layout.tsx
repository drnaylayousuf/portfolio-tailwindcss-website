import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hamburger from "@/components/hamburger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < Hamburger />
        

        
        
        {children}
        
        
        </body>
    </html>
  );
}
