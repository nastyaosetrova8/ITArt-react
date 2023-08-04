import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import StyledContainer from 'components/Container/StyledContainer';
import SideBar from 'components/SideBar/SideBar';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selectors';

function DashboardPage() {
  const isAuth = useSelector(selectIsAuth);
  return (
    isAuth && (
      <StyledContainer>
        <SideBar />
        <TransactionsList />
        <ButtonAddTransactions />
      </StyledContainer>
    )
  );
}
export default DashboardPage;
