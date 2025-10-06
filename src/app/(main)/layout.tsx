import React from "react";
import BackgroundRippleEffectDemo from "@/components/background-ripple-effect-demo";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackgroundRippleEffectDemo />
      {children}
    </>
  );
}