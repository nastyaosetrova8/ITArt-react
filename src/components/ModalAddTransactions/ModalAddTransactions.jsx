import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  getTransCategoriesThunk,
} from 'redux/Thunks/TransactionsThunk';
import { selectCategories, selectToken } from 'redux/selectors';
import { closeAddTrans } from 'redux/modal/modalSlice';
import { useFormik } from 'formik';
import Select from 'react-select';
import css from './ModalAddTransactions.module.css';
// import { Select } from '@mui/material';
// import * as Yup from 'yup';
// import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import moment from 'moment';
// import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
import {
  StyledAddBtn,
  StyledCalendarIcon,
  StyledCancelBtn,
  StyledDatetime,
  StyledDatetimeWrap,
  StyledForm,
  StyledInputs,
  StyledInputsWrapper,
  StyledMinusBtn,
  StyledPlusBtn,
  StyledSwitch,
  StyledSwitchWrapper,
  StyledTitle,
  styledSelectCategories,
} from './ModalAddTransactions.styled';
// import { BsPlusLg } from 'react-icons/bs';
// import { HiOutlineMinus } from 'react-icons/hi';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const tokenTrans = useSelector(selectToken);
  const allCategories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getTransCategoriesThunk(tokenTrans));
  }, [dispatch, tokenTrans]);

  const incomeCat = allCategories.find(category => category.type === 'INCOME');
  const expenseCat = allCategories.filter(
    category => category.type !== 'INCOME'
  );
  const options = expenseCat.map(category => ({
    value: category.id,
    label: category.name,
  }));

  // const validationSchema = Yup.object().shape({
  //   amount: Yup.number()
  //     .typeError('Please enter a valid number')
  //     .required('Required'),
  //   categoryId: Yup.string().required('Required'),
  // });
  // ================GET CATEGORIES

  const handleGetCatigories = () => {
    dispatch(getTransCategoriesThunk(tokenTrans));
  };

  // ========== ADD TRANS
  const handleAddTrans = () => {
    const data = {
      transactionDate: '2023-01-23',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'string',
      amount: 25,
    };

    dispatch(addTransactionThunk(data));
  };

  // =================CLOSE MODAL
  const handleClickBtnClose = () => {
    dispatch(closeAddTrans());
  };

  const formik = useFormik({
    initialValues: {
      type: false,
      categoryId: 'Income',
      amount: '',
      transactionDate: new Date(),
      comment: '',
    },

    onSubmit: value => {
      if (!formik.values.type) {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'EXPENSE',
            amount: 0 - value.amount,
            transactionDate: new Date().toISOString().substring(0, 10),
          })
        );
      } else {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'INCOME',
            categoryId: incomeCat?.id,
            transactionDate: new Date().toISOString().substring(0, 10),
          })
        );
      }
    },
  });

  return (
    <div>
      <StyledTitle>Add transaction</StyledTitle>
      <StyledSwitchWrapper>
        <p className={formik.values.type ? css.income : css.text}>Income</p>
        <StyledSwitch>
          <input
            type="checkbox"
            name="type"
            className={css.switchInput}
            value={formik.values.type}
            onClick={formik.handleChange}
          />

          <span className={css.slider}>
            <span
              className={`${css.btnSwitch} ${
                formik.values.type ? css.btnSwitchPlus : css.btnSwitchMinus
              }`}
            >
              {!formik.values.type ? <StyledMinusBtn /> : <StyledPlusBtn />}
            </span>
          </span>
        </StyledSwitch>
        <p className={!formik.values.type ? css.expense : css.text}>Expense</p>
      </StyledSwitchWrapper>

      <StyledForm onSubmit={formik.handleSubmit}>
        {!formik.values.type && (
          <Select
            type="text"
            name={formik.values.label}
            value={formik.values.value}
            options={options}
            styles={styledSelectCategories}
            placeholder="Select a category"
            onChange={({ value }) => formik.setFieldValue('categoryId', value)}
            onBlur={formik.handleBlur}
          />
        )}

        <StyledInputsWrapper>
          <StyledInputs
            type="number"
            name="amount"
            value={formik.values.amount}
            placeholder="0.00"
            autoComplete="off"
            onChange={formik.handleChange}
          />

          <StyledDatetimeWrap>
            <StyledDatetime
              value={formik.values.transactionDate}
              onChange={value =>
                formik.setFieldValue('transactionDate', value[0])
              }
              closeOnSelect={true}
              timeFormat={false}
              dateFormat="DD.MM.yyyy"
              isValidDate={formik.valid}
            />

            <StyledCalendarIcon color={'rgba(115, 74, 239, 1)'} />
          </StyledDatetimeWrap>
        </StyledInputsWrapper>
        <StyledInputs
          type="text"
          name="comment"
          value={formik.values.comment}
          placeholder="Comment"
          onChange={formik.handleChange}
        />
        <StyledAddBtn type="submit">Add</StyledAddBtn>
      </StyledForm>
      <StyledCancelBtn type="button" onClick={handleClickBtnClose}>
        Cancel
      </StyledCancelBtn>
    </div>
  );
};
