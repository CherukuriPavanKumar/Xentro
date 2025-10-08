import React from 'react'

function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-black dark:border-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition transform transition-transform hover:scale-105">
        <img src="/features/image.png" alt="icon" className="h-32 object-cover mb-4 dark:hidden" />
        <img src="/features/rocket.png" alt="icon" className="h-32 object-cover mb-4 hidden dark:block" />

        <h3 className="text-xl font-semibold text-black dark:text-gray-200">Student Innovation Hub</h3>
        <p className="text-gray-600 dark:text-gray-200 mt-2">
        A launchpad where students share ideas, projects, and early-stage startups.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-black dark:border-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition transform transition-transform hover:scale-105">
        <img src="/features/Mentor bw.png" alt="icon" className="h-32 object-contain mb-4 dark:hidden" />
        <img src="/features/Mentor wb.png" alt="icon" className="h-32 object-contain mb-4 hidden dark:block" />
        <h3 className="text-lg font-semibold text-black dark:text-gray-200">Mentorship Network</h3>
        <p className="text-gray-600 mt-2 dark:text-gray-200">
        Direct guidance from experienced entrepreneurs, professors, and industry experts.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-black dark:border-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition transform transition-transform hover:scale-105">
        <img src="/features/Investor bw.png" alt="icon" className="h-32 object-contain mb-4 dark:hidden" />
        <img src="/features/Investor wb.png" alt="icon" className="h-32 object-contain mb-4 hidden dark:block" />

        <h3 className="text-lg font-semibold text-black dark:text-gray-200">Investor Access</h3>
        <p className="text-gray-600 mt-2 dark:text-gray-200">
        Connects student founders with angel investors and Venture Capitalists.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-black dark:border-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition transform transition-transform hover:scale-105">
        <img src="/features/Institution bw.png" alt="icon" className="h-32 object-contain mb-4 dark:hidden" />
        <img src="/features/Institution wb.png" alt="icon" className="h-32 object-contain mb-4 hidden dark:block" />
        <h3 className="text-lg font-semibold text-black dark:text-gray-200">Institutional Support</h3>
        <p className="text-gray-600 mt-2 dark:text-gray-200">
        Students get matched with the right universities, incubators to support their specific needs.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-black dark:border-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition transform transition-transform hover:scale-105">
        <img src="/features/Events bw.png" alt="icon" className="h-32 object-contain mb-4 dark:hidden" />
        <img src="/features/Events wb.png" alt="icon" className="h-32 object-contain mb-4 hidden dark:block" />
        <h3 className="text-lg font-semibold text-black dark:text-gray-200">Events & Hackathons</h3>
        <p className="text-gray-600 mt-2 dark:text-gray-200">
        Central hub for entrepreneurship events, hackathons, and pitch nights
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-black dark:border-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition transform transition-transform hover:scale-105">
        <img src="/features/Collaboration bw.png" alt="icon" className="h-32 object-contain mb-4 dark:hidden" />
        <img src="/features/Collaboration wb.png" alt="icon" className="h-32 object-contain mb-4 hidden dark:block" />
        <h3 className="text-lg font-semibold text-black dark:text-gray-200">Collaborative Idea Building</h3>
        <p className="text-gray-600 mt-2 dark:text-gray-200">
        A space where students can post startup ideas and recruit co-founders or teammates.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Features
