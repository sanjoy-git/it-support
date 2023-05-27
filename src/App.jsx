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
import { Fade, Zoom } from "react-awesome-reveal";

export default function App() {
  return (
    <div className='bg-slate-50'>
      <section id='home'>
        <Header/>
      </section>
      <br />

      <section id='about'>
          <About/>
      </section>
      <br />

      <section id='services'>
        <Services/>
      </section>
      <br />

      <section id='ourteam'>
        <OurTeam/>
      </section>
      <br />

      <section>
        <NumberOf/>
      </section>
      <br />

      <section>
        <WhyChoose/>
      </section>
      <br />
      <br />
      
      <Footer/>
    </div>
  )
}
