import type { Metadata } from "next";
import { Montserrat, Kantumruy_Pro } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Nav from "../../components/Home/Navbar/Nav";
import "./globals.css";
import Footer from "@/components/Home/Footer/Footer";

const latin = Montserrat({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const khmer = Kantumruy_Pro({
  weight: ["100","200","300","400","500","600","700"],
  subsets: ["khmer"], 
  variable: "--font-kantumruy",
});

export const metadata: Metadata = {
  title: "Committee for Community Service Program",
  description: "Organizes and promotes community service activities.",
  icons: {
    icon: "/header-logo.svg",
    shortcut: "/header-logo.svg",
    apple: "/header-logo.svg",
  },
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const params = await props.params; // <-- await here
  const { locale } = params;

  return (
    <html lang={locale} className={`${latin.variable} ${khmer.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider>
          <Nav />
          {props.children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


