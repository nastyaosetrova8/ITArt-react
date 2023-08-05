export const initialState = {
    user: {
        username: null,
        email: null,
        id: null,
        balance: null,
        //password: null,
    },
    token: null,
    isAuth: false,
};

export const initialRootState = {
    isLoading: false,
    error: '',
};

export const initialSummaryState = {
    categoriesSummary: [
        {
            name: '',
            type: '',
            total: 0,
        },
    ],
    incomeSummary: 0,
    expenseSummary: 0,
    periodTotal: 0,
    year: 0,
    month: 0,
};

export const initialModalState = {
  transactions: [],
  categories: [],
//   isShowModal: false,
};

// user
// :
// balance
// :
// 0
// email
// :
// "text123@test.com"
// id
// :
// "9a6bd909-3c7e-4c16-8c28-3f8b872f6007"
// username
// :
// "text"
