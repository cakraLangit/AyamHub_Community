

import { useState } from "react";
import { GiCalendar,GiChicken, GiWeightScale } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import  {useScrollHeight}  from '../hooks/useScrollHeight';

export default function Sidebar() {


  interface MenuItem{
    label: string
    subItem: string[]
    icon : JSX.Element
    // menuSubItem ?: {[key:string]: string} // define dynamis object{} with {key: value} 
  }


  const sidebarItem: MenuItem[] =[
    {
      label: "Type",
      subItem:['ayam','ayam2','ayam3'],
      icon:  < GiChicken className=" text-black opacity-80" size={25}  />

    },

    {
      label: "Age",
      subItem:['kurang dari 6 bulan', 'lebih dari 6 bulan', 'lebih dari 1 tahun'],
      icon:   < GiCalendar className=" text-black opacity-80" size={25}  />

    },
    {
      label: "Weight",
      subItem:['Kurang dari 500 gram','Lebih dari 500 gram'],
      icon:   <GiWeightScale className=" text-black opacity-80" size={25}  />

    }
  ]

 const [isClick, setClick] = useState<string|null>(null)

 const handleMenuClick = (menu: string)=>{
  setClick(prev => prev === menu ?  null : menu)

 }




 let isSticky =  useScrollHeight(50)
  return (
    <aside
    className={`lg:h-[360px] lg:max-w-[20rem]   bg-white  rounded-lg  lg:min-w-[15rem] flex flex-col  ${
      isSticky ? 'lg:fixed top-5' : 'lg:static'
    } z-50`}

    style={{boxShadow:'0 0 10px rgba(0, 0, 0, 0.10)'}}
  >



 <div className="my-8"> 

    { sidebarItem.map((item: MenuItem) => (
    <div key={item.label} className="mx-5 flex flex-col  gap-4 my-2">
    <div className="flex flex-row  justify-between items-center w-full">
    <div className="flex flex-row w-full">
       {item.icon}
      <h2 className="text-black opacity-80 mx-2">{item.label}</h2>
    </div>

    <div className="w-full flex justify-end items-end">
      <IoIosArrowDown 
      onClick={() => handleMenuClick(item.label)}
      className={`cursor-pointer text-black opacity-80 transition-transform duration-200 ${
        isClick === item.label ? "rotate-180" : ""
      }`}
      />
    </div>

  

    </div>

    <div className={`{ -mx-1  flex flex-col   ${isClick === item.label ? 'block -my-5':'hidden'}}`}>
      {isClick === item.label &&(
        item.subItem.map((subItem)=>(
          <div
                  key={subItem}
                  className=" text-sm text-black opacity-80 cursor-pointer hover:text-blue-500 ml-10"
                >
                  {subItem}
                </div>
        ))
      )}

   </div>
   
    </div>

    ))}

</div>






    

    <div className="flex justify-center items-center gap-4 -my-6">
      <button className="bg-black  py-2 px-3 rounded-full min-w-[80px] text-white">Reset</button>
      <button className="bg-primary rounded-full py-2 px-3 min-w-[80px] text-white">Confirm</button>
    </div>
</aside>
  )
}
