import { createSlice } from '@reduxjs/toolkit';
import { initialSummaryState } from 'redux/initialState';
import { getTransSumThunk } from 'redux/Thunks/TransactionsSumThunk';

const fulfilledTransactionSummary = (state, { payload }) => {
    state.categoriesSummary = payload.categoriesSummary;
    state.incomeSummary = payload.incomeSummary;
    state.expenseSummary = payload.expenseSummary;
    state.periodTotal = payload.periodTotal;
    state.year = payload.year;
    state.month = payload.month;
};

const transactionsSummarySlice = createSlice({
    name: 'transacionsSummary',
    initialState: initialSummaryState,
    extraReducers: builder => builder.addCase(getTransSumThunk.fulfilled, fulfilledTransactionSummary),
});


export const transactionsSummaryReducer = transactionsSummarySlice.reducer;