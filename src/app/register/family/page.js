'use client'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';


const page = () => {

    const [formData, setFormData] = useState({
        name: '',
        spouseName: '',
        numChildren: ''
      });
    
      const [errors, setErrors] = useState({
        name: '',
        spouseName: '',
        numChildren: ''
      });
    
      
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        // setErrors({
        //   ...errors,
        //   [name]: value.length < 3 ? `${name} must be at least 3 characters long` : ''
        // });
    
      };

      const data = {
        name: formData.name,
        spouseName: formData.spouseName,
        numChildren: formData.numChildren,
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Check if there are no errors
        if (Object.values(errors).every((error) => error === '')) {
          // Form submission logic
          // console.log(formData);

          const res = await axios.post(`https://dcaccomapi.onrender.com/family`, data)

          console.log(res.data)
        } else {
          // Display error messages
          console.log('Form has errors');
        }
      };
  return (
    <div className=' h-screen w-full flex bg-neutral-50'>
    <div className=' p-8 md:p-20 w-full md:w-[60%] md:flex md:flex-col md:items-center'>
      <p className=' uppercase font-semibold'>
        step 2 of 2
      </p>

      <div className=' w-full bg-slate-200 rounded-2xl h-3 mt-5'>
        <div className=' w-full h-full bg-sky-500 rounded-2xl'>

        </div>
      </div>

      <div className=' mt-10 w-full'>
        <div className=' flex flex-col signup-form gap-5 mt-5'>
          <input type="text" placeholder='Full Name' name='name' value={formData.name} onChange={handleChange} />
          <input type="text" placeholder="Spouse's name" name='spouseName' value={formData.spouseName} onChange={handleChange} />
          <input type="number"  placeholder="Number of children" name='numChildren' value={formData.numChildren} onChange={handleChange} />
        </div>

        <div className=' flex mt-10 gap-5 '>
          <Link href={'/register'} className='purple-btn '>
            Back
          </Link>
          <p onClick={handleSubmit} className=' black-btn'>
            Register
          </p>
        </div>
      </div>
    </div>



    <div className=' hidden md:flex'>
      <Image src={'/assets/onboard/hbd.jpg'} alt='' width={500} height={100} className=' h-screen w-full object-cover' />
    </div>

  </div>
  )
}

export default page