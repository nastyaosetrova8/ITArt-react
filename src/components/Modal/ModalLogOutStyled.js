import styled from 'styled-components';


export const ModalWrap = styled.div`
padding: 60px 117px;

@media (max-width: 780px){
  padding: 240px 20px;
}
`;

export const TitleWrapper = styled.div`
@media (max-width: 780px){
  max-width: 214px;
  text-align: center;
}
`;

export const LogoStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0 auto 52px;
    color: var(--white, #fbfbfb);
    font-size: 27px;
    font-weight: 400;
    line-height: 40px;
  }
  h4 {
    margin: 0 auto 52px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
  @media (max-width: 780px) {
    img {
      display: none;
    }
    h3 {
      display: none;
    }
    h4 {
      margin: 0 auto 40px;
    }
  }
`;

export const ButtonsBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 18px;
    text-transform: uppercase;
    box-shadow: var(--button-shadow);
    transition: transform 300ms ease-in;
    border: transparent;

    &:hover {
      border: 1px solid rgba(74, 86, 226, 1);
      transform: scale(1.02);
    }
  }
  @media (max-width: 780px) {
    button {
      width: 280px;
    }
  }
`;

export const ButtonActive = styled.button`
  color: var(--white);
  background-image: var(--button-gradient);
`;
export const ButtonWhite = styled.button`
  color: var(--white-button-text);
  background-color: var(--white-button-bg);
`;
