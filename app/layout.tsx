import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://passwordgenerator.krishaiworks.com"
  ),

  title: "Password Generator | Create Strong & Secure Passwords",

  description:
    "Generate strong, secure, and random passwords online with the free Password Generator by KrishAIWorks. Create secure passwords instantly with customizable options.",

  keywords: [
    "Password Generator",
    "Strong Password Generator",
    "Secure Password Generator",
    "Random Password Generator",
    "Online Password Generator",
    "Free Password Generator",
    "Generate Strong Password",
    "Secure Password Maker",
    "Random Password Maker",
    "Password Generator Online",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.vercel.app",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  alternates: {
    canonical:
      "https://passwordgenerator.krishaiworks.com/",
  },

  openGraph: {
    title: "Password Generator | KrishAIWorks",
    description:
      "Generate strong, secure, and random passwords online with the free Password Generator by KrishAIWorks.",
    url: "https://passwordgenerator.krishaiworks.com/",
    siteName: "KrishAIWorks",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Password Generator | KrishAIWorks",
    description:
      "Create strong and secure random passwords online instantly.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishaiworks.com/#organization",
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://krishaiworks.com/#website",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks",
      description:
        "AI-powered tools, productivity utilities, automation, chatbots, websites and custom digital solutions.",
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      "@id":
        "https://passwordgenerator.krishaiworks.com/#webapplication",
      name: "Password Generator",
      url: "https://passwordgenerator.krishaiworks.com/",
      description:
        "Generate strong, secure, and random passwords online with the free Password Generator by KrishAIWorks. Create secure passwords instantly with customizable options.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://passwordgenerator.krishaiworks.com/#webpage",
      url: "https://passwordgenerator.krishaiworks.com/",
      name: "Password Generator | Create Strong & Secure Passwords",
      description:
        "Generate strong, secure, and random passwords online with the free Password Generator by KrishAIWorks. Create secure passwords instantly with customizable options.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      about: {
        "@id":
          "https://passwordgenerator.krishaiworks.com/#webapplication",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          id="password-generator-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}