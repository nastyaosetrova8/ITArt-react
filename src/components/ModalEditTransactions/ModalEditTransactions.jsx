import { useDispatch, useSelector } from 'react-redux';
import { editTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import { saveIdTransaction, toggleShowModal } from 'redux/modal/modalSlice';
import { selectSavedId, selectToken } from 'redux/selectors';

export const ModalEditTransaction = () => {
  const dispatch = useDispatch();
  const tokenTrans = useSelector(selectToken);
  const idTransaction = useSelector(selectSavedId);

  const handleClickBtnClose = () => {
    dispatch(toggleShowModal(''));
    dispatch(saveIdTransaction('null'));
  };

  // ========== EDIT TRANS
  const handleClickUpdate = () => {
    const dataEdit = {
      id: idTransaction,
      transactionDate: '2023-01-23',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'string',
      amount: 4,
    };

    // const dataEx = {
    //   transactionDate: "2023-01-23",
    // type: "EXPENSE",
    // categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    // comment: "string",
    // amount: -5}

    dispatch(editTransactionThunk({ dataEdit, tokenTrans }));
  };

  return (
    <>
      <div>edit</div>

      <button type="button" onClick={handleClickUpdate}>
        Update
      </button>

      <button type="button" onClick={handleClickBtnClose}>
        Cancel
      </button>
    </>
  );
};
