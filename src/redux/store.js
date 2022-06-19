import localforage from 'localforage'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: localforage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
  })
  const persistor = persistStore(store)

  return { store, persistor }
}