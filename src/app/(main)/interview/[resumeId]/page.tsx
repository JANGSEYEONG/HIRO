import { Metadata } from 'next';
import InterviewWrapper from './_components/InterviewWrapper';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interview',
  };
}

export default async function InterviewPage({ params }: { params: Promise<{ resumeId: string }> }) {
  const resumeId = (await params).resumeId;
  return (
    <div className="flex h-[calc(100vh-65px)] flex-col gap-y-3 p-4">
      <InterviewWrapper resumeId={resumeId} />
    </div>
  );
}
