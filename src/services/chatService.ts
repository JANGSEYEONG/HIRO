import { ax, handleAxiosError } from './axios';

interface GetChatResponse {
  resume_id: string;
  applicant_name: string;
  job_category: string;
  years: number;
  language: string;
}

export const chatService = {
  // 전체 이력서 조회
  getChat: async (message: string): Promise<GetChatResponse[]> => {
    try {
      const response = await ax.post<GetChatResponse[]>('/api/ai/resumes-chat', { message });
      console.log('getChat Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
