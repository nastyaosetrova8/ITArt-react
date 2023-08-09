import { styled } from 'styled-components';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export const TransactionContainer = styled.ul`
  list-style: none;
  height: 75vh;
  overflow: auto;
`;
export const TransactionList = styled.ul`
  max-width: 280px;
  margin-top: 8px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 8px;
  border-left: 5px solid
    ${props => (props.type === 'INCOME' ? '#FFB627' : '#FF868D')};
`;
export const TransactionItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.07);
  padding: 12px 15px;
  font-size: 16px;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
export const TransactionTitle = styled.p`
  font-weight: 600;
`;

export const TableSt = styled.table`
  margin-top: 46px;
  width: 100%;
  height: 356px;
  overflow-y: auto;
`;
export const TableHeadSt = styled.thead`
  background-color: rgba(81.88, 59, 126.44, 0.8);
`;
export const HeadRow = styled.tr`
  display: grid;
  grid-template-columns: 0.72fr 0.5fr 1.05fr 1.5fr 0.7fr 0.6fr 0.1fr;
  width: 100%;
  color: #fbfbfb;
  border-radius: 8px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(100px);
  overflow-y: auto;
`;
export const HeadTitle = styled.th`
  font-weight: 600;
  font-size: 16px;
  color: #fbfbfb;
  text-align: left;
`;
export const TableBodySt = styled.tbody`
  display: block;
`;
export const TableRowStyled = styled.tr`
  border-top: none;
  font-size: 14px;
  color: #fbfbfb;
  font-weight: 400;
  text-align: left;
  position: relative;
  margin: 0;
  display: grid;
  grid-template-columns: 0.8fr 0.6fr 1.2fr 1.7fr 0.7fr 0.4fr 0.15fr;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const TableInfo = styled.td``;
export const BtnCont = styled.td`
  width: 100%;
  display: flex;
  border-top: none;
  text-align: right;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 8px;
`;
export const BtnEdit = styled.button`
  background-color: transparent;
  border: none;
`;
export const BtnEditTransaction = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 18px;
  border: none;
  width: 69px;
  height: 29px;
  color: #ffffff8f;
  cursor: pointer;
  transition: 250ms;
  background-color: transparent;
  border: none;
`;
export const BtnIcon = styled(ModeEditOutlineOutlinedIcon)`
  color: #ffffff8f;
  transition: 250ms;
  &:active,
  &:focus,
  &:hover {
    color: #ffffffc4;
    cursor: pointer;
    transition: 250ms;
    transform: scale(1.1);
  }
`;
export const BtnDelete = styled.button`
  text-align: center;
  color: #fbfbfb;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  padding: 5px 12px;
  background-image: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  display: inline-flex;
  transition: 250ms;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background: linear-gradient(97deg, #deac1e 0%, #9e40ba 61%, #7c3dcb 91%);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transition: 250ms;
    transform: scale(1.03);
    outline: none;
  }
`;
