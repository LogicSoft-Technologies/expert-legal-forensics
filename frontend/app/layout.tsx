import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";
import { SITE_CONFIG } from "@/lib/seo/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  ...generatePageMetadata({ ...ROUTES_CONFIG[""], path: "" }),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}