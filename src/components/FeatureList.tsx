import React from 'react'
import { GrSecure } from "react-icons/gr";
import { FaTruck, FaMedal } from 'react-icons/fa';
export default function FeatureList() {
  return (
    <div className='lg:ml-10  lg:w-8/12 w-full  flex  sm:flex-row flex-col  gap-2'>
      <div className="bg-accent w-full sm:w-6/12 md:w-4/12 h-28 flex justify-center md:justify-start items-center gap-4 rounded-md p-4 opacity-70">
    <GrSecure
      color="white"
      className="text-[50px] sm:text-[60px] md:text-[75px] lg:text-[90px]"
    />
    <div>
      <h3 className="text-white text-xs md:text-lg lg:text-xl font-bold">Secure Transactions</h3>
     
    </div>
  </div>

  {/* Fast Delivery */}
  <div className="bg-accent w-full sm:w-6/12 md:w-4/12 h-28 flex justify-center md:justify-start items-center gap-4 rounded-md p-4 opacity-70">
    <FaTruck
      color="white"
      className="text-[50px] sm:text-[60px] md:text-[75px] lg:text-[90px]"
    />
    <div>
      <h3 className="text-white text-xs md:text-lg lg:text-xl font-bold">Fast Delivery</h3>
     
    </div>
  </div>

  {/* High-Quality Products */}
  <div className="bg-accent w-full sm:w-6/12 md:w-4/12 h-28 flex justify-center md:justify-start items-center gap-4 rounded-md p-4 opacity-70">
    <FaMedal
      color="white"
      className="text-[50px] sm:text-[60px] md:text-[75px] lg:text-[90px]"
    />
    <div>
      <h3 className="text-white text-xs md:text-lg lg:text-xl font-bold">High-Quality Products</h3>
      
    </div>
  </div>


      </div>
  )
}
