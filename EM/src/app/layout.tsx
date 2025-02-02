import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/(Navbar)/navbar";
import Footer from "@/components/(Landing All Pages)/(Footer)/footer";
import { CartProvider } from "./context/cardContext";
import { ToastContainer } from "react-toastify";
import {
  ClerkProvider,
  } from '@clerk/nextjs'




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        

<ToastContainer />
<CartProvider>
        <Navbar/>
      
      {children}
   
        <Footer/>
</CartProvider>


      </body>
    </html>
    </ClerkProvider>
  );
}
