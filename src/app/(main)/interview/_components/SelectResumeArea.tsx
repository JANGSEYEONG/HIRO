'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import InterviewLinkResumeCard from '@/components/resume/InterviewLinkResumeCard';
import { useGetAllResume } from '@/hooks/queries/useResumeService';
import AnalyzeSpinner from '@/components/common/spinner/AnalyzeSpinner';

const SelectResumeArea = () => {
  const { data, isLoading } = useGetAllResume();

  if (isLoading)
    return (
      <div className="h-full w-full flex-center">
        <AnalyzeSpinner />
      </div>
    );
  return (
    <ScrollArea className="mt-3 h-full pr-2">
      <ul className="grid flex-grow grid-cols-2 gap-4 overflow-hidden">
        {data?.map((resume) => <InterviewLinkResumeCard key={resume.resumeId} {...resume} />)}
      </ul>
      {/* <AllResumeList selectPdfUrl={selectPdfUrl} setFileCount={setFileCount} /> */}
    </ScrollArea>
  );
};
export default SelectResumeArea;
