import React from 'react'
import {BsFacebook,BsInstagram,BsLinkedin,BsYoutube} from 'react-icons/bs'
import { VscLocation,VscMail,VscCallIncoming } from "react-icons/vsc";




export default function Footer() {
  return (
    <div className='w-full h-auto bg-gradient-to-r p-1 mt-10 from-blue-700 to-blue-500 rounded-t-lg'>
      
      <div className='flex flex-wrap justify-around items-start text-slate-50'>

        <div className='text-center basis-80'>
          <h3 className='text-xl font-bold py-4'>IT-support</h3>
          <p className='text-center font-semibold'>If you have the Commitment & Desire to develop your business we have the experience and expertise to make it success!</p>
          <div className='flex justify-center my-3'>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='hover:text-orange-500 text-xl cursor-pointer'><BsFacebook/></i>
            </a>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='hover:text-orange-500 text-xl cursor-pointer'><BsInstagram/></i>
            </a>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='hover:text-orange-500 text-xl cursor-pointer'><BsLinkedin/></i>
            </a>
            <a href="#" target='_blank' className='inline-block p-3'>
              <i className='hover:text-orange-500 text-xl  cursor-pointer'><BsYoutube/></i>
            </a>
          </div>
        </div>

        <div className='ext-center basis-80 text-center'>
          <h3 className='text-xl font-bold py-4'>Trigger Links</h3>
          <p>Career</p>
          <p>Team</p>
          <p>Press&Media</p>
          <p>Privacy Pollcy</p>
          <p>Career</p>
        </div>

        <div className='ext-center basis-80 text-center mb-3'>
          <h3 className='text-xl font-bold py-4'>Contact Info</h3>
          <p className='flex items-center py-1'><i className='text-xl pr-1'><VscLocation/></i><span>Headquarter</span>: It-Support,Mirpur-10,Dhaka</p>
          <p className='flex items-center py-1'><i className='text-xl pr-1'><VscCallIncoming/></i>(+880) 1500111222</p>
          <p className='flex items-center py-1'><i className='text-xl pr-1'><VscMail/></i>it-support@gmail.com</p>
        </div>
      </div>

      {/* copyriten@ */}

      <div className='border-t-2 border-stone-500'>
        <p className='text-center text-sm text-slate-800'>IT-Support @2020-2025 - All Rights Reserved</p>
      </div>

    </div>
  )
}
