import { useCallback, useEffect, useRef, useState } from 'react';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

export const useWindowLocation = (): Location | void => {
  const isMounted = useIsMounted();
  const [location, setLocation] = useState<Location | void>(
    isMounted() ? window.location : undefined,
  );

  useEffect(() => {
    if (!isMounted) return;
    const setWindowLocation = () => {
      setLocation(window.location);
    };

    if (!location) {
      setWindowLocation();
    }
    window.addEventListener('popstate', setWindowLocation);

    return () => {
      window.removeEventListener('popstate', setWindowLocation);
    };
  }, [isMounted, location]);

  return location;
};

export function usePathName() {
  const [pathName, setPathName] = useState('');
  const listenToPopstate = () => {
    const windowPathName = window && window.location.pathname;
    setPathName(windowPathName);
  };
  useEffect(() => {
    window.addEventListener('popstate', listenToPopstate);
    return () => {
      window.removeEventListener('popstate', listenToPopstate);
    };
  }, []);
  return pathName;
}
