import Navbar from '@/ui/navbar'
import type { Metadata } from "next";
import "./globals.css";


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
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7456236988733866"
      crossOrigin="anonymous"></script>
      </head>
      <body
        className="m-5 antialiased"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
