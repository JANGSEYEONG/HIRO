'use client';
import ResumeCard from '@/components/resume/ResumeCard';
import { useFilterStore } from '@/stores/useFilterStore';
interface ResumeListProps {
  selectResume: (resumeId: string) => void;
}
const ResumeList = ({ selectResume }: ResumeListProps) => {
  const { filteredResumes } = useFilterStore();
  return (
    <ul className="pd-4 flex flex-col gap-y-4">
      {filteredResumes.map((resume) => (
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

export default ResumeList;
