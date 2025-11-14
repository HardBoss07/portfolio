import type {Metadata} from "next";
import {Roboto_Slab} from "next/font/google";
import "./globals.css";
import CookieConsent from "@/app/components/CookieConsent";

const robotoSlab = Roboto_Slab({
    variable: "--font-roboto-slab",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Matteo Bosshard | Portfolio",
    description: "Matteo Bosshard | Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${robotoSlab.variable} antialiased`}>
        {children}
        <CookieConsent/>
        </body>
        </html>
    );
}