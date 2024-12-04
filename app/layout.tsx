import Navbar from "@/ui/navbar";
import type { Metadata } from "next";
import "./globals.css";
import VersionName from "@/ui/version-name";
import { ClerkProvider } from "@clerk/nextjs";
/*import { JetBrains_Mono } from "next/font/google";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "InternetBowser",
  description: "InternetBowser/ibgmd's homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7456236988733866" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7456236988733866"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="m-5 h-full antialiased flex flex-col">
        <ClerkProvider>
        <Navbar />
        <br />
        <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            {children}
          </div>
          <div className="flex-grow-0 flex items-center justify-center">
            <footer className="relative bottom-0 w-full rounded-xl flex flex-row justify-between items-center">
              <VersionName />
            </footer>
          </div>
        </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
