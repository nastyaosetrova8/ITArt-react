import { Select } from '@mui/material';
import {
  StyledAddBtn,
  StyledCancelBtn,
  StyledForm,
  styledSelectCategories,
} from 'components/ModalAddTransactions/ModalAddTransactions.styled';
// import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { editTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import {
  selectIsEditTrans,
  selectIsEditTransOpen,
} from 'redux/modal/modalSelectors';
import css from './ModalEditTransactions.module.css';
import { toggleShowModal } from 'redux/modal/modalSlice';
import {
  selectCategories,
  selectToken,
  selectTransactions,
} from 'redux/selectors';
import { Formik, useFormik } from 'formik';
import { Form } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export const ModalEditTransaction = () => {
  const dispatch = useDispatch();
  const tokenTrans = useSelector(selectToken);
  const allCategories = useSelector(selectCategories);
  // const IdTransaction = useSelector(selectIsEditTrans);
  // const allTransactions = useSelector(selectTransactions);

  const expenseCat = allCategories.filter(
    category => category.type !== 'INCOME'
  );
  const options = expenseCat.map(category => ({
    value: category.id,
    label: category.name,
  }));
  // const transaction = allTransactions.find(trans => trans.id === IdTransaction);

  const handleClickBtnClose = () => {
    dispatch(toggleShowModal(''));
  };

  // const formik = useFormik({
  //   initialValues: {
  //     type: transaction.type === 'INCOME' ? true : false,
  //     categoryId: transaction.categoryId,
  //     amount: `${
  //       transaction.type === 'EXPENSE'
  //         ? transaction.amount * -1
  //         : transaction.amount
  //     }`,
  //     transactionDate: new Date(),
  //     comment: transaction.coment,
  //     id: transaction.id,
  //   },

  //   onSubmit: value => {
  //     dispatch(
  //       editTransactionThunk({
  //         ...value,
  //         type: value.type ? 'INCOME' : 'EXPENSE',
  //         categoryId: value.categoryId,
  //         amount:
  //           transaction.type === 'EXPENSE'
  //             ? Number(value.amount * -1)
  //             : Number(value.amount),
  //       })
  //     );
  //     handleClickBtnClose();
  //   },
  // });

  // ========== EDIT TRANS
  const handleClickUpdate = () => {
    const dataEdit = {
      id: '2b3b84b1-97b5-49ed-9ed5-ebba5197b66b',
      transactionDate: '2023-01-23',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'string',
      amount: 4,
    };

    // const dataEx = {
    //   transactionDate: "2023-01-23",
    // type: "EXPENSE",
    // categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    // comment: "string",
    // amount: -5}

    dispatch(editTransactionThunk({ dataEdit, tokenTrans }));
  };

  return (
    <div>
      <h2>Edit transaction</h2>
      <div>
        <button
          // className={formik.values.type ? css.income : css.text}
          type="button"
          onClick={() => {
            // formik.setFieldValue('type', true);
          }}
        >
          Income
        </button>

        <span>SVG</span>

        <button
          // className={!formik.values.type ? css.expense : css.text}
          type="button"
          onClick={() => {
            // formik.setFieldValue('type', false);
          }}
        >
          Expense
        </button>
      </div>
      <StyledForm 
      // onSubmit={formik.handleSubmit}
      >
        {/* {!formik.values.type && ( */}
          <Select
            type="text"
            // name={formik.values.label}
            // value={formik.values.value}
            options={options}
            styles={styledSelectCategories}
            placeholder="Select a category"
            // onChange={({ value }) => formik.setFieldValue('categoryId', value)}
            // onBlur={formik.handleBlur}
          />
        {/* )} */}
        <div>
          <input
            type="number"
            name="amount"
            // value={formik.values.amount}
            placeholder="0.00"
            autoComplete="off"
            // onChange={formik.handleChange}
          />

          <Datetime
            // value={formik.values.transactionDate}
            // onChange={value =>
            //   formik.setFieldValue('transactionDate', value[0])
            // }
            closeOnSelect={true}
            timeFormat={false}
            dateFormat="DD.MM.yyyy"
            // isValidDate={formik.valid}
          />
          {/* <span>
SVG
              </span> */}
        </div>
        <input
          type="text"
          name="comment"
          // value={formik.values.comment}
          placeholder="Comment"
          autoComplete="off"
          // onChange={formik.handleChange}
        />

        <StyledAddBtn type="submit" onClick={handleClickUpdate}>
          Save
        </StyledAddBtn>
      </StyledForm>

      <StyledCancelBtn type="button" onClick={handleClickBtnClose}>
        Cancel
      </StyledCancelBtn>
    </div>
  );
};
