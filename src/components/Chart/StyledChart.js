import styled from 'styled-components';

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height:100%;
  max-width: 280px;
  max-height: 280px;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
    max-height: 336px;
  }
  @media only screen and (min-width: 1279px) {
    max-width: 288px;
    max-height: 288px;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;