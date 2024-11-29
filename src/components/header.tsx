import React from 'react'
import Image  from 'next/image'
export default function Header() {
  return (
    <>
     <div className='w-2/12  absolute top-0 right-5'>
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <g
        fill="#FFA808"
        stroke="#FF6500"
        strokeWidth="11"
        transform="scale(1)"
        style={{ transformOrigin: '400' }}
      >
        <circle r="20" cx="710" cy="70" />
        <circle fill="#FFA808" stroke="#FF6500" r="33" cx="300" cy="255" />
        <circle strokeWidth="44" r="125" cx="175" cy="455" />
        <circle r="75" cx="500" cy="315" />
        <circle r="90" cx="600" cy="615" />
      </g>
 </svg>
    </div>

  <div className='w-full flex md:flex-row flex-col '>
    <Image
  src={'/images/hero/ayam_.png'}
  width={270}
  height={270}
  alt="images-hero"
 className="   mt-12 lg:mt-14 lg:my-10  ml-12 sm:ml-40 md:ml-20 lg:ml-2 rounded-full    min-w-[200px] w-[250px]  lg:w-[270px]"
/>

<div className="flex items-center justify-center h-full lg:pb-4 flex-col text-center lg:text-left lg:mt-10 md:mt-36">
  <h2 className="text-white text-justify mx-3 font-[family-name:var(--font-geist-mono)] lg:text-md text-xs " style={{fontSize:"12px"}}>
  Kami hadir sebagai toko online yang menyediakan ayam berkualitas, baik untuk kebutuhan peternakan, kuliner, maupun hobi. Dari ayam pedaging hingga ayam hias, kami menawarkan berbagai pilihan unggulan yang siap memenuhi kebutuhan Anda. Dengan layanan yang praktis, terpercaya, dan mudah diakses, kami memastikan Anda mendapatkan kualitas terbaik untuk mendukung usaha atau hobi Anda. Temukan ayam pilihan Anda hanya di sini!
  </h2>
  <button className="bg-white py-2 px-4 my-2 rounded-full  text-primary shadow-lg shadow-primary">Order Now</button>
</div>
   </div>

<div className="w-full h-full">
<div className="flex space-x-3 items-center w-full justify-start pl-5 my-1">
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
</div>
<div className="flex space-x-3 items-center w-full justify-start pl-5 my-1">
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
</div>
<div className="flex space-x-3 items-center w-full justify-start pl-5 my-1">
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
  <div className="w-2 h-2 bg-[#FFA808] rounded-full border border-[#FF6500] animate-bounce"></div>
</div>
 </div>
    </>
   
  )
}
