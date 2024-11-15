import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

import { ROUTES } from '@/constant/routes';

export const useLogout = () => {
  const router = useRouter();
  const setLogout = useAuthStore((state) => state.setLogout);
  const handleLogout = () => {
    setLogout();
    router.push(ROUTES.LOGIN.PATH);
  };
  return { handleLogout };
};
