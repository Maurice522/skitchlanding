import React from 'react'
import SKITCH from "../../Assets/SKITCH.svg"
import heroburger from "../../Assets/heroburger.svg"
import chart from "../../Assets/chart.svg"

const Hero = () => {
  return (
    <div className='h-[470px] flex justify-center items-center gap-10'>
      <div className='flex flex-col gap-7'>
        <p>Hello! Welcome to</p>
        <img className='w-[300px]' src={SKITCH} alt="" />
        <ul>
          <li>Building AI-POWERED SaaS </li>
          <li>Introducing Ad-tech with new look</li>
        </ul>
      </div>

      {/* right Side */}
      <div className='relative'>
        <img className='w-[400px]' src={heroburger} alt="" />
        <img  className='w-[100px] absolute top-0 left-[80%]' src={chart} alt="" />
      </div>
    </div>
  )
}

export default Hero