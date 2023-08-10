import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  //gap: 69px;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    min-width: 768px;
    max-width: 1279px;
    align-items: center;
    padding: 0 32px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    min-width: 320px;
    max-width: 767px;
    flex-direction: column;
  }
`;

export const SideBarHide = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    .balance-invisible {
      display: none;
    }
  }
`;

export default StyledContainer;
