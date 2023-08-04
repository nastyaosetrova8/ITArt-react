import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTransaction, editTransaction, getTransCategories, getTransactions } from "services/apimodal";



export const getTransactionsThunk = createAsyncThunk(
    'transactions/getTransCategories',
    async (_, thunkAPI) => {
      try {
        const trans = await getTransactions();
        return trans;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const getTransCategoriesThunk = createAsyncThunk(
    'transactions/getTransCategories',
    async (_, thunkAPI) => {
      try {
        const trans = await getTransCategories();
        return trans;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addTransactionThunk = createAsyncThunk(
    'transactions/addTransaction',
    async (modalData, thunkAPI) => {
      try {
        const newTrans = await addTransaction(modalData);
        return newTrans;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const editTransactionThunk = createAsyncThunk(
    'transactions/editTransaction',
    async ({transactionId, modalData}, thunkAPI) => {
      try {
        const newTrans = await editTransaction(transactionId, modalData);
        return newTrans;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );