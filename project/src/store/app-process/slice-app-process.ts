import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES, FilmInfo, Slice } from '../../const';
import { Film } from '../../types/data';
import { AppProcess } from '../../types/state';
import { postMyListData } from '../api-actions';

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
  },
  extraReducers: {
    [postMyListData.fulfilled.type]: (state, action: PayloadAction<Film>) => {
      state.isFilmInList = action.payload.isFavorite;
    },
  },
});

export const {setGenre, setMovieInfo, toggleFilmInList} = appProcessSlice.actions;

export default appProcessSlice.reducer;

