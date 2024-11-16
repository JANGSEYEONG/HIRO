import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { resumeService } from '@/services/resumeService';
import type { Resume } from '@/types/resumeType';

// 이력서 전체 조회
export const useGetAllResume = () => {
  return useQuery<Resume[], AxiosError>({
    queryKey: ['getAllResume'],
    queryFn: () => resumeService.getAllResume(),
  });
};
