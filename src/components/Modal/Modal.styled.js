import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-background);
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
  @media screen and (max-width: 768px) {
}
`;

export const StyledModal = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 8px;
  background: radial-gradient(
    circle,
    rgba(64, 46, 155, 1) 5%,
    rgba(76, 50, 113, 1) 100%
  );

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const StyledCloseBtn = styled.button`
position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
display: none;
}
  `;
