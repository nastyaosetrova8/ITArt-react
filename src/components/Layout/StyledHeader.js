import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 16px;
  background: var(--header-background);

  .user-name {
    margin: 0 12px 0 auto;
    color: var(--white-60);
    font-size: 16px;
  }

  button {
    background: transparent;
    padding: 6px 12px;
    border: none;
    border-left: 1px solid var(--white-60);
  }

  .btn-exit-text {
    font-size: 16px;
    color: var(--white-60);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17.097px;
  gap: 4px;
`;
