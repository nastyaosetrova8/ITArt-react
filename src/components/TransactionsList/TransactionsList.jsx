import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteTransactionThunk,
  fetchTransactionsThunk,
} from 'redux/Thunks/TransactionsThunk';

export const TransactionsList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const transactions = useSelector(state => state.transaction.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  const onDeleteTransaction = id => {
    console.log('delete');
    dispatch(deleteTransactionThunk(id));
  };
  const onEditTransaction = item => {
    console.log('edit');
    dispatch();
    setModalOpen(true);
  };
  return (
    <>
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
                <tr key={id}>
                  <td>{transactionDate}</td>
                  <td>{type === 'INCOME' ? '+' : '-'}</td>
                  <td>{categoryId}</td>
                  <td>{comment}</td>
                  <td>{amount}</td>
                  <td>
                    <button onClick={() => onEditTransaction()}>
                      <Link to={`/api/transactions/${id}`}>Update</Link>
                    </button>
                      {modalOpen && '</>'}
                    <button onClick={() => onDeleteTransaction(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          )} */}
          <tr>
            <td>11.09.23</td>
            <td>-</td>
            <td>car</td>
            <td>my comment</td>
            <td>12222</td>
            <td>
              <button onClick={() => onEditTransaction()}>update</button>
              {modalOpen && '</>'}
              <button onClick={() => onDeleteTransaction()}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
