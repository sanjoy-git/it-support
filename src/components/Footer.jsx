import React from 'react'
import {BsFacebook,BsInstagram,BsLinkedin,BsYoutube} from 'react-icons/bs'
import { VscLocation,VscMail,VscCallIncoming } from "react-icons/vsc";




export default function Footer() {
  return (
    <div className='w-full h-auto p-1 mt-10 rounded-t-lg bg-gradient-to-r from-gray-700 to-gray-800'>
      
      <div className='flex flex-wrap items-start justify-around text-slate-50'>

        <div className='text-center basis-80'>
          <h3 className='py-4 text-xl font-bold'>Techacademybd</h3>
          <p className='font-semibold text-center'>If you have the Commitment & Desire to develop your business we have the experience and expertise to make it success!</p>
          <div className='flex justify-center my-3'>
            <a href="https://www.facebook.com/techacademybd.xyz" target='_blank' className='inline-block p-3'>
              <i className='text-xl cursor-pointer hover:text-orange-500'><BsFacebook/></i>
            </a>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='text-xl cursor-pointer hover:text-orange-500'><BsInstagram/></i>
            </a>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='text-xl cursor-pointer hover:text-orange-500'><BsLinkedin/></i>
            </a>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='text-xl cursor-pointer hover:text-orange-500'><BsYoutube/></i>
            </a>
          </div>
        </div>

        <div className='mb-5 text-center basis-80'>
          <h3 className='py-4 text-xl font-bold'>Trigger Links</h3>
          <a href="#" className='block cursor-pointer hover:underline hover:text-orange-400'>Career</a>
          <a href="#" className='block cursor-pointer hover:underline hover:text-orange-400'>Team</a>
          <a href="#" className='block cursor-pointer hover:underline hover:text-orange-400'>Press&Media</a>
          <a href="#" className='block cursor-pointer hover:underline hover:text-orange-400'>Privacy Pollcy</a>
          <a href="#" className='block cursor-pointer hover:underline hover:text-orange-400'>Career</a>
        </div>

        <div className='flex flex-col items-center mb-3 basis-80'>
          <h3 className='py-4 text-xl font-bold'>Contact Info</h3>
          <div className='w-fit'>
            <a href='#' className='flex'><i className='pr-1 text-xl'><VscLocation/></i><span>Headquarter</span>:<span className='pl-1 text-sm'>Mirpur10,Dhaka</span></a>
            <a href='#' className='flex'><i className='pr-1 text-xl'><VscCallIncoming/></i>(+880)1300939320</a>
            <a href='#' className='flex'><i className='pr-1 text-xl'><VscMail/></i>info@techacademybd.xyz</a>
          </div>
        </div>
      </div>

      {/* copyriten@ */}

      <div className='border-t-2 border-stone-500'>
        <p className='text-sm text-center text-slate-50'>Techacademybd @2020-2025 - All Rights Reserved</p>
      </div>

    </div>
  )
}
