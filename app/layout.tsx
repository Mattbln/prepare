import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../../config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Cold Calling", "Vente", "Prospection"],
  authors: [
    {
      name: "joris",
      url: "https://jorisdelorme.fr",
    },
  ],
  creator: "joris",
  themeColor: [{ color: "#ffffff" }],
  openGraph: {
    type: "website",
    locale: "fr",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@joris_delorme_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
