import React,{useState} from 'react'
import { BsJustify } from "react-icons/bs";
import AnimatedCat from '../assets/animated-cat.gif'
import TechAcademyBD from '../assets/techacademybd.jpg'
import Modal from 'react-modal'
import Contact from './Contact';
import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const showToastMessage = () => {
  toast.error('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
  });
};


const successAlert = () => {
  Swal.fire({  
      title: 'Good job!',  
      text: 'You clicked the button.',
      icon: 'success',
      // imageUrl: 'https://i.ibb.co/LktzszD/dirask.png'
    }); 
}


//modal control css
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Navbar() {


  // modal control
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const [dropDownMenu, setDropDownMenu] = useState(false);

  window.addEventListener('scroll',()=>setDropDownMenu(false))


  return (
    <>
      <div className='fixed z-50 flex items-center justify-between w-full p-4 bg-white shadow-md px-7 opacity-95'>
        <div className='flex items-center'>
          <img className='w-6 pr-1' src={TechAcademyBD} alt="" />
          <a className='font-semibold hover:text-orange-400' href="/">Techacademybd</a>
          <img className='w-6 py-1' src={AnimatedCat} alt="" />
        </div>

        {/* <div>
          <button onClick={successAlert}>...</button>
          <button onClick={showToastMessage}>...</button>
          <ToastContainer />
        </div> */}

        <div className='hidden sm:block basis-96'>
          <nav className='flex justify-around w-full'>
            <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#home">Home</a>
            <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#about">About</a>
            <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#services">Services</a>
            <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#ourteam">OurTeam</a>
            <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400 cursor-pointer' onClick={openModal}>Contact</a>
          </nav>
        </div>

        <div className='relative sm:hidden' onClick={()=>setDropDownMenu(!dropDownMenu)}>
          <i className='text-xl font-bold cursor-pointer text-slate-800 hover:text-orange-400'><BsJustify/></i>
          {
            dropDownMenu && 
            <nav className='absolute flex flex-col p-4 px-6 bg-white rounded-md -right-2 top-5'>
              <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#home">Home</a>
              <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#about">About</a>
              <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#services">Services</a>
              <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#ourteam">OurTeam</a>
              <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400 cursor-pointer' onClick={openModal}>Contact</a>
            </nav>
          }
        </div>
      </div>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className='w-64 flex flex-col items-start'>
            <button className='w-8 rounded-md text-red-500 text-xl ring-1 font-bold text-center p-0 -mt-4 -mr-3 hover:bg-red-500 hover:text-slate-50 self-end' onClick={closeModal}>X</button>
            <Contact/>
          </div>
        </Modal>
    </>
  )
}
