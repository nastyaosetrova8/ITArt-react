//import { notifyRegisterSuccess } from 'components/Toastify/Toastify';

const { createSlice } = require('@reduxjs/toolkit');

const {
  registerUserThunk,
  logInUserThunk,
  logOutUserThunk,
  getCurrentUserThunk,
} = require('redux/Thunks/AuthUserThunk');
const { initialState } = require('redux/initialState');

const fulfilledRegistration = (state, { payload }) => {  
  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
  //notifyRegisterSuccess();
};

const fulfilledLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
};

const fulfilledLogOut = state => {
  state.user = {
    username: null,
    email: null,
    id: null,
    balance: null,
  };
  state.token = null;
  state.isAuth = false;
};

const fulfilledCurrentUser = (state, { payload }) => {
  // console.log(payload);
  state.user = payload;
  state.isAuth = true;  
};

const registerSlice = createSlice({
  name: 'register',
  initialState: initialState,

  reducers: {
    updateBalance(state, { payload }) {
      state.user.balance = payload.balanceAfter;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(registerUserThunk.fulfilled, fulfilledRegistration)
      .addCase(logInUserThunk.fulfilled, fulfilledLogIn)
      .addCase(logOutUserThunk.fulfilled, fulfilledLogOut)
      .addCase(getCurrentUserThunk.fulfilled, fulfilledCurrentUser),
});

export const registerReducer = registerSlice.reducer;
export const { updateBalance } = registerSlice.actions;
