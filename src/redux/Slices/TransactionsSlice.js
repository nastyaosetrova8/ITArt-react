import { createSlice } from '@reduxjs/toolkit';
import { addTransactionThunk, editTransactionThunk, fetchTransactionsThunk, getTransCategoriesThunk } from 'redux/Thunks/TransactionsThunk';
// import { addTransactionThunk, editTransactionThunk } from './modalThunks';
// import { getTransCategoriesThunk, getTransactionsThunk } from './modalTransThunks';
import { initialModalState } from 'redux/initialState';

// import { handlePending, handleRejected } from './rootSlice';


// const initialState = {
//   transactions: [],
//   categories: [],
// };

// function handlePending(state) {
//   state.isLoading = true;
//   state.error = null;
// }

// function handleRejected(state, { payload }) {
//   state.isLoading = false;
//   state.error = payload;
// }

// const handlerCategories = (state, {payload}) => {
//   console.log(payload)
//   state.categories = payload;}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialModalState,
  extraReducers: builder =>
    builder

      // -------- Get transactions -------- 
      .addCase(fetchTransactionsThunk.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        state.transactions = payload;
      })

      // -------- Get categories --------
      .addCase(getTransCategoriesThunk.fulfilled, (state,  {payload} ) => {
        // state.isLoading = false;
        // console.log(payload)
        // console.log(state)
        state.categories = payload;
        state.transactions = [];
      })

      // .addCase(getTransCategoriesThunk.fulfilled, handlerCategories)
    

      // -------- Add transactions --------
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        state.transactions.items.push(payload);
      })

      // -------- Edit transactions --------
      .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        console.log(payload)
        const index = state.transactions.findIndex(item => item.id === payload);
        state.transactions.splice(index, 1);
      })
      // .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      // .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const transactionsReducer = transactionsSlice.reducer;
