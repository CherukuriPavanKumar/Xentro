"use client";
import React, { useState } from "react";
import Students from "./students";
import Mentors from "./mentors";
import Investors from "./investors";
import Institutions from "./institutions";

export function ForWhom() {
  const [activeTab, setActiveTab] = useState("Students");

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {/* Outer glowing container */}
      <div className="rounded-2xl border border-indigo-500 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-[2px] shadow-lg hover:shadow-indigo-500/30 transition-all w-full max-w-6xl">
        
        {/* Inner dark container */}
        <div className="rounded-2xl bg-white dark:bg-slate-950 p-4 flex flex-col gap-4">
          
          {/* Tabs row */}
          <div className="flex flex-wrap justify-between gap-3">
            {["Students", "Mentors", "Investors", "Institutions"].map((tab) => (
              <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] h-25 md:h-16 lg:h-25 rounded-xl font-medium transition-all duration-300 ease-out
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    : "bg-gray-200 text-gray-800 dark:bg-slate-800 dark:text-gray-300 hover:bg-indigo-500/70 hover:text-white hover:-translate-y-0.5"
                } transition-colors`}
            >
              {tab}
            </button>
            
            ))}
          </div>

          {/* Body section */}
          <div className="w-full rounded-xl bg-gray-200 dark:bg-slate-900/70 p-8 flex items-center justify-center">
            {activeTab === "Students" && <Students />}
            {activeTab === "Mentors" && <Mentors />}
            {activeTab === "Investors" && <Investors />}
            {activeTab === "Institutions" && <Institutions />}
          </div>
        </div>
      </div>
    </div>
  );
}
