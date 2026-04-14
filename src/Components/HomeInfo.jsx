import React from 'react'
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnTxt }) => (
  <div className='info-box'>
    <p>{text}</p>
    <Link to={link} className='neo-brutalism-btn'>
      {btnTxt}
    </Link>
  </div>
);

const renderContent = {
 1:(
  <div className='sm:text-xl sm:leading-snug rounded-2xl text-center bg-[#006effea] py-4 px-4 text-white '>Hey, I am  
  <span className='font-semibold m-1'>
    Atharv Shukla 
  </span>👋
  <br/>
  A web developer from India.</div>
 ),
 2:(
  <InfoBox/>
 ),
 3:(
  <InfoBox/>
 ),
 4:(
  <InfoBox/>
 ), 
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
