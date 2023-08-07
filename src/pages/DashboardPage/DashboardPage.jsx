import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import StyledContainer from 'components/Container/StyledContainer';
import SideBar from 'components/SideBar/SideBar';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransCategoriesThunk,
  getTransactionsThunk,
} from 'redux/Thunks/TransactionsThunk';
import { selectIsAuth, selectToken } from 'redux/selectors';
import { StyledWrapperList } from './StyledWrapperList';

function DashboardPage() {
  const isAuth = useSelector(selectIsAuth);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) return;
    dispatch(getTransactionsThunk());
    dispatch(getTransCategoriesThunk(token));
  }, [dispatch, token, isAuth]);

  return (
    isAuth && (
      <StyledContainer>
        <SideBar />
        <StyledWrapperList>
          <TransactionsList />
          <ButtonAddTransactions />
        </StyledWrapperList>
      </StyledContainer>
    )
  );
}
export default DashboardPage;
