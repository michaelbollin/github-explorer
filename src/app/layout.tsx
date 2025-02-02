import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from '@/providers/QueryProvider';
import { GlobalProvider } from "@/contexts/GlobalContext";
import { DEFAULT_SERVER_SORT } from '@/config/constants'
import { ToastProvider } from '@/contexts/ToastContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Github explorer",
  description: "Search for repositories on Github using the Github API",
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
        <ToastProvider>
          <Suspense>
            <GlobalProvider defaultSort={DEFAULT_SERVER_SORT}>
              <QueryProvider>
                {children}
              </QueryProvider>
            </GlobalProvider>
          </Suspense>
        </ToastProvider>
      </body>
    </html>
  );
}
