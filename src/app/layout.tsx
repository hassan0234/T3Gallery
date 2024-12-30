import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "~/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T3-Gallery",
  description: "Created with Learning and love!",
};

function TopNav() {
  return (
    <div className="flex justify-between items-center w-full p-4 border-b">
      <h1 className="text-xl font-semibold">T3-Gallery</h1>
      <h1 className="text-xl font-semibold">Sign In</h1>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-4`}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
