"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { GradientButtonDemo } from "@/components/buttons";
import { MarqueeDemo } from "./integrations/marqueeDemo";
import { ForWhom } from "./forWhom/forWhom";
import FeaturesDemo from "./features/features-demo";
import Comparision from "./about/comparision";
import { TestimonialsSectionDemo } from "./testimonials/testimonialDemo";
import { PricingSectionDemo } from "./pricing/PricingDemo";
import { Footer } from "./footer/FooterDemo";
import { FloatingNavDemo } from "./navbar/Navbar";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      {/* Background first */}
      <BackgroundRippleEffect />

      {/* Navbar on top of background */}
      <div className="relative z-[5000] w-full">
        <FloatingNavDemo />
      </div>

      {/* Main Content */}
      <div id="home" className="relative z-10 mt-10 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl xl:max-w-5xl text-center text-3xl font-bold text-neutral-800 md:text-4xl lg:text-6xl xl:text-7xl dark:text-neutral-100 px-2">
          Igniting India&apos;s Next Generation of Entrepreneurs.
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-neutral-800 dark:text-gray-400">
          XENTRO is India&apos;s first digital incubator for students — connecting young innovators with mentors, investors, and institutions to turn ideas into thriving startups.
        </p>
        <div className="flex justify-center mt-10">
          <GradientButtonDemo />
        </div>
        <MarqueeDemo />
        <ForWhom />
        <section id="features"><FeaturesDemo /></section>
        <section id="about"><Comparision /></section>
        <TestimonialsSectionDemo />
        <section id="pricing"><PricingSectionDemo /></section>
        <section id="contact"><Footer /></section>
      </div>
    </div>
  );
}
