import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "@/components/section/profilecard";
import SideNav from "@/components/common/sidenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santosh Bhandari",
  description: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <div className="lg:grid lg:grid-cols-3 min-h-screen text-white font-[family-name:var(--font-geist-sans)]">
        
              <ProfileCard />
        
              <div  className={`
                  lg:col-span-2 lg:col-start-2
                  bg-slate-900 relative
                `}>
                <SideNav />
               {children}
              </div>
            </div>
      </body>
    </html>
  );
}
