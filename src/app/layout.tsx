import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CoverParticles from "@/components/utilities/CoverParticles";
import { ScrollProvider } from "@/components/utilities/ScrollProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Juan Camilo Gonzalez Portfolio - Software developer",
    description: "Landing page made by Juan Camilo Gonzalez",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ScrollProvider>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-no-repeat BgGradientCover overflow-hidden flex`}
                >
                    <Navbar />
                    <CoverParticles />
                    {children}
                </body>
            </ScrollProvider>
        </html>
    );
}
