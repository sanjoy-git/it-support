import React from 'react'
import ParticlesUse from './ParticlesUse'
import Navbar from './Navbar'
import team from '../assets/team.svg'
import { ReactSVG } from 'react-svg'

export default function Header() {
  return (
    <header className='h-auto'>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-b-lg w-full p-5 flex justify-around items-center flex-wrap'>
        <div className='basis-80 pt-10 sm:p-0 text-white'>
          <p className='text-center mb-2'>Welcome to it-support</p>
          <p className='text-center mb-5 text-xl sm:text-2xl'>Hungry For Challenges<span className='font-bold border-b-2'> Impact and More!</span></p>
          <p className='text-center mt-5 font-semibold'>One of the pioneer ITES provider company.</p>
        </div>

        <div className='basis-80 flex justify-center'>
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 300px')
            }}
            src={team} 
          />
        </div>
      </div>

      {/* <ParticlesUse/> */}
    </header>
  )
}
