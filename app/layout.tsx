import type { Metadata } from "next";

import { getAbsoluteSiteUrl, siteRoot } from "./config/site";

import "./globals.css";

const socialImageUrl = getAbsoluteSiteUrl("og.png");
const faviconUrl = getAbsoluteSiteUrl("favicon.svg");

export const metadata: Metadata = {
  metadataBase: new URL(siteRoot),
  title: "Ritwik Katiyar — Data & AI",
  description:
    "Healthcare data science, artificial intelligence, and applied research by Ritwik Katiyar.",
  authors: [{ name: "Ritwik Katiyar" }],
  creator: "Ritwik Katiyar",
  alternates: {
    canonical: siteRoot,
  },
  openGraph: {
    title: "Ritwik Katiyar — Data & AI",
    description:
      "Healthcare AI and data-science work across clinical records, text, and radiographs.",
    type: "website",
    url: siteRoot,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Ritwik Katiyar — Data & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritwik Katiyar — Data & AI",
    description:
      "Healthcare AI and data-science work across clinical records, text, and radiographs.",
    images: [socialImageUrl],
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
