'use client'
import React from 'react'
import Image  from 'next/image'
import {NewCard} from "@/data/card" // static data
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setCards } from '@/store/cardSlice';
import { type_card } from '@/store/cardSlice';

import { PiShoppingCartFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { GiCalendar, GiWeightScale } from "react-icons/gi";


import Link from 'next/link';
export default function NewCards() {

  const [matchedCard, setMatchedCard] = useState<number[]| null>(null) 
  const dispatch = useDispatch<AppDispatch>()

  const cards = useSelector((state: RootState)=> state.cards.cards)

  useEffect(()=>{
    if(!cards.length){
      dispatch(setCards(NewCard))
    }
  },[cards,dispatch])


    const handleCardClick = (card: type_card)=>{
      if(typeof window !== undefined){
        const savedCards = localStorage.getItem('new_selectedCards')
        const parsedCards: type_card[]   = savedCards ? JSON.parse(savedCards) :  []  
        const exists = parsedCards.some((savedCards)=>savedCards.id ===card.id)

        if(!exists && parsedCards.length<=3){
          const updateCards = [...parsedCards, card]
          localStorage.setItem('New_selectedCards',JSON.stringify(updateCards))
          setMatchedCard(updateCards.map((card)=>(card.id)))
        }
      }
    }


    useEffect(()=>{
    if(typeof window !== undefined){
      const savedCards = localStorage.getItem('New_selectedCards')
      const parsedCards: type_card[] = savedCards ? JSON.parse(savedCards) :[]
      const savedCardIds = parsedCards.map((cards)=> cards.id) 
      setMatchedCard(savedCardIds)

    }
    },[])








  const [path,setPath] = useState<boolean | null>() 
  const pathname = usePathname()
  const handleClick = ()=> {
    if(pathname === '/terbaru'){
      setPath(true)
    }else{
      setPath(false)
    }
  }

  useEffect(() => {
    handleClick()
  }, [pathname]);

  return (

        <> 
         <div className=' lg:mx-32    w-full mb-5'>
          <h1  className="gradient-text   font-extrabold text-4xl   underline decoration-danger ">
          Ayam Terbaru
          </h1>
          </div>

          <div className="lg:mx-32  w-full  flex justify-end items-end font-[family-name:var(--font-geist-mono)]">
                {/* Card Components */}
          <div className="w-full grid lg:grid-cols-2 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
         
          {
            cards && cards.map((card: type_card )=>(
              <div className="relative w-full h-[309px] " key={card.id}>
              <Image
                width={340}
                height={200}
                src={card.src}
                alt={'card_product'}
                className="absolute z-10 rounded-xl w-full h-full "
              />
              
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 w-full z-50 rounded-b-xl h-[90px] backdrop-blur-sm bg-[#C40C0C]/30">
              <div className="mx-4 my-2 w-full flex flex-row">
                                <div className="w-8/12 flex flex-col mb-10 -my-1">
                                    <span className="font-thin text-sm m-0.5 flex flex-row">
                                        <Image
                                            src='/images/card/chicken-svgrepo-com.svg'
                                            alt='chicken_icon'
                                            width='20'
                                            height='20'
                                            className='mx-2 mt-0.5'
                                        />
                                        <h3 className="text-white font-thin text-xs opacity-80 mt-1">
                                            Tipe : {card.type}
                                        </h3>
                                    </span>
                                    <span className="font-thin text-sm m-0.5 flex flex-row">
                                        <GiCalendar
                                        style={{width:'20', height:'20'}}
                                        color='white'
                                        className='mx-2 mt-0.5'
                                        />
                                        <h3 className="text-white font-thin text-xs opacity-80 mt-1">
                                            Umur : {card.age}
                                        </h3>
                                    </span>
                                    <span className="font-thin text-sm m-0.5 flex flex-row">
                                        <GiWeightScale
                                            style={{width:'20', height:'20'}}
                                            color='white'
                                            className='mx-2 mt-0.5'
                                            />
                                        <h3 className="text-white font-thin text-xs opacity-80 mt-1">
                                            Berat : {card.weight}
                                        </h3>
                                    </span>
                                </div>

                                <div className="w-4/12 flex justify-center items-center h-full my-5">
                                    <Link href={`product/${card.id}`}> 
                                        <svg width="50" height="50" className='cursor-pointer'>
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(30)">
                                                    <stop offset="20%" style={{ stopColor: "#C40C0C", stopOpacity: 1 }} />
                                                    <stop offset="80%" style={{ stopColor: "#FFC100", stopOpacity: 1 }} />
                                                </linearGradient>
                                            </defs>
                                            <PiShoppingCartFill size="40" style={{ fill: "url(#gradient)" }} />
                                        </svg>
                                    </Link> 
                                </div>
                            </div>
              </div>
    
              {/* Price Tag */}
              <div className="absolute top-0 left-0 z-50 bg-[#FFC100] py-1 px-6 rounded-tl-xl rounded-br-xl"
                   style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }}>
                <span className="text-center text-3xl font-extrabold text-[#C40C0C]">
                  {card.price}
                </span>
              </div>

              <div
                  className="absolute top-1 right-0 z-50  py-1 px-6 cursor-pointer"
                            
                            onClick={() => handleCardClick(card)}
                        >
                             <FaBookmark
                             color={matchedCard?.includes(card.id) ? "#ff6500" : "white"}
                             size='25'
                             /> 
                        </div>
    
    
              </div>
            ))
          }


      

      
          </div>

          </div>


          <div className="lg:mx-32 w-full flex">
          <div onClick={handleClick} className='flex justify-center  w-full  my-3'>
            {
              path ? <button  className="bg-gradient-to-r from-primary to-secondary px-3 py-2 min-w-[80px] rounded-full text-white relative overflow-hidden">
               <span className="relative z-20">More.wrewr</span>
              <div className="absolute inset-0 bg-transparent">
                <span className="absolute h-[50%] w-[25%] bg-accent rounded-full opacity-50  top-2 right-0.5 z-10"></span>
                <span className="absolute h-[30%] w-[15%] bg-accent rounded-full opacity-50  top-1 right-4 z-20"></span>
              </div>
              </button> 
              
              :<button  className="bg-gradient-to-r from-primary to-secondary px-3 py-2 min-w-[80px] rounded-full text-white relative overflow-hidden">
              <Link  href={'/terbaru'}> <span className="relative z-20">More</span></Link>
              <div className="absolute inset-0 bg-transparent">
                <span className="absolute h-[50%] w-[25%] bg-accent rounded-full opacity-50  top-2 right-0.5 z-10"></span>
                <span className="absolute h-[30%] w-[15%] bg-accent rounded-full opacity-50  top-1 right-4 z-20"></span>
              </div>
              </button>
              
            }
       




          </div>


          </div>
        </>
  )
}
