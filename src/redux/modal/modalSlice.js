import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowModal: false,
  modalName: '',
  savedId: null,
};


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
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleShowModal,
  saveIdTransaction,
} = modalSlice.actions;
