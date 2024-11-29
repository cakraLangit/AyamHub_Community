import React from 'react'
import  Image  from 'next/image';
export default function BannerBottom() {
  return (
    <div className="col-span-full w-full h-[30vh] flex justify-end items-center opacity-75 my-2 lg:mx-12 2xl:mx-0 2xl:pr-28">
    <div className='w-full lg:w-8/12 flex justify-center items-center   h-full bg-danger  lg:ml-3 rounded-lg relative flex-col'>
    
      <div className='flex w-full justify-end items-end h-full '> 
     <Image
     src='/images/banner_bottom/chicken.png'
     width={80}
     height={80}
     alt='chicken_image'
     />
      </div>
     <h3 className="text-center text-white absolute z-20">   
     Jadilah bagian dari komunitas kami dan nikmati peluang bisnis yang lebih <span className="text-accent font-bold">Besar!</span> <span className='text-accent font-bold'>,Bersama
     kami      </span>              , Anda dapat  <span className="text-accent font-bold">Meningkatkan Penjualan</span>,  dan  <span className="text-accent font-bold">Memperluas Jaringan</span> pelanggan dengan <span className="text-accent font-bold">Mudah</span>.
       </h3> 
       <div className='flex justify-center  absolute z-10 -bottom-2.5 right-0 left-0'> <button className=' bg-accent text-white   lg:text-lg rounded-full py-2 px-4'>  Join Us</button> </div>
    </div>
   </div>
  )
}
