'use client';
import AnalyzeSpinner from '@/components/common/spinner/AnalyzeSpinner';
import ResumePreview from '@/components/resume/ResumePreview';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useGetInterview } from '@/hooks/queries/useInterviewService';

interface InterviewWrapperProps {
  resumeId: string;
}

const InterviewWrapper = ({ resumeId }: InterviewWrapperProps) => {
  const { data, isLoading } = useGetInterview({ resumeId });
  console.log(data);
  if (isLoading)
    return (
      <div className="h-full w-full flex-center">
        <AnalyzeSpinner />
      </div>
    );
  return (
    <div className="grid h-full flex-grow grid-cols-2 gap-4 overflow-hidden">
      <section className="flex flex-col gap-y-5">
        <Label className="headline4">면접 질문 리스트</Label>
        <ul className="flex flex-col gap-y-3">
          {data?.map(({ question_type, question }) => (
            <li key={question_type}>
              <Label className="body3">{question_type}</Label>
              <p>{question}</p>
              <Separator className="mt-3" />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ResumePreview resumeId={resumeId} />
      </section>
    </div>
  );
};

export default InterviewWrapper;
