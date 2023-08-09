import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 16px;
  p {
    margin-left: auto;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--yellow);
`;
