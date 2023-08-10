import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  //gap: 69px;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
  }
`;

export default StyledContainer;
