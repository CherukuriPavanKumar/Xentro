"use client";

import Image from "next/image";

export default function Mentors() {
  return (
    <section className="w-full py-16 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-12
      bg-gray-100 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors">
      
      {/* Left Section: Text */}
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-bold mb-6">
          A platform that empowers <span className="text-indigo-500 dark:text-blue-400">Mentors</span>
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Share your hard‑won experience where it matters most. Guide motivated 
          students through live sprints, code reviews, and product critiques—without the admin overhead. 
          <br /><br />
          We match you with high‑intent learners, streamline scheduling, and 
          highlight your impact with verifiable outcomes and mentor profiles.
        </p>
        <button
          className="px-6 py-3 rounded-xl font-medium
            bg-gradient-to-r from-indigo-500 to-blue-500 text-white
            hover:from-indigo-400 hover:to-blue-400
            shadow-lg shadow-indigo-500/20
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
        >
          Become a mentor
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/forWhom/mentorsPic.jpg"
            alt="Mentors illustration"
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

