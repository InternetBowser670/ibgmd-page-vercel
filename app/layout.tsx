import Navbar from "@/ui/navbar";
import type { Metadata } from "next";
import "./globals.css";
import VersionName from "@/ui/version-name";
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
    <html lang="en">
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
      <body className="relative m-5 antialiased">
        <Navbar />
        <div className="flex flex-col justify-between">
          {children}
          <div className="flex flex-col justify-between">
            <br />
            <br />
            <br />
            <br />
            <footer className="absolute bottom-0 flex width-full rounded-xl flex-row justify-between content-center">
              <VersionName />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
