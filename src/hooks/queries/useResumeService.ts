import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import { resumeService } from '@/services/resumeService';
import type { Resume } from '@/types/resumeType';

// 이력서 전체 조회
export const useGetAllResume = () => {
  return useSuspenseQuery<Resume[], AxiosError>({
    queryKey: ['getAllResume'],
    queryFn: () => resumeService.getAllResume(),
  });
};
