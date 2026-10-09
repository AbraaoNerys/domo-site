import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";


const siteUrl =
  process.env.SITE_URL || "https://domo-site-theta.vercel.app";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: "variable",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: "variable",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Escritório DOMO",
    template: "%s | Escritório DOMO",
  },

  description:
    "Salas de reunião e escritórios privativos em ambientes profissionais no Evolution Business Center, em João Pessoa.",

  applicationName: "Escritório DOMO",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Escritório DOMO",
    title: "Escritório DOMO",
    description:
      "Salas de reunião e escritórios privativos em ambientes profissionais no Evolution Business Center, em João Pessoa.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Escritório DOMO",
    description:
      "Salas de reunião e escritórios privativos em ambientes profissionais no Evolution Business Center, em João Pessoa.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${dmSans.variable} bg-ink antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
