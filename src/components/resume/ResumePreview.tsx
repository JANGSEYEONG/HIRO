import MessageText from '../common/MessageText';
import { useFileDownload } from '@/hooks/queries/useFileService';
import { useEffect, useState } from 'react';

interface ResumePreviewProps {
  resumeId: string | null;
}

const ResumePreview = ({ resumeId }: ResumePreviewProps) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const { data, isSuccess } = useFileDownload({ resumeId });

  useEffect(() => {
    if (isSuccess && data) {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    }
  }, [data, isSuccess, setPdfUrl]);

  return (
    <div className="h-full border flex-center">
      {resumeId && pdfUrl ? (
        <object data={pdfUrl} type="application/pdf" className="h-screen w-full">
          <MessageText message="PDF를 표시할 수 없습니다." />
        </object>
      ) : (
        <MessageText message="미리보기할 이력서를 선택해 주세요." />
      )}
    </div>
  );
};

export default ResumePreview;
