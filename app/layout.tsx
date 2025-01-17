
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader';
import MainCartProvider from "@/components/providers/MainCartProvider";


const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin']

})





export const metadata: Metadata = {
  title: "TechTrust | Make It Yours",
  description: "An Trust worthy ecommerce web store.All in one place for the Latest Products and Assesories related to computer and electroncs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <MainCartProvider>

      <html lang="en">
        <body
          className={`${roboto.className} antialiased`}
          suppressHydrationWarning
          >
          <NextTopLoader
            showSpinner={false}
            />

          <header className="w-full sticky top-0 z-10">

            <Navbar />
          </header>
          <main className="w-full min-h-screen">

            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
            </MainCartProvider>
    </ClerkProvider>
  );
}
