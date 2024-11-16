'use client';

import { BsFiletypePdf } from 'react-icons/bs';
import { TbDownload, TbMessageChatbot } from 'react-icons/tb';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { fileService } from '@/services/fileService';

/**
 * 1. 다운로드 버튼 클릭 시 다운로드 진행
 * 2. 로봇 버튼 클릭 시 면접질문 추출하기 페이지로 이동
 * 3. 카드 클릭 시 미리보기 실행
 */
interface ResumeCardProps {
  resumeId: string;
  fileName: string;
  fileSize: string;
  selectResume: (resumeId: string) => void;
}
const ResumeCard = ({ resumeId, fileName, fileSize, selectResume }: ResumeCardProps) => {
  const handleNavigateInterview = () => {
    alert(`${resumeId} 로 이동`);
  };
  const handleDownloadFile = async () => {
    try {
      const response = await fileService.fileDownload({
        resumeId,
      });
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSelectPreviewFile = () => {
    selectResume(resumeId);
  };
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div
        className="flex flex-1 cursor-pointer items-center gap-x-4"
        onClick={handleSelectPreviewFile}>
        <BsFiletypePdf className="h-6 w-6" />
        <div className="grid gap-1.5 text-sm">
          <div>{fileName}</div>
          <div className="text-xs text-neutral-400">{fileSize}</div>
        </div>
      </div>
      <div className="flex-shrink-0 flex-center">
        <Separator orientation="vertical" className="mr-2 h-8" />
        <Button variant="ghost" size="sm" onClick={handleNavigateInterview}>
          <TbMessageChatbot className="h-6 w-6" />
          <span className="sr-only">Interview</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={handleDownloadFile}>
          <TbDownload className="h-6 w-6" />
          <span className="sr-only">Download</span>
        </Button>
      </div>
    </div>
  );
};

export default ResumeCard;
