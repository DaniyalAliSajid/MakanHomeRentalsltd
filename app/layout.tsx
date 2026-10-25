import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#070C12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://makanhomerentalsltd.com"),
  title: "Makan Home Rentals | Premier UK Property Management",
  description:
    "Makan Home Rentals Ltd — Premier UK residential property management, high-end lettings, guaranteed rent schemes, and bespoke asset care across prime London postcodes.",
  keywords: [
    "UK Property Management",
    "London Luxury Rentals",
    "Makan Home Rentals Ltd",
    "Mayfair Property Lettings",
    "Guaranteed Rent London",
    "High-End British Real Estate",
    "ARLA Propertymark Agent",
  ],
  authors: [{ name: "Makan Home Rentals Ltd" }],
  openGraph: {
    title: "Makan Home Rentals | Premier UK Property Management",
    description:
      "Bespoke property asset management and high-yield luxury lettings across London and prime UK postcodes.",
    url: "https://makanhomerentalsltd.com",
    siteName: "Makan Home Rentals Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Makan Home Rentals Ltd - Premier UK Property Management",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makan Home Rentals | Premier UK Property Management",
    description:
      "Bespoke property asset management and high-yield luxury lettings across London and prime UK postcodes.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${jakarta.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-sans antialiased selection:bg-brand-gold/30 selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
