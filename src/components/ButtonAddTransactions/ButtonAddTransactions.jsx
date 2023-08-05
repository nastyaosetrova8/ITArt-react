import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAddTransOpen } from 'redux/modal/modalSelectors';
import { openAddTrans } from 'redux/modal/modalSlice';


export const ButtonAddTransactions = () => {
  // const tokenTrans = useSelector(selectToken);
  const isAddTransOpen = useSelector(selectIsAddTransOpen);
  const dispatch = useDispatch();

  
  // ==============OPEN MODAL
  const handleOpenModal = () => {
    dispatch(openAddTrans());
  };


  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      {isAddTransOpen && <Modal />}
    </>
  );
};
