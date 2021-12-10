import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES, FilmInfo, Slice } from '../../const';
import { AppProcess } from '../../types/state';


const initialState: AppProcess = {
  genre: ALL_GENRES,
  movieInfo: FilmInfo.Overview,
  isFilmInList: null,
};

export const appProcessSlice = createSlice({
  name: Slice.App,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setMovieInfo: (state, action: PayloadAction<string>) => {
      state.movieInfo = action.payload;
    },
    toggleFilmInList: (state, action: PayloadAction<boolean | null>) => {
      state.isFilmInList = action.payload;
    },
    resetMovieInfo: (state) => {
      state.movieInfo = FilmInfo.Overview;
    },
  },
});

export const {setGenre, setMovieInfo, toggleFilmInList, resetMovieInfo} = appProcessSlice.actions;

export default appProcessSlice.reducer;

