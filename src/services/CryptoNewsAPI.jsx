// RTK Query "https://redux-toolkit.js.org/rtk-query/overview"
// If you are not using RTK already:
//Without React: 17 kB for RTK+dependencies+RTK Query
//With React: 19kB + React - Redux, which is a peer dependency
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// avoid cors error by using rapidapi otherwise we can build nodejs server and fetch data
const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '418a7dfc52mshe553ddac007c86dp143f64jsnd7f78d6cc2e3',
};

const createRequest = (url) => ({
  url,
  method: 'GET',
  headers: cryptoNewsHeaders,
});

export const CryptoNewsAPI = createApi({
  reducerPath: 'CryptoNewsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bing-news-search1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        ),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = CryptoNewsAPI;
