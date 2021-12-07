import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../const';
import { Film } from '../../types/data';
import { AppData } from '../../types/state';
import { FilmScreenData, MainScreenData, MyListScreenData } from '../../types/thunk-actions';
import { fetchFilmScreenData, fetchMainScreenData, fetchMyListScreenData } from '../api-actions';

const initialState: AppData = {
  promoFilm: {} as Film,
  allFilms: [],
  currentFilm: {} as Film,
  currentComments: [],
  similarFilms: [],
  myListFilms: [],
  isDataLoading: false,
  isDataPosting: false,
};

export const appDataSlice = createSlice({
  name: Slice.Data,
  initialState,
  reducers: {
    updateFilm: (state, action: PayloadAction<Film>) => {
      const updatedFilm = action.payload;
      const filmToUpdate = state.allFilms.find(
        (film) => film.id === updatedFilm.id,
      );
      if (state.myListFilms.length > 0) {
        state.myListFilms = state.myListFilms.filter(
          (film) => film.id !== updatedFilm.id,
        );
      }
      if (filmToUpdate) {
        filmToUpdate.isFavorite = updatedFilm.isFavorite;
      }
    },
    resetPromoFilm: (state) => {
      state.promoFilm = {} as Film;
    },
    resetCurrentFilm: (state) => {
      state.similarFilms = [];
      state.currentComments = [];
      state.currentFilm = {} as Film;
    },
    resetMyListFilms: (state) => {
      state.myListFilms = [];
    },
  },
  extraReducers: {
    [fetchMainScreenData.fulfilled.type]: (state, action: PayloadAction<MainScreenData>) => {
      state.allFilms = action.payload.allFilms;
      state.promoFilm = action.payload.promoFilm;
    },
    [fetchFilmScreenData.fulfilled.type]: (state, action: PayloadAction<FilmScreenData>) => {
      state.similarFilms = action.payload.similarFilms;
      state.currentFilm = action.payload.currentFilm;
      state.currentComments = action.payload.currentComments;
    },
    [fetchMyListScreenData.fulfilled.type]: (state, action: PayloadAction<MyListScreenData>) => {
      state.myListFilms = action.payload.myListFilms;
    },
  },
});

export const {
  resetCurrentFilm,
  resetMyListFilms,
  updateFilm,
  resetPromoFilm,
} = appDataSlice.actions;

export default appDataSlice.reducer;
