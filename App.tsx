import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { initializeChat } from './services/geminiService';
import { Message, Sender } from './types';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import ResourceModal from './components/ResourceModal';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResourceModalOpen, setResourceModalOpen] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    chatSessionRef.current = initializeChat();
    setMessages([
      {
        id: 'init',
        text: 'Bonjour ! Je suis SapinIA, votre tuteur méthodologique pour la formation Sapin 2. Comment puis-je vous aider à structurer votre apprentissage ou à surmonter un blocage ?',
        sender: Sender.AI,
      },
    ]);
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!chatSessionRef.current) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: Sender.User,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const aiMessageId = (Date.now() + 1).toString();
    
    // Add a placeholder for the AI response
    setMessages((prev) => [
        ...prev,
        { id: aiMessageId, text: '', sender: Sender.AI },
    ]);
    
    try {
      const stream = await chatSessionRef.current.sendMessageStream({ message: text });
      let accumulatedText = "";

      for await (const chunk of stream) {
        accumulatedText += chunk.text;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId ? { ...msg, text: accumulatedText } : msg
          )
        );
      }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId ? { ...msg, text: "Désolé, une erreur est survenue. Veuillez réessayer." } : msg
          )
        );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gray-50 shadow-2xl rounded-lg my-4 border border-gray-200">
       <header className="p-4 border-b border-gray-200 bg-white rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2L5 12h3v10h8V12h3L12 2zm-2 16v-5h4v5h-4z"/>
                  </svg>
              </div>
              <div>
                  <h1 className="text-xl font-bold text-gray-800">SapinIA</h1>
                  <p className="text-sm text-gray-500">Tuteur Pédagogique - Conformité Sapin 2</p>
              </div>
          </div>
          <button
            onClick={() => setResourceModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
            aria-label="Ouvrir les ressources"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 005.5 16c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0014.5 16c1.255 0 2.443-.29 3.5.804v-10A7.968 7.968 0 0014.5 4z" />
            </svg>
            <span>Ressources</span>
          </button>
      </header>
      <ChatWindow messages={messages} isLoading={isLoading} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      <ResourceModal isOpen={isResourceModalOpen} onClose={() => setResourceModalOpen(false)} />
    </div>
  );
};

export default App;
