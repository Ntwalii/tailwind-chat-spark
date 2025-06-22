
import React from 'react';
import { Bot, Circle } from 'lucide-react';

export const ChatHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1">
            <Circle className="w-4 h-4 text-green-500 fill-current" />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">AI Assistant</h1>
          <p className="text-sm text-green-600 flex items-center">
            <Circle className="w-2 h-2 fill-current mr-1" />
            Online
          </p>
        </div>
      </div>
    </div>
  );
};
