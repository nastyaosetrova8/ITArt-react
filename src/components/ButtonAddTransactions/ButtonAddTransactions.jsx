import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAddTransOpen,
  selectIsShowModal,
} from 'redux/modal/modalSelectors';
import { openAddTrans, toggleShowModal } from 'redux/modal/modalSlice';

export const ButtonAddTransactions = () => {
  const isShowModal = useSelector(selectIsShowModal);
  // const isAddTransOpen = useSelector(selectIsAddTransOpen);
  const dispatch = useDispatch();

  // ==============OPEN MODAL
  // const handleOpenModal = () => {
  //   dispatch(openAddTrans());
  // };

  const handleOpenModal = e => {
    dispatch(toggleShowModal(e.currentTarget.name));
  };

  return (
    <>
      <button type="button" name="addBtn" onClick={handleOpenModal}>
        Open Modal
      </button>
      {isShowModal && <Modal />}
    </>
  );
};
