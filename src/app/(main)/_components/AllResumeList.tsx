'use client';
import ResumeCard from '@/components/resume/ResumeCard';
import { useGetAllResume } from '@/hooks/queries/useResumeService';

interface AllResumeList {
  selectPdfUrl: (pdfUrl: string) => void;
}
const AllResumeList = ({ selectPdfUrl }: AllResumeList) => {
  const { data } = useGetAllResume();
  console.log(data);
  const testResume = [
    { resumeId: 'resume1', fileName: '이름입니다.pdf', fileSize: '33MB', selectPdfUrl },
    { resumeId: 'resume2', fileName: '이름입니다.pdf', fileSize: '33MB', selectPdfUrl },
  ];
  return (
    <ul className="flex flex-col gap-y-4">
      {testResume.map((test) => (
        <ResumeCard key={test.resumeId} {...test} />
      ))}
    </ul>
  );
};

export default AllResumeList;
