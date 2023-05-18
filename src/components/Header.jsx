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
      <div className='flex flex-wrap items-center justify-around w-full p-5 rounded-b-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='pt-10 text-white basis-80 sm:p-0'>
          <p className='mb-2 text-center'>Welcome to Techacademybd</p>
          <p className='mb-5 text-xl text-center sm:text-2xl'>Hungry For Challenges<span className='font-bold border-b-2'> Impact and More!</span></p>
          <p className='mt-5 font-semibold text-center'>One of the pioneer ITES provider company.</p>
        </div>

        <div className='flex justify-center basis-80'>
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
