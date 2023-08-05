export const selectUserName = state => state.register.user.username;
export const selectBalance = state => state.register.user.balance;
export const selectToken = state => state.register.token;
export const selectIsAuth = state => state.register.isAuth;

export const selectIsLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;
