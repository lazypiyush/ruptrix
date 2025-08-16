import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import Script from "next/script";

export default function Layout() {
  return (
    <div className="px-5">
      {/* Google AdSense script */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight gradient-title">
          Dashboard
        </h1>
      </div>

      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}
