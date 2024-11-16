'use client';
import ResumeCard from '@/components/resume/ResumeCard';
import { useGetAllResume } from '@/hooks/queries/useResumeService';
import { useFilterStore } from '@/stores/useFilterStore';
interface ResumeListProps {
  selectResume: (resumeId: string) => void;
}
const ResumeList = ({ selectResume }: ResumeListProps) => {
  const { data } = useGetAllResume();
  console.log('!!!', data);
  const { filteredResumes } = useFilterStore();
  const testResume = [
    { resumeId: 'resume1', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume2', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume3', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume4', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume5', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume6', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume7', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume8', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume9', fileName: '이름입니다.pdf', fileSize: '33MB' },
    { resumeId: 'resume10', fileName: '이름입니다.pdf', fileSize: '33MB' },
  ];
  return (
    <ul className="pd-4 flex flex-col gap-y-4">
      {filteredResumes.map(
        (test) => (
          console.log('test>>>>>', test),
          (
            // <ResumeCard key={test.resumeId} {...test} />
            <div>?</div>
          )
        ),
      )}
    </ul>
  );
};
