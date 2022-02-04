import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import SVG from '../assets/icons/logo.svg';

const LogoSVG = styled(SVG)`
  cursor: pointer;
`;

export const Logo: FC = memo(() => {
  const navigate = useNavigate();
  return <LogoSVG fill='#fafafa' onClick={() => navigate('/')} />;
});
