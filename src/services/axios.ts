import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

// 요청 인터셉터 - cookie로 관리해서 필요없음

// 응답 인터셉터 - 에러 처리 일단 패스
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(error);
  }
};

export const ax = instance;
