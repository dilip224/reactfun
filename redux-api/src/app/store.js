import { configureStore } from '@reduxjs/toolkit'
import counterReduce from "../features/counter/reduxslice"
// fetch api
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/Pokemon'
export const store = configureStore({
  reducer: {
    counter:counterReduce,
    [pokemonApi.reducerPath]: pokemonApi.reducer,



  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

