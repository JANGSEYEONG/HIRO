'use client';

import MessageText from '@/components/common/MessageText';
import Spinner from '@/components/common/Spinner';
import ResumeCard from '@/components/resume/ResumeCard';
import { useGetAllResume } from '@/hooks/queries/useResumeService';
import { useEffect } from 'react';

interface AllResumeList {
  selectPdfUrl: (pdfUrl: string) => void;
  setFileCount: (count: number) => void;
}
const AllResumeList = ({ selectPdfUrl, setFileCount }: AllResumeList) => {
  const { data, isLoading, isError, isSuccess } = useGetAllResume();
  console.log(data);
  const testResume = [
    { resumeId: 'resume1', fileName: '이름입니다.pdf', fileSize: '33MB', selectPdfUrl },
    { resumeId: 'resume2', fileName: '이름입니다.pdf', fileSize: '33MB', selectPdfUrl },
  ];
  useEffect(() => {
    if (isSuccess && data) {
      setFileCount(data.length);
    }
  }, [data, isSuccess, setFileCount]);
  if (isError)
    return <MessageText className="mt-20" message="이력서를 불러오는 중 오류가 발생했습니다." />;
  if (isLoading) return <Spinner className="mt-20 w-full" />;
  if (data?.length === 0)
    return <MessageText className="mt-20" message="업로드한 이력서가 없습니다." />;
  return (
    <ul className="flex flex-col gap-y-4">
      {testResume.map((test) => (
        <ResumeCard key={test.resumeId} {...test} />
      ))}
    </ul>
  );
};

export default AllResumeList;
