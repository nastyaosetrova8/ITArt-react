import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'Api/authApi';
import {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransCategories,
  updateTransaction,
  // updateTransaction,
} from 'Api/transactionsApi';
// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/selectors';


export const fetchTransactionsThunk = createAsyncThunk(
  'transactions/fetchAll',
  async (tokenTrans, thunkAPI) => {
    
    try {

//       console.log(tokenTrans)
// token.set(tokenTrans);
// // console.log(tokenTrans)


      const data = await getAllTransactions();

      // token.set(data.token)

      // console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTransactionThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (transactions, thunkAPI) => {
    try {
      const data = await addTransaction(transactions);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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

  console.log(dataEdit)

  // const transId = dataEdit.data.id;
  // // const data = data.data;
  // const token = dataEdit.token;

    try {
      console.log(345)

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

      // console.log(tokenTrans)

      const data = await getTransCategories();
      console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
