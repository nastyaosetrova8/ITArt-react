import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { HiOutlineMinus } from 'react-icons/hi';
import 'flatpickr/dist/themes/material_green.css';
import 'flatpickr/dist/flatpickr.min.css';
import { RiCalendar2Fill } from 'react-icons/ri';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Select from 'react-select';

export const StyledWrapModal = styled.div`
  padding: 40px 80px;

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 40px;
  color: var(--white);
  font-size: 28px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
`;

export const StyledSwitchWrapper = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 42px;
`;

export const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;

export const StyledPlusBtn = styled(BsPlusLg)`
  width: 30px;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMinusBtn = styled(HiOutlineMinus)`
  width: 30px;
  height: 30px;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 40px;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const InputAmountStyled = styled.input`
  box-sizing: border-box;
  width: 181px;
  padding-bottom: 8px;
  outline: none;
  text-align: center;
  color: #fbfbfb;
  font-size: 18px;
  font-weight: 400px;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--white-40);
  transition: border-bottom 250ms linear;
  & input {
    width: 181px;
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--white-60);
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    text-align: left;
    padding: 0 14px 8px;
  }
`;

export const StyledDatetimeWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 181px;
  padding: 0 20px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--white-40);
  transition: border-bottom 250ms linear;
  &:hover,
  &:focus {
    border-bottom: 1px solid var(--white-60);
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    padding: 0 14px 8px;
  }
`;

export const StyledDatetime = styled(Datetime)`
  color: var(--white-button-text);
  width: 89px;
  & input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--white);
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
  }

  &:hover,
  &:focus {
    color: var(--violet);
  }
`;

export const StyledCalendarIcon = styled(RiCalendar2Fill)`
  width: 24px;
  height: 24px;
  display: flex;
`;

export const InputCommentStyled = styled.input`
  box-sizing: border-box;
  outline: none;
  width: 394px;
  margin: auto;
  padding-bottom: 8px;
  color: #fbfbfb;
  font-size: 18px;
  font-weight: 400px;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--white-40);
  transition: border-bottom 250ms linear;

  &::placeholder {
    padding-left: 8px;
    font-size: 19px;
    font-weight: 400px;
    line-height: 1.5px;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid var( --white-60);
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    text-align: left;
    padding-bottom: 52px;

    &::placeholder {
      padding-left: 14px;
    }
  }
`;

export const StyledAddBtn = styled.button`
  border-radius: 20px;
  padding: 12px 128px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--white);
  border: transparent;
  background-image: var(--button-gradient);
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  text-transform: uppercase;
  transition: transform 300ms ease-in;

  &:hover,
  &:focus {
    border: 1px solid rgba(74, 86, 226, 1);
    transform: scale(1.02);
  }

  @media (max-width: 780px) {
    button {
      width: 280px;
    }
  }
`;

export const StyledCancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 12px 110px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.5;
  background-color: var(--white);
  color: --white-button-text;
  margin-left: auto;
  text-transform: uppercase;
  border: none;
  transform: scale(1);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 780px) {
    button {
      width: 280px;
    }
  }
`;

export const SelectStyle = styled(Select)`
  display: inline-block;
  margin: auto;
  width: 394px;

  @media screen and (max-width: 768px) {
    max-width: 280px;
  }
`;

export const styledSelectCategories = {
  option: provided => {
    return {
      ...provided,
      background: 'transparent',
      border: 'none',
      outline: 'none',

      fontSize: '18px',
      fontWeight: '400',
      color: 'var(--white-60)',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'var(--form-color)',
        color: 'var(--dashboard-out-text)',
        fontWeight: '400',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    border: 'none',
    borderBottom: '1px solid var(--white-40)',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    maxWidth: '394px',
    margin: 'auto',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: '#FBFBFB',
    };
  },

  menu: provided => {
    return {
      ...provided,
      background:
        'linear-gradient(360deg,rgba(83, 61, 186, 1) 0%,rgba(80, 48, 154, 1) 35.94%,rgba(106, 70, 165, 1) 61.04%,rgba(133, 93, 175, 1) 100%)',
      borderRadius: '8px',
      display: 'inline-block',
      maxWidth: '394px',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {},
  }),

  placeholder: () => {
    return {
      color: 'rgba(255, 255, 255, 0.5)',
      position: 'absolute',
      left: 10,
    };
  },
  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: provided => {
    return {
      ...provided,
      size: '18px',
      color: 'var(--white-40)',
      '&:hover': {
        color: '#fbfbfb',
      },
    };
  },

  input: provided => {
    return {
      ...provided,
      margin: '0px',
      color: 'var(--white)',
      minWidth: '100%',
    };
  },
};
