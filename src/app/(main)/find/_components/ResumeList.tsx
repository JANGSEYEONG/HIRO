'use client';
import ResumeCard from '@/components/resume/ResumeCard';
//import { useFilterStore } from '@/stores/useFilterStore';
export default function ResumeFilter() {
  //const { selectedJob, selectedExperience, selectedLanguage } = useFilterStore();
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
    <ul className="pd-4 flex flex-col gap-y-4">
      {testResume.map((test) => (
        <ResumeCard key={test.resumeId} {...test} />
      ))}
    </ul>
  );
}
