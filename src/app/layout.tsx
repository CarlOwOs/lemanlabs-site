import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LemanLabs",
  description: "Lightning-fast AI models at unbeatable prices. Build powerful AI applications with our simple, reliable API.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
