import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    padding: 0 0 15px 0;
  }

`;

export const StyledWrapperLeft = styled.div`
width: 100%;
  max-width: 280px;
`;

export const StyledWrapperRight = styled.div`
width: 100%;
  max-width: 280px;
  @media only screen and (min-width: 768px){
    max-width: 336px;
  }
  @media only screen and (min-width: 1279px) {
    max-width: 395px;
  }
`;
export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;