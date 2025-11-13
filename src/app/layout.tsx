import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Xentro - India's First Digital Incubator for Students",
  description: "XENTRO is India's first digital incubator for students — connecting young innovators with mentors, investors, and institutions to turn ideas into thriving startups.",
  keywords: ["incubator", "students", "startups", "entrepreneurship", "India", "mentorship", "innovation"],
  authors: [{ name: "Xentro" }],
  creator: "Xentro",
  publisher: "Xentro",
  metadataBase: new URL('https://xentro.in'), 
  icons: {
    icon: [
      { url: '/XENTRO-WHITE.png', type: 'image/png' },
      { url: '/XENTRO-WHITE.png', sizes: '32x32', type: 'image/png' },
      { url: '/XENTRO-WHITE.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/XENTRO-WHITE.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/XENTRO-WHITE.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xentro.in', 
    title: "Xentro - India's First Digital Incubator for Students",
    description: "XENTRO is India's first digital incubator for students — connecting young innovators with mentors, investors, and institutions to turn ideas into thriving startups.",
    siteName: 'Xentro',
    images: [
      {
        url: '/XENTRO-WHITE.png',
        width: 1200,
        height: 630,
        alt: 'Xentro Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xentro - India's First Digital Incubator for Students",
    description: "XENTRO is India's first digital incubator for students — connecting young innovators with mentors, investors, and institutions to turn ideas into thriving startups.",
    images: ['/XENTRO-WHITE.png'],
    creator: '@xentro', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/XENTRO-WHITE.png" type="image/png" />
        <link rel="apple-touch-icon" href="/XENTRO-WHITE.png" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="xentro-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
