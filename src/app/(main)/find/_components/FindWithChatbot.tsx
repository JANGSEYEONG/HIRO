import { TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BotMessage from '@/components/chatbot/BotMessage';
import MyMessage from '@/components/chatbot/MyMessage';
import ChattingInput from '@/components/chatbot/ChattingInput';

interface FindWithChatbotProps {
  selectResume: (resumeId: string) => void;
}

const FindWithChatbot = ({}: FindWithChatbotProps) => {
  return (
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
  );
};
export default FindWithChatbot;
