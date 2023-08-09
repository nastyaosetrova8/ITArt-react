import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  getTransCategoriesThunk,
} from 'redux/Thunks/TransactionsThunk';
import { selectCategories, selectToken } from 'redux/selectors';
import { toggleShowModal } from 'redux/modal/modalSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  StyledInputsWrapper,
  StyledMinusBtn,
  StyledPlusBtn,
  StyledSwitch,
  StyledSwitchWrapper,
  StyledTitle,
  TitleWrapper,
  styledSelectCategories,
} from './ModalAddTransactions.styled';
import { notifyAmountInvalid, notifyAmountMissing, notifyCommentLength, notifyDataEdded } from 'components/Toastify/Toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if (value.amount < 1) {
        toast.error('Please enter a positive number');
        return;
      } else if (!value.amount) {
        toast.error('Amount is missing');
        return;
      }else if (value.comment.length > 20) {
        toast.error('Comment must be 20 characters or less');
        return;
      } 
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
        ).unwrap().then(({ data }) => {
          if (data) {
            notifyDataEdded()
          }
        });
      } else {
        dispatch(
          addTransactionThunk({
            ...value,
            type: 'INCOME',
            categoryId: incomeCat?.id,
            amount: Number(value.amount),
            transactionDate: formattedDate,
          })
        ).unwrap().then(({ data }) => {
        if (data) {
          toast.success('Transaction added successfully');
          console.log("NOTIFICATION")
        }
      });
      }
      handleClickBtnClose();
    },
  });

  return (
    <div>
        <StyledTitle>Add transaction</StyledTitle>
      <StyledSwitchWrapper>
      {/* {formik.values.type === "INCOME" ? 
      (<>
      <IncomeActive>Income</IncomeActive>
      <ExpensePassive>Expense</ExpensePassive> 
      </>) : (
        <>
        <IncomePassive>Income</IncomePassive>
            <ExpenseActive>Expense</ExpenseActive>
        </>
      )} */}
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
            min="1"

            // error={Boolean(formik.errors.amount)}
            //   helperText={
            //     formik.errors.amount && 'Please enter'
            //   }
            
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
