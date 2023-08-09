import styled from 'styled-components'

export const IncomeActive = styled.p`
color: rgba(255, 182, 39, 1);
font-size: 16px;
  line-height: 1.5px;
  font-weight: 600px;
`;

export const IncomePassive = styled.p`
color: rgba(255, 255, 255, 0.6);
font-size: 16px;
  line-height: 1.5px;
  font-weight: 600px;
`;

export const ExpenseActive = styled.p`
color: rgba(255, 134, 141, 1);
font-size: 16px;
  line-height: 1.5px;
  font-weight: 600px;
`;

export const ExpensePassive = styled.p`
color:rgba(255, 255, 255, 0.6);
font-size: 16px;
  line-height: 1.5px;
  font-weight: 600px;
`;


export const CategoryNameStyled = styled.div`
  box-sizing: border-box;
  width: 394px;
  margin: auto;
  padding-bottom: 8px;
  padding-left: 8px;
  color: #fbfbfb;
  font-size: 18px;
  font-weight: 400px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  transition: border-bottom 250ms linear;

  &:hover,
  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    text-align: left;
  
  }
`;