import { useState, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, UploadIcon, AlertCircle, Loader2 } from 'lucide-react';
import { BsFiletypePdf } from 'react-icons/bs';
import MessageText from '@/components/common/MessageText';
import { fileService } from '@/services/fileService';
import { cn } from '@/lib/utils';

const MAX_FILES = 50;
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

interface UploadResumeDialogProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

const UploadResumeDialog = ({ children, onComplete }: UploadResumeDialogProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setError(null);

    if (files.length + selectedFiles.length > MAX_FILES) {
      setError(`최대 ${MAX_FILES}개의 파일만 업로드할 수 있습니다.`);
      return;
    }

    const invalidFiles = selectedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) return true;
      if (!file.type.includes('pdf')) return true;
      return false;
    });

    if (invalidFiles.length > 0) {
      setError('2MB 이하의 PDF 파일만 업로드할 수 있습니다.');
      return;
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setError(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files);
    const fileInput = fileInputRef.current;

    if (fileInput) {
      const dataTransfer = new DataTransfer();
      droppedFiles.forEach((file) => dataTransfer.items.add(file));
      fileInput.files = dataTransfer.files;

      // Trigger the onChange event handler
      const event = new Event('change', { bubbles: true });
      fileInput.dispatchEvent(event);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (files.length === 0) {
      setError('업로드할 파일을 선택해주세요.');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // 파일 순차 업로드
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('file', files[i]);

        await fileService.fileUpload({ file: files[i] });
        setUploadProgress(Math.round(((i + 1) / files.length) * 100));
      }

      onComplete?.();
      setOpen(false);
      setFiles([]);
      setError(null);
    } catch (error) {
      setError('파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleCancel = () => {
    if (isUploading) return;
    setOpen(false);
    setFiles([]);
    setError(null);
  };

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={(newOpen) => !isUploading && setOpen(newOpen)}>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
        <AlertDialogContent className="max-w-2xl">
          <form ref={formRef} onSubmit={handleUpload}>
            <AlertDialogHeader className="gap-y-2">
              <AlertDialogTitle>이력서 업로드</AlertDialogTitle>
              <AlertDialogDescription className="flex items-center gap-x-2">
                <AlertCircle className="h-4 w-4" />
                최대 {MAX_FILES}개 파일 / 파일당 2MB 이하 / PDF 형식만 가능
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="mt-2 space-y-4">
              <div className="flex justify-center">
                <label
                  htmlFor="files"
                  className={cn(
                    'w-full cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors delay-100',
                    files.length >= MAX_FILES || isUploading
                      ? 'cursor-not-allowed opacity-50'
                      : 'hover:border-primary/80',
                  )}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}>
                  <UploadIcon className="mx-auto h-8 w-8 text-neutral-400" />
                  <span className="mt-2 block text-sm font-semibold">
                    클릭하여 파일 선택 또는 드래그 앤 드롭
                  </span>
                  <Input
                    ref={fileInputRef}
                    name="file"
                    id="files"
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf"
                    onChange={handleFileChange}
                    disabled={files.length >= MAX_FILES || isUploading}
                  />
                </label>
              </div>

              {error && (
                <div className="flex items-center gap-x-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <ScrollArea className="h-64 w-full">
                {files.length === 0 ? (
                  <div className="h-64 flex-center">
                    <MessageText message="선택된 파일이 없습니다." />
                  </div>
                ) : (
                  <ul className="space-y-2 pr-2.5">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="group relative rounded-lg border p-3 hover:bg-neutral-50">
                        <div className="flex items-center gap-x-3">
                          <BsFiletypePdf className="h-8 w-8 text-red-500" />
                          <div className="flex-1 overflow-hidden">
                            <div className="truncate text-sm font-medium">{file.name}</div>
                            <div className="text-xs text-neutral-400">
                              {formatFileSize(file.size)}
                            </div>
                          </div>
                          {!isUploading && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 opacity-0 group-hover:opacity-100"
                              onClick={() => handleRemoveFile(index)}>
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollArea>
            </div>

            <AlertDialogFooter>
              <div className="flex w-full items-center justify-between">
                <div className="text-sm text-neutral-500">
                  {files.length}/{MAX_FILES} 파일 선택됨
                </div>
                <div className="flex gap-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    disabled={isUploading}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isUploading || files.length === 0}
                    className="min-w-[80px]">
                    {isUploading ? (
                      <div className="flex items-center gap-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>{uploadProgress}%</span>
                      </div>
                    ) : (
                      'Upload'
                    )}
                  </Button>
                </div>
              </div>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>

      {/* 전체 화면 로딩 오버레이 */}
      {isUploading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center gap-y-4 rounded-lg bg-white p-6">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <div className="text-center">
              <div className="font-medium">파일 업로드 중...</div>
              <div className="text-sm text-neutral-500">
                {uploadProgress}% ({Math.floor((uploadProgress / 100) * files.length)}/
                {files.length} 파일)
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadResumeDialog;
