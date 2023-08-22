import React from 'react'
import SecondaryButton from './Buttons/SecondaryButton'
import TrendingContainer from './TrendingContainer'

const Trending = () => {

  return (
    <section className=' bg-gradient-to-b from-[#194449]  to-[#0B282B]  py-10'>
      <div className="layout-container">
        <div className="flex items-center justify-between">
          <h1 className='text-4xl font-bold text-white'>Currently Trending Games</h1>
          <SecondaryButton>See All</SecondaryButton>
        </div>
        <TrendingContainer/>
      </div>
    </section>
  )
}

export default Trending
