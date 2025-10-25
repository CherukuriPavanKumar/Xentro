import React from "react";
import "../globals.css";

export default function EarlyBirdLayout({
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