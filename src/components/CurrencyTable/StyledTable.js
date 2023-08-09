import { TableContainer } from '@mui/material';
import { styled } from 'styled-components';
import bgCurrency from '../../assets/images/currency_desktop@1x.png';

export const StyledTableContainer = styled(TableContainer)`
  width: 100%;
  color: var(--white);
  background: yellow;
  margin-bottom: 36px;

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

export const StyledWrapperDiagramm = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 183px;
  background-image: url(${bgCurrency});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  .currencyUSD {
    position: absolute;
    left: 12%;
    top: 7%;
    font-family: 'PoppinsRegular';
    font-size: 12px;
    color: var(--dashboard-out-text);
  }

  .currencyEUR {
    position: absolute;
    right: 101px;
    top: -21px;
    font-family: 'PoppinsRegular';
    font-size: 12px;
    color: var(--dashboard-out-text);
  }
`;
