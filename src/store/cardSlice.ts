import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type type_card = {
    id: number;
    name: string;
    price: number;
    type: string;
    age: string;
    weight: string;
    src: string;
    alt: string;
    description?: string;
    total_product?: number;
    dibeli?: number;
};

interface CardState {
    cards: type_card[];
    selectedCards: type_card[];  // Track selected (marked) cards
}

const initialState: CardState = {
    cards: [],
    selectedCards: [],  // initialize with empty array
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        // ini  berlaku jika untuk 1 tombol
        setCards: (state, action: PayloadAction<type_card[]>) => {
            state.cards = action.payload;
        },
        setSelectedCards: (state, action: PayloadAction<type_card[]>) => {
            state.selectedCards = action.payload;
        },
        toggleCardSelection: (state, action: PayloadAction<type_card>) => {
            const card = action.payload;
            const index = state.selectedCards.findIndex(c => c.id === card.id);

            if (index === -1) {
                // If the card is not selected, add it
                state.selectedCards.push(card);
            } else {
                state.selectedCards.splice(index, 1);
            }
        },
    },
});

export const { setCards, setSelectedCards, toggleCardSelection } = cardSlice.actions;
export default cardSlice.reducer;
