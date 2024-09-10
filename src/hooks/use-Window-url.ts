import { useEffect, useState } from 'react';
import { useIsMounted } from './use-is-mounted';

const useWindowUrl = () => {
  const isMounted = useIsMounted();
  const [getUrl, setUrl] = useState('');

  useEffect(() => {
    if (isMounted) {
      setUrl(window.location.href);
    }
  }, [isMounted]);

  return getUrl;
};
export default useWindowUrl;
