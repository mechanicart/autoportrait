import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type UseNavBar = Readonly<{
  items: ReadonlyArray<{
    dataActive: boolean;
    onClick: () => void;
    title: string;
  }>;
  isSettingVisible: boolean;
}>;

export const useNavBar = (): UseNavBar => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSettingVisible, setSettingVisible] = useState<boolean>(false);

  const items = useMemo(
    () => [
      {
        dataActive: pathname === '/' || undefined,
        onClick: () => navigate('/'),
        title: 'Home',
      },
      {
        dataActive: pathname === '/blog' || undefined,
        onClick: () => navigate('/blog'),
        title: 'Blog',
      },
      {
        dataActive: pathname === '/about' || undefined,
        onClick: () => navigate('/about'),
        title: 'About',
      },
      {
        dataActive: undefined,
        onClick: () => setSettingVisible(!isSettingVisible),
        title: 'Settings',
      },
    ],
    [navigate, setSettingVisible, pathname, isSettingVisible],
  );

  return {
    items,
    isSettingVisible,
  };
};
