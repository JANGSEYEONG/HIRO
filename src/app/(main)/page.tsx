'use client';
import MessageText from '@/components/common/MessageText';
import ResumeCard from '@/components/resume/ResumeCard';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

export default function HomePage() {
  const [pdfUrl] = useState<string | null>(null);
  const testResume = [
    { resumeId: 'resume1', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume2', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume3', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume4', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume5', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume6', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume7', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume8', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume9', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume10', fileName: '이름입니다.pdf', fileSize: '33MB' },
  ];
  return (
    <div className="flex h-[calc(100vh-65px)] flex-col gap-y-3 p-4">
      <div className="flex items-end justify-between">
        <h2>현재 업로드한 파일 수: 100</h2>
        <Button>이력서 업로드 하기</Button>
      </div>
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <ul className="flex flex-col gap-y-4">
            {testResume.map((test) => (
              <ResumeCard key={test.resumeId} {...test} />
            ))}
          </ul>
        </ScrollArea>
        <section>
          <div className="h-full border flex-center">
            {pdfUrl ? (
              <object data={pdfUrl} type="application/pdf" className="h-screen w-full">
                <p>PDF를 표시할 수 없습니다.</p>
              </object>
            ) : (
              <MessageText message="미리보기할 이력서를 선택해 주세요." />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
