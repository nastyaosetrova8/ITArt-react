import { useEffect } from "react";
import { createPortal } from 'react-dom';
import { StyledModal, StyledOverlay } from "./Modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from 'react-icons/ai';
import { selectIsAddTransOpen, selectIsEditTransOpen } from "redux/modal/modalSelectors";
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

export default function Modal({ children, onCloseModal }) {


    
    // const modal = useSelector(selectShowModal);

    const dispatch = useDispatch();
    const Add = useSelector(selectIsAddTransOpen);
  const Edit = useSelector(selectIsEditTransOpen);

    // const onCloseModal = () =>
    // selectModalOpen({ isOpen: false, modalData: null });

    // const onCloseModal = () =>

    useEffect(() => {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          dispatch(onCloseModal());
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [dispatch, onCloseModal]);

    const handleClickOverlay = e => {
        if (e.target === e.currentTarget) {
          dispatch(onCloseModal());
        }
      };
  
      const handleClickBtnClose = () => {
          dispatch(onCloseModal());
        };
    
        
    return createPortal (
      <StyledOverlay onClick={handleClickOverlay}>
        <StyledModal>
        <span onClick={handleClickBtnClose}>
        <AiOutlineClose />
      </span>
         {children}
        </StyledModal>
      </StyledOverlay>,
      modalRoot
    )
  }
  
  
//   Modal.propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,

//   };