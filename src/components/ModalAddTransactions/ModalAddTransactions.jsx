import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  getTransCategoriesThunk,
} from 'redux/Thunks/TransactionsThunk';
import { selectCategories, selectToken } from 'redux/selectors';
import { AiOutlineClose } from 'react-icons/ai';
import { closeAddTrans } from 'redux/modal/modalSlice';
import { Formik } from 'formik';
import { Select } from '@mui/material';
import * as Yup from 'yup';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const tokenTrans = useSelector(selectToken);
  const allCategories = useSelector(selectCategories);
  const [typeSelect] = useState(false);
  // setTypeSelect
  const [categoryItem] = useState('');
  // setCategoryItem

  useEffect(() => {
    dispatch(getTransCategoriesThunk(tokenTrans));
  }, [dispatch, tokenTrans]);

  const income = allCategories.filter(category => category.type === 'INCOME');
  const expense = allCategories.filter(category => category.type === 'EXPENSE');
  const options = expense.map(category => ({
    id: category.id,
    value: category.name,
    label: category.name,
  }));

  const initialValues = {
    type: typeSelect ? 'INCOME' : 'EXPENSE',
    categoryId: '',
    amount: '',
    transactionDate: new Date().toISOString().slice(0, 10),
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .typeError('Please enter a valid number')
      .required('Required'),
    categoryId: Yup.string().required('Required'),
  });

  const handleSubmit = (value, { resetForm }) => {
    const data = {
      ...value,
      type: typeSelect ? 'INCOME' : 'EXPENSE',
      amount: `${!typeSelect ? Number(-value.amount) : Number(value.amount)}`,
      categoryId: `${
        !typeSelect
          ? categoryItem?.id ?? '27eb4b75-9a42-4991-a802-4aefe21ac3ce'
          : income[0].id
      }`,
    };
    dispatch(addTransactionThunk(data));
    resetForm();
  };

  // ================GET CATEGORIES
  const handleGetCatigories= () => {
    dispatch(getTransCategoriesThunk(tokenTrans));
  };

  // ========== ADD TRANS
  const handleAddTrans= () => {

    const data = {
      transactionDate: "2023-01-23",
    type: "INCOME",
    categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
    comment: "string",
    amount: 25}
    
    dispatch(addTransactionThunk(data));

  };

  // =================CLOSE MODAL
  const handleClickBtnClose = () => {
    dispatch(closeAddTrans());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      // initialValues={{
      //   type: typeSelect ? 'INCOME' : 'EXPENSE',
      //   categoryId: '',
      //   amount: '',
      //   transactionDate: new Date().toISOString().slice(0, 10),
      //   comment: '',
      // }}
      // validationSchema={Yup.object().shape({
      //   amount: Yup.number()
      //     .typeError('Please enter a valid number')
      //     .required('Required'),
      //   categoryId: Yup.string().required('Required'),
      // })}
      // handleSubmit={(value, { resetForm }) => {
      //   const data = {
      //     ...value,
      //     type: typeSelect ? 'INCOME' : 'EXPENSE',
      //     amount: `${
      //       !typeSelect ? Number(-value.amount) : Number(value.amount)
      //     }`,
      //     categoryId: `${
      //       !typeSelect
      //         ? categoryItem?.id ?? '27eb4b75-9a42-4991-a802-4aefe21ac3ce'
      //         : income[0].id
      //     }`,
      //   };
      //   dispatch(addTransactionThunk(data));
      //   resetForm();
      // }}
    >
      {formik => (
        <div>
          <h2>Add transaction</h2>
          <div>
            <p>Income</p>
            <label>
              <input
                type="checkbox"
                name="type"
                value={formik.values.type}
                onClick={formik.handleChange}
              />
              <span>
                <span>
                  {!typeSelect ? (
                    <span>
                      <AiOutlineClose />
                    </span>
                  ) : (
                    <span>
                      <AiOutlineClose />
                    </span>
                  )}
                </span>
              </span>
            </label>
            <p>Expense</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            {!typeSelect && (
              <Select
                placeholder="Select a category"
                options={options}
                value={formik.values.categoryId?.value}
                onChange={({ value }) =>
                  formik.setFieldValue('categoryId', value)
                }
                onBlur={formik.handleBlur}
                onClick = {handleGetCatigories}
              />
            )}
            <div>
              <input
                type="number"
                name="amount"
                value={formik.values.amount}
                placeholder="0.00"
                onChange={formik.handleChange}
              />
              {/* <Flatpickr
                options={{
                  dateFormat: 'd.m.Y',
                  disableMobile: 'true',
                  allowInput: false,
                }}
                type="date"
                name="transactionDate"
                value={transactionDate}
                id="date"
                placeholder="YYYY.MM.DD"
                className={css.input}
                onChange={val => {
                  formik.setFieldValue('transactionDate', val[0]);
                }}
              /> */}

              {/* <span>
SVG
              </span> */}
            </div>
            <input
              type="text"
              name="comment"
              value={formik.values.comment}
              placeholder="Comment"
              onChange={formik.handleChange}
            />
            <button type="submit" onClick={handleAddTrans}>Add</button>
          </form>
          <button type="button" onClick={handleClickBtnClose}>
            Cancel
          </button>
        </div>
      )}
    </Formik>
  );
};
