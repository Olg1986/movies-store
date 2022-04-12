import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    currentMovie: null
  },
  reducers: {
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload
    },
  }
});

export const { setCurrentMovie } = movieSlice.actions;
export default movieSlice.reducer;
