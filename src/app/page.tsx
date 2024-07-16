"use client";

import { useState } from "react";
import { Chatbar } from "./components/chatbar";
import { Sidebar } from "./components/sidebar";
import { MessageBubble } from "./components/message-bubble";

interface Message {
  content: string;
  isUser: boolean;
}

export default function MainPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleNewMessage = (content: string) => {
    setMessages([...messages, { content, isUser: true }]);
    // Here you would typically call your API to get the bot's response
    // For now, let's just add a mock response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: "This is a bot response", isUser: false },
      ]);
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-800 md:max-w-[calc(100%-16rem)] md:ml-auto ">
        <main className="flex-1 overflow-auto p-4">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              content={message.content}
              isUser={message.isUser}
            />
          ))}
        </main>
        <div className="w-full ">
          <Chatbar onSubmit={handleNewMessage} />
        </div>
      </div>
    </div>
  );
}
