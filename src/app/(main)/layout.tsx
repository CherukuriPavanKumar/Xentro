import React from "react";
import { FloatingNavDemo } from "@/components/navbar/Navbar";
import BackgroundRippleEffectDemo from "@/components/background-ripple-effect-demo";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FloatingNavDemo />
      <BackgroundRippleEffectDemo />
      {children}
    </>
  );
}