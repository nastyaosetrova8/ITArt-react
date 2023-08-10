export const initialState = {
  user: {
    username: null,
    email: null,
    id: null,
    balance: null,    
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
};
