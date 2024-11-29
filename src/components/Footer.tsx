import React from 'react'

export default function Footer() {
  return (
  
    <footer className="w-full bg-primary text-white lg:px-24  px-4 py-4 rounded-t-md  ">
        <div className="flex full flex-col sm:flex-row pt-4 gap-4 mr-12">
        <div className=" flex w-6/12"> 
        <div className='bg-white   rounded-tl-2xl rounded-br-2xl  '>
          <h3 className='font-[family-name:var(--font-geist-mono)] text-primary text-3xl p-2'
          > 
          AyamHub 
          </h3>
        </div>
        
        </div>
        <div className=" flex  flex-col w-full  md:w-3/12 text-black">
        Hubungi Kami: 
       <span>  wa: 082755+++ </span>
        <span>email: chick@gmail.com</span>
        </div>
        <div className=" flex w-full md:w-3/12 flex-col text-black">
        Media Sosial: 
       <span>  Ig </span>
        <span> LInkedin </span>
        
        </div>

        </div>


       
        
       
    </footer>
  )
}
