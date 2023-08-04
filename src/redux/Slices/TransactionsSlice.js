import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  fetchTransactionsThunk,
  updateTransactionThunk,
} from 'redux/Thunks/TransactionsThunk';
import { initialTransactionState } from 'redux/initialState';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const fulfilledFetch = (state, { payload }) => {
  state.isLoading = false;
  state.transactions = payload;
};
const fulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.transactions.push(payload);
};
const fulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.transactions = state.contacts.transactions.filter(
    transaction => transaction.id !== payload
  );
};
const fulfilledUpdate = (state, { payload }) => {
  state.isLoading = false;
  state.transactions = state.transactions.map(transaction => {
    if (transaction.id === payload.id) {
      return payload;
    }
    return transaction;
  });
};
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialTransactionState,

  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.pending, handlePending)
      .addCase(fetchTransactionsThunk.fulfilled, fulfilledFetch)
      .addCase(fetchTransactionsThunk.rejected, handleRejected)
      // =============ADD Transaction================
      .addCase(addTransactionThunk.pending, handlePending)
      .addCase(addTransactionThunk.fulfilled, fulfilledAdd)
      .addCase(addTransactionThunk.rejected, handleRejected)
      // =============DELETE Transaction================
      .addCase(deleteTransactionThunk.pending, handlePending)
      .addCase(deleteTransactionThunk.fulfilled, fulfilledDelete)
      .addCase(deleteTransactionThunk.rejected, handleRejected)
      //===============Update Transaction============
      .addCase(updateTransactionThunk.pending, handlePending)
      .addCase(updateTransactionThunk.fulfilled, fulfilledUpdate)
      .addCase(updateTransactionThunk.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionsSlice.reducer;
