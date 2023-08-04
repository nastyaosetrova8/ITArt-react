import axios from "axios";


const instance = axios.create({
    baseURL: 'https://wallet.goit.ua',
});


export const getTransactions = async () => {
    const {data} = await instance.get('/api/transactions');
    return data;
}; 

export const getTransCategories = async () => {
    const {data} = await instance.get('/api/transaction-categories');
    return data;
}; 

export const addTransaction = async (transaction) => {
    const {data} = await instance.post('/api/transactions', transaction);
    return data;
}; 

export const editTransaction = async ({transactionId, transaction}) => {
    const {data} = await instance.patch(`/api/transactions/${transactionId}`, transaction);
    return data;
}; 





