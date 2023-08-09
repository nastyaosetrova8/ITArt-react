import {
  StyledAddBtn,
  StyledCalendarIcon,
  StyledCancelBtn,
  StyledForm,
} from 'components/ModalAddTransactions/ModalAddTransactions.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import { saveIdTransaction, toggleShowModal } from 'redux/modal/modalSlice';
import { selectSavedId, selectTransactions } from 'redux/selectors';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {
  ExpenseActive,
  ExpensePassive,
  IncomeActive,
  IncomePassive,
} from './ModalEditStyled';

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

  const formik = useFormik({
    initialValues: {
      transactionDate: currentTransaction.transactionDate,
      amount: currentTransaction.amount,
      comment: currentTransaction.comment,
      categoryId: currentTransaction.categoryId,
      type: currentTransaction.type,
    },

    validationSchema: yup.object().shape({
      amount: yup
        .number('Enter sum')
        .positive('Invalid number')
        .required('Required'),
      transactionDate: yup.date().required('Required'),
      comment: yup.string().min(1).max(15, 'Must be 15 characters or less'),
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
      dispatch(editTransactionThunk(dataEdit));
      handleClickBtnClose();
    },
  });

  const test = formik.values.amount;
  const correctAmount = Math.abs(test);

  return (
    <div>
      <h2>Edit transaction</h2>
      <div>
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
      </div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <p>{currentNameCategory.name}</p>

        <div>
          <input
            type="number"
            name="amount"
            value={correctAmount}
            autoComplete="off"
            onChange={formik.handleChange}
            min="1"
          />

          <Datetime
            value={formik.values.transactionDate}
            onChange={value =>
              formik.setFieldValue('transactionDate', value._d)
            }
            closeOnSelect={true}
            timeFormat={false}
            dateFormat="DD.MM.yyyy"
          />
          <StyledCalendarIcon color={'rgba(115, 74, 239, 1)'} />
        </div>
        <input
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
