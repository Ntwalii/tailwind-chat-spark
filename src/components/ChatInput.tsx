
import React, { KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
  disabled = false,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border-t border-gray-200 p-4">
      <div className="flex items-end space-x-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={disabled ? "AI is typing..." : "Type your message..."}
            disabled={disabled}
            rows={1}
            className="w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm leading-relaxed"
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-full p-3 transition-all duration-200 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
