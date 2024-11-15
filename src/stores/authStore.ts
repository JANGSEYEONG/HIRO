import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';
import { AUTH_STORE_NAME } from './config';
import { useUserStore } from './userStore';

interface AuthState {
  isLoggedIn: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
        setLogin: () => {
          set({
            isLoggedIn: true,
          });
        },
        setLogout: () => {
          set({
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

    // 로컬스토리지에 마지막 상태가 로그인이었으면 로그인 처리
    if (authStore.isLoggedIn) {
      authStore.setLogin();
    } else {
      authStore.setLogout();
    }
  };

  initializeAuth();
}
