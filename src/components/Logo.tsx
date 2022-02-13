import { FC, memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import SVG from '../assets/icons/logo.svg';

import { DARK_THEME, LIGHT_THEME, useThemeContainer } from './Theme';

const LogoSVG = styled(SVG)`
  cursor: pointer;
`;

export const Logo: FC = memo(() => {
  const { theme } = useThemeContainer();
  const navigate = useNavigate();
  const logoColor = useMemo(() => {
    // TODO: fix this quick solution
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    if (viewportWidth <= 600) return DARK_THEME.text;
    return theme === 'darkTheme' ? DARK_THEME.text : LIGHT_THEME.text;
  }, [theme]);
  return <LogoSVG fill={logoColor} onClick={() => navigate('/')} />;
});
