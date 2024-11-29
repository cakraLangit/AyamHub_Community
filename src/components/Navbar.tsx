import React from 'react'
import { useState,useEffect } from 'react'

import Mini_Navigation from './Mini_Navigasi'
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
export default function Navbar() {

  const [isCLick,setIsClick] = useState<boolean>(false)

  const [shopCLick,setIsShopClick] = useState<boolean>(false)
  const [profileCLick,setIsProfileClick] = useState<boolean>(false)

  const HandleClick = ()=>{
    setIsClick(isCLick => !isCLick)

    console.log(!isCLick,'update')
    return !isCLick  
  }


  const HandleShopClick = ()=>{
   setIsShopClick(shopCLick=> !shopCLick)
   setIsProfileClick(false);

  }


  const HandleProfileClick = ()=>{
     setIsProfileClick(profileCLick => !profileCLick)
     setIsShopClick(false);
  }



  // useEffect(() => {
  //   //console.log(isCLick, "click updated");
  // }, [isCLick]); // Akan dipanggil setiap kali isClick berubah
  return (
    <div className="lg:px-24 px-4 pt-5  flex flex-row w-full">
    <div className='text-primary font-bold lg:font-extrabold  text-3xl  font-[family-name:var(--font-geist-mono)]  w-full  lg:w-1/6 mr-10 mt-2'>AyamHub</div>

          <div className="mx-10 lg:flex hidden items-center border-double border-2 border-[#FF6500] rounded-full overflow-hidden lg:w-4/6 h-full">
          <input
          className="bg-[#f5f5f5] py-2 px-4 outline-none  h-full flex-grow"
          placeholder="Ketik..."
          type="text"
          />
          <button className="bg-primary text-white py-1.5 px-10 h-full flex items-center justify-center">
          search
          </button>
          </div>
          
          <div className='lg:hidden flex relative bg-slate-400'>
          <button onClick={HandleClick} className='bg-primary rounded-full shadow-lg p-2 fixed -mx-10 flex flex-row text-white' style={{ zIndex: 100 }}>  
          <LuFilter className='mt-1' /> Filter
          </button>
          {/* {isCLick ? "Clicked (true)" : "Not Clicked (false)"} */}
          {
            isCLick &&(
             
                   <Mini_Navigation/>

            )
          }
          </div>



              <div className='h-full w-full lg:w-1/6  flex flex-row justify-end lg:mr-12 gap-2'> 
              <div className='  mt-1  p-3 bg-accent rounded-full cursor-pointer' onClick={HandleShopClick}>
                <MdOutlineShoppingBag  color='white'/>
                </div>

                {
                  shopCLick && (
                    <div className='bg-secondary  text-white absolute z-30  top-[70px] lg:right-48 right-10  lg:p-3 p-1 rounded-lg flex-col 
                                    transition delay-[2000ms] duration-300 ease-in-out'>  
                      <div className='cursor-pointer  text-xs lg:text-base '>Disimpan</div>
                     
                    
                    
                     </div>
                  )
                }

                <div className='  mt-1  p-3 bg-accent rounded-full cursor-pointer' onClick={HandleProfileClick}>
                <FaUser color='white' />
                  </div>
                {
                    profileCLick && (
                      <div className='bg-secondary  text-white absolute z-30  top-[70px] lg:right-32 right-0 lg:p-3 p-1 rounded-lg flex-col'>  
                        <div className='cursor-pointer border-b border-b-white text-xs lg:text-base'>Profile</div>
                        <div className='cursor-pointer border-b border-b-white text-xs lg:text-base'>Pembelian</div>
                        <div className='cursor-pointer text-xs lg:text-base '>Notification</div>
                       </div>
                    )
                }
                  
              </div>

              
            
    </div>
  )
}
