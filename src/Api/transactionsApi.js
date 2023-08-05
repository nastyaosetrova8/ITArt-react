import { instance } from './api';
import { token } from './authApi';

export const getAllTransactions = async () => {
  const { data } = await instance.get('/api/transactions');
  return data;
};
export const addTransaction = async transaction => {
  const { data } = await instance.post('/api/transactions', transaction);
  return data;
};
export const deleteTransaction = async ({dataEdit, tokenTrans }) => {
  const transId = dataEdit.id;
  token.set(tokenTrans)
  const { data } = await instance.delete(`/api/transactions/${transId}`);
  console.log(data)
  return data;
};

export const updateTransaction = async ({dataEdit, tokenTrans }) => {
  const transId = dataEdit.id;
  const transDat = {
    transactionDate: dataEdit.transactionDate,
    type: dataEdit.type,
    categoryId: dataEdit.categoryId,
    comment: dataEdit.comment,
    amount: dataEdit.amount,
  }
  token.set(tokenTrans)
  const { data } = await instance.patch(`/api/transactions/${transId}`, transDat);
  console.log(data)
  return data;
};

export const getTransCategories = async () => {
  const {data} = await instance.get('/api/transaction-categories');
  console.log(data)
  return data;
}; 