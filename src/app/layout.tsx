import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import "./globals.css";
import { FloatingNavDemo } from "@/components/navbar/Navbar";
import { GoogleGeminiEffectDemo } from "@/components/google-gemini-demo";
import BackgroundRippleEffectDemo from "@/components/background-ripple-effect-demo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FloatingNavDemo />
        {/* <GoogleGeminiEffectDemo /> */}
        {/* <BackgroundRippleEffect rows={50} cols={30} cellSize={56} /> */}
        <BackgroundRippleEffectDemo />
        {children}
      </body>
    </html>
  );
}
