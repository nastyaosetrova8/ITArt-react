import { useDispatch, useSelector } from 'react-redux';

import { selectToken, selectTransactions } from 'redux/selectors';

import { makerDashboardTab } from 'helpers/helpers';

import { Paper, Table, TableCell, TableContainer } from '@mui/material';
import {
  deleteTransactionThunk,
  getTransactionsThunk,
} from 'redux/Thunks/TransactionsThunk';
import {
  BtnCont,
  BtnDelete,
  BtnEdit,
  BtnIcon,
  HeadRow,
  TableBodySt,
  TableHeadSt,
  TableRowStyled,
} from './TransactionsListStyled';

import { saveIdTransaction, toggleShowModal } from 'redux/modal/modalSlice';
import { useEffect, useState } from 'react';

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  const handleClickEdit = e => {
    dispatch(saveIdTransaction(e.currentTarget.id));
    dispatch(toggleShowModal(e.currentTarget.name));
  };

  const handleClickDelete = e => {
    const idTransaction = e.currentTarget.id;
    dispatch(deleteTransactionThunk(idTransaction));
    // .unwrap()
    // .then(() => dispatch(getTransactionsThunk()));
  };

  const rows = makerDashboardTab(transactions).rows;
  const columns = makerDashboardTab(transactions).columns;

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
            <TableHeadSt>
              <HeadRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ maxWidth: column.maxWidth }}
                    sx={{
                      borderBottom: 'none',
                      fontWeight: 600,
                      fontSize: '16px',
                    }}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </HeadRow>
            </TableHeadSt>
            <TableBodySt>
              {rows.map(row => {
                return (
                  <TableRowStyled role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column, idx) => {
                      const value = row[column.id];

                      return idx === columns.length - 1 ? (
                        <BtnCont key={column.id}>
                          <BtnEdit
                            id={row.id}
                            type="button"
                            name="edit"
                            onClick={handleClickEdit}
                          >
                            <BtnIcon sx={{ fontSize: 18 }} />
                          </BtnEdit>
                          <BtnDelete
                            id={row.id}
                            type="button"
                            onClick={handleClickDelete}
                          >
                            Delete
                          </BtnDelete>
                        </BtnCont>
                      ) : (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            borderBottom: 'none',
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRowStyled>
                );
              })}
            </TableBodySt>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
