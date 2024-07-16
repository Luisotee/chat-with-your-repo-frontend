"use client";

import { useState } from "react";
import { Chatbar } from "./components/chatbar";
import { Sidebar } from "./components/sidebar";
import { MessageBubble } from "./components/message-bubble";

interface Message {
  content: string;
  isUser: boolean;
}

export interface Chat {
  id: number;
  name: string;
  model: string;
  repoUrl: string;
  messages: Message[];
}

export default function MainPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<number | null>(null);

  const handleNewChat = (model: string, repoUrl: string) => {
    const newChat: Chat = {
      id: Date.now(),
      name: `New Chat ${chats.length + 1}`,
      model,
      repoUrl,
      messages: [],
    };
    setChats([...chats, newChat]);
    setActiveChat(newChat.id);
  };

  const handleNewMessage = (content: string) => {
    if (activeChat === null) return;

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { content, isUser: true },
                { content: "This is a bot response", isUser: false },
              ],
            }
          : chat
      )
    );
  };

  const activeMessages =
    chats.find((chat) => chat.id === activeChat)?.messages || [];

  return (
    <div className="flex h-screen">
      <Sidebar
        onNewChat={handleNewChat}
        chats={chats}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />

      <div className="flex-1 flex flex-col bg-gray-800 md:max-w-[calc(100%-16rem)] md:ml-auto ">
        <main className="flex-1 overflow-auto p-4">
          {activeMessages.map((message, index) => (
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
