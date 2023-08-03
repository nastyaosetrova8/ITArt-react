import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerRequest } from 'Api/authApi';

export const registerUserThunk = createAsyncThunk('user/register', registerUserData=>registerRequest(registerUserData)) 
