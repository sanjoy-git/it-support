import React,{useRef,useState,useEffect} from 'react'
import ParticlesUse from './ParticlesUse'
import Navbar from './Navbar'
import { Zoom } from "react-awesome-reveal";
import computerEngineer from '../assets/computer-engineer.gif'

export default function Header() {

  return (
    <header className='h-auto'>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='flex flex-wrap items-center justify-around w-full p-5 rounded-b-lg border-b-4 border-white bg-white'>
      {/* <div className='flex flex-wrap items-center justify-around w-full p-5 rounded-b-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> */}
        <div className='pt-10 text-gray-900 basis-80 sm:basis-5/12 sm:p-0 rounded-md'>
          <Zoom>
            <p className='mb-2 text-xl text-center'>Welcome to Techacademybd</p>
            <p className='mb-5 text-2xl text-center sm:text-2xl'>Hungry For Challenges<span className='font-bold border-b-2'> Impact and More!</span></p>
            <p className='mt-5 text-xl text-center'>One of the pioneer ITES provider company.</p>
          </Zoom>
        </div>

        <div className='flex justify-center basis-80'>
          <img className='rounded-md' src={computerEngineer} alt="" />
        </div>
      </div>
      {/* <ParticlesUse/> */}
    </header>
  )
}
