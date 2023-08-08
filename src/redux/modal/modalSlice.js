import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // isAddTransOpen: false,
    isEditTrans: null,
    // isLogoutOpen: false,
    isShowModal: false,
    modalName: '',
  };


  // export const ModalOpenSlice = createSlice({
  //   name: 'modal',
  //   initialState,
  //   reducers: {
  //     toggleOpenModal (state) {
  //       state.open = !state.open;
  //     },
  //   },
  // });
  
  // export const ModalAddOpenReduser = ModalOpenSlice.reducer;
  // export const { toggleOpenModal } = ModalOpenSlice.actions;

    export const modalOpenSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

      toggleShowModal: (state, {payload}) => {
        console.log(payload)
        state.isShowModal = !state.isShowModal
        state.modalName = payload
      },


      // ===================================
      opnEditModal: (state, { payload }) => {
        state.isEditTrans = payload;
      },
      clEditModal: state => {
        state.isEditTrans = null;
      },

      // openAddTrans: state => {
      //   state.isAddTransOpen = true;
      // },
      // closeAddTrans(state) {
      //   state.isAddTransOpen = false;
      // },
      // openEditTrans(state) {
      //   state.isEditTransOpen = true;
      // },
      // closeEditTrans(state) {
      //   state.isEditTransOpen = false;
      // },
      // openLogout: state => {
      //   state.isLogoutOpen = true;
      // },
      // closeModal(state) {
      //   state.isModalClose = false;
      // },
      }
  });
  
  export const modalReducer = modalOpenSlice.reducer;
  export const { openAddTrans, closeAddTrans, openEditTrans, closeEditTrans, opnEditModal, clEditModal, openLogout, closeLogout, closeModal, toggleShowModal } = modalOpenSlice.actions;