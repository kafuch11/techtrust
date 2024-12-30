
import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";

const roboto = Roboto({
  weight:['400','500'],
  subsets:['latin']

})





export const metadata: Metadata = {
  title: "TechTrust | Make It Yours",
  description: "An Trust worthy ecommerce web store.All in one place for the Latest Products and Assesories related to computer and electroncs.",
  icons:'/logo/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
           suppressHydrationWarning
      >
        <header className="w-full sticky top-0 z-10">

        <Navbar  />
        </header>
        <main className="w-full min-h-screen">

        {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
