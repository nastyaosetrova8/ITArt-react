import {
  InputAmountStyled,
  InputCommentStyled,
  StyledAddBtn,
  StyledCalendarIcon,
  StyledCancelBtn,
  StyledDatetime,
  StyledDatetimeWrap,
  StyledForm,
  StyledInputsWrapper,
  StyledSwitchWrapper,
  StyledTitle,
} from 'components/ModalAddTransactions/ModalAddTransactions.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import { saveIdTransaction, toggleShowModal } from 'redux/modal/modalSlice';
import { selectSavedId, selectTransactions } from 'redux/selectors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {
  CategoryNameStyled,
  ExpenseActive,
  ExpensePassive,
  IncomeActive,
  IncomePassive,
} from './ModalEditStyled';
import { notifyAmountInvalid, notifyAmountMissing, notifyEdited } from 'components/Toastify/Toastify';

export const ModalEditTransaction = () => {
  const dispatch = useDispatch();
  const idTransaction = useSelector(selectSavedId);
  const allTransactions = useSelector(selectTransactions);
  const currentTransaction = allTransactions.transactions.find(
    item => idTransaction === item.id
  );
  const currentNameCategory = allTransactions.categories.find(
    item => item.id === currentTransaction.categoryId
  );

  const handleClickBtnClose = () => {
    dispatch(toggleShowModal(''));
    dispatch(saveIdTransaction('null'));
  };

  const dateT = new Date(currentTransaction.transactionDate);

  const formik = useFormik({
    initialValues: {
      transactionDate: dateT,
      amount: currentTransaction.amount,
      comment: currentTransaction.comment,
      categoryId: currentTransaction.categoryId,
      type: currentTransaction.type,
    },

    validationSchema: 
    Yup.object().shape({
      amount: Yup.number('Enter sum')
        .positive('Invalid number')
        .required('Required'),
        transactionDate: Yup.date().required('Required'),
        comment: Yup.string()
        .min(1)
      .max(20, 'Must be 20 characters or less'),
    }),

    onSubmit: value => {
      const date = new Date(value.transactionDate);
      const formatYear = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      const formattedDate = `${formatYear}-${month}-${day}`;
      const dataEdit = {
        transData: {
          ...value,
          transactionDate: formattedDate,
          amount:
            currentTransaction.type === 'INCOME'
              ? Number(value.amount)
              : Number(-value.amount),
          comment: value.comment,
        },
        id: idTransaction,
      };
      dispatch(editTransactionThunk(dataEdit)).unwrap().then(()=>notifyEdited());
      handleClickBtnClose();
    },
  });

  const test = formik.values.amount;
  const correctAmount = Math.abs(test);

  return (
    <div>
      <StyledTitle>Edit transaction</StyledTitle>
      <StyledSwitchWrapper>
        {currentTransaction.type === 'INCOME' ? (
          <>
            <IncomeActive>Income</IncomeActive>
            <span> / </span>
            <ExpensePassive>Expense</ExpensePassive>
          </>
        ) : (
          <>
            <IncomePassive>Income</IncomePassive>
            <span> / </span>
            <ExpenseActive>Expense</ExpenseActive>
          </>
        )}
      </StyledSwitchWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <CategoryNameStyled>
        <p>{currentNameCategory.name}</p>
        </CategoryNameStyled>
        
        <StyledInputsWrapper>
          <InputAmountStyled
            type="number"
            name="amount"
            value={correctAmount}
            autoComplete="off"
            onChange={formik.handleChange}
            min="1"
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
          />
          <StyledCalendarIcon color={'rgba(115, 74, 239, 1)'} />

          </StyledDatetimeWrap>
        </StyledInputsWrapper>
        <InputCommentStyled
          type="text"
          name="comment"
          value={formik.values.comment}
          // placeholder="Comment"
          autoComplete="off"
          onChange={formik.handleChange}
        />

        <StyledAddBtn type="submit">Save</StyledAddBtn>
      </StyledForm>

      <StyledCancelBtn type="button" onClick={handleClickBtnClose}>
        Cancel
      </StyledCancelBtn>
    </div>
  );
};
