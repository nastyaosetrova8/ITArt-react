import { instance } from './api';

export const getAllTransactions = async () => {
  const { data } = await instance.get('/api/transactions');
  return data;
};
export const addTransaction = async transaction => {
  const { data } = await instance.post('/api/transactions', transaction);
  return data;
};
export const deleteTransaction = async id => {
  const { data } = await instance.delete(`/api/transactions/${id}`);
  return data;
};
export const updateTransaction = async ({ id, ...transaction }) => {
  const { data } = await instance.patch(`/api/transactions/${id}`, transaction);
  return data;
};