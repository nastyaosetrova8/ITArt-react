import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';

const breakpoints = {
    tablet: `@media only screen and (min-width: 768px)`,
    desktop: `@media only screen and (min-width: 1280px)`,
};

export const StyledSelectWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;

  @media only screen and (min-width: 768px) {
    width: 336px;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    margin-top: 0;
  }

  @media only screen and (min-width: 1280px) {
    width: 395px;
    flex-direction: row;
  }
`;
//----------------------------------------------
export const selectStyles = {
    control: styles => ({
        ...styles,
        width: '280px',
        height: '50px',
        padding: '12px 20px',
        fontSize: '16px',
        color: 'var(--white)',
        backgroundColor: 'rgba(74, 86, 226, 0.10)',
        border: '1px solid var(--white-60)',
        borderRadius: '8px',
        cursor: 'pointer',
        [breakpoints.tablet]: {
            width: '160px',
        },
        [breakpoints.desktop]: {
            width: '182px',
        },
    }),
    valueContainer: styles => ({ ...styles, padding: '0', margin: '0' }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    dropdownIndicator: (styles, state) => ({
        ...styles,
        padding: '0',
        transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
    singleValue: styles => ({ ...styles, margin: '0', color: 'var(--white)' }),
    input: styles => ({ ...styles, padding: '0', margin: '0' }),
    menu: styles => ({
        ...styles,
        top: '90%',
        width: '280px',
        height: '157px',
        borderRadius: '8px',
        background: 'var(--small-form-color)',
        backdropFilter: `blur(50px)`,
        overflow: 'auto',
        [breakpoints.tablet]: {
            width: '160px',
        },
        [breakpoints.desktop]: {
            width: '182px',
        },
    }),
    menuList: styles => ({
        ...styles,
        width: '280px',
        height: '157px',
        [breakpoints.tablet]: {
            width: '160px',
        },
        [breakpoints.desktop]: {
            width: '182px',
        },
        '::-webkit-scrollbar': {
            width: '7px',
            height: '0px',
            borderRadius: '8px',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: 'var(--form-color)',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--violet)',
        },
        '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'var(--white-button-text)',
        },
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: 'pointer',
        color: state.isSelected ? 'var(--dashboard-out-text)' : null,
        backgroundColor: state.isSelected ? 'var(--form-color)' : null,
        ':hover': {
            color: 'var(--dashboard-out-text)',
            backgroundColor: 'var(--form-color)',
        },
    }),
};

export const SelectIcon = styled(SlArrowDown)`
  color: ${({ theme }) => theme.colors.primaryFont};
  width: 30px;
  height: 20px;
`;