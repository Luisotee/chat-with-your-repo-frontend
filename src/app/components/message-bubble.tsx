import React from "react";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
}

export function MessageBubble({ content, isUser }: MessageBubbleProps) {
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 mx-4`}
    >
      <div
        className={`max-w-[75%] p-4 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
