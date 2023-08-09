import { TableContainer } from '@mui/material';
import { styled } from 'styled-components';

export const StyledTableContainer = styled(TableContainer)`
  width: 100%;
  color: var(--white);
  background: yellow;

  .th-currency {
    padding: 16px 0 16px 50px;
  }
  .th-purshase {
    padding-left: 0;
    padding-right: 28px;
  }
  .td-purshase {
    padding-left: 0;
    padding-right: 40px;
  }
  .td-sell {
    padding-left: 0;
    width: 200px;
  }

  th {
    color: var(--white);
    font-size: 16px;
    font-family: 'PoppinsRegular';
    border: none;
    font-weight: 600;
    line-height: normal;
    background: rgba(255, 255, 255, 0.2);
  }

  tr {
    border: none;
  }

  td {
    color: var(--white);
    font-size: 16px;
    font-family: 'PoppinsRegular';
    padding: 24px 0 0 35px;
    line-height: normal;
    border: none;
    width: 160px;
  }
`;
// export const StyledTable = styled.table`
//   width: 100%;
// `;

// export const StyledTableHead = styled.head`
//   color: white;
// `;
// export const StyledRow = styled.tr`
//   color: white;
// `;

// export const StyledCell = styled.td`
//   background: white;
// `;
