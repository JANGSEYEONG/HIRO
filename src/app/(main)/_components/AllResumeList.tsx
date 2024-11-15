'use client';

import ResumeCard from '@/components/resume/ResumeCard';
import { resumeService } from '@/services/resumeService';
import type { Resume } from '@/types/resumeType';
import { useEffect, useState } from 'react';

interface AllResumeList {
  selectPdfUrl: (pdfUrl: string) => void;
}
const AllResumeList = ({ selectPdfUrl }: AllResumeList) => {
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const data = await resumeService.getAllResume();
        console.log('Fetched resumes:', data);
        setResumes(data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  useEffect(() => {
    console.log('Resumes state updated:', resumes);
  }, [resumes]);

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
