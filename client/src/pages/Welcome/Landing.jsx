import React from 'react'
import Hero from '../../components/LandingPage/Hero'
import CTC from '../../components/LandingPage/CTC'
import PlatformOverview from '../../components/LandingPage/PlatformOverview'
import LivenessImportance from '../../components/LandingPage/LivenessImportance'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <PlatformOverview/>
      <LivenessImportance/>
      <CTC/>
    </div>
  )
}

export default Landing
