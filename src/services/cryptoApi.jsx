// RTK Query "https://redux-toolkit.js.org/rtk-query/overview"
// If you are not using RTK already:
//Without React: 17 kB for RTK+dependencies+RTK Query
//With React: 19kB + React - Redux, which is a peer dependency
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// avoid cors error by using rapidapi otherwise we can build nodejs server and fetch data
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '418a7dfc52mshe553ddac007c86dp143f64jsnd7f78d6cc2e3',
};

const createRequest = (url) => ({
  url,
  method: 'GET',
  mode: 'cors',
  headers: cryptoApiHeaders,
});

export const CryptoApi = createApi({
  reducerPath: 'CryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getCryptosstats: builder.query({
      query: () => createRequest(`/stats`),
    }),
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCoin: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCoinHistory: builder.query({
      query: ({ coinId, timestamp }) =>
        createRequest(`/coin/${coinId}/history/${timestamp}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptosstatsQuery,
  useGetCoinQuery,
  useGetExchangesQuery,
  useGetCoinHistoryQuery,
} = CryptoApi;
