'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import FindWithFilter from './FindWithFilter';
import FindWithChatbot from './FindWithChatbot';
import ResumePreview from '@/components/resume/ResumePreview';

const FindWrapper = () => {
  const [resumeId, setResumeId] = useState<string | null>(null);
  const selectResume = (resumeId: string) => {
    setResumeId(resumeId);
  };
  return (
    <>
      <section className="h-full">
        <div>
          <Tabs defaultValue="1">
            <TabsList className="grid w-[250px] grid-cols-2">
              <TabsTrigger value="1">챗봇과 찾기</TabsTrigger>
              <TabsTrigger value="2">필터로 찾기</TabsTrigger>
            </TabsList>
            <FindWithChatbot selectResume={selectResume} />
            <FindWithFilter selectResume={selectResume} />
          </Tabs>
        </div>
      </section>
      <section>
        <div className="mt-11 h-[calc(100vh-130px)] border">
          <ResumePreview resumeId={resumeId} />
        </div>
      </section>
    </>
  );
};
export default FindWrapper;
