import styled from 'styled-components'

export const InputBtnWrap = styled.div`
width: 100%;
max-width: 410px;
margin: 0 auto;
`
export const InputsWrap = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 52px;
gap: 40px;

div{
    height: 38px;
}
`

export const ButtonsBox = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    width: 100%;
    max-width: 300px;
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
      max-width: 280px;
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
