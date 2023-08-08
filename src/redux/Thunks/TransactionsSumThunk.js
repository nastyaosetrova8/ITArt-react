import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionsSum } from 'Api/transactionsSumApi';

export const getTransSumThunk = createAsyncThunk(
    'trasactions/getTransSumThunk',
    async (date, thunkAPI) => {
        try {
            const data = await getTransactionsSum(date);
            //console.log('i am here', data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
