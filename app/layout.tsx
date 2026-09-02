import "./globals.css";
import type { Metadata } from "next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}