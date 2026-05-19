import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quickd Fintech | Business Loan & Financial Consultancy",

  description:
    "Quickd Fintech provides Business Loans, Home Loans, Car Loans, MSME Funding, Project Finance and financial consultancy services in Vadodara and Rajkot.",

  keywords: [
    "Business Loan",
    "Car Loan",
    "Home Loan",
    "MSME Loan",
    "Project Finance",
    "Financial Consultancy",
    "Quickd Fintech",
    "Vadodara Loan",
    "Rajkot Finance",
  ],

  authors: [{ name: "Quickd Fintech" }],

  openGraph: {
    title: "Quickd Fintech",

    description:
      "Smart Tech. Fast Lending. Professional consultancy for business loans and financial solutions.",

    url: "https://quickd-fintech.vercel.app/",

    siteName: "Quickd Fintech",

    images: [
      {
        url: "/KRUTIKA DODIYA.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
