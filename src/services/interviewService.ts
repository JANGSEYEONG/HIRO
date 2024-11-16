import { ax, handleAxiosError } from './axios';

export interface GetInterviewRequest {
  resumeId: string;
}

export interface Interview {
  question_type: string;
  question: string;
}

export const interviewService = {
  // 이력서 기반 면접질문 뽑아내기
  getInterview: async ({ resumeId }: GetInterviewRequest): Promise<Interview[]> => {
    try {
      const response = await ax.post<Interview[]>(`/api/ai/resumes/${resumeId}/interview`);
      console.log('getInterview Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
