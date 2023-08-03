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

import React from 'react';

const Home = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* {transactions.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => {
            return (
            //   <tr key={id}>
            //     <td>{transactionDate}</td>
            //     <td>{type === 'INCOME' ? '+' : '-'}</td>
            //     <td>{categoryId}</td>
            //     <td>{comment}</td>
            //     <td>{amount}</td>
            //     <td>
            //       <button>
            //         <Link to={`/api/transactions/${id}`}>Update</Link>
            //       </button>

            //       <button>Delete</button>
            //     </td>
            //     </tr> */}
        <tr>
          <td>11.09.20023</td>
          <td>-</td>
          <td>car</td>
          <td>my comment</td>
          <td>12222</td>
          <td>
            <button>
              {/* <Link to={`/api/transactions/${id}`}>Update</Link> */}
              update
            </button>

            <button>Delete</button>
          </td>
        </tr>
        {/* );
          }
        )} */}
      </tbody>
    </table>
  );
};
export default Home;
