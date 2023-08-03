import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
  updateTransaction,
} from 'Api/transactionsApi';

export const fetchTransactionsThunk = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllTransactions();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTransactionThunk = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const data = await addTransaction(transaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTransactionThunk = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const data = await deleteTransaction(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateTransactionThunk = createAsyncThunk(
  'transaction/updateTransaction',
  transaction => {
    const data = updateTransaction(transaction);
    return data;
  }
);
