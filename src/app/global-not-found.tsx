// Import global styles and fonts
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-lg">This page does not exist.</p>
        </div>
      </body>
    </html>
  )
}
