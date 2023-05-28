import React,{useState} from 'react'
import axios from 'axios'
import {backendApi} from '../common/api'
import {BsArrowRepeat} from 'react-icons/bs'


export default function Contact(props) {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const contactSend=(e)=>{
  e.preventDefault();
  setLoading(true);

  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  axios
    .post(`${backendApi}/sendmail`,{email,subject,message})
    .then(res => {
      setMessage(res.data.message);
      if(res.data.message=="success"){
        props.onSuccess();
        props.onCloseModel();
      }
      else{
        props.onFail();
      }
      setLoading(false);
    })
    .catch(err => console.error(err));
}


  return (
    <form className="w-64" onSubmit={contactSend}>
      <div className=''>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required/>
      </div>
      <div className='mt-2'>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
          <input type="text" id="subject" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
      </div>
      <div className="mt-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"></textarea>
      </div>
      {
        loading?
        <button className="px-3 py-3 mt-2 text-3xl font-extrabold text-center text-blue-600 rounded-lg animate-spin"><BsArrowRepeat/></button>:
        <button type="submit" disabled={loading} className="px-3 py-3 mt-2 text-sm font-medium text-center text-blue-600 rounded-lg hover:ring-1">Send message</button>
      }
    </form>
  )
}
