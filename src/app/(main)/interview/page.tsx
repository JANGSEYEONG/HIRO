import { Label } from '@/components/ui/label';
import { Metadata } from 'next';

import SelectResumeArea from './_components/SelectResumeArea';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interview',
  };
}

export default function InterviewIndexPage() {
  return (
    <div className="flex h-[calc(100vh-65px)] flex-col gap-y-3 p-4">
      <div className="flex flex-shrink-0 items-end justify-between">
        <Label>면접 질문을 추출해볼 이력서를 선택해 주세요.</Label>
      </div>
      <SelectResumeArea />
    </div>
  );
}
