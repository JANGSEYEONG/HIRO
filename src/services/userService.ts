import { ax, handleAxiosError } from './axios';
import type { LoginRequest, LoginResponse, SignUpRequest } from '@/types/service/userServiceType';

export const userService = {
  // 로그인
  login: async ({ userId, password }: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await ax.post<LoginResponse>('/api/user/login', { userId, password });
      console.log('login Response:', response.data);

      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 회원가입
  signUp: async ({ userId, password, name }: SignUpRequest) => {
    try {
      const response = await ax.post('/api/user/register', {
        userId,
        password,
        name,
      });
      console.log('signUp Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
