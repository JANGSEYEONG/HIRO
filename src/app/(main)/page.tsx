'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import ResumeCard from '@/components/resume/ResumeCard';
import ResumePreview from '@/components/resume/ResumePreview';
import UploadResumeDialog from './_components/UploadResumeDialog';

export default function HomePage() {
  const [pdfUrl] = useState<string | null>(null);
  const testResume = [
    { resumeId: 'resume1', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume2', fileName: '이름입니다.pdf', fileSize: '33MB' },
  ];

  return (
    <div className="flex h-[calc(100vh-65px)] flex-col gap-y-3 p-4">
      <div className="flex flex-shrink-0 items-end justify-between">
        <h2>현재 업로드한 파일 수: 100</h2>
        <UploadResumeDialog>
          <Button variant="outline">이력서 업로드 하기</Button>
        </UploadResumeDialog>
      </div>
      <div className="grid flex-grow grid-cols-2 gap-4 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <ul className="flex flex-col gap-y-4">
            {testResume.map((test) => (
              <ResumeCard key={test.resumeId} {...test} />
            ))}
          </ul>
        </ScrollArea>
        <section>
          <ResumePreview pdfUrl={pdfUrl} />
        </section>
      </div>
    </div>
  );
}
