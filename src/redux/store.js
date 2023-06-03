import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { currencyReducer } from "./currencySlice";

const currencyPersistConfig = {
  key: "root",
  storage,
  whitelist: ["baseCurrency"],
};
const persistedReducer = persistReducer(currencyPersistConfig, currencyReducer);

export const store = configureStore({
  reducer: {
    currency: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
