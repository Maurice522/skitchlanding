import React from 'react'
import res from "../../Assets/adsimage/restaurant-hall.png"
import secnd from "../../Assets/adsimage/2ndImg.png"
import emptterrace from "../../Assets/adsimage/empty-terrace.png"
import agency from "../../Assets/adsimage/agency.png"
import outres from "../../Assets/adsimage/outdoor-res.png"
import jain from "../../Assets/adsimage/jainheritage.png"
import zomato from "../../Assets/adsimage/zomato.png"
import smiline from "../../Assets/adsimage/smiline.png"
import served from "../../Assets/adsimage/serverd.png"
import hash from "../../Assets/adsimage/hashtag.png"

import wow1 from "../../Assets/adsimage/stakeholders/wow-image-1.png"
import wow2 from "../../Assets/adsimage/stakeholders/wow-image-2.png"
import wow3 from "../../Assets/adsimage/stakeholders/wow-image-3.png"
import wow4 from "../../Assets/adsimage/stakeholders/wow-image-4.png"
import wow5 from "../../Assets/adsimage/stakeholders/wow-image-5.png"
import wow6 from "../../Assets/adsimage/stakeholders/wow-image-6.png"
import wow from "../../Assets/adsimage/stakeholders/wow-image.png";
import './AdsHero.css';

const stakearr = [
    wow1,wow2,wow3,wow4,wow5,wow6,wow
]

const clientarray = [
    {
        img:zomato,
        name:"Arjun Singh",
        pos:"Brand & Innovation",
        dis:"Skitch Ads enables us to execute Out-of-Home campaigns with the same speed and flexibility that an online media offers, while providing superior accountability ",
    },
    {
        img:smiline,
        name:"Ramakrishna",
        pos:"Director",
        dis:"I love Skitch Ads for their streamlined process and fantastic reporting services. They are very easy to work with.",
    },
    {
        img:jain,
        name:"Chandrasekhar",
        pos:"CEO",
        dis:"Our reach has become more effective for almost half the spend, thanks to Skitch Ads! ",
    },
]

