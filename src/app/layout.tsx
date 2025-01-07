"use client";
import "./globals.css"; // Global styles
import Footer from "./components/layout/Footer";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import AbsoluteLogo from "../../public/images/AbsoluteLogo.png";
// Importing Inter font
const inter = Inter({ subsets: ["latin"], weight: ["300", "500"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.setAttribute("cz-shortcut-listen", "true");
  }, []);
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.jumierahouse.com" />
        {/* JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Jumiera House",
              description: "A luxury housing platform",
              url: "https://www.jumierahouse.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai", // Replace with actual location if different
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              telephone: "+971 123 4567", // Replace with your contact number
              email: "contact@jumierahouse.com", // Replace with your contact email
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-[#474747]">
        <main>{children}</main>
        <Footer
          logo={AbsoluteLogo} // Assuming AbsoluteLogo is imported from an image file
          links={[
            { label: "О проекте", href: "#about" },
            { label: "Планировки", href: "#layouts" },
            { label: "Застройщик", href: "#developer" },
            { label: "Контакты", href: "#contact" },
          ]}
          address="каспийск, проспект Акулиничева, 21"
          phoneNumber="+7 (928) 210-00-00"
          copyright="© 2024 JUMEIRA HOUSE."
        />
      </body>
    </html>
  );
}
