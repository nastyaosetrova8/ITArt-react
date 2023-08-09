import styled from 'styled-components';

export const WrapperTable = styled.table`
  width: 280px;
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const StyledThead = styled.thead`
  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
  }

  width: 280px;
  height: 56px;

  background: var(--balance-bg);
  box-shadow: var(--form-shadow);
  backdrop-filter: blur(50px);

  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const StyledTr = styled.tr`
padding: 0 16px;
`;

export const StyledTbody = styled.tbody`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 16px 0;
  gap: 14px;

  tr {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--white-60);
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }
`;

export const StyledIcon = styled.td`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-left: 16px;
`;

export const StyledText = styled.td`
  margin-left: 16px;
  margin-right: auto;
  font-size: 14px;
`;

export const StyledSum = styled.td`
  margin-right: 16px;
  font-size: 14px;
`;

export const StyledTotalWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const StyledP = styled.p`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
`;

export const StyledSpanExpenses = styled.span`
  color: var(--dashboard-out-text);
  margin-right: 16px;
`;
export const StyledSpanIncome = styled.span`
  color: var(--dashboard-in-text);
  margin-right: 16px;
`;