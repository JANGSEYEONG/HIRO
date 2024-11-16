'use client';

import { TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BotMessage from '@/components/chatbot/BotMessage';
import MyMessage from '@/components/chatbot/MyMessage';
import ChattingInput, { type Chatting } from '@/components/chatbot/ChattingInput';
import { useState } from 'react';
import ResumeCard from '@/components/resume/ResumeCard';

interface FindWithChatbotProps {
  selectResume: (resumeId: string) => void;
}

const FindWithChatbot = ({ selectResume }: FindWithChatbotProps) => {
  console.log(selectResume);
  const [chat, setChat] = useState<Chatting[]>([
    {
      isBot: true,
      message: '안녕하세요, 찾고싶은 이력서 조건을 말씀해주세요!',
    },
  ]);
  const updateChat = (newChat: Chatting) => {
    setChat((prev) => [...prev, newChat]);
  };
  return (
    <TabsContent value="1" className="h-[calc(100vh-130px)] w-full border p-4">
      <div className="mobile5 h-[calc(100vh-210px)]">
        <ScrollArea className="h-full p-3 pr-2">
          <ul>
            {chat.map(({ isBot, message, resumes }, index) => (
              <li key={index}>
                {isBot ? (
                  <div>
                    <BotMessage message={message} />
                    <ul className="mx-5 mt-2">
                      {resumes?.map((resume) => (
                        <li key={resume.resumeId}>
                          <ResumeCard {...{ ...resume, selectResume }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <MyMessage message={message} />
                )}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
      <ChattingInput updateChat={updateChat}></ChattingInput>
    </TabsContent>
  );
};
export default FindWithChatbot;
