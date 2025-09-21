import React from 'react'

function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {/* Card 1 */}
      <div className="bg-white dark:bg-slate-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
        <img src="/features/1stCard.png" alt="icon" className="h-32 object-cover mb-4" />
        <h3 className="text-xl font-semibold text-black">Student Innovation Hub</h3>
        <p className="text-gray-600 mt-2">
        A launchpad where students share ideas, projects, and early-stage startups.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-slate-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
        <img src="/features/Mentor.png" alt="icon" className="h-32 object-contain mb-4" />
        <h3 className="text-lg font-semibold text-black">Mentorship Network</h3>
        <p className="text-gray-600 mt-2">
        Direct guidance from experienced entrepreneurs, professors, and industry experts.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-slate-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
        <img src="/features/Investor.png" alt="icon" className="h-32 object-contain mb-4" />
        <h3 className="text-lg font-semibold text-black">Investor Access</h3>
        <p className="text-gray-600 mt-2">
        Connects student founders with angel investors and Venture Capitalists.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white dark:bg-slate-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
        <img src="/features/Institution.png" alt="icon" className="h-32 object-contain mb-4" />
        <h3 className="text-lg font-semibold text-black">Institutional Support</h3>
        <p className="text-gray-600 mt-2">
        Students get matched with the right universities, incubators to support their specific needs.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white dark:bg-slate-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
        <img src="/features/Events.png" alt="icon" className="h-32 object-contain mb-4" />
        <h3 className="text-lg font-semibold text-black">Events & Hackathons</h3>
        <p className="text-gray-600 mt-2">
        Central hub for entrepreneurship events, hackathons, and pitch nights
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white dark:bg-slate-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
        <img src="/features/Collaboration.png" alt="icon" className="h-32 object-contain mb-4" />
        <h3 className="text-lg font-semibold text-black">Collaborative Idea Building</h3>
        <p className="text-gray-600 mt-2">
        A space where students can post startup ideas and recruit co-founders or teammates.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Features
