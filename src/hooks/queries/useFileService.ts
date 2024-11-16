import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fileService } from '@/services/fileService';

// 이력서 전체 조회
export const useFileDownload = ({ resumeId }: { resumeId: string | null }) => {
  return useQuery<ArrayBuffer | null, AxiosError>({
    queryKey: ['getAllResume'],
    queryFn: () => {
      return resumeId ? fileService.fileDownload({ resumeId }) : null;
    },
    enabled: !!resumeId,
  });
};
