'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Users, Zap, Crown } from 'lucide-react';

export default function EarlyBirdPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePaidPlan = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 1500);
  };

  const handleFreePlan = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Choose Your Access Plan
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            Join Xentro early and unlock exclusive benefits to accelerate your entrepreneurial journey.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">

          {/* Free Plan Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group"
          >
            <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full flex flex-col">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-slate-700/20 to-slate-600/20 rounded-xl flex items-center justify-center mb-3 border border-slate-700/30">
                <Users className="w-6 h-6 text-slate-400" />
              </div> */}

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Join the Waitlist
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-slate-100">
                  Free
                </span>
              </div>
              <p className="text-slate-100 mb-4">
                Stay informed and be part of the Xentro community.
              </p>

              <ul className="space-y-2.5 mb-5 flex-grow">
                {[
                  'Updates on platform launch',
                  'Community access & networking',
                  'Limited features after launch',
                ].map((perk, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-700/30">
                      <Check className="w-3 h-3 text-slate-400" />
                    </div>
                    <span className="text-slate-100 text-sm">{perk}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleFreePlan}
                disabled={isLoading}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing...
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </motion.button>
            </div>
          </motion.div>

          
          {/* Paid Plan Card */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03, y: -4 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="relative"
>
  <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 flex flex-col h-full">
    {/* Icon */}
    {/* <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-slate-700">
      <Zap className="w-6 h-6 text-blue-400" />
    </div> */}

    {/* Title */}
    <h3 className="text-2xl font-bold text-white mb-1">Early Bird Access</h3>

    {/* Price */}
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-4xl font-bold text-blue-400">₹199</span>
      <span className="text-slate-500 line-through text-lg">₹999</span>
    </div>

    {/* Description */}
    <p className="text-slate-400 mb-4">
      Unlock exclusive perks before public launch.
    </p>

    {/* Features */}
    <ul className="space-y-2 mb-5 flex-grow">
      {[
        'Access to Xentro Alpha Platform',
        'Premium badge & profile visibility',
        'Exclusive early events & mentorship',
        'Lifetime discount on launch pricing',
      ].map((perk, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="flex items-start gap-2"
        >
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-slate-300 text-sm">{perk}</span>
        </motion.li>
      ))}
    </ul>

    {/* Button */}
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={handlePaidPlan}
      disabled={isLoading}
      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          Processing...
        </span>
      ) : (
        'Claim Early Access'
      )}
    </motion.button>
  </div>
</motion.div>


          
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-6"
        >
          <p className="text-gray-100 text-sm">
            Join <span className="text-white font-semibold">500+</span> early adopters building the future of entrepreneurship
          </p>
        </motion.div>
      </div>
    </div>
  );
}
