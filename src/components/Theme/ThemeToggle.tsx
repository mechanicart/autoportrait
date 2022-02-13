import { FC } from 'react';
import styled from 'styled-components/macro';

import { useThemeContainer } from './hooks';

const InputWrapper = styled.div`
  display: inline-flex;
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
