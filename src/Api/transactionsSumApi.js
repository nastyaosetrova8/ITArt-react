import { instance } from './api';

//GET TRANSACTIONS SUMMARY
export const getTransactionsSum = async ({ year, month }) => {
    const { data } = await instance.get(`/api/transactions-summary?year=${year}&month=${month}`);
    return data;
};
