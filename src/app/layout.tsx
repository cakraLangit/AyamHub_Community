import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxLayout from "@/components/ReduxLayout"; // Import Client Component









// Font imports
const geistSans = localFont({
  src: "./fonts/RacingSansOne-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/RacingSansOne-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application (Server-only feature)
export const metadata: Metadata = {
  title: "Create Ecommerce",
  description: "Hellod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Wrap the entire app with ReduxProvider */}
        <ReduxLayout>
          {children}
        </ReduxLayout>
      </body>
    </html>
  );
}
