import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BotMessage from '@/components/chatbot/BotMessage';
import MyMessage from '@/components/chatbot/MyMessage';
import ChattingInput from '@/components/chatbot/ChattingInput';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Find',
  };
}

export default function FindPage() {
  return (
    <div>
      {/* <h2 className="pl-4 pt-4">이력서 찾기</h2> */}
      <div className="grid h-[calc(100vh-110px)] grid-cols-2 gap-4 p-4">
        <section className="h-full">
          <div>
            <Tabs defaultValue="1">
              <TabsList className="grid w-[250px] grid-cols-2">
                <TabsTrigger value="1">챗봇과 찾기</TabsTrigger>
                <TabsTrigger value="2">필터 & 정렬로 찾기</TabsTrigger>
              </TabsList>
              <TabsContent value="1" className="h-[calc(100vh-130px)] w-full border p-4">
                <div className="h-[calc(100vh-210px)]">
                  <ScrollArea className="h-full p-3 pr-2">
                    <BotMessage message={'hello'}></BotMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>
                    <MyMessage message={'bye'}></MyMessage>
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
              <TabsContent value="2" className="h-[calc(100vh-170px)] w-full border p-4">
                <div>서비스 준비중입니다</div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section>
          <div>2</div>
        </section>
      </div>
    </div>
  );
}
