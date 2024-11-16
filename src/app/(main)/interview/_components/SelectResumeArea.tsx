'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import InterviewLinkResumeCard from '@/components/resume/InterviewLinkResumeCard';

const SelectResumeArea = () => {
  const testResume = [
    {
      resumeId: '8d0c239f-2274-4a47-91c3-cb95b1b00275',
      fileName: '이름입니다.pdf',
      fileSize: '33MB',
    },
    {
      resumeId: 'cc672428-cbb8-4afe-91da-bafd803930e0',
      fileName: '이름입니다.pdf',
      fileSize: '33MB',
    },
    { resumeId: 'resume3', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume4', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume5', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume6', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume7', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume8', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume9', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume10', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume11', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume12', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume13', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume14', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume15', fileName: '이름입니다.pdf', fileSize: '33MB' },
  ];
  return (
    <ScrollArea className="mt-3 h-full pr-2">
      <ul className="grid flex-grow grid-cols-2 gap-4 overflow-hidden">
        {testResume.map((test) => (
          <InterviewLinkResumeCard key={test.resumeId} {...test} />
        ))}
      </ul>
      {/* <AllResumeList selectPdfUrl={selectPdfUrl} setFileCount={setFileCount} /> */}
    </ScrollArea>
  );
};
export default SelectResumeArea;
