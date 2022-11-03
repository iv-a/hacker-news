import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '../utils/constants';
import { IItem, TPostsList } from '../models';

const hnApi = createApi({
  reducerPath: 'hnApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getPostsList: build.query<TPostsList, void>({
      query: () => ({
        url: '/posts',
      }),
    }),
    getItem: build.query<IItem, number>({
      query: (id) => ({
        url: '/item',
        params: {
          id,
        },
      }),
    }),
    getPost: build.query<IItem, number>({
      query: (id) => ({
        url: '/post',
        params: {
          id,
        },
      }),
    }),
  }),
});

export default hnApi;
