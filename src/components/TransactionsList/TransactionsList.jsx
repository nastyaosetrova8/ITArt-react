import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { makerDasboardTab } from 'helpers/helpers';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import { editTransactionThunk } from 'redux/modalTransRedux/modalTransThunks';
import {
  selectCategories,
  selectToken,
  selectTransactions,
} from 'redux/selectors';

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const transactions = useSelector(selectTransactions);
  const nameCategories = useSelector(selectCategories);

  const trans = useSelector(selectTransactions);

  const handleOnClick = evt => {
    // const id = evt.CurrentTarget
    dispatch(editTransactionThunk());
  };

  // ==========DELETE TRANS
  const handleClickDElete = () => {
    const dataEdit = {
      id: 'f2103647-98f1-4278-96b7-3b33112ef5e7',
      transactionDate: '2023-01-23',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'string',
      amount: 25,
    };

    // const dataEx = {
    //   transactionDate: "2023-01-23",
    // type: "EXPENSE",
    // categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    // comment: "string",
    // amount: -5}

    dispatch(deleteTransactionThunk({ dataEdit, token }));
  };

  // ============================ TABLE+++++++++++

  const testTrans = {
    amount: 100,
    balanceAfter: 79,
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    comment: 'dfgbsgfb',
    id: '84ebef4b-65e9-428c-8366-aa7f85a3c911',
    transactionDate: '2023-08-06',
    type: 'INCOME' /*'EXPENSE'*/,
    userId: 'c39fa426-dee5-4c7d-8bac-8bb6cecc41f3',
  };

  const myColumns = makerDasboardTab(testTrans).columns;
  const rows = makerDasboardTab(testTrans).rows;

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          maxWidth: '715px',
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {myColumns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ maxWidth: column.maxWidth }}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {myColumns.map((column, idx) => {
                      const value = row[column.id];

                      return idx === myColumns.length - 1 ? (
                        <TableCell key={column.id} align={column.align}>
                          <Button type="button">edit</Button>
                          <Button type="button">del</Button>
                        </TableCell>
                      ) : (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>

    // <>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Date</th>
    //         <th>Type</th>
    //         <th>Category</th>
    //         <th>Comment</th>
    //         <th>Sum</th>
    //         <th></th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* {transactions.map(
    //       ({ id, transactionDate, type, categoryId, comment, amount }) => {
    //         return (
    //         //   <tr key={id}>
    //         //     <td>{transactionDate}</td>
    //         //     <td>{type === 'INCOME' ? '+' : '-'}</td>
    //         //     <td>{categoryId}</td>
    //         //     <td>{comment}</td>
    //         //     <td>{amount}</td>
    //         //     <td>
    //         //       <button>
    //         //         <Link to={`/api/transactions/${id}`}>Update</Link>
    //         //       </button>

    //         //       <button>Delete</button>
    //         //     </td>
    //         //     </tr> */}
    //       <tr>
    //         <td>11.09.20023</td>
    //         <td>-</td>
    //         <td>car</td>
    //         <td>my comment</td>
    //         <td>12222</td>
    //         <td>
    //           <button onClick={handleOnClick}>
    //             {/* <Link to={`/api/transactions/${id}`}>Update</Link> */}
    //             update
    //           </button>

    //           <button type="button" onClick={handleClickDElete}>
    //             Delete
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </>
  );
};
