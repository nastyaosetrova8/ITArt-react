export const initialState = {
    user:{
        username: null,
        email: null,
        //password: null,
    },
    token: null,
    isAuth: false,
}

export const initialRootState = {
    isLoading: false,
    error: '',
}