import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BotMessage from '@/components/chatbot/BotMessage';
import MyMessage from '@/components/chatbot/MyMessage';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Find',
  };
}

export default function FindPage() {
  return (
    <div>
      이력서 찾기
      <div className="grid grid-cols-2 gap-4 p-4">
        <section>
          <div>
            <Tabs defaultValue="1" className="h-[80vh] w-full">
              <TabsList className="grid w-[250px] grid-cols-2">
                <TabsTrigger value="1">챗봇과 찾기</TabsTrigger>
                <TabsTrigger value="2">필터 & 정렬로 찾기</TabsTrigger>
              </TabsList>
              <TabsContent value="1" className="h-full w-full border p-4">
                <BotMessage message={'hello'}></BotMessage>
                <MyMessage message={'bye'}></MyMessage>
                <BotMessage
                  message={
                    'hello hello hello hello hellohellohellovhellohellohellohellohell'
                  }></BotMessage>
                <MyMessage message={'byebyebyebyebyebye'}></MyMessage>
              </TabsContent>
              <TabsContent value="2" className="h-full w-full border p-4">
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
