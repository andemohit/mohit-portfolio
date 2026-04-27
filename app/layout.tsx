import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohit Ande — Senior Full-Stack Developer & Designer",
  description:
    "Mohit Ande — Senior Full-Stack Developer at ValueLabs. AI-augmented engineer & designer. 8+ years building production web apps.",
  authors: [{ name: "Mohit Ande" }],
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Full-Stack Developer",
    "UI/UX",
    "GenAI",
  ],
  openGraph: {
    title: "Mohit Ande — Senior Full-Stack Developer & Designer",
    description:
      "8+ years building production web apps — React, Next.js, TypeScript, Node.js, GenAI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
