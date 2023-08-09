import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  getTransCategoriesThunk,
} from 'redux/Thunks/TransactionsThunk';
import { selectCategories, selectToken } from 'redux/selectors';
import { toggleShowModal } from 'redux/modal/modalSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import css from './ModalAddTransactions.module.css';
import 'react-datetime/css/react-datetime.css';
import {
  InputAmountStyled,
  InputCommentStyled,
  SelectStyle,
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
  TitleWrapper,
  styledSelectCategories,
} from './ModalAddTransactions.styled';

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

  const handleClickBtnClose = () => {
    dispatch(toggleShowModal(''));
  };

  const formik = useFormik({
    initialValues: {
      type: false,
      categoryId: 'Income',
      amount: '',
      transactionDate: new Date(),
      comment: '',
    },

    validationSchema: 
    yup.object().shape({
      amount: yup.number('Enter sum')
        .positive('Invalid number')
        .required('Required'),
        transactionDate: yup.date().required('Required'),
        comment: yup.string()
      .max(15, 'Must be 15 characters or less'),
    }),

    onSubmit: value => {
      const date = new Date(value.transactionDate);
      const formatYear = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${formatYear}-${month}-${day}`;

      if (!formik.values.type) {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'EXPENSE',
            amount: Number(-value.amount),
            transactionDate: formattedDate,
          })
        );
      } else {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'INCOME',
            categoryId: incomeCat?.id,
            amount: Number(value.amount),
            transactionDate: formattedDate,
          })
        );
      }
      handleClickBtnClose();
    },
  });

  return (
    <div>
      <TitleWrapper>
        <StyledTitle>Add transaction</StyledTitle>
      </TitleWrapper>
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
          <SelectStyle
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
          <InputAmountStyled
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
                formik.setFieldValue('transactionDate', value._d)
              }
              closeOnSelect={true}
              timeFormat={false}
              dateFormat="DD.MM.yyyy"
              // isValidDate={formik.valid}
            />

            <StyledCalendarIcon color={'rgba(115, 74, 239, 1)'} />
          </StyledDatetimeWrap>
        </StyledInputsWrapper>
        <InputCommentStyled
          type="text"
          name="comment"
          value={formik.values.comment}
          placeholder="Comment"
          autoComplete="off"
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
