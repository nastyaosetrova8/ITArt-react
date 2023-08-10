import { instance } from './api';


export const getTransactions = async () => {
  const { data } = await instance.get('/api/transactions');
  return data;
};
export const addTransaction = async transaction => {
  const { data } = await instance.post('/api/transactions', transaction);  
  return data;
};
export const deleteTransaction = async idTransaction => {
  console.log('idTransaction: ', idTransaction);
  const { data } = await instance.delete(`/api/transactions/${idTransaction}`);
  return data;
};

export const updateTransaction = async ({transData, id}) => {
  const transId = id;

  const { data } = await instance.patch(
    `/api/transactions/${transId}`,
    transData
  );
  // console.log(data);
  return data;
};

export const getTransCategories = async () => {
  const { data } = await instance.get('/api/transaction-categories');
  return data;
};
