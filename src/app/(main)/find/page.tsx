import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BotMessage from '@/components/chatbot/BotMessage';
import MyMessage from '@/components/chatbot/MyMessage';
import ChattingInput from '@/components/chatbot/ChattingInput';
import ResumeFilter from './_components/ResumeFilter';
import ResumeList from './_components/ResumeList';
import ResumeCard from '@/components/resume/ResumeCard';
import ResumePreview from '@/components/resume/ResumePreview';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Find',
  };
}

export default function FindPage() {
  return (
    <div>
      <div className="grid h-[calc(100vh-110px)] grid-cols-2 gap-4 p-4">
        <section className="h-full">
          <div>
            <Tabs defaultValue="1">
              <TabsList className="grid w-[250px] grid-cols-2">
                <TabsTrigger value="1">챗봇과 찾기</TabsTrigger>
                <TabsTrigger value="2">필터로 찾기</TabsTrigger>
              </TabsList>
              <TabsContent value="1" className="h-[calc(100vh-130px)] w-full border p-4">
                <div className="h-[calc(100vh-210px)]">
                  <ScrollArea className="h-full p-3 pr-2">
                    <BotMessage message={'안녕하세요, 어떤 이력서를 찾아볼까요?'}></BotMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>

                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <BotMessage
                      message={
                        'hello hello hello hello hellohellohellovhellohellohellohellohell'
                      }></BotMessage>
                    <MyMessage message={'byebyebyebyebyebye'}></MyMessage>
                  </ScrollArea>
                </div>
                <ChattingInput></ChattingInput>
              </TabsContent>
              <TabsContent value="2" className="h-[calc(100vh-130px)] w-full border p-4">
                <div className="mb-2">업로드 된 이력서를 바탕으로 추출된 필터입니다.</div>
                <ResumeFilter />
                <div className="mb-3 mt-3 h-[calc(100vh-240px)]">
                  <ScrollArea className="h-full p-3 pr-2">
                    <ResumeList></ResumeList>
                    {/* <ul className="pd-4 flex flex-col gap-y-4">
                      {testResume.map((test) => (
                        <ResumeCard key={test.resumeId} {...test} />
                      ))}
                    </ul> */}
                  </ScrollArea>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section>
          <div className="mt-11 h-[calc(100vh-130px)] border">
            <ResumePreview></ResumePreview>
          </div>
        </section>
      </div>
    </div>
  );
}
