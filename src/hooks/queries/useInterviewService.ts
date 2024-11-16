import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { GetInterviewRequest, Interview, interviewService } from '@/services/interviewService';

// 이력서 면접 질문 조회
export const useGetInterview = ({ resumeId }: GetInterviewRequest) => {
  return useQuery<Interview[], AxiosError>({
    queryKey: ['getInterview', resumeId],
    queryFn: () => interviewService.getInterview({ resumeId }),
    enabled: !!resumeId,
  });
};
