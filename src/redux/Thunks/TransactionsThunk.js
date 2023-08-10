import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'Api/authApi';
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
  getTransCategories,
  updateTransaction,
} from 'Api/transactionsApi';
import { updateBalance } from 'redux/Slices/AuthUserSlice';
import { getCurrentUserThunk } from './AuthUserThunk';

export const getTransactionsThunk = createAsyncThunk(
  'transactions/getTransactions',
  async () => {
    const data = await getTransactions();
    return data;
  }
);

export const addTransactionThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (transactions, thunkAPI) => {
    try {
      const data = await addTransaction(transactions);
      thunkAPI.dispatch(updateBalance(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  async (idTransaction, thunkAPI) => {
    const data = await deleteTransaction(idTransaction);
    thunkAPI.dispatch(getTransactionsThunk());
    thunkAPI.dispatch(getCurrentUserThunk());
    return data;
  }
);

export const editTransactionThunk = createAsyncThunk(
  'transactions/editTransaction',
  async (dataEdit, thunkAPI) => {
    try {
      const newTrans = await updateTransaction(dataEdit);
      thunkAPI.dispatch(getTransactionsThunk());
      thunkAPI.dispatch(getCurrentUserThunk());
      return newTrans;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransCategoriesThunk = createAsyncThunk(
  'transactions/getTransCategories',
  async (tokenTrans, thunkAPI) => {
    try {
      token.set(tokenTrans);
      const data = await getTransCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
