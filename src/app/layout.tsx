import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { landingPageData } from "@/data/landingPageData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: landingPageData.seo.title,
  description: landingPageData.seo.description,
  keywords: landingPageData.seo.keywords,
  authors: [{ name: landingPageData.company.name }],
  openGraph: {
    title: landingPageData.seo.title,
    description: landingPageData.seo.description,
    type: "website",
    images: [
      {
        url: landingPageData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: landingPageData.company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: landingPageData.seo.title,
    description: landingPageData.seo.description,
    images: [landingPageData.seo.ogImage],
  },
  icons: {
    // Provide multiple icon entries (ICO + explicit PNG sizes) to improve
    // cross-browser compatibility and allow a cache-bust query when needed.
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
