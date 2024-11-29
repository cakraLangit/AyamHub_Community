'use client';
import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import {type_card } from '@/data/card'


export default function MarkedCard() {
  const [selectedCard, setSelectedCard] = useState<type_card[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCard = localStorage.getItem('selectedCards');
      if (savedCard) {
        setSelectedCard(JSON.parse(savedCard));
        
      }
    }

    
  }, []); // Empty dependency array to avoid infinite loop


  return (
    <div className="lg:mx-32 w-full flex flex-col items-center">
      <h1 className="gradient-text underline decoration-danger font-extrabold text-4xl mb-5 w-full">
        Disimpan
      </h1>

      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full font-[family-name:var(--font-geist-mono)] ">
      
      {
  selectedCard.length > 0 ? (
    selectedCard.map((card) => (
      <div className="relative w-full h-[309px]" key={card.id}>
        <Image
          width={340}
          height={200}
          src={card.src}
          alt={card.alt}
          className="absolute z-10 rounded-xl w-full h-full"
        />

        <div className="absolute bottom-0 left-0 w-full z-50 rounded-b-xl h-[90px] backdrop-blur-sm bg-[#C40C0C]/30">
          <div className="mx-4 my-2 w-full flex flex-row">
            <div className="w-8/12 flex flex-col mb-10 -my-1">
              <span className="font-thin text-sm m-0.5 flex flex-row">
                <Image
                  src="/images/card/chicken-svgrepo-com.svg"
                  alt="chicken_icon"
                  width="20"
                  height="20"
                  className="mx-2 mt-0.5"
                />
                <h3 className="text-white font-thin text-xs opacity-80 mt-1">
                  Tipe : {card.type}
                </h3>
              </span>
              <span className="font-thin text-sm m-0.5 flex flex-row">
                <Image
                  src="/images/card/chicken-svgrepo-com.svg"
                  alt="chicken_icon"
                  width="20"
                  height="20"
                  className="mx-2 mt-0.5"
                />
                <h3 className="text-white font-thin text-xs opacity-80 mt-1">
                  Umur : {card.age}
                </h3>
              </span>
              <span className="font-thin text-sm m-0.5 flex flex-row">
                <Image
                  src="/images/card/chicken-svgrepo-com.svg"
                  alt="chicken_icon"
                  width="20"
                  height="20"
                  className="mx-2 mt-0.5"
                />
                <h3 className="text-white font-thin text-xs opacity-80 mt-1">
                  Berat : {card.weight}
                </h3>
              </span>
            </div>
            <div className="w-4/12 flex justify-center items-center h-full my-5">
            <Link href={`product/${card.id}`}>
              <svg
                width="50"
                height="50"
                className="cursor-pointer"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                    gradientTransform="rotate(30)"
                  >
                    <stop
                      offset="20%"
                      style={{ stopColor: "#C40C0C", stopOpacity: 1 }}
                    />
                    <stop
                      offset="80%"
                      style={{ stopColor: "#FFC100", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <FaPlusCircle
                  size="40"
                  style={{
                    fill: "url(#gradient)",
                  }}
                />
              </svg>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 z-50 bg-[#FFC100] py-1 px-6 rounded-tl-xl rounded-br-xl"
          style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
        >
          <span className="text-center text-3xl font-extrabold text-[#C40C0C]">
            {card.price}
          </span>
        </div>
      </div>
    ))
  ) : (

    <div className='flex w-[90vw] lg:w-[60vw] h-[50vh] justify-center items-center  p-3   rounded-lg   text-center    lg:ml-0'>No Marked Card</div>
  )
}

      
       
      </div>
    </div>
  );
}
