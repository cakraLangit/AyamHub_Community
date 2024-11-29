import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState, AppDispatch } from '@/store/store';
import { setCards, setSelectedCards, toggleCardSelection } from '@/store/cardSlice';
import { type_card } from '@/store/cardSlice';
import { TopCard } from '@/data/card'; // Static source of cards
import { PiShoppingCartFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { GiCalendar, GiWeightScale } from "react-icons/gi";



export default function TopCards() {
    const [matchedCard, setMatchedCard] = useState<number[] | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const cards = useSelector((state: RootState) => state.cards.cards);
    const selectedCards = useSelector((state: RootState) => state.cards.selectedCards);

    // Initialize Redux with TopCard (fallback), Always populate Redux with TopCard if empty
    useEffect(() => {
        if (!cards.length) {
            dispatch(setCards(TopCard)); 
        }
    }, [cards, dispatch]);

    // Sync selected cards with localStorage on initial load
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedCards = localStorage.getItem("selectedCards");
            const parsedCards: type_card[] = savedCards ? JSON.parse(savedCards) : []; // Ensure it's of type type_card[]
            setMatchedCard(parsedCards.map((card) => card.id)); 
            dispatch(setSelectedCards(parsedCards));
        }
    }, [dispatch]);

    // Whenever the selected cards in Redux state change, update matchedCard
    useEffect(() => {
        setMatchedCard(selectedCards.map((card) => card.id));
    }, [selectedCards]);

    // Save selected cards to localStorage whenever the selectedCards state changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Only save if there are selected cards
            localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
        }
    }, [selectedCards]);

    // Handle card selection or deselection
    const handleCardClick = (card: type_card) => {
        dispatch(toggleCardSelection(card));  
    };

    return (
        <div className="lg:mx-32 w-full flex flex-col items-center">
            <h1 className="gradient-text underline decoration-danger font-extrabold text-4xl mb-5 w-full">
                Ayam Terlaris
            </h1>

            <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full font-[family-name:var(--font-geist-mono)]">
                {cards.map((card: type_card) => (
                    <div className="relative w-full h-[309px]" key={card.id}>
                        <Image
                            width={340}
                            height={200}
                            src={card.src}
                            alt={card.alt}
                            className="absolute z-10 rounded-xl w-full h-full"
                            priority
                        />

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

                        <div className="absolute top-0 left-0 z-50 bg-[#FFC100] py-1 px-6 rounded-tl-xl rounded-br-xl" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }}>
                            <span className="text-center text-3xl font-extrabold text-[#C40C0C]">
                                {card.price}
                            </span>
                        </div>

                        <div className="absolute top-1 right-0 z-50 py-1 px-6 cursor-pointer" onClick={() => handleCardClick(card)}>
                            <FaBookmark color={matchedCard?.includes(card.id) ? "#ff6500" : "white"} size='25' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
