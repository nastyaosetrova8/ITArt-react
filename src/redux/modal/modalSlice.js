import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // isAddTransOpen: false,
  // isEditTransOpen: false,
  // isLogoutOpen: false,
  isEditTrans: null,
  isShowModal: false,
  modalName: '',
  savedId: null,
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

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModal: (state, { payload }) => {
      state.isShowModal = !state.isShowModal;
      state.modalName = payload;
    },
    saveIdTransaction: (state, { payload }) => {
      state.savedId = payload;
      console.log(payload);
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
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  openAddTrans,
  closeAddTrans,
  openEditTrans,
  closeEditTrans,
  opnEditModal,
  clEditModal,
  openLogout,
  closeLogout,
  closeModal,
  toggleShowModal,
  saveIdTransaction,
} = modalSlice.actions;
