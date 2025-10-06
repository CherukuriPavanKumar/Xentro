import React from "react";
import "../globals.css";
import Particles from '@/components/Particles';

export default function WaitlistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}