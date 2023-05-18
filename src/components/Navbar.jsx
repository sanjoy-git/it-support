import React from 'react'
import { BsJustify } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className='fixed z-50 flex items-center justify-between w-full p-4 bg-white shadow-md px-7 opacity-95'>
      <a className='font-semibold' href="/">Techacademybd</a>
      <div className='hidden sm:block basis-96'>
        <nav className='flex justify-around w-full'>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#home">Home</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#about">About</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#services">Services</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#ourteam">OurTeam</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#contact">Contact</a>
        </nav>
      </div>
      <div className='relative sm:hidden group'>
        <i className='text-xl font-bold cursor-pointer text-slate-800 hover:text-teal-900'><BsJustify/></i>
        <nav className='absolute flex flex-col invisible p-4 px-6 bg-white rounded-md -right-2 top-5 group-hover:visible'>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#home">Home</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#about">About</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#services">Services</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#ourteam">OurTeam</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}
