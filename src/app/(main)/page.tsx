import ResumeCard from '@/components/resume/ResumeCard';

export default function HomePage() {
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
    <div>
      현재 업로드한 파일 수 : 100 파일을 업로드해주세용
      <div className="grid grid-cols-2 gap-4 p-4">
        <section>
          {/* <ScrollArea className="bg-red-100"> */}
          <ul className="flex flex-col gap-y-4">
            {testResume.map((test) => (
              <ResumeCard key={test.resumeId} {...test} />
            ))}
          </ul>
          {/* </ScrollArea> */}
        </section>
        <section>여기가 미리보기 영역일거야</section>
      </div>
    </div>
  );
}
