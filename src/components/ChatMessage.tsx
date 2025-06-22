
import React from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from './ChatBot';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (message.isBot) {
    return (
      <div className="flex items-start space-x-3 animate-fade-in">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="max-w-xs lg:max-w-md">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-800 text-sm leading-relaxed">{message.text}</p>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-2">{formatTime(message.timestamp)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start space-x-3 justify-end animate-fade-in">
      <div className="max-w-xs lg:max-w-md">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-white text-sm leading-relaxed">{message.text}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1 mr-2 text-right">{formatTime(message.timestamp)}</p>
      </div>
      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
        <User className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};
