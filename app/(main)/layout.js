import React from 'react';
import Script from 'next/script';

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto my-32">
      {/* Google AdSense script */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {children}
    </div>
  );
};

export default MainLayout;
