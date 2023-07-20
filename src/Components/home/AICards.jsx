import React from 'react'
import robo from "../../Assets/robo.png"
import rights from "../../Assets/rights.png"
import arrow from "../../Assets/arrow.svg"
import PersonalDetails from '../Modal/PersonalDetails'
import { useNavigate } from 'react-router-dom'
import '../styles.css';

const AICards = () => {
  const [signopen, setsignOpen] = React.useState(false);
  const signhandleOpen = () => setsignOpen(true);
  const signhandleClose = () => setsignOpen(false);

  const navigate = useNavigate()

  return (
    <>
    <div className='aicards_phone_container flex w-4/5 mx-auto justify-center items-center py-10'>
        <div className='aicard1_phone flex flex-col  items-center shadow-lg h-[42rem] border-r rounded-l-[26px]'>
            <h1 className='px-8 text-[40px] max-w-[24rem] text-center font-bold bg-[#FFCC5F] rounded-ss-[26px]'>AI-Powered  Chat Bot</h1>
            <img className='w-32 py-12' src={robo} alt="" />
            <p className=' px-10 pb-12 max-w-[24rem] font-medium text-[#717171] text-xs text-center'>An AI-powered custom chatbot is like having a personalized virtual assistant.
                 It uses smart technology to understand and respond to your specific needs.
                  It learns from our conversations and provides personalized information just for you.
                   Whether you're chatting on a website or messaging app,
                    this chatbot makes sure to give you the best assistance possible.
                 It's like having a smart friend who understands you and helps you out whenever you need it.
                 </p>
                 <button onClick={()=>signhandleOpen()} className=' w-48 h-10  shadow-lg'>Know More</button>
        </div>
        <div className='aicard2_phone flex flex-col  items-center shadow-lg h-[42rem] border-l rounded-r-[26px]'> 
            <h1 className='px-8 text-[40px] max-w-[24rem] text-center font-bold bg-[#57C5B6] rounded-se-[26px]'>AI-Powered ERMS (POS)</h1>
            <img className='w-60 py-12' src={rights} alt="" />
            <p className='px-10 pb-8 max-w-[24rem] font-medium text-[#717171] text-xs text-center'>
            AI-powered restaurant management software  also know as Point Of Sale revolutionizes the dining experience.
             It uses smart technology to automate tasks like inventory management and staff scheduling,
              ensuring smooth operations and better customer service. With data analysis,
               it provides valuable insights on customer preferences and trends,
                helping restaurants make informed decisions.
                 This software enhances efficiency, improves service quality,
             and elevates the overall dining experience for customers.
            </p>
            <button onClick={()=>navigate("/login")} className='w-48 h-10  shadow'>Know More</button>
        </div>

    
    </div>
    <div className='w-full flex justify-center p-16'>
        <button onClick={()=>navigate("/skitchads")} className='brand_phone_button butshadow flex justify-center items-center p-3 gap-14 border-4 border-black shadow-md'>
        Are you a brand, owner, click here <img className='arrow_phone w-12' src={arrow} alt="" />
        </button>
        </div>
        <PersonalDetails open={signopen} handleClose={signhandleClose} /> 
    </>
  )
}

export default AICards