import React from 'react'
import digitalMarketing from '../assets/digital-marketing.webp'
import webDev from '../assets/web-design-1.jpg'
import softworeDev from '../assets/softwore.jpg'
import itSupport from '../assets/it-support-1.png'
import underline from '../assets/svg/underline.svg'

const serviceData=[
  {
    img:digitalMarketing,
    textTitle:'Digital Marketing',
    textBody:'Digital marketing refers to the practice of promoting products, services, or brands using digital channels and technologies.'
  },
  {
    img:webDev,
    textTitle:'Web Design and Development',
    textBody:' IT companies specialize in creating visually appealing and user-friendly websites. They handle everything from website des'
  },
  {
    img:softworeDev,
    textTitle:'Software Development:',
    textBody:'These companies often specialize in custom software development. They create tailored software solutions to address specifi'
  },
  {
    img:itSupport,
    textTitle:'IT Support and Maintenance',
    textBody:'They provide technical support and maintenance services to ensure the smooth operation of IT systems. This can include troub'
  }
]


export default function Services() {
  return (
    <div className='p-3 mx-auto text-center pt-14 sm:w-10/12'>
      <h2 className='p-5 text-xl font-bold text-blue-900 sm:text-2xl'>
        <span>Our Service</span>
        <img width={150} className='mx-auto' src={underline} alt="" />
      </h2>
      <div className='flex flex-wrap justify-center w-full'>
        {serviceData && serviceData.map((item,index)=>{
          return(
            <div key={index} className='flex flex-col justify-between flex-grow pb-5 mb-3 ml-3 bg-white rounded-md basis-68 sm:basis-52 hover:scale-110 hover:border-2' >
              <img className='object-cover w-7/12 p-5 mx-auto' src={item.img} alt="" />
              <div className=''>
                <h2 className='font-bold'>{item.textTitle}</h2>
                <p className='p-2 text-justify'>{item.textBody}...<button className='px-3 border-2 border-dashed bg-slate-100 rounded-lg'>More</button></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
