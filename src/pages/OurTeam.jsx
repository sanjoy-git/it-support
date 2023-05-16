import React from 'react'
import Slider from "react-slick";

import Jamal from '../assets/team/jamal-molla-m.jpg'
import Lutfor from '../assets/team/lutfor-rahaman-m.jpg'
import Razib from '../assets/team/razib-hossain-m.jpg'
import Sanjoy from '../assets/team/sanjoy-roy-m.jpg'
import Tanvir from '../assets/team/tanvir-ahmed-niloy-m.jpg'


const team=[
  {
    img:Lutfor,
    name:"Lutfor Rahaman Khan",
    deg:"Founder"
  },
  {
    img:Razib,
    name:"Ariyan Ahamed Rajib",
    deg:"Co-Founder"
  },
  {
    img:Sanjoy,
    name:"Sanjoy Roy",
    deg:"Full Stack Developer"
  },
  {
    img:Jamal,
    name:"Jamal Molla",
    deg:"Coller"
  },
  {
    img:Tanvir,
    name:"Tanvir Ahmed Niloy",
    deg:"Coller"
  },
]

export default function OurTeam() {


  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='text-center w-10/12 mx-auto'>
      <h2 className='p-5 font-bold text-xl text-blue-900 underline underline-offset-4'>Our Team</h2>
      <Slider {...settings} className='bg-white py-3 pt-5 rounded-md'>
        {
          team.map(item=>{
            return(
              <div className='p-1 py-3'>
                <img className='rounded-full w-28 mx-auto' src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>{item.deg}</p>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
