import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledCloseBtn, StyledModal, StyledOverlay } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { selectIsAddTransOpen } from 'redux/modal/modalSelectors';
import { closeAddTrans } from 'redux/modal/modalSlice';
import { ModalAddTransaction } from 'components/ModalAddTransactions/ModalAddTransactions';

// import { createPortal } from "react-dom";

// const { useState } = require("react");

// const [modal, setModal] = useState({ isOpen: false, modalData: null });

// const onOpenModal = data =>
//   setModal({ isOpen: true, modalData: data });

// const onCloseModal = () =>
// selectModalOpen({ isOpen: false, modalData: null });

//   const onFormSubmit = searchQuery => {
//     setSearchQuery(searchQuery);
//     setPage(1);
//   };

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  // const modal = useSelector(selectShowModal);

  const dispatch = useDispatch();
  const isAddTransOpen = useSelector(selectIsAddTransOpen);
  // const Edit = useSelector(selectIsEditTransOpen);

  // const onCloseModal = () =>
  // selectModalOpen({ isOpen: false, modalData: null });

  // const onCloseModal = () =>

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeAddTrans());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeAddTrans());
    }
  };

  const handleClickBtnClose = () => {
    dispatch(closeAddTrans());
  };

  return createPortal (
     <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
      {isAddTransOpen && <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
          <AiOutlineClose size={16} fill="white"/>
        </StyledCloseBtn>}
        {/* {children} */}
        {isAddTransOpen && <ModalAddTransaction />}


      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}

//   Modal.propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,

//   };
