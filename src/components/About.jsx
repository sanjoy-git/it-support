import React from 'react'
import AboutMe from '../assets/talk-1.gif'
import Fing from '../assets/fing.gif'
import {Bounce} from 'react-awesome-reveal'
import underline from '../assets/svg/underline.svg'

export default function About() {
  return (
    <div className='flex flex-wrap items-start text-center justify-around pt-14 mx-auto sm:w-10/12'>

      <div className='basis-72 sm:basis-80'>
        <h2 className='p-5 text-xl font-bold text-blue-900 sm:invisible'>
          <span>About</span>
          <img className='mx-auto' width={100} src={underline}/>
        </h2>
          <img className='p-5 pt-5 pb-0 mx-auto w-8/12 sm:w-10/12 sm:pt-0' src={AboutMe} alt="" />
      </div>

      <div className='text-center basis-72 sm:basis-5/12'>
        <h2 className='invisible p-5 pt-0 text-xl font-bold text-blue-900 sm:visible sm:text-2xl'>
          <span>About</span>
          <img className='mx-auto' width={100} src={underline}/>
        </h2>
          <p className='text-justify w-full pb-5 font-sans sm:text-xl'>
            At Techacademybd, our primary focus is to provide you with top-notch technology services that empower your business and help you stay ahead in today's competitive landscape. We understand that technology plays a vital role in driving efficiency, innovation, and growth, and we are committed to delivering the highest standards of service and expertise. Our customer-centric services include Digital Marketing, Web Design and Development, Software Development, IT Support and Maintenance, Domain & Hosting Support, etc...
          </p>
        
        <div className='flex justify-around items-end'>
          <div>
            <img className='w-10 mx-auto' src={Fing} alt="" />
            <p>Khan L Rahaman</p>
            <p className='text-xs'>Founder</p>
          </div>
          <div className='text-blue-500'>|</div>
          <div>
            <img className='invisible w-10 mx-auto' src={Fing} alt="" />
            <p>Ariyan Ahamed Razib</p>
            <p className='text-xs'>Co-Founder</p>
          </div>
        </div>
      </div>


    </div>
  )
}
