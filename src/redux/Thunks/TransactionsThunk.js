import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'Api/authApi';
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
  getTransCategories,
  updateTransaction,
  // updateTransaction,
} from 'Api/transactionsApi';
import { updateBalance } from 'redux/Slices/AuthUserSlice';

// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/selectors';

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
      //return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  async (dataEdit, thunkAPI) => {
    try {
      const data = await deleteTransaction(dataEdit);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateTransactionThunk = createAsyncThunk(
//   'transaction/updateTransaction',
//   transaction => {
//     const data = updateTransaction(transaction);
//     return data;
//   }
// );

export const editTransactionThunk = createAsyncThunk(
  'transactions/editTransaction',
  async (dataEdit, thunkAPI) => {
    console.log(dataEdit);

    // const transId = dataEdit.data.id;
    // // const data = data.data;
    // const token = dataEdit.token;

    try {
      console.log(345);

      // token.set(tokenTrans);

      const newTrans = await updateTransaction(dataEdit);
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
