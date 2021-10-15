import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { CryptoApi } from '../services/cryptoApi';
import { CryptoNewsAPI } from '../services/CryptoNewsAPI';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNewsAPI.reducerPath]: CryptoNewsAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
