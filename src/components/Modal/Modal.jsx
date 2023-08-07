import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledCloseBtn, StyledModal, StyledOverlay } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { selectIsAddTransOpen, selectIsLogoutOpen, selectIsModalClose, selectIsShowModal, selectModalName } from 'redux/modal/modalSelectors';
import { closeAddTrans, closeModal, toggleShowModal } from 'redux/modal/modalSlice';
import { ModalAddTransaction } from 'components/ModalAddTransactions/ModalAddTransactions';
import { LogOutForm } from './ModalLogOut';
import { ModalEditTransaction } from 'components/ModalEditTransactions/ModalEditTransactions';

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
  const isOpenLogout = useSelector(selectIsLogoutOpen);
  const isModalClose = useSelector(selectIsModalClose);

  const isShowModal = useSelector(selectIsShowModal)

  const modalName = useSelector(selectModalName)
  
  // const Edit = useSelector(selectIsEditTransOpen);

  // const onCloseModal = () =>
  // selectModalOpen({ isOpen: false, modalData: null });

  // const onCloseModal = () =>

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

// const handleModalClose =(e) => {

 
//   handleClickBtnClose()
// }

const handleClickOverlay = e => {
  if (e.target === e.currentTarget) {
    dispatch(toggleShowModal(''));
  }
};

// const handleClickBtnClose = () => {
//   dispatch(closeAddTrans());
// };

  const handleClickBtnClose = () => {
 dispatch(toggleShowModal(''));
};

  return createPortal (
     <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
     {isShowModal && <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
          <AiOutlineClose size={16} fill="white"/>
        </StyledCloseBtn>}

        {/* {children} */}
        {isShowModal && modalName === 'addBtn' && <ModalAddTransaction />}
        {isShowModal &&  modalName === 'logout' && <LogOutForm />}
        {isShowModal &&  modalName === 'edit' && <ModalEditTransaction />}


      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}


// {isAddTransOpen && <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
// <AiOutlineClose size={16} fill="white"/>
// </StyledCloseBtn>}



// {isOpenLogout && <StyledCloseBtn type="button" onClick={handleClickBtnClose}>}


//   Modal.propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,

//   };
