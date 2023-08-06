import { useDispatch, useSelector } from "react-redux";
import { deleteTransactionThunk } from "redux/Thunks/TransactionsThunk";
import { editTransactionThunk } from "redux/modalTransRedux/modalTransThunks";
import { selectToken, selectTransactions } from "redux/selectors";

export const TransactionsList = ({ transactions }) => {

const dispatch = useDispatch();
const tokenTrans = useSelector(selectToken);

const trans = useSelector(selectTransactions);
console.log(trans)

   const handleOnClick = (evt) => {
    console.log(evt)
    // const id = evt.CurrentTarget
dispatch(editTransactionThunk())
   }
  
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
              <button onClick={handleOnClick}>
                {/* <Link to={`/api/transactions/${id}`}>Update</Link> */}
                update
              </button>

              <button type="button"  onClick={handleClickDElete}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
