import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemsFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(movie => movie.id !== action.payload)
        }
    }
});

export const {setItemInCart, deleteItemsFromCart} = cartSlice.actions;
export default cartSlice.reducer;

