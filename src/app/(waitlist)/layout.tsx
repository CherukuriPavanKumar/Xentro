import React from "react";
import "../globals.css";
import Particles from '@/components/Particles';

export default function WaitlistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-screen bg-background">
        {children}
      </div>
  );
}