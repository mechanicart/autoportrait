import { FC } from 'react';
import styled from 'styled-components/macro';

import { breakpoints } from './breakpoints';
import { useThemeContainer } from './hooks';

const InputWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 90px;
  gap: 20px;
  right: 16px;
  background: midnightblue;
  padding: 20px 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 20px;

  @media screen and ${breakpoints.mobileL} {
    width: 100%;
    position: inherit;
    padding: 20px 0px;
    justify-content: space-evenly;
    color: #fafafa;
    background-color: rgb(32 31 40 / 20%);
  }
`;
const InputLabel = styled.label`
  display: inline-block;
  position: relative;
  height: 23px;
  width: 48px;
  background-color: #fff;
  cursor: pointer;
  font-size: 0;
  color: transparent;
  border-radius: 22px;
  transition: background-color 500ms ease;

  :after {
    content: '';
    display: block;
    height: 19px;
    width: 19px;
    position: absolute;
    top: 2px;
    right: 27px;
    border-radius: 50%;
    background-color: #e8e8e8;
    box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.15);
  }

  &:after {
    transition: right 500ms ease, 
      background-color 500ms ease, 
      box-shadow 500ms ease;
  }
}
`;

const Input = styled.input`
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  bottom: 0;

  &:checked + ${InputLabel} {
    background: rgb(156, 14, 156);
  }

  &:checked + ${InputLabel}:after {
    right: 2px;
    background-color: #fff;
    box-shadow: -2px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const ThemeToggle: FC = () => {
  const { toggleTheme, theme } = useThemeContainer();
  return (
    <InputWrapper>
      Dark mode
      <Input
        id='input'
        type='checkbox'
        checked={theme === 'darkTheme'}
        onChange={toggleTheme}
      />
      <InputLabel htmlFor='input'>Dark mode</InputLabel>
    </InputWrapper>
  );
};
