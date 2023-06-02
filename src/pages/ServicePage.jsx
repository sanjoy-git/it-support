import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function ServicePage(props) {
  window.scroll({
    top:0,
    behavior:'smooth'
  })

  const {title,img,text} = props.service

  
  return (
    <div className='min-h-screen px-5 py-1 bg-slate-100'>
      <div className='min-h-min bg-white flex flex-col flex-wrap items-center justify-center sm:flex-row'>
        <img className='p-3 rounded-full w-64' src={img} alt="" />
        <h2 className='text-3xl font-bold py-4'>{title}</h2>
      </div>
      <br />
      <p className='w-full text-xl gap-20 text-justify sm:columns-2 first-letter:text-2xl first-letter:font-bold'>
        {text}
      </p>
    </div>
  )
}
