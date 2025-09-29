import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laxmishreeinvestment.com"), // Replace with your actual domain
  title: {
    template: "%s | Laxmi Shree Investment - Trusted Investment Solutions",
    default: "Laxmi Shree Investment - Trusted Investment Solutions in Nepal",
  },
  description: "Laxmi Shree Investment is Nepal's leading investment company providing comprehensive financial solutions, portfolio management, and wealth building services. Trust us for your investment journey with expert guidance and proven results.",
  keywords: [
    "Investment Company Nepal",
    "Financial Services Nepal",
    "Portfolio Management",
    "Wealth Management Nepal",
    "Investment Advisory",
    "Financial Planning Nepal",
    "Stock Market Investment",
    "Mutual Funds Nepal",
    "Retirement Planning",
    "Asset Management",
    "Laxmi Shree Investment",
    "Nepal Investment Firm",
    "Financial Consultant Nepal"
  ],
  authors: [{ name: "Laxmi Shree Investment" }],
  creator: "Laxmi Shree Investment",
  publisher: "Laxmi Shree Investment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laxmishreeinvestment.com", // Replace with your actual domain
    siteName: "Laxmi Shree Investment",
    title: "Laxmi Shree Investment - Trusted Investment Solutions in Nepal",
    description: "Nepal's leading investment company providing comprehensive financial solutions, portfolio management, and wealth building services. Expert guidance for your financial growth.",
    images: [
      {
        url: "/og-image.jpg", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Laxmi Shree Investment - Financial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxmi Shree Investment - Trusted Investment Solutions",
    description: "Nepal's leading investment company providing comprehensive financial solutions and wealth management services.",
    images: ["/og-image.jpg"],
    creator: "@laxmishreeinv", // Replace with your actual Twitter handle
  },
  alternates: {
    canonical: "https://laxmishreeinvestment.com", // Replace with your actual domain
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#DC9320" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Schema.org structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Laxmi Shree Investment",
              "description": "Leading investment company in Nepal providing comprehensive financial solutions and wealth management services.",
              "url": "https://laxmishreeinvestment.com",
              "logo": "https://laxmishreeinvestment.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NP",
                "addressLocality": "Kathmandu", // Update with your city
                "addressRegion": "Bagmati", // Update with your region
              },
              "sameAs": [
                "https://www.facebook.com/laxmishreeinvestment", // Add your social media
                "https://www.linkedin.com/company/laxmishreeinvestment",
                "https://twitter.com/laxmishreeinv"
              ],
              "serviceType": "Investment Services",
              "areaServed": "Nepal"
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <main>{children}</main>
        
        {/* Google Analytics - Add your GA4 tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
      </body>
    </html>
  );
}