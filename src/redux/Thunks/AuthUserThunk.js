import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUserRequest, logInRequest, logOutRequest, registerRequest, token } from 'Api/authApi';


export const registerUserThunk = createAsyncThunk('user/register', registerUserData=>registerRequest(registerUserData));
export const logInUserThunk = createAsyncThunk('user/logIn', logInUserData => logInRequest(logInUserData));
export const logOutUserThunk = createAsyncThunk('user/logOut', ()=>logOutRequest());
export const getCurrentUserThunk = createAsyncThunk('user/currentUser', async (_, thunkAPI)=>{

    try {
        const state = thunkAPI.getState();
        const persistedToken = state.register.token;
        if(!persistedToken) return thunkAPI.rejectWithValue();
        token.set(persistedToken);
        return await currentUserRequest()
    }catch(error){
        return thunkAPI.rejectWithValue(error.message);

    }
}) 
