import React from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';

function Comparision() {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl mt-20 text-black dark:text-slate-200">
        Xentro vs Others
      </h1>

      <div className="flex flex-row justify-center max-w-5xl mx-auto gap-5 mt-7 mb-10">
        {/* Xentro Column */}
        <div className="w-full rounded-3xl p-[2px]">
          <div className="bg-black dark:bg-white rounded-3xl p-6 h-full">
            <h1 className="text-white dark:text-black font-bold text-2xl mb-6">
              XENTRO
            </h1>
            <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 text-white dark:text-black">
              <li className="flex items-start gap-3 py-3">
                <IconCheck className="text-green-500 h-5 w-5 flex-shrink-0 mt-1" />
                <span>
                  Structured, year-round programs designed to nurture innovation, not just
                  one-off events.
                </span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <IconCheck className="text-green-500 h-5 w-5 flex-shrink-0 mt-1" />
                <span>
                  A unique national platform fully integrated into schools for hands-on
                  innovation.
                </span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <IconCheck className="text-green-500 h-5 w-5 flex-shrink-0 mt-1" />
                <span>Software, design, media, networking and mentorship in one platform</span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <IconCheck className="text-green-500 h-5 w-5 flex-shrink-0 mt-1" />
                <span>Perfectly positioned for corporate social responsibility funding</span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <IconCheck className="text-green-500 h-5 w-5 flex-shrink-0 mt-1" />
                <span>Designed for clarity, built for performance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Others Column */}
        <div className="w-full rounded-3xl bg-white dark:bg-slate-900 p-6">
          <h1 className="text-black dark:text-white font-bold text-2xl mb-6">
            Others
          </h1>
          <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 text-black dark:text-slate-200">
            <li className="flex items-start gap-3 py-3">
              <IconX className="text-red-500 h-5 w-5 flex-shrink-0 mt-1" />
              <span>Students have ideas but no ecosystem to build, test, and launch them</span>
            </li>
            <li className="flex items-start gap-3 py-3">
              <IconX className="text-red-500 h-5 w-5 flex-shrink-0 mt-1" />
              <span>Complex government portals make startup grants inaccessible to students</span>
            </li>
            <li className="flex items-start gap-3 py-3">
              <IconX className="text-red-500 h-5 w-5 flex-shrink-0 mt-1" />
              <span>No integration with local innovation hubs or startup ecosystems</span>
            </li>
            <li className="flex items-start gap-3 py-3">
              <IconX className="text-red-500 h-5 w-5 flex-shrink-0 mt-1" />
              <span>Hackathons and clubs lack post-event continuity or mentorship</span>
            </li>
            <li className="flex items-start gap-3 py-3">
              <IconX className="text-red-500 h-5 w-5 flex-shrink-0 mt-1" />
              <span>They're reactive. We're built for what's next.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Comparision;
