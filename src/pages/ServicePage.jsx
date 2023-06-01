import React from 'react'
// import digitalMarketing from '../assets/digital-marketing.webp'
import { TypeAnimation } from 'react-type-animation';

export default function ServicePage(props) {
  window.scroll({
    top:0,
    behavior:'smooth'
  })

  const {titel,img,text} = props.service

  
  return (
    <div className='min-h-screen p-5 bg-slate-50'>
      <div className='flex flex-col flex-wrap items-center justify-center sm:flex-row'>
        <img className='float-left p-5 rounded-md w-80' src={img} alt="" />
        <p>
          {
            titel && 
            <TypeAnimation
              sequence={[
                `${titel}`, // Types 'One'
                1000, // Waits 1s
                'Digital', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Marketing', // Types 'Three' without deleting 'Two'
                () => {
                  // console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
          }
        </p>
      </div>
      <p className='w-full text-xl text-justify sm:columns-3 first-letter:text-2xl first-letter:font-bold'>
        {text}
      </p>
    </div>
  )
}
