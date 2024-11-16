'use client';
import { usePdfUrl } from '@/hooks/usePdfUrl';
import ResumePreview from '@/components/resume/ResumePreview';
import { useFileDownload } from '@/hooks/queries/useFileService';
import { useEffect } from 'react';

interface InterviewWrapperProps {
  resumeId: string;
}

const InterviewWrapper = ({ resumeId }: InterviewWrapperProps) => {
  const { data, isSuccess } = useFileDownload({ resumeId });
  const { pdfUrl, selectPdfUrl } = usePdfUrl();

  useEffect(() => {
    if (isSuccess && data) {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      selectPdfUrl(url);
    }
  }, [data]);
  return (
    <div className="grid h-full flex-grow grid-cols-2 gap-4 overflow-hidden">
      <section>챗봇</section>
      <section>
        <ResumePreview pdfUrl={pdfUrl} />
      </section>
    </div>
  );
};

export default InterviewWrapper;
