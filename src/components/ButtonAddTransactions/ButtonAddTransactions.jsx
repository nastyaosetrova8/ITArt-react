import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsShowModal,
} from 'redux/modal/modalSelectors';
import { toggleShowModal } from 'redux/modal/modalSlice';
import { BtnPlus, BtnStyled } from './StyledButtonAddTransacaction';

export const ButtonAddTransactions = () => {
  const isShowModal = useSelector(selectIsShowModal);
  const dispatch = useDispatch();

  const handleOpenModal = e => {
    dispatch(toggleShowModal(e.currentTarget.name));
  };

  return (
    <>
      <BtnStyled type="button" name="addTrans" onClick={handleOpenModal}>
        <BtnPlus />
      </BtnStyled>
      {isShowModal && <Modal />}
    </>
  );
};
