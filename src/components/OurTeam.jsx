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
    name:"Khan L Rahaman",
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
    deg:"Executive IT"
  },
  {
    img:Tanvir,
    name:"Tanvir Ahmed Niloy",
    deg:"Staff-Support"
  },
  {
    img:Imran,
    name:"Imran Taher",
    deg:"Staff-Support"
  },
]




function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:'5px',padding:'.5px' }}
      onClick={onClick}
    />
  );
}





export default function OurTeam() {


  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",

    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
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
    <div className='pt-10 text-center mx-auto w-10/12'>
      <h2 className='p-5 text-xl font-bold text-blue-900 underline underline-offset-4 sm:text-2xl'>Our Team</h2>
      <Slider {...settings} className='py-3 rounded-md'>
        {
          team.map((item,index)=>{
            return(
              <div key={index} className='p-1 py-3 bg-white border-2 rounded-xl'>
                <img className='mx-auto rounded-full w-28' src={item.img} alt="" />
                <h3 className='font-semibold pt-1'>{item.name}</h3>
                <p className='text-sm'>{item.deg}</p>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
