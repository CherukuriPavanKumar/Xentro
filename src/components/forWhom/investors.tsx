"use client";

import Image from "next/image";

export default function Investors() {
  return (
    <section className="w-full py-16 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-12
      bg-gray-100 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors">
      
      {/* Left Section: Text */}
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-bold mb-6">
          Deal flow designed for <span className="text-green-500 dark:text-green-400">Investors</span>
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Access vetted, early signals from top student builders and mentor‑led 
          teams. Track traction through shipped features, real users, and demo days—not slide decks.
          <br /><br />
          Discover founders early, support them meaningfully, and watch momentum 
          compound with transparent progress and milestones.
        </p>
        <button
          className="px-6 py-3 rounded-xl font-medium
            bg-gradient-to-r from-emerald-500 to-green-500 text-white
            hover:from-emerald-400 hover:to-green-400
            shadow-lg shadow-emerald-500/20
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
        >
          Explore opportunities
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/forWhom/investorsPic.jpg"
            alt="Investors illustration"
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
