import { useAuthStore } from '@/stores/authStore';
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://144.24.81.14',
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 전역 스토어에서 accessToken값 가져와서 세팅하기
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers['access_token'] = accessToken;
    } else {
      delete config.headers['access_token'];
    }
    // URL이 유효한지 디버깅을 위한 로그
    console.log('Request URL:', config.baseURL, config.url);
    return config;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 - 에러 처리 일단 패스
// instance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   async (error: AxiosError) => {
//     return Promise.reject(error);
//   },
// );

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(error);
  }
};

export const ax = instance;
