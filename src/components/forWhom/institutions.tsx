"use client";

import Image from "next/image";
import Link from "next/link";

export default function Institutions() {
  return (
    <section className="w-full py-16 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-12
      bg-gray-100 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors">
      
      {/* Left Section: Text */}
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-bold mb-6">
          Outcomes that matter for Institutions
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Turn classrooms into launchpads. Xentro embeds project‑based learning, 
          industry mentorship, and investor feedback into your programs—so students 
          graduate with real products, not just grades.
          <br /><br />
          Showcase institutional impact with measurable outcomes: shipped projects, 
          placements, and partnerships.
        </p>
        <Link href="/signup">
        <button
          className="px-6 py-3 rounded-xl font-medium
            bg-gray-900 text-white dark:bg-white dark:text-gray-900
            hover:bg-gray-800 dark:hover:bg-gray-100
            shadow-lg shadow-gray-900/20 dark:shadow-white/20
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
        >
          Bring Xentro to Campus
        </button>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/forWhom/institutionsPic.jpg"
            alt="Institutions illustration"
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
