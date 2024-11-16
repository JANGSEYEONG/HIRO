'use client';
import ResumePreview from '@/components/resume/ResumePreview';

interface InterviewWrapperProps {
  resumeId: string;
}

const InterviewWrapper = ({ resumeId }: InterviewWrapperProps) => {
  return (
    <div className="grid h-full flex-grow grid-cols-2 gap-4 overflow-hidden">
      <section>챗봇</section>
      <section>
        <ResumePreview resumeId={resumeId} />
      </section>
    </div>
  );
};

export default InterviewWrapper;
