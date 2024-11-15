import { ax, handleAxiosError } from './axios';
import type {
  FileDownloadRequest,
  FileUploadRequest,
  FileUploadResponse,
} from '@/types/service/fileServiceType';

export const fileService = {
  // 파일 업로드
  fileUpload: async ({ file }: FileUploadRequest): Promise<FileUploadResponse> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await ax.post<FileUploadResponse>('/api/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('fileUpload Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 파일 다운로드
  fileDownload: async ({ resumeId }: FileDownloadRequest): Promise<ArrayBuffer> => {
    try {
      const response = await ax.get(`/api/resumes/${resumeId}/download`, {
        responseType: 'arraybuffer',
      });
      console.log('fileDownload Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