const NewAdsHero = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
        {/* 1st sec */}
        <div className='ads_section1 relative h-[440px] flex justify-end items-center'>
            <img className='absolute -z-10 top-0 left-0 w-full h-[440px]' src={res} alt="" />
            <div className='ads_section1_heading_cont flex flex-col w-1/2 justify-center gap-5'>
                <p className='ads_section1_heading text-white font-bold text-4xl'>Skitch Ads</p>
                <p className='ads_section1_heading text-white font-bold text-4xl max-w-xs'>India's largest Restaurant <span className='text-[#FFC444]'>Digital Screen Network</span></p>

                <p className='ads_section1_p text-white font-medium text-sm max-w-[220px]'>Unleash your brand's potential with India’s largest network of connected Digital Screens</p>
                <button className='bg-[#FFC444] w-[200px] h-[30px] rounded-2xl font-bold text-md text-white '>Contact Us</button>
            </div>
        </div>

        {/* 2nd sec */}
        <div className='ads_section2 w-full h-[400px] flex justify-center '>
            <div className='ads_section2_text_cont flex flex-col gap-4 pt-7'>
                <p className='ads_section2_heading text-[#FFC444] font-bold text-2xl max-w-xs'>Ready to elevate your marketing mix?</p>
                <p className='ads_section2_text max-w-[230px] text-sm'>Gain access to a never seen
                    before combination of reach,
                    relevance and affordability.
                </p>
                <button className='bg-[#FFC444] w-[200px] h-[30px] rounded-2xl font-bold text-md text-white '>Contact Us</button>
            </div>
            <img className='w-[500px]' src={secnd} alt="" />
        </div>

        {/* 3rd sec */}

        <div className='ads_section3 relative h-[600px] flex flex-col justify-center items-center gap-12'>
            <img className='absolute -z-10 top-0 left-0 w-full' src={emptterrace} alt="" />
            <p className='ads_section3_why text-white'>Why RESTAURANT?</p>
            <p className='text-white max-w-sm font-semibold text-2xl'>people across India visit the restaurants daily <br />
                <span className='text-[10px] font-light'>The number is expected to rise substantially to 90 Million+ by 2026</span>
            </p>
            <div className='ads_section3_desc flex gap-28'>
                <section className='flex flex-col items-center gap-3'> <p className='text-center text-white font-semibold text-lg max-w-[150px]'>Rise in annual consumption</p>
                    <p className='ads_section3_desc_text text-white max-w-xs text-[10px] font-thin'>The restaurant industry is growing rapidly,
                         with global sales expected to reach $10 trillion by 2027. 
                         This growth is being driven by a number of factors, 
                         including increasing affluence, the growth of delivery and 
                         takeout services, and changing consumer preferences. 
                         Despite some challenges, such as rising food costs, 
                         the restaurant industry is well-positioned to continue to grow in the coming years.
                        In short, people are eating out more than ever before, and this trend is expected to continue.
                        </p>
                </section>
               
                <section className='flex flex-col items-center gap-3'> <p className='text-center text-white font-semibold text-lg max-w-[150px]'>Decrease in brand loyalty</p>
                    <p className='ads_section3_desc_text text-white max-w-xs text-[10px] font-thin'>
                    As per McKinsey, COVID-19 has dramatically changed consumer behavior by creating a loyalty shock and customers are switching brands at unprecedented rates.  
                    </p>
                </section>

                <section className='flex flex-col items-center gap-3'> <p className='text-center text-white font-semibold text-lg max-w-[150px]'>Growth of Audience</p>
                    <p className='ads_section3_desc_text text-white max-w-xs text-[10px] font-thin'>he shift to online sales is a major trend that is transforming the retail industry. Consumers are increasingly looking for convenience and value when they shop, and online shopping offers both of these benefits. As a result, the share of online sales is expected to continue to grow in the coming years.
In short, people are buying more and more things online, and this trend is expected to continue.
                        </p>
                </section>
            </div>
        </div>

        {/* 4th sec */}

        <div className='ads_section4 flex flex-col gap-4 justify-center items-center h-[650px] bg-[#FDF3DB]'>
            <p className='ads_section4_heading text-4xl text-center text-[#FFC444]'>
            Let's begin your journey together! <br />
            <span className='font-bold'> What are you waiting for?</span>
            </p>

            <p className='ads_section4_desc text-[#FFC444] max-w-lg text-[12px] '>
            How would you love to build up the momentum? Skitch Ads connects brand marketers, media
owners, and audiences like never before with India's first contextually targeted Digital Out Of Home
Advertising (DOOH) medium.
            </p>
            <div className='ads_section5_imgs flex'>
                <img className='w-[300px] h-[400px]' src={agency} alt="" />
                <img className='w-[300px] h-[380px]' src={outres} alt="" />
            </div>
        </div>

            {/* 5th sec */}
            <div className='ads_section5 flex flex-col justify-center items-center h-[500px] bg-[#eaebef]'>
                <p className='text-[#FFC444] text-2xl pb-12'>WHY CLIENTS LOVE US...</p>
                <div className='ads_section5_clients flex gap-8'>
                    {
                        clientarray.map((item)=>(
                            <div className='flex flex-col justify-center items-center h-[300px] gap-2'>
                                <img src={item.img} alt="" />
                                <p className='text-[#FFC444] font-bold text-lg'>{item.name}</p>
                                <p className='text-[#FFC444] text-sm'>{item.pos}</p>
                                <p className='max-w-xs text-center'>{item.dis}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>

            {/* 6th sec */}
            <div className='ads_section6 flex flex-col justify-center items-center h-[300px] gap-6'>
                <p>AS RECOGNISED BY</p>
                <div>
                <p className='text-[#FFC444] text-xl text-center'>Our innovative work has been recognised by </p>
                <p className='text-[#FFC444] text-lg font-bold text-center'>leading stakeholders in the ecosystem </p>
                </div>
                
                <div className='ads_section6_img_cont flex gap-8'>
                    {
                        stakearr.map((item)=>(
                            <img className='ads_section6_img w-20' src={item} alt="" />
                        ))
                    }
                </div>
            </div>

            {/* 7th sec  */}
            <div className='ads_section7 flex justify-between bg-[#FCF8ED] h-[300px]'>
                <img className='ads_section7_img w-[800px]' src={served} alt="" />
                <div className='ads_section7_desc flex flex-col justify-center items-center  gap-8 pr-40'>
                    <p className='ads_section7_desc_heading'>Skitch Ads CAMPAIGN STORIES</p>
                    <p className='text-[#FFC444] max-w-sm text-center'>Gaming app unlocks additional reach & lowest in industry CAC by accessing digitally dark audiences through Skitch Ads Screens.</p>
                    <button className='bg-[#FFC444] w-[200px] h-[30px] rounded-2xl font-bold text-md text-white '>Contact Us</button>
                </div>
            </div>

            {/* 8th sec  */}
            <div className='ads_section8 flex justify-center gap-10 bg-[#D5D8E0B5] h-[300px]'>
               
                <div className='ads_section8_desc flex flex-col justify-center items-start  gap-4 '>
                    <p className='ads_section8_desc_p1'>GET IN TOUCH TODAY</p>
                    <p className='ads_section8_desc_p2 text-[#FFC444] text-2xl max-w-sm '>Learn more about our platform from an Skitch Ads Expert</p>
                    <p className='ads_section8_desc_p3 max-w-sm '>We’re on a mission to amplify brand stories
through digital screens – if that sounds like
you, get in touch today.</p>
                    <button className='bg-[#FFC444] w-[200px] h-[30px] rounded-2xl font-bold text-md text-white '>Contact Us</button>
                </div>
                <img className='ads_section8_img w-[300px] pt-4' src={hash} alt="" />
            </div>
    </div>
  )
}

export default NewAdsHero