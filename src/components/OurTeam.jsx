import React from 'react'
import Slider from "react-slick";

import Jamal from '../assets/team/jamal-molla-m.jpg'
import Lutfor from '../assets/team/lutfor-rahaman.jpg'
import Razib from '../assets/team/razib-hossain-m.jpg'
import Sanjoy from '../assets/team/sanjoy-roy-m.jpg'
import Tanvir from '../assets/team/Robin-m.jpg'
import Imran from '../assets/team/imran-taher-m.jpg'
import Shoriful from '../assets/team/shoriful-islam-m.jpg'
import Tasin from '../assets/team/tasin-m.jpg'
import underline from '../assets/svg/underline.svg'


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
    img:Shoriful,
    name:"Shoriful Islam",
    deg:"IT Support"
  },
  {
    img:Jamal,
    name:"Jamal Molla",
    deg:"Executive"
  },
  {
    img:Imran,
    name:"Imran Taher",
    deg:"Staff-Support"
  },
  {
    img:Tanvir,
    name:"Tanvir Ahmed Niloy",
    deg:"Staff-Support"
  },  
  {
    img:Tasin,
    name:"Tahsin Pritom",
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
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
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
    <div className='w-10/12 pt-10 mx-auto text-center'>
      <h2 className='p-5 text-xl font-bold text-blue-900 sm:text-2xl'>
        <span>Our Team</span>
        <img width={150} className='mx-auto' src={underline} alt="" />
      </h2>
      <Slider {...settings} className='py-3 rounded-md'>
        {
          team.map((item,index)=>{
            return(
              <div key={index} className='p-1 py-3 bg-white border-2 rounded-xl'>
                <img className='mx-auto rounded-full w-28' src={item.img} alt="" />
                <h3 className='pt-1 font-semibold'>{item.name}</h3>
                <p className='text-sm'>{item.deg}</p>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
