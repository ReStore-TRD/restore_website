import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/montserrat";
import iconImage from "./assets/logos/icon.png";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReStore",
  description: "Generated by ReStore Developers"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href= "./icon.png" />
      </Head>
      <body className='font-montserrat text-justify  ${inter.className}'>
        <Navigation/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
