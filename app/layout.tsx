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
      <body
        className="m-5 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
