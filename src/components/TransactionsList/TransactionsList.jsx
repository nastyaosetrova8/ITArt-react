import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategories,  
  selectTransactions,
} from 'redux/selectors';

import { makerDashboardTab } from 'helpers/helpers';

import { Paper, Table, TableCell, TableContainer } from '@mui/material';
import {
  deleteTransactionThunk,  
} from 'redux/Thunks/TransactionsThunk';
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
import MediaQuery from 'react-responsive';
import { nanoid } from '@reduxjs/toolkit';
import { saveIdTransaction, toggleShowModal } from 'redux/modal/modalSlice';
import { notifyDeleted } from 'components/Toastify/Toastify';

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  const handleClickEdit = e => {
    dispatch(saveIdTransaction(e.currentTarget.id));
    dispatch(toggleShowModal(e.currentTarget.name));    
  };

  const handleClickDelete = e => {    
    const idTransaction = e.currentTarget.id;
    dispatch(deleteTransactionThunk(idTransaction)).unwrap().then(()=>notifyDeleted());    
  };

  const rows = makerDashboardTab(transactions).rows;
  const columns = makerDashboardTab(transactions).columns;

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
                        onClick={handleClickDelete}
                      >
                        Delete
                      </BtnDelete>
                      <BtnEditTransaction
                        id={id}
                        type="button"
                        name="edit"
                        onClick={handleClickEdit}
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
                              id={row.id}
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
      </MediaQuery>
    </>
  );
};
