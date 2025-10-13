'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import CountdownTimer from './countdown-timer'
import Particles from '../Particles'

export default function WaitlistPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const whatsappInviteLink = "https://chat.whatsapp.com/IXp3lsd8SXC3MBUkDgqErT" // Replace with your actual WhatsApp group link

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
      >
        
        {/* Logo */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/XENTRO-DARK.png" alt="Xentro Logo" className="rounded-lg" />
          </div>
          <span className="text-2xl font-semibold text-white">Xentro</span>
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-light text-white leading-tight mb-4">
            Good things come
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 font-normal italic">
              to those who wait.
            </span>
          </h1>

          <p className="text-lg text-slate-300 font-light">
            India&apos;s next-generation entrepreneurship platform
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* WhatsApp Community Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-2xl shadow-2xl shadow-blue-500/25 border-0 w-full md:w-auto"
            >
              <a 
                href={whatsappInviteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Join Community
              </a>
            </Button>
          </motion.div>

          <p className="text-sm text-slate-400 mt-3">
            500+ entrepreneurs • Free to join
          </p>
        </motion.div>

      </motion.div>
      
    </div>
  )
}