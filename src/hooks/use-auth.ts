import { deleteCookie, getCookie } from 'cookies-next';
import { routes } from '@/config/routes';
import { siteConfig } from '@/config/site.config';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const userInfo = getCookie('userInfo');
  const parsedToken = getCookie('token');
  const notificationsSettings = getCookie('notificationsSettings');
  const parsedUserInfo = userInfo && JSON.parse(userInfo);
  const parsedNotificationsSettings = notificationsSettings && JSON.parse(notificationsSettings);
  const parsedTokenData = parsedToken && JSON.parse(parsedToken);
  const router = useRouter();
  const logout = () => {
    deleteCookie('userInfo');
    deleteCookie('notificationsSettings');
    deleteCookie('token');
    router.push(routes.auth.login);
  };
  return {
    ...parsedUserInfo,
    endPointUrl: siteConfig.endPointURL,
    token: parsedTokenData,
    notificationsSettings: parsedNotificationsSettings,
    logout: () => logout(),
  };
};

export default useAuth;
