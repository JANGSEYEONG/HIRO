import { ax, handleAxiosError } from './axios';
import type { Resume } from '@/types/resumeType';

export const resumeService = {
  // 전체 이력서 조회
  getAllResume: async (): Promise<Resume[]> => {
    try {
      const response = await ax.get<Resume[]>('/api/resumes');
      console.log('getAllResume Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
