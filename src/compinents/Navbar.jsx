import React from 'react'
import { BsJustify } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className='fixed flex items-center justify-between w-full p-4 px-7 bg-white shadow-md opacity-95'>
      <a className='font-semibold' href="#home">It-Support</a>
      <div className='hidden sm:block basis-96'>
        <nav className='flex justify-around w-full'>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="/">Home</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#about">About</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#services">Services</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#contact">Contact</a>
        </nav>
      </div>
      <div className='sm:hidden relative group'>
        <i className='text-xl font-bold cursor-pointer text-slate-800 hover:text-teal-900'><BsJustify/></i>
        <nav className='flex flex-col absolute bg-white p-4 rounded-md right-5 top-0 invisible group-hover:visible'>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="/">Home</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#about">About</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#services">Services</a>
          <a className='font-semibold text-slate-700 hover:underline underline-offset-4' href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}
