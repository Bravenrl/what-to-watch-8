import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../const';
import { Film } from '../../types/data';
import { AppData } from '../../types/state';
import { FilmScreenData,
  MainScreenData,
  MyListScreenData } from '../../types/thunk-actions';
import { fetchFilmScreenData,
  fetchMainScreenData,
  fetchMyListScreenData,
  postCommentData,
  postMyListData} from '../api-actions';

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
      state.isDataLoading = false;
    },
    [fetchMainScreenData.pending.type]: (state) => {
      state.isDataLoading = true;
    },
    [fetchMainScreenData.rejected.type]: (state, action:PayloadAction<number>) => {
      state.isDataLoading = false;
    },
    [fetchFilmScreenData.fulfilled.type]: (state, action: PayloadAction<FilmScreenData>) => {
      state.similarFilms = action.payload.similarFilms;
      state.currentFilm = action.payload.currentFilm;
      state.currentComments = action.payload.currentComments;
      state.isDataLoading = false;
    },
    [fetchFilmScreenData.pending.type]: (state) => {
      state.isDataLoading = true;
    },
    [fetchFilmScreenData.rejected.type]: (state) => {
      state.isDataLoading = false;
    },
    [fetchMyListScreenData.fulfilled.type]: (state, action: PayloadAction<MyListScreenData>) => {
      state.myListFilms = action.payload.myListFilms;
      state.isDataLoading = false;
    },
    [fetchMyListScreenData.pending.type]: (state) => {
      state.isDataLoading = true;
    },
    [fetchMyListScreenData.rejected.type]: (state) => {
      state.isDataLoading = false;
    },
    [postMyListData.fulfilled.type]: (state, action: PayloadAction<Film>) => {
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
      state.isDataPosting = false;
    },
    [postMyListData.pending.type]: (state) => {
      state.isDataPosting = true;
    },
    [postMyListData.rejected.type]: (state) => {
      state.isDataPosting = false;
    },
    [postCommentData.fulfilled.type]: (state) => {
      state.isDataPosting = false;
    },
    [postCommentData.rejected.type]: (state) => {
      state.isDataPosting = false;
    },
    [postCommentData.pending.type]: (state) => {
      state.isDataPosting = true;
    },
  },
});

export const {
  resetCurrentFilm,
  resetMyListFilms,
  resetPromoFilm,
} = appDataSlice.actions;

export default appDataSlice.reducer;
