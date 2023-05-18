import React from 'react'
import Slider from "react-slick";

import Jamal from '../assets/team/jamal-molla-m.jpg'
import Lutfor from '../assets/team/lutfor-rahaman-m.jpg'
import Razib from '../assets/team/razib-hossain-m.jpg'
import Sanjoy from '../assets/team/sanjoy-roy-m.jpg'
import Tanvir from '../assets/team/tanvir-ahmed-niloy-m.jpg'
import Imran from '../assets/team/imran-taher-m.jpg'


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
  {
    img:Imran,
    name:"Imran Taher",
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
    <div className='w-10/12 pt-10 mx-auto text-center'>
      <h2 className='p-5 text-xl font-bold text-blue-900 underline underline-offset-4'>Our Team</h2>
      <Slider {...settings} className='py-3 pt-5 bg-white rounded-md'>
        {
          team.map((item,index)=>{
            return(
              <div key={index} className='p-1 py-3'>
                <img className='mx-auto rounded-full w-28' src={item.img} alt="" />
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
