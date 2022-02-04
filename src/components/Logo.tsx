import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoSVG from '../assets/icons/logo.svg';

export const Logo: FC = memo(() => {
  const navigate = useNavigate();
  return <LogoSVG fill='#fafafa' onClick={() => navigate('/')} />;
});
