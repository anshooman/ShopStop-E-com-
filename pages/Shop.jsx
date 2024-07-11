import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/popular/popular'
import Offers from '../components/Offers/offers'
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newslettter/newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop