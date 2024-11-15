'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// import { useRouter } from 'next/navigation';
// import { useAuthStore } from '@/stores/authStore';
// import { ROUTES } from '@/constant/routes';

import ResumePreview from '@/components/resume/ResumePreview';
import AllResumeList from './_components/AllResumeList';
import UploadResumeDialog from './_components/UploadResumeDialog';

export default function HomePage() {
  // const router = useRouter();
  // const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const selectPdfUrl = (pdfUrl: string) => {
    setPdfUrl(pdfUrl);
  };

  // if (!isLoggedIn) router.push(ROUTES.LOGIN.PATH);

  return (
    <div className="flex h-[calc(100vh-65px)] flex-col gap-y-3 p-4">
      <div className="flex flex-shrink-0 items-end justify-between">
        <h2>현재 업로드한 파일 수: 100</h2>
        <UploadResumeDialog>
          <Button variant="outline">이력서 업로드 하기</Button>
        </UploadResumeDialog>
      </div>
      <div className="grid flex-grow grid-cols-2 gap-4 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <AllResumeList selectPdfUrl={selectPdfUrl} />
        </ScrollArea>
        <section>
          <ResumePreview pdfUrl={pdfUrl} />
        </section>
      </div>
    </div>
  );
}
