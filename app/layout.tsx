import "./globals.css";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import Layouts from "@/common/components/layouts/index";
import { soraSans } from "../common/styles/fonts";
import ThemeProviderContext from "../context/theme";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { METADATA_GLOBAL } from "@/common/constant/metadata";

export const metadata: Metadata = {
  description: METADATA_GLOBAL.description,
  keywords: METADATA_GLOBAL.keywords,
  creator: METADATA_GLOBAL.creator,
  authors: {
    name: METADATA_GLOBAL.creator,
    url: METADATA_GLOBAL.url,
  },
  openGraph: {
    images: METADATA_GLOBAL.images,
    url: METADATA_GLOBAL.url,
    siteName: METADATA_GLOBAL.siteName,
    locale: METADATA_GLOBAL.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={soraSans.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
        {process.env.NODE_ENV === "production" && <Analytics />}

        <GoogleAnalytics measurementId={process.env.GTM_ID || ""} />
      </body>
    </html>
  );
}
