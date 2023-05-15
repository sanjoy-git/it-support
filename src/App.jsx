import React from 'react'
import Header from './compinents/Header'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './compinents/Footer'

export default function App() {
  return (
    <div className='bg-slate-50'>
      <Header/>
      <div id='about'>
        <About/>
      </div>
      <div id='services'>
        <Services/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}
