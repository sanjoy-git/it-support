import React,{useState} from 'react'
import { BsJustify,BsListUl,BsFillXSquareFill } from "react-icons/bs";
import AnimatedCat from '../assets/animated-cat.gif'
import TechAcademyBD from '../assets/techacademybd.jpg'
import Modal from 'react-modal'
import Contact from './Contact';
import Swal from 'sweetalert2'
import {Link,NavLink,useLocation} from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const successMessage = () => {
  toast.success('Message send successfull.', {
      position: toast.POSITION.TOP_RIGHT
  });
};

const failMessage = () => {
  toast.error('Message send faild.', {
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

  const location=useLocation();
  // console.log(location.pathname)


  return (
    <>
      {location.pathname=="/"?
        <div>
          <div className='fixed z-50 flex items-center justify-between w-full p-4 bg-white shadow-md px-7 opacity-95'>
            <div className='flex items-center'>
              <img className='w-6 pr-1' src={TechAcademyBD} alt="" />
              <a className='font-semibold hover:text-orange-400' href="/">Techacademybd</a>
              <img className='w-6 py-1' src={AnimatedCat} alt="" />
            </div>

            <div>
              {/* <button onClick={successAlert}>...</button>
              <button onClick={showToastMessage}>...</button> */}
              <ToastContainer />
            </div>

            <div className='hidden sm:block basis-96'>
              <nav className='flex justify-around w-full'>
                <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="/#home">Home</a>
                <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="/#about">About</a>
                <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="/#services">Services</a>
                <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="/#ourteam">OurTeam</a>
                <a className='font-semibold cursor-pointer text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' onClick={openModal}>Contact</a>
              </nav>
            </div>

            <div className='relative sm:hidden' onClick={()=>setDropDownMenu(!dropDownMenu)}>
              <i className='text-xl font-bold cursor-pointer text-slate-800 hover:text-orange-400'><BsListUl/></i>
              {
                dropDownMenu && 
                <nav className='absolute flex flex-col p-4 px-6 bg-white rounded-md -right-2 top-5'>
                  <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#home">Home</a>
                  <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#about">About</a>
                  <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#services">Services</a>
                  <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="#ourteam">OurTeam</a>
                  <a className='font-semibold cursor-pointer text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' onClick={openModal}>Contact</a>
                </nav>
              }
            </div>
          </div>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div className='flex flex-col items-start w-64'>
                <button className='self-end w-8 p-0 -mt-2 -mr-3 text-3xl font-bold text-center text-red-500 rounded-md hover:bg-red-500 hover:text-slate-50' onClick={closeModal}><BsFillXSquareFill/></button>
                <Contact onSuccess={successMessage} onFail={failMessage} onCloseModel={closeModal}/>
              </div>
            </Modal>
        </div>:
        <div>
          <div className='fixed z-50 flex items-center justify-between w-full p-4 bg-white shadow-md px-7 opacity-95'>
            <div className='flex items-center'>
              <img className='w-6 pr-1' src={TechAcademyBD} alt="" />
              <a className='font-semibold hover:text-orange-400' href="/">Techacademybd</a>
              <img className='w-6 py-1' src={AnimatedCat} alt="" />
            </div>

            <div>
              {/* <button onClick={successAlert}>...</button>
              <button onClick={showToastMessage}>...</button> */}
              <ToastContainer />
            </div>

            <div>
              <TypeAnimation
                sequence={[
                  1000,
                  'welcome', // Types 'One'
                  2000,
                  '!', // Types 'One'
                ]}
                wrapper="span" 
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1.2rem', display: 'inline-block' }}
              />
            </div>

            <div className='hidden sm:block basis-96'>
              <nav className='flex justify-around w-full'>
                {/* <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="/#services">Home</a> */}
                <NavLink className='font-semibold cursor-pointer text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/digital-marketing">Digital</NavLink>
                <NavLink className='font-semibold cursor-pointer text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/web-development">Web</NavLink>
                <NavLink className='font-semibold cursor-pointer text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/software-development">Software</NavLink>
                <NavLink className='font-semibold cursor-pointer text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/it-support">IT</NavLink>
                <a className='font-bold cursor-pointer text-slate-800 hover:underline underline-offset-4 hover:text-orange-400' onClick={openModal}>Contact</a>
              </nav>
            </div>



            <div className='relative sm:hidden' onClick={()=>setDropDownMenu(!dropDownMenu)}>
              <i className='text-xl font-bold cursor-pointer text-slate-800 hover:text-orange-400'><BsListUl/></i>
              {
                dropDownMenu && 
                <nav className='absolute flex flex-col p-4 px-6 bg-white rounded-md -right-2 top-5'>
                  {/* <a className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' href="/#services">Home</a> */}
                  <NavLink className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/digital-marketing">Digital</NavLink>
                  <NavLink className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/web-development">Web</NavLink>
                  <NavLink className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/software-development">Software</NavLink>
                  <NavLink className='font-semibold text-slate-700 hover:underline underline-offset-4 hover:text-orange-400' to="/it-support">IT</NavLink>
                  <a className='font-bold cursor-pointer text-slate-800 hover:underline underline-offset-4 hover:text-orange-400' onClick={openModal}>Contact</a>
                </nav>
              }
            </div>
          </div>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div className='flex flex-col items-start w-64'>
                <button className='self-end w-8 p-0 -mt-2 -mr-3 text-3xl font-bold text-center text-red-500 rounded-md hover:bg-red-500 hover:text-slate-50' onClick={closeModal}><BsFillXSquareFill/></button>
                <Contact onSuccess={successMessage} onFail={failMessage} onCloseModel={closeModal}/>
              </div>
            </Modal>
        </div>
        
      }
    </>
  )
}
