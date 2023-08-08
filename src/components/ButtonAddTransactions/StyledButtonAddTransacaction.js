import { styled } from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

export const BtnStyled = styled.button`
  width: 44px;
  height: 44px;
  background-image: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  color: currentColor;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  right: 40px;
  transition: 250ms;

  &:hover,
  &:focus {
    outline: none;
    background: linear-gradient(97deg, #deac1e 0%, #9e40ba 61%, #7c3dcb 91%);
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transition: 250ms;
  }
`;
export const BtnPlus = styled(BsPlusLg)`
  width: 28px;
  height: 28px;
  background: transparent;
  color: #fbfbfb;
`;
