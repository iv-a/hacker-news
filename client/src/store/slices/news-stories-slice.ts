import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  page: number;
  posts: number[];
}

const initialState: IInitialState = {
  page: 1,
  posts: [],
};

const newsStoriesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { incrementPage } = newsStoriesSlice.actions;

export default newsStoriesSlice.reducer;
