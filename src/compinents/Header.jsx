import React from 'react'
import ParticlesUse from './ParticlesUse'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='h-48 bg-black'>
      <Navbar/>
      <ParticlesUse/>
    </header>
  )
}
