import type { Metadata, Viewport } from "next";
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
  title: {
    default: "La Banda de Oriente - El aguante de una tradición",
    template: "%s | La Banda de Oriente",
  },
  description: "El aguante de una tradición.",
  metadataBase: new URL("https://lboriente.com"),
  applicationName: "La Banda de Oriente",
  keywords: [
    "La Banda de Oriente",
    "LBOriente",
    "Polla LBOriente",
    "Polla Mundial",
    "fútbol",
    "hinchas",
    "Millonarios",
  ],
  authors: [
    {
      name: "La Banda de Oriente",
      url: "https://lboriente.com",
    },
  ],
  creator: "La Banda de Oriente",
  publisher: "La Banda de Oriente",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "La Banda de Oriente - El aguante de una tradición",
    description: "El aguante de una tradición.",
    url: "https://lboriente.com",
    siteName: "La Banda de Oriente",
    images: [
      {
        url: "/logo-lboriente.png",
        width: 1200,
        height: 1200,
        alt: "La Banda de Oriente",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Banda de Oriente - El aguante de una tradición",
    description: "El aguante de una tradición.",
    images: ["/logo-lboriente.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}