'use client';

import MessageText from '@/components/common/MessageText';
import Spinner from '@/components/common/spinner/Spinner';
import ResumeCard from '@/components/resume/ResumeCard';
import { useGetAllResume } from '@/hooks/queries/useResumeService';
import { useEffect } from 'react';

interface AllResumeListProps {
  selectResume: (resumeId: string) => void;
  setFileCount: (count: number) => void;
}
const AllResumeList = ({ selectResume, setFileCount }: AllResumeListProps) => {
  const { data, isLoading, isError, isSuccess } = useGetAllResume();
  useEffect(() => {
    if (isSuccess && data) {
      setFileCount(data.length);
    }
  }, [data, isSuccess, setFileCount]);
  if (isError)
    return <MessageText className="mt-20" message="이력서를 불러오는 중 오류가 발생했습니다." />;
  if (isLoading) return <Spinner className="mt-20 w-full" />;
  if (!data || data?.length === 0)
    return <MessageText className="mt-20" message="업로드한 이력서가 없습니다." />;

  return (
    <ul className="flex flex-col gap-y-4">
      {data?.map((resume) => (
        <ResumeCard
          key={resume.resumeId}
          {...{
            ...resume,
            selectResume,
          }}
        />
      ))}
    </ul>
  );
};

export default AllResumeList;
