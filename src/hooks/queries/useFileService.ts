import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fileService } from '@/services/fileService';

import type { FileDownloadRequest } from '@/types/service/fileServiceType';

// 이력서 전체 조회
export const useFileDownload = ({ resumeId }: FileDownloadRequest) => {
  return useQuery<ArrayBuffer, AxiosError>({
    queryKey: ['getAllResume'],
    queryFn: () => fileService.fileDownload({ resumeId }),
    enabled: !!resumeId,
  });
};
