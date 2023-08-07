import { useDispatch, useSelector } from 'react-redux';

import { selectToken, selectTransactions } from 'redux/selectors';

import { makerDasboardTab } from 'helpers/helpers';

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
import { deleteTransactionThunk } from 'redux/Thunks/TransactionsThunk';

export const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  // const transactions = useSelector(selectTransactions);

  // const handleOnClick = evt => {

  //   dispatch(editTransactionThunk());
  // };

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

    //   // const dataEx = {
    //   //   transactionDate: "2023-01-23",
    //   // type: "EXPENSE",
    //   // categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    //   // comment: "string",
    //   // amount: -5}

    dispatch(deleteTransactionThunk({ dataEdit, token }));
  };

  // ============================ TABLE+++++++++++

  const rows = makerDasboardTab(transactions).rows;
  const columns = makerDasboardTab(transactions).columns;
  // const rows = transactions.transactions?.map(
  //   ({ transactionDate, type, categoryId, comment, amount, id }) => {
  //     return {
  //       date: transactionDate,
  //       type: type === 'INCOME' ? '+' : '-',
  //       category: categoryId,
  //       comment,
  //       sum: amount,
  //       id,
  //     };
  //   }
  // );

  // const columns = columnsDashboardTab;

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
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              background: 'transparent',
            }}
          >
            <TableHead>
              <TableRow>
                {columns.map(column => (
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
                    {columns.map((column, idx) => {
                      const value = row[column.id];

                      return idx === columns.length - 1 ? (
                        <TableCell key={column.id} align={column.align}>
                          <Button type="button">edit</Button>
                          <Button type="button" onClick={handleClickDElete}>
                            del
                          </Button>
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
  );
};
