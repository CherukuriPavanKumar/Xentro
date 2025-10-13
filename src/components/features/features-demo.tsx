import React from 'react'
import Features from './features'

function FeaturesDemo() {
  return (
      <div className="max-w-7xl mx-auto px-6 text-center mt-20">
        <h2 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mt-16 mb-8 text-gray-900 dark:text-gray-100">
        Features of Xentro
      </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Explore the key features that make Xentro the ultimate platform for student innovation and collaboration.
        </p>
        <Features />
      </div>
  )
}

export default FeaturesDemo
