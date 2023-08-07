export const selectUserName = state => state.register.user.username;
export const selectBalance = state => state.register.user.balance;
export const selectToken = state => state.register.token;

export const selectIsAuth = state => state.register.isAuth;

export const selectTransactions = state => state.transactions;
export const selectCategories = state => state.transactions.categories;
// export const selectIsShowModal = state => state.modal;

export const selectIsLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;

export const selectSummary = state => state.transactionsSummary.categoriesSummary;
export const selectIncomeSummary = state => state.transactionsSummary.incomeSummary;
export const selectExpenseSummary = state => state.transactionsSummary.expenseSummary;