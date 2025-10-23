
import React from 'react';
import { Message as MessageType, Sender } from '../types';

interface MessageProps {
  message: MessageType;
}

const PineTreeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L5 12h3v10h8V12h3L12 2zm-2 16v-5h4v5h-4z"/>
    </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);


const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === Sender.User;

  const bubbleClasses = isUser
    ? 'bg-blue-600 text-white rounded-l-2xl rounded-tr-2xl'
    : 'bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl border border-gray-200';

  const containerClasses = `flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`;
  
  const formattedText = message.text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={containerClasses}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-200 text-blue-700' : 'bg-green-200 text-green-800'}`}>
        {isUser ? <UserIcon className="w-5 h-5" /> : <PineTreeIcon className="w-5 h-5" />}
      </div>
      <div className={`p-4 max-w-lg shadow-sm ${bubbleClasses}`}>
        <p className="text-sm">{formattedText}</p>
      </div>
    </div>
  );
};

export default Message;
