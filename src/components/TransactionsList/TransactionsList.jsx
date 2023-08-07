import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import { editTransactionThunk } from 'redux/modalTransRedux/modalTransThunks';
import { selectToken, selectTransactions } from 'redux/selectors';
import {
  BtnCont,
  BtnDelete,
  BtnEdit,
  BtnIcon,
  HeadRow,
  HeadTitle,
  Table,
  TableBody,
  TableHead,
  TableInfo,
  TableRow,
} from './TransactionsListStyled';
import { Link } from 'react-router-dom';

export const TransactionsList = ({ transactions }) => {
  const dispatch = useDispatch();
  const tokenTrans = useSelector(selectToken);

  const trans = useSelector(selectTransactions);
  console.log(trans);

  const handleOnClick = evt => {
    console.log(evt);
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

    dispatch(deleteTransactionThunk({ dataEdit, tokenTrans }));
  };

  return (
    <>
      <Table>
        <TableHead>
          <HeadRow>
            <HeadTitle>Date</HeadTitle>
            <HeadTitle>Type</HeadTitle>
            <HeadTitle>Category</HeadTitle>
            <HeadTitle>Comment</HeadTitle>
            <HeadTitle>Sum</HeadTitle>
            <HeadTitle></HeadTitle>
          </HeadRow>
        </TableHead>
        <TableBody>
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
                    <button onClick={() => handleOnClick()}>
                      <Link to={`/api/transactions/${id}`}>Update</Link>
                    </button>
                    {modalOpen && '</>'}
                    <button onClick={() => handleClickDElete(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          )} */}
          <TableRow>
            <TableInfo>11.09.23</TableInfo>
            <TableInfo>-</TableInfo>
            <TableInfo>car</TableInfo>
            <TableInfo>my comment</TableInfo>
            <TableInfo>12222</TableInfo>
            <BtnCont>
              <BtnEdit onClick={handleOnClick}>
                <BtnIcon sx={{ fontSize: 18 }} />
              </BtnEdit>

              <BtnDelete type="button" onClick={handleClickDElete}>
                Delete
              </BtnDelete>
            </BtnCont>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
