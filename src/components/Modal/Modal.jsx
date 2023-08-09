import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledCloseBtn, StyledModal, StyledOverlay } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import {
  selectIsShowModal,
  selectModalName,
} from 'redux/modal/modalSelectors';
import {
  saveIdTransaction,
  toggleShowModal,
} from 'redux/modal/modalSlice';
import { ModalAddTransaction } from 'components/ModalAddTransactions/ModalAddTransactions';
import { LogOutForm } from './ModalLogOut';
import { ModalEditTransaction } from 'components/ModalEditTransactions/ModalEditTransactions';


const modalRoot = document.querySelector('#modal-root');

export default function Modal() {

  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);
  const modalName = useSelector(selectModalName);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleShowModal(''));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleShowModal(''));
      dispatch(saveIdTransaction('null'));
    }
  };

  const handleClickBtnClose = () => {
    dispatch(toggleShowModal(''));
    dispatch(saveIdTransaction('null'));
  };

  return createPortal(
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        {isShowModal && (
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={16} fill="white" />
          </StyledCloseBtn>
        )}
        {modalName === 'addTrans' && isShowModal && <ModalAddTransaction />}
        {modalName === 'logout' && isShowModal && <LogOutForm />}
        {modalName === 'edit' && isShowModal && <ModalEditTransaction />}
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}

