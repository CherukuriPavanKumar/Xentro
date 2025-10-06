import { Suspense } from 'react'
import WaitlistPage from '@/components/waitlist/waitlist-page'
import Particles from '@/components/Particles'

export default function Waitlist() {
  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Suspense fallback={<div>Loading...</div>}>
          <WaitlistPage />
        </Suspense>
      </div>
    </div>
  )
}