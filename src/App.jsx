import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OurTeam from './components/OurTeam'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WhyChoose from './components/WhyChoose'
import NumberOf from './components/NumberOf'

export default function App() {
  return (
    <div className='bg-slate-50'>
      <section id='home'>
        <Header/>
      </section>
      
      <section id='about'>
        <About/>
      </section>

      <section id='services'>
        <Services/>
      </section>

      <section id='ourteam'>
        <OurTeam/>
      </section>

      <section className='w-full text-center pt-20'>
        <NumberOf/>
      </section>

      <WhyChoose/>

      <section id='contact'>
        {/* <Contact/> */}
      </section>


      <Footer/>
    </div>
  )
}
