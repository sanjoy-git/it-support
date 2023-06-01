import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import Services from './services.json'

export default function App() {

  return (
    <>
      <div className='h-16'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='digital-marketing' element={<ServicePage service={Services[0].digitalMarketing}/>}/>
        <Route path='web-development' element={<ServicePage service={Services[0].webDev}/>}/>
        <Route path='software-development' element={<ServicePage service={Services[0].softDev}/>}/>
        <Route path='it-support' element={<ServicePage service={Services[0].itSupport}/>}/>
      </Routes>

      <br />
      <br />

      <div>
        <Footer/>
      </div>
    </>
  )
}
