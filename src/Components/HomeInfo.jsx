import React from 'react'
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnTxt }) => (
  <div className='info-box w-[25vw] sm:text-xl sm:leading-snug rounded-2xl text-center  bg-[#006effea] py-2 px-4 text-white '>
    <p className='font-medium mb-1 sm:text-xl text-center' >{text}</p>
    <Link to={link} className='bg-white block w-full text-[#006effea] rounded-xl px-1'>
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
  <InfoBox
  text='Zero Experience'
  link='/about'
  btnTxt='Learn more'
  />
 ),
 3:(
  <InfoBox
  text='have made many cool things'
  link='/projects'
  btnTxt='Wanna see'
  />
 ),
 4:(
  <InfoBox
  text='Need help , I am always glad to'
  link='/contact'
  btnTxt="Let's talk"
  />
 ), 
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
