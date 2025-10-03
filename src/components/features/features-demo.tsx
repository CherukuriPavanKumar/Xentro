import React from 'react'
import Features from './features'

function FeaturesDemo() {
  return (
      <div className="max-w-7xl mx-auto px-6 text-center mt-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-3">Features of Xentro</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Explore the key features that make Xentro the ultimate platform for student innovation and collaboration.
        </p>
        <Features />
      </div>
  )
}

export default FeaturesDemo
