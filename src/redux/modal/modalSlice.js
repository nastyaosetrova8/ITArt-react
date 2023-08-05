import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAddTransOpen: false,
    isEditTransOpen: false,
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
      openAddTrans: state => {
        state.isAddTransOpen = true;
      },
      closeAddTrans(state) {
        state.isAddTransOpen = false;
      },
      openEditTrans(state) {
        state.isEditTransOpen = true;
      },
      closeEditTrans(state) {
        state.isEditTransOpen = false;
      },
      }
  });
  
  export const modalReducer = modalOpenSlice.reducer;
  export const { openAddTrans, closeAddTrans, openEditTrans, closeEditTrans } = modalOpenSlice.actions;