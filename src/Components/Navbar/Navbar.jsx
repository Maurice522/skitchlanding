import React from 'react'
import logo from "../../Assets/SKITCHLOGO.svg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <header className='h-[33px] w-full  '>
        <div className='flex items-center ml-32 mt-5 gap-10 h-[18px]'>
            <img className='cursor-pointer' onClick={()=>navigate("/")} src={logo} alt="" />
            <p className='drop-shadow-lg'>FUN FOOD & FRENZY</p>
        </div>
    </header>
    <hr className='bg-[#CAC8C8]' />
    </>
  )
}

export default Navbar