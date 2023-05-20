import React from 'react'
import { Zoom } from "react-awesome-reveal";

// const countData=[
//   {
//     number:200,
//     title:"Days Worked"
//   },
//   {
//     number:100,
//     title:"Project Finished"
//   },
//   {
//     number:10,
//     title:"Dedicated Employees"
//   },
//   {
//     number:100,
//     title:"Happy Clients"
//   }
// ]

export default function NumberOf() {
  return (
    <Zoom>
      <div className='flex flex-wrap justify-around p-2 pt-20 mx-auto sm:w-10/12'>
        <div className='flex-grow p-5 mb-2 mr-2 text-center bg-white basis-32'>
          <p className='pb-2 text-3xl font-bold text-blue-800'>9+</p>
          <p className='text-sm'>Days Worked</p>
        </div>
        <div className='flex-grow p-5 mb-2 mr-2 text-center bg-white basis-32'>
          <p className='pb-2 text-3xl font-bold text-blue-800'>50+</p>
          <p className='text-sm'>Project Finished</p>
        </div>
        <div className='flex-grow p-5 mb-2 mr-2 text-center bg-white basis-32'>
          <p className='pb-2 text-3xl font-bold text-blue-800'>10+</p>
          <p className='text-sm'>Dedicated Employees</p>
        </div>
        <div className='flex-grow p-5 mb-2 mr-2 text-center bg-white basis-32'>
          <p className='pb-2 text-3xl font-bold text-blue-800'>99+</p>
          <p className='text-sm'>Happy Clients</p>
        </div>
      </div>
    </Zoom>
  )
}
