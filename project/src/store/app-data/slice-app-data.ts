import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../const';
import { CommentGet, Film } from '../../types/data';
import { AppData } from '../../types/state';
import { FilmScreenData, MainScreenData } from '../../types/thunk-actions';
import { fetchFilmScreenData, fetchMainScreenData } from '../api-actions';

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
    loadAllFilms: (state, action: PayloadAction<Film[]>) => {
      state.allFilms = action.payload;
    },
    loadPromoFilm: (state, action: PayloadAction<Film>) => {
      state.promoFilm = action.payload;
    },
    loadCurrentFilm: (state, action: PayloadAction<Film>) => {
      state.currentFilm = action.payload;
    },
    loadCurrentComments: (state, action: PayloadAction<CommentGet[]>) => {
      state.currentComments = action.payload;
    },
    loadSimilarFilms: (state, action: PayloadAction<Film[]>) => {
      state.similarFilms = action.payload;
    },
    loadMyListFilms: (state, action: PayloadAction<Film[]>) => {
      state.myListFilms = action.payload;
    },
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
  },
});

export const {
  loadAllFilms,
  loadPromoFilm,
  loadCurrentFilm,
  loadCurrentComments,
  loadMyListFilms,
  loadSimilarFilms,
  resetCurrentFilm,
  updateFilm,
  resetPromoFilm,
} = appDataSlice.actions;

export default appDataSlice.reducer;
