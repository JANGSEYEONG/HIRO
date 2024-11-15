import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';
import { AUTH_STORE_NAME } from './config';
import { useUserStore } from './userStore';

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  setLogin: (accessToken: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        isLoggedIn: false,
        refreshToken: null,
        setLogin: (accessToken: string) => {
          set({
            accessToken,
            isLoggedIn: true,
          });
        },
        setLogout: () => {
          set({
            accessToken: null,
            isLoggedIn: false,
          });
          // 저장된 유저 정보 상태 초기화
          useUserStore.getState().clearUser();
        },
      }),
      {
        name: AUTH_STORE_NAME,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

if (typeof window !== 'undefined') {
  const initializeAuth = () => {
    const authStore = useAuthStore.getState();
    if (authStore?.accessToken) {
      authStore.setLogin(authStore.accessToken);
    } else {
      authStore.setLogout();
    }
  };
  initializeAuth();
}
