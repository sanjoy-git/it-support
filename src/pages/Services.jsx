import React from 'react'
import Facebook from '../assets/facebook.png'
import ContentReserch from '../assets/content and research.png'
import Ecommerce from '../assets/ecommerce.png'
import Webdevlop from '../assets/webdevelop.png'
import Caller from '../assets/caller.png'
import DigitalMarketing from '../assets/digitalmarketing.png'

const serviceData=[
  {
    img:DigitalMarketing,
    text:'Digital Marketing'
  },
  {
    img:Webdevlop,
    text:'Website Design and Development'
  },
  {
    img:Caller,
    text:'Calling Service'
  },
  {
    img:ContentReserch,
    text:'Content Writing and Reserch'
  }
]


export default function Services() {
  return (
    <div className='text-center p-3 pt-14'>
      <h2 className='p-5 font-bold text-xl text-blue-900 underline underline-offset-4'>Our Services</h2>
      <div className='w-full flex justify-center flex-wrap'>
        {serviceData && serviceData.map(item=>{
          return(
            <div className='basis-40 h-auto ml-3 mb-3 sm:basis-64 bg-white rounded-md flex flex-col justify-between pb-5' >
              <img className='w-full object-cover p-5 sm:p-16' src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
