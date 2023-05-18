import React from 'react'
import AboutMe from '../assets/aboutme.svg'
import Fing from '../assets/fing.gif'

export default function About() {
  return (
    <div className='flex flex-wrap items-center justify-around pt-14'>

      <div className='text-center basis-96'>
        <h2 className='p-5 text-xl font-bold text-blue-900 underline underline-offset-4 sm:invisible'>About Me</h2>
        <img className='w-32 p-2 pt-5 mx-auto sm:w-56' src={AboutMe} alt="" />
      </div>

      <div className='text-center basis-80'>
        <h2 className='invisible p-5 pt-0 text-xl font-bold text-blue-900 underline underline-offset-4 sm:visible'>About Me</h2>
        <p className='text-justify'>Techacademybd is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. We take note of your creative suggestions and implement them as you see fit. Our customer-centric services include web development, app development, artificial intelligence and robotics, eCommerce management, content creation, and many more. Our knowledgeable team always keeps up with new technology and helps other employees get ready for 4IR.</p>
        
        <div className='flex justify-around'>
          <div>
            <img className='w-10 mx-auto' src={Fing} alt="" />
            <p>Lutfor Rahaman</p>
            <p className='text-xs'>Founder</p>
          </div>
          <div>
            <img className='invisible w-10 mx-auto' src={Fing} alt="" />
            <p>Razib Hossain</p>
            <p className='text-xs'>Co-Founder</p>
          </div>
        </div>
      </div>


    </div>
  )
}
