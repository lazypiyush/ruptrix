import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ruptrix",
  description: "Finance and Savings App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Google AdSense script */}
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />

          {/* Google Search Console Verification */}
          <meta
            name="google-site-verification"
            content="gx9CRGyTaLtLhHb_k4klaEhprglpDrIti61jeRs86Kw"
          />
        </head>
        <body className={inter.className}>
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer (optional) */}
          {/*
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center">
              <p>Made by Web Men</p>
            </div>
          </footer>
          */}
        </body>
      </html>
    </ClerkProvider>
  );
}
