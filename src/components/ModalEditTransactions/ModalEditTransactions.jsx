import { useDispatch, useSelector } from "react-redux";
import { editTransactionThunk } from "redux/Thunks/TransactionsThunk";
import { selectToken } from "redux/selectors";






export const ModalAddTransaction = () => {
    const dispatch = useDispatch();
    const tokenTrans = useSelector(selectToken);




// ========== EDIT TRANS
const handleClickUpdate = () => {

    const dataEdit = {
      id: '2b3b84b1-97b5-49ed-9ed5-ebba5197b66b',
      transactionDate: "2023-01-23",
    type: "INCOME",
    categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
    comment: "string",
    amount: 4}

    // const dataEx = {
    //   transactionDate: "2023-01-23",
    // type: "EXPENSE",
    // categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    // comment: "string",
    // amount: -5}

    dispatch(editTransactionThunk({dataEdit, tokenTrans}));
  };


  return (
    <>
    <div>edit</div>

    <button type="button" onClick={handleClickUpdate}>
      Update
    </button>
    </>
  )
}