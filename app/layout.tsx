import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/alexandria";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: "تطوير مصر | وحدات جاهزة للاستلام الفوري بمقدم 10% وتقسيط 9 سنين", template: "%s | تطوير مصر" },
  description: "مشروعات تطوير مصر: سينز المستقبل سيتي، المونت جلالة، بلوم فيلدز، فوكا باي وريفرز الشيخ زايد — وحدات جاهزة للاستلام الفوري بمقدم 10% وتقسيط 9 سنين مع سنة سماح.",
  openGraph: { type: "website", locale: "ar_EG", siteName: "تطوير مصر — Grandeur Spaces" },
};
export const viewport: Viewport = { themeColor: "#10232b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        {site.googleAdsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`} strategy="afterInteractive" />
            <Script id="gtag" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${site.googleAdsId}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
