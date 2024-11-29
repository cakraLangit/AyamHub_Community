'use client'
import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from "../../components/sidebar"
import TopCard from '../../components/TopCards';
import Footer from '../../components/Footer'
export default function page() {




  return (
    <>

   <div className='flex flex-col min-h-screen container mx-auto max-w-screen-xl'>  
    <Navbar/>

    <div className='lg:px-24 px-4 pt-5  flex flex-row  flex-grow  lg:w-full  '>
    <div className="relative w-3/12 lg:flex hidden">
    <Sidebar/>
    </div>

    <div
    className="w-full lg:w-8/12   rounded-lg flex flex-col  items-center  mx-0 lg:mx-12  pb-2 lg:pb-4"
    >
     <TopCard/>  
    </div>
   </div>
     <Footer/>
     </div>
    
    

</>
    
    
  )
}
