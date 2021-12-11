import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../const';
import { Film } from '../../types/data';
import { AppData } from '../../types/state';
import { FilmScreenData,
  MainScreenData,
  MyListScreenData,
  VideoScreenData} from '../../types/thunk-actions';
import { fetchFilmScreenData,
  fetchMainScreenData,
  fetchMyListScreenData,
  fetchVideoScreenData,
  postCommentData,
  postMyListData} from '../api-actions';

const initialState: AppData = {
  allFilms: [],
  currentFilm: {} as Film,
  currentComments: [],
  isDataLoading: false,
  isDataPosting: false,
};

export const appDataSlice = createSlice({
  name: Slice.Data,
  initialState,
  reducers: {
    resetScreenData: (state) => {
      state.allFilms = [];
      state.currentComments = [];
      state.currentFilm = {} as Film;
    },
  },
  extraReducers: {
    [fetchMainScreenData.fulfilled.type]: (state, action: PayloadAction<MainScreenData>) => {
      state.allFilms = action.payload.allFilms;
      state.currentFilm = action.payload.currentFilm;
      state.isDataLoading = false;
    },
    [fetchMainScreenData.pending.type]: (state) => {
      state.isDataLoading = true;
    },
    [fetchMainScreenData.rejected.type]: (state, action:PayloadAction<number>) => {
      state.isDataLoading = false;
    },
    [fetchFilmScreenData.fulfilled.type]: (state, action: PayloadAction<FilmScreenData>) => {
      state.allFilms = action.payload.allFilms;
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
      state.allFilms = action.payload.allFilms;
      state.isDataLoading = false;
    },
    [fetchMyListScreenData.pending.type]: (state) => {
      state.isDataLoading = true;
    },
    [fetchMyListScreenData.rejected.type]: (state) => {
      state.isDataLoading = false;
    },
    [postMyListData.fulfilled.type]: (state) => {
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
    [fetchVideoScreenData.fulfilled.type]: (state, action: PayloadAction<VideoScreenData>) => {
      state.currentFilm = action.payload.currentFilm;
      state.isDataLoading = false;
    },
    [fetchVideoScreenData.pending.type]: (state) => {
      state.isDataLoading = true;
    },
    [fetchVideoScreenData.rejected.type]: (state) => {
      state.isDataLoading = false;
    },
  },
});

export const {
  resetScreenData,
} = appDataSlice.actions;

export default appDataSlice.reducer;
