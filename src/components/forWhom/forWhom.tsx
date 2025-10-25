"use client";
import React, { useState } from "react";
import Students from "./students";
import Mentors from "./mentors";
import Investors from "./investors";
import Institutions from "./institutions";

export function ForWhom() {
  const [activeTab, setActiveTab] = useState("Students");

  return (
    <div className="flex justify-center items-center px-4 ">
      <div className="w-full max-w-6xl">
        
        {/* Outer glowing container */}
        <div className="rounded-2xl border border-gray-500 p-[2px] shadow-lg hover:white transition-all w-full">
          
          {/* Inner dark container */}
          <div className="rounded-2xl bg-white dark:bg-black p-4 flex flex-col gap-4">
            
            {/* Tabs row */}
            <div className="flex flex-wrap justify-between gap-3">
              {["Students", "Mentors", "Investors", "Institutions"].map((tab) => (
                <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[120px] h-25 md:h-16 lg:h-25 rounded-xl font-medium transition-all ease-out
                  ${
                    activeTab === tab
                      ? "bg-black dark:bg-white text-white dark:text-black hover:-translate-y-0.5"
                      : "bg-gray-200 text-gray-800 dark:bg-slate-800 dark:text-gray-300 hover:bg-black hover:text-white hover:-translate-y-0.5 dark:hover:bg-white dark:hover:text-black"
                  } transition-colors`}
              >
                {tab}
              </button>
              
              ))}
            </div>

            {/* Body section */}
            <div className="w-full rounded-xl flex items-center justify-center">
              {activeTab === "Students" && <Students />}
              {activeTab === "Mentors" && <Mentors />}
              {activeTab === "Investors" && <Investors />}
              {activeTab === "Institutions" && <Institutions />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
