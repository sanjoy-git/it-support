import React from 'react'
import AboutMe from '../assets/whychoose.jpg'
import Fing from '../assets/fing.gif'

export default function WhyChoose() {
  return (
    <div className='flex flex-wrap items-center justify-around pt-14'>

      <div className='text-center basis-96'>
        <h2 className='p-5 text-xl font-bold text-blue-900 underline underline-offset-4 sm:invisible'>Why Choose Us?</h2>
        <img className='p-2 pt-5 mx-auto rounded-md w-60 sm:w-96' src={AboutMe} alt="" />
      </div>

      <div className='text-center basis-80'>
        <h2 className='invisible p-5 pt-0 text-xl font-bold text-blue-900 underline underline-offset-4 sm:visible'>Why Choose Us?</h2>
        <p className='text-justify'>We Are Here For Made Your Idea. Our team is dedicated to learning and understanding about your business. By building a relationship with each of our clients, we can ensure our marketing strategy is built with the sole focus of solving the problems your business faces. Each of our marketing campaigns is built with the client's needs in mind to solve the greatest marketing problems. Our team is not only dedicated to their profession; they are persistent also to make clients completely satisfied because our services are client-centric.</p>
        
        {/* <div className='flex justify-around'>
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
        </div> */}
      </div>


    </div>
  )
}
