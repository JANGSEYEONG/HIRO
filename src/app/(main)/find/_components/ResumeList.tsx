'use client';
import ResumeCard from '@/components/resume/ResumeCard';
import { useGetAllResume } from '@/hooks/queries/useResumeService';
//import { useFilterStore } from '@/stores/useFilterStore';
interface ResumeListProps {
  selectResume: (resumeId: string) => void;
}
const ResumeList = ({ selectResume }: ResumeListProps) => {
  const { data } = useGetAllResume();
  console.log(data);
  //const { selectedJob, selectedExperience, selectedLanguage } = useFilterStore();
  const testResume = [
    {
      resumeId: '8d0c239f-2274-4a47-91c3-cb95b1b00275',
      fileName: '이름입니다.pdf',
      fileSize: '33MB',
      selectResume,
    },
    {
      resumeId: 'cc672428-cbb8-4afe-91da-bafd803930e0',
      fileName: '이름입니다.pdf',
      fileSize: '33MB',
      selectResume,
    },
    { resumeId: 'resume3', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume4', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume5', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume6', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume7', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume8', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume9', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
    { resumeId: 'resume10', fileName: '이름입니다.pdf', fileSize: '33MB', selectResume },
  ];
  return (
    <ul className="pd-4 flex flex-col gap-y-4">
      {testResume.map((test) => (
        <ResumeCard key={test.resumeId} {...test} />
      ))}
    </ul>
  );
};

export default ResumeList;
