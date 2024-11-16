'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import ResumePreview from '@/components/resume/ResumePreview';
import AllResumeList from './_components/AllResumeList';
import UploadResumeDialog from './_components/UploadResumeDialog';
import { Label } from '@/components/ui/label';

export default function HomePage() {
  const [resumeId, setResumeId] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const selectResume = (resumeId: string) => {
    setResumeId(resumeId);
  };
  const setFileCount = (count: number) => {
    setCount(count);
  };
  return (
    <div className="flex h-[calc(100vh-65px)] flex-col gap-y-3 p-4">
      <div className="flex flex-shrink-0 items-end justify-between">
        <Label>현재 업로드한 파일 수: {count}개</Label>
        <UploadResumeDialog>
          <Button variant="outline">이력서 업로드 하기</Button>
        </UploadResumeDialog>
      </div>
      <div className="grid flex-grow grid-cols-2 gap-4 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <AllResumeList selectResume={selectResume} setFileCount={setFileCount} />
        </ScrollArea>
        <section>
          <ResumePreview resumeId={resumeId} />
        </section>
      </div>
    </div>
  );
}
