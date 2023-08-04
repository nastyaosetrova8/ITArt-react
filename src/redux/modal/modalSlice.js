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

    export const ModalOpenSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openAddTransOpen(state) {
        state.isAddTransOpen = true;
      },
      closeAddTransOpen(state) {
        state.isAddTransOpen = false;
      },
      openEditTransOpen(state) {
        state.isEditTransOpen = true;
      },
      closeEditTransOpen(state) {
        state.isEditTransOpen = false;
      },
      }
  });
  
  export const modalReduser = ModalOpenSlice.reducer;
  export const { openAddTransOpen, closeAddTransOpen, openEditTransOpen, closeEditTransOpen } = ModalOpenSlice.actions;