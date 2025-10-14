"use client";
import React, { useEffect, useRef } from "react";

function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Student Innovation Hub",
      lightImg: "/features/image.png",
      darkImg: "/features/rocket.png",
      text: "A launchpad where students share ideas, projects, and early-stage startups.",
    },
    {
      title: "Mentorship Network",
      lightImg: "/features/Mentor bw.png",
      darkImg: "/features/Mentor wb.png",
      text: "Direct guidance from experienced entrepreneurs, professors, and industry experts.",
    },
    {
      title: "Investor Access",
      lightImg: "/features/Investor bw.png",
      darkImg: "/features/Investor wb.png",
      text: "Connects student founders with angel investors and Venture Capitalists.",
    },
    {
      title: "Institutional Support",
      lightImg: "/features/Institution bw.png",
      darkImg: "/features/Institution wb.png",
      text: "Students get matched with the right universities, incubators to support their specific needs.",
    },
    {
      title: "Events & Hackathons",
      lightImg: "/features/Events bw.png",
      darkImg: "/features/Events wb.png",
      text: "Central hub for entrepreneurship events, hackathons, and pitch nights.",
    },
    {
      title: "Collaborative Idea Building",
      lightImg: "/features/Collaboration bw.png",
      darkImg: "/features/Collaboration wb.png",
      text: "A space where students can post startup ideas and recruit co-founders or teammates.",
    },
  ];

  // 🌀 Auto-slide effect only on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const slideWidth = container.scrollWidth / cards.length;
    const interval = setInterval(() => {
      if (window.innerWidth < 768) { // only on mobile
        scrollAmount += slideWidth;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <div
        ref={scrollRef}
        className="
          flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4
          md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible
          [&::-webkit-scrollbar]:hidden
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              min-w-[85%] sm:min-w-[45%] md:min-w-0
              bg-white dark:bg-gray-900 rounded-2xl border border-black dark:border-white 
              shadow-lg p-6 flex flex-col items-center text-center 
              hover:shadow-xl transform transition-transform hover:scale-105
              snap-center
            "
          >
            <img
              src={card.lightImg}
              alt="icon"
              className="h-32 object-contain mb-4 dark:hidden"
            />
            <img
              src={card.darkImg}
              alt="icon"
              className="h-32 object-contain mb-4 hidden dark:block"
            />
            <h3 className="text-lg font-semibold text-black dark:text-gray-200">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-2 dark:text-gray-200">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
