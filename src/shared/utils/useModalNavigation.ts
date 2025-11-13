import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useModalNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = useCallback(
    (path: string, id: string) => {
      navigate(`/${path}/${id}`, {
        state: {
          backgroundLocation:
            location.state?.backgroundLocation || location.pathname,
        },
      });
    },
    [navigate, location]
  );

  const closeModal = useCallback(
    (fallback = '/cats') => {
      const backgroundLocation = location.state?.backgroundLocation;
      const backgroundPath =
        typeof backgroundLocation === 'string'
          ? backgroundLocation
          : backgroundLocation?.pathname || fallback;

      navigate(backgroundPath, {
        replace: true,
      });
    },
    [navigate, location]
  );

  return { openModal, closeModal };
};
