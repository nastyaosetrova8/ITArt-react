import { configureStore } from '@reduxjs/toolkit'
import { registerReducer } from './Slices/AuthUserSlice'
import { rootReducer } from './Slices/rootSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { transactionsSummaryReducer } from './Slices/TransactionsSumSlice';
import { transactionsReducer } from './Slices/TransactionsSlice';

const registerPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


const store = configureStore({
  reducer: {
    register: persistReducer(registerPersistConfig, registerReducer),
    root: rootReducer,
    transactoinsSummary: transactionsSummaryReducer,
    transactions: transactionsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store
