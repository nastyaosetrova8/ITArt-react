import { instance } from './api';

//GET TRANSACTIONS SUMMARY
export const getTransactionsSum = async ({ year, month }) => {
    const { data } = await instance.get('/transactions-summary', {
        params: {
            year,
            month,
        },
    });
    return data;
};
