'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AuthHero = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-[#0B0E15] via-[#0F172A] to-[#1E293B] overflow-hidden text-slate-100">
      {/* Soft background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] bg-cyan-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Subtle animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-blue-400/15 via-cyan-400/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
          >
            Empowering{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 font-semibold"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              India’s Next Generation
            </motion.span>
            <br />
            <span className="font-light text-slate-200">of Entrepreneurs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-slate-400 text-lg lg:text-xl font-light leading-relaxed"
          >
            Where vision meets mentorship and ideas turn into ventures — powered by the next wave of Indian innovators.
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '4rem', opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="mt-10 h-px mx-auto bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          />

          <p className="mt-5 text-slate-500 text-xs tracking-[0.35em] uppercase font-light">
            Join • Build • Transform
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthHero
