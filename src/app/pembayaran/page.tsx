'use client'
import { useEffect } from 'react';
import { type_card } from "@/data/card";
export default function page() {

    useEffect(()=>{
        const savedData = localStorage.getItem("cards");
        if(savedData){
            const parsedData = JSON.parse(savedData);
            const parsedArray: type_card[] = [...parsedData]
            const filteredData = parsedArray.filter((data)=> (data.dibeli ?? 0) > 0)//   if (currentCard.dibeli !== undefined) {
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
// })
            if (filteredData.length > 0) {
                console.log(filteredData, "filter_data");
              }
        }
    },[])

  return (
    <div>page</div>
  )
}
