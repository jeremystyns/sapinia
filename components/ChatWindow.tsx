
import React, { useRef, useEffect } from 'react';
import { Message as MessageType } from '../types';
import Message from './Message';

interface ChatWindowProps {
  messages: MessageType[];
  isLoading: boolean;
}

const LoadingIndicator: React.FC = () => (
  <div className="flex items-start gap-3">
     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-200 text-green-800 flex items-center justify-center">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L5 12h3v10h8V12h3L12 2zm-2 16v-5h4v5h-4z"/>
        </svg>
     </div>
    <div className="p-4 max-w-lg bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-sm">SapinIA est en train d'écrire...</span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  </div>
);

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div ref={scrollRef} className="flex-1 p-6 space-y-6 overflow-y-auto">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
      {isLoading && <LoadingIndicator />}
    </div>
  );
};

export default ChatWindow;
