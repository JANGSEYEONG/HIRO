export interface FileUploadRequest {
  file: File;
}
export interface FileUploadResponse {
  fileId: string;
}

export interface FileDownloadRequest {
  resumeId: string;
}
