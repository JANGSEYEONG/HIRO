import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';
import { USER_STORE_NAME } from './config';

interface User {
  userId: string;
  userName: string;
}

interface UserStoreType {
  user: User | null;
  setUser: (userUpdate: Partial<User>) => void;
  clearUser: () => void;
}

// 유저 데이터 정보 저장 스토어
export const useUserStore = create<UserStoreType>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (userUpdate: Partial<User>) =>
          set((state) => ({
            user: state.user ? { ...state.user, ...userUpdate } : (userUpdate as User),
          })),
        clearUser: () => set({ user: null }),
      }),
      {
        name: USER_STORE_NAME,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
