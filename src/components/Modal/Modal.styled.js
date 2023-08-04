import styled from "styled-components";


export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
  /* z-index: 1200; */
`;

export const StyledModal = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  padding: 40px 72px;
  background: radial-gradient(
    circle,
    rgba(64, 46, 155, 1) 5%,
    rgba(76, 50, 113, 1) 100%
  );
`;
