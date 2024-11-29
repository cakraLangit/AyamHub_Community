"use client";
import Image from "next/image";
import { type_card } from "../../data/card";
import { useEffect, useState } from "react";
import ButtonBack from './../ButtonBack';
export default function ClientCardPage({ card }: { card: type_card }) {
  const [Cards, setCards] = useState<type_card[]>([]); // Initialize as an array
  useEffect(() => {
    const savedData = localStorage.getItem("cards");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setCards(parsedData);
        } else {
          console.error("Data in localStorage is not an array. Resetting to default.");
          setCards([card]);
        }
      } catch (error) {
        console.error("Failed to parse localStorage data:", error);
        setCards([card]);
      }
    } else {
      setCards([card]); // Default initialization if localStorage is empty
    }
  }, [card]);



// ada bug karena kartunyya hanya sekali update....,  aray yang lain tidak bisa 
//   const addProduct = () => {
//     setCards((prevCards) => {
//       const updatedCards = prevCards.map((product) =>
//         product.id === card.id
//           ? { ...product, dibeli: (product.dibeli || 0) + 1 }
//           : product
//       );
//       localStorage.setItem("cards", JSON.stringify(updatedCards));
//       return updatedCards;
//     });
//   }
  const updateProduct = (id: number, change: number) => {
    setCards((prevCards) => {
        //Mengecek apakah ada produk dengan ID yang cocok di dalam array Cards.
      const updatedCards =  prevCards.some((product) => product.id === id) ? prevCards.map((product) =>
            product.id === id

                // 
              ? { ...product, 
                dibeli: Math.min(Number(product.total_product),
                        Math.max((product.dibeli || 0) + change,0 )
                 ),
                 total_price: Math.min(
                    Number(product.total_product),
                    Math.max((product.dibeli || 0) + change, 0)
                  ) * Number(product.price)
            
            }
              : product )


            //Jika produk belum ditemukan (some() mengembalikan false), tambahkan PRODUK BARU ke ARRAY, jika bukan array yang petama   set= change  > 0  ?  change : 0 agar ketika di  klik 
            // bisa  action/set data 
              : [...prevCards, { ...card, 
                dibeli:  Math.min(Number(card.total_product), change)  || 0  , 
                total_price: Math.min((Number(card.total_product),change ) * Number(card.price)) }]; 

              
      console.log(JSON.stringify(updatedCards),'update_card=')
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      return updatedCards;
      
    });
  };

  const addProduct = () => updateProduct(card.id, 1);

  const minProduct = () => updateProduct(card.id, -1);

  const currentCard = Cards.find((product) => product.id === card.id) || card;




  console.log(currentCard.id,'current id')
//   if (currentCard.dibeli !== undefined) {
//     // Pastikan nilai 'dibeli' dan 'price' berupa angka
//     const dibeli = Number(currentCard.dibeli || 0);
//     const price = Number(currentCard.price || 0);

//     console.log('currentCard:', currentCard);
//     console.log('dibeli:', dibeli, 'price:', price);

//     // Hitung total_price
//     const price_total = dibeli * price;
//     currentCard.total_price = price_total;

//     console.log('Total Price:', price_total);

//     // Ambil data dari localStorage
//     const cardsFromStorage = localStorage.getItem('cards');
//     const existingCards = cardsFromStorage ? JSON.parse(cardsFromStorage) : [];

//     // Salin existingCards ke update_cards
//     const update_cards = [...existingCards];

//     // Periksa apakah kartu sudah ada
//     const cardExists = existingCards.some((card :any) => card.id === currentCard.id);

//     // Jika kartu tidak ada, tambahkan ke update_cards
//     if (!cardExists) {
//         update_cards.push(currentCard);
//     }

//     // Simpan kembali ke localStorage
//     localStorage.setItem('cards', JSON.stringify(update_cards));

//     console.log('Update Cards:', update_cards);
// }


  console.log(currentCard.total_product,'total_product')

  return (
    <div className="min-h-screen max-w-screen-xl container mx-auto lg:px-24 px-4 pt-7 flex flex-col">
      <div className="flex-row">
        <h3 className="text-primary font-bold lg:font-extrabold text-3xl">
          My Chick
        </h3>
      </div>

      <div className="flex-row mt-2">
        <div className="bg-danger max-w-max py-1 px-2 rounded-l-full text-white">  <ButtonBack/>   </div>

        <div className="flex flex-row mt-2 w-full justify-center">
          <div
            className="flex flex-col w-full justify-center px-10 sm:px-36 md:px-60 lg:px-72 py-5"
            key={currentCard.id}
          >
            <Image
              src={currentCard.src}
              alt={currentCard.alt}
              width={500}
              height={500}
              className="rounded-lg w-full"
            />
            <h2 className="mt-2">Tipe: {currentCard.name}</h2>
            <h2>Harga: {currentCard.price}</h2>
            <h2>Umur: {currentCard.age}</h2>
            <h2>Berat: {currentCard.weight}</h2>
            <h2>Deskripsi: {currentCard.description}</h2>
            <h2>Total Produk: {currentCard.total_product}</h2>
            <h2>Dibeli: {currentCard.dibeli}</h2>
            <h2 className="text-center text-accent text-2xl w-full p-3">Total Harga : {currentCard.total_price} Rupiah </h2>

            <div className="w-full flex justify-center items-center gap-3">
              <button
                onClick={minProduct}
                className="bg-black text-white py-2 px-4 rounded-lg my-2 w-1/2"
              >
                -
              </button>
              <button
                className="bg-danger text-white py-2 px-4 rounded-lg my-2 w-1/2"
                onClick={addProduct}
              >
                +
              </button>
            </div>
            <button className="bg-primary text-white py-2 px-4 rounded-lg my-2">
              Buy
            </button>
            {/* ulasan */}
          </div>
        </div>
      </div>
    </div>
  );
}
