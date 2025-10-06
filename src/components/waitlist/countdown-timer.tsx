'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  // Set launch date - adjust this to your actual launch date
  const launchDate = new Date('2026-01-01T00:00:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3 md:gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 md:w-18 md:h-18 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
              <span className="text-xl md:text-2xl font-light text-white">--</span>
            </div>
            <div className="text-xs text-slate-500 mt-2">Loading</div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="w-16 h-16 md:w-18 md:h-18 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/15 transition-colors duration-300">
            <motion.span
              key={unit.value}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-light text-white"
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.span>
          </div>
          <div className="text-xs text-slate-400 mt-2 font-medium">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}