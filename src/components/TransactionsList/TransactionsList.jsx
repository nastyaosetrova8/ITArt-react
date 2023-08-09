import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategories,
  selectToken,
  selectTransactions,
} from 'redux/selectors';

import { makerDasboardTab } from 'helpers/helpers';

import { Paper, Table, TableCell, TableContainer } from '@mui/material';
import { deleteTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import {
  BtnCont,
  BtnDelete,
  BtnEdit,
  BtnEditTransaction,
  BtnIcon,
  HeadRow,
  TableBodySt,
  TableHeadSt,
  TableRowStyled,
  TransactionContainer,
  TransactionItem,
  TransactionList,
  TransactionTitle,
} from './TransactionsListStyled';
import { toggleShowModal } from 'redux/modal/modalSlice';
import MediaQuery from 'react-responsive';
import { nanoid } from '@reduxjs/toolkit';

export const TransactionsList = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  const handleOnClick = e => {
    dispatch(toggleShowModal(e.currentTarget.name));
  };

  // ==========DELETE TRANS
  const handleClickDelete = () => {
    const dataEdit = {
      id: 'f2103647-98f1-4278-96b7-3b33112ef5e7',
      transactionDate: '2023-01-23',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'string',
      amount: 25,
    };
    dispatch(deleteTransactionThunk({ dataEdit, token }));
  };

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

  let findCategory = '';
  
  function formatDate(date) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = String(dateObj.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
  }
  
  return (
    <>
      <MediaQuery maxWidth={768}>
        <TransactionContainer>
          {transactions.transactions?.map(
            ({ transactionDate, type, categoryId, comment, amount, id }) => {
              findCategory = categories.find(
                category => category.id === categoryId
              );
              return (
                <li key={nanoid()}>
                  <TransactionList type={type}>
                    <TransactionItem>
                      <TransactionTitle>Date</TransactionTitle>
                      <span> {formatDate(transactionDate)}</span>
                    </TransactionItem>
                    <TransactionItem>
                      <TransactionTitle>Type</TransactionTitle>
                      <span> {type === 'INCOME' ? '+' : '-'}</span>
                    </TransactionItem>
                    <TransactionItem>
                      <TransactionTitle>Category</TransactionTitle>
                      <span>
                        {findCategory && findCategory.name
                          ? findCategory.name
                          : categoryId}
                      </span>
                    </TransactionItem>
                    <TransactionItem>
                      <TransactionTitle>Comment</TransactionTitle>
                      <span> {comment}</span>
                    </TransactionItem>
                    <TransactionItem>
                      <TransactionTitle>Sum</TransactionTitle>
                      <span
                        style={{
                          color: type === 'INCOME' ? '#FFB627' : '#FF868D',
                          fontWeight: 600,
                        }}
                      >
                        {amount > 0 ? amount : Math.abs(amount.toFixed(2))}
                      </span>
                    </TransactionItem>
                    <TransactionItem>
                      <BtnDelete
                        id={id}
                        type="button"
                        onClick={() => handleClickDelete(id)}
                      >
                        Delete
                      </BtnDelete>
                      <BtnEditTransaction
                        type="button"
                        name="edit"
                        onClick={handleOnClick}
                      >
                        {<BtnIcon />} Edit
                      </BtnEditTransaction>
                    </TransactionItem>
                  </TransactionList>
                </li>
              );
            }
          )}
        </TransactionContainer>
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <Paper
          sx={{
            width: '100%',
            maxWidth: '715px',
            overflow: 'hidden',
            background: 'transparent',
            borderRadius: '8px',
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
                              type="button"
                              name="edit"
                              onClick={handleOnClick}
                            >
                              <BtnIcon sx={{ fontSize: 18 }} />
                            </BtnEdit>
                            <BtnDelete
                              id={row.id}
                              type="button"
                              onClick={() => handleClickDelete(row.id)}
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
      </MediaQuery>
    </>
  );
};
