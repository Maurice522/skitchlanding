import React from 'react'
import AdsHero from "../Components/Ads/AdsHero"
import Footer from '../Components/Footer/Footer'
import NewAdsHero from '../Components/Ads/NewAdsHero'

const Adspage = () => {
  return (
    <div className='flex flex-col'>
    {/* <AdsHero/> */}
    <NewAdsHero/>
    <Footer/>
    </div>
  )
}

export default Adspage