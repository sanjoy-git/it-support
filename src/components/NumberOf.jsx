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
      <div>
        <div>
          <p>200+</p>
          <p>Days Worked</p>
        </div>
        <div>
          <p>100+</p>
          <p>Project Finished</p>
        </div>
        <div>
          <p>10+</p>
          <p>Dedicated Employees</p>
        </div>
        <div>
          <p>99+</p>
          <p>Happy Clients</p>
        </div>
      </div>
    </Zoom>
  )
}
