import styled from 'styled-components';

export const StyledWrapperList = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  padding-top: 46px;
  flex-direction: column;
  padding-right: 16px;

  @media (max-width: 1280px) {
    width: auto;
    max-width: 704px;
    padding: 0 32px;
    padding-top: 20px;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: auto;
    padding: 0 32px;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;
