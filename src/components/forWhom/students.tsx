"use client";

import Image from "next/image";
import Link from "next/link";

export default function Students() {
  return (
    <section className="w-full py-16 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-12
      bg-gray-100 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors">
      
      {/* Left Section: Text */}
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-bold mb-6">
          Built for ambitious <span className="text-blue-500 dark:text-blue-400">Students</span>
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Land internships, ship real projects, and learn directly from experts. 
          Xentro connects you with mentors, sprints, and investor-backed challenges 
          so you can build a portfolio that actually gets you hired.
          <br /><br />
          From idea to launch, get the guidance, resources, and feedback you need 
          to move fast and stand out.
        </p>
        <Link href="/signup">
        <button
          className="px-6 py-3 rounded-xl font-medium
            bg-gradient-to-r from-blue-500 to-cyan-500 text-white
            hover:from-blue-400 hover:to-cyan-400
            shadow-lg shadow-blue-500/20
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
        >
          Start your journey
        </button>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/forWhom/studentsPic.jpg"
            alt="Students illustration"
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
