import { Canvas } from '@react-three/fiber';
import React, { useState, useRef, Suspense } from 'react';
import useAlert from '../../hooks/useAlert.js';
import Alert from '../Alert.jsx';
import emailjs from '@emailjs/browser';
import Fox from '../../models/Fox.jsx';
import  Loader  from '../Loader';
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation , setcurrentAnimation] = useState('idle')
  const {alert , showAlert , hideAlert} = useAlert()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation('hit')

    emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
        {
          from_name: form.name,
          to_name: "Atharv",
          from_email: form.email,
          to_email: 'atharvshukla466@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show:true,
          text:'Message sent successfully!',
          type:'success'
        })
        setTimeout(() => {
          hideAlert()
          setcurrentAnimation('idle')
          setForm({ name: '', email: '', message: '' }); 
        },[3000])
        
      })
      .catch((error) => {
        setIsLoading(false);
        setcurrentAnimation('idle')
        console.error(error);
        showAlert({
          show:true,
          text:'Something went wrong. Please try again.',
          type:'danger'
        })

      });
  };

  const handleFocus = () => setcurrentAnimation('walk')
  const handleBlur = () => setcurrentAnimation('idle')

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      
      <div className='flex-1 min-w-[50%] flex flex-col ml-5'>
        <h1 className='head-text text-center mt-10 font-bold  text-5xl'>GET IN TOUCH</h1>
        
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            NAME
            <input
              type="text"
              name="name"
              className=' bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='Krish'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className=' bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='Krish@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            YOUR MESSAGE
            <textarea
              name="message"
              rows={4}
              className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type='submit' className='apply text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
         <Canvas
          camera={{
            position:[0,0,5],
            fov: 75,
            near: 0.1,
            far : 1000
          }}>
         <directionalLight intensity={2.5} position={[0,0,1]}/>
         <ambientLight intensity={0.5}/>
         <Suspense fallback={<Loader/>}>
           <Fox
           currentAnimation={currentAnimation}
           position={[0.5 , 0.35 , 0]}
           rotation={[12.7,-0.6,0]}
           scale={[0.7 , 0.7 , 0.7]}
           />
         </Suspense>

         </Canvas>
      </div>
    </section>
  );
};

export default Contact;