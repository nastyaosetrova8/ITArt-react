import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  editTransactionThunk,
  getTransCategoriesThunk,
  getTransactionsThunk,
} from 'redux/Thunks/TransactionsThunk';
import { initialModalState } from 'redux/initialState';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialModalState,
  extraReducers: builder =>
    builder

      // -------- Get transactions --------
      .addCase(getTransactionsThunk.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })

      // -------- Get categories --------
      .addCase(getTransCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })

      // -------- Add transactions --------
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.push(payload);
      })

      // -------- Edit transactions --------
      .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
        const index = state.transactions.findIndex(item => item.id === payload);
        state.transactions.splice(index, 1);
      }),
});

export const transactionsReducer = transactionsSlice.reducer;
