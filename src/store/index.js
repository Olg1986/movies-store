import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movie-id/movieIdSlece'
import {moviesApi} from './movies/moviesSlice'
import cartReducer from './cart/cartSlice'

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        cart: cartReducer,
        movie: movieReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(moviesApi.middleware)
})

