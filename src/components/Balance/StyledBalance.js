import styled from 'styled-components';

export const StyledBalance = styled.div`
  padding: 8px 0 11px 56px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 32px;

  .balance {
    color: var(--white, #fbfbfb);
    font-size: 30px;
    font-weight: 700;
    line-height: normal;

    margin: 0;
  }

  .title-balance {
    color: var(--white-40, rgba(255, 255, 255, 0.4));
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin: 0 0 12px 0;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 36px;
    width: 280px;
    padding-left: 32px;
    border-radius: 8px;

    .balance {
      padding: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 336px;
    padding-left: 40px;
    border-radius: 8px;
  }
`;
