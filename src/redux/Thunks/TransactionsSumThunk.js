import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionsSum } from 'Api/transactionsSumApi';

export const getTransSumThunk = createAsyncThunk(
    'trasactions/getTransSumThunk',
    async ({ year, month }, thunkAPI) => {
        try {
            const data = await getTransactionsSum({ year, month });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
