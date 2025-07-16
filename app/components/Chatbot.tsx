'use client';

import { useState, type FC, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';
import { IoChatbubbleEllipses, IoClose, IoSend } from 'react-icons/io5';
import { BsRobot } from "react-icons/bs";

// 1. Define a type for our message objects for better TypeScript support
type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const Chatbot: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 2. Add state for the input field and the messages array
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi I\'m your personal assistent from XCAIRE, what can I help you in?', sender: 'bot' }
  ]);

  // Ref for the chat body to enable auto-scrolling
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // 3. Create the function to handle sending a message
  const handleSend = () => {
    if (input.trim() === '') return; // Don't send empty messages

    // Add the user's message and the bot's "working" response to the state
    const userMessage: Message = { text: input, sender: 'user' };
    const botWorkingMessage: Message = { text: 'hello im working on it...', sender: 'bot' };

    setMessages(prevMessages => [...prevMessages, userMessage, botWorkingMessage]);
    
    // Clear the input field
    setInput('');

    // TODO: Here you would typically call your AI or backend service.
    // After getting a real response, you would replace the "working" message.
  };
  
  // Bonus: Allow sending by pressing the "Enter" key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };


  if (isOpen) {
    return (
        <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
                <div className={styles.headerLeft}>
                    <BsRobot size={24} />
                    <span className={styles.headerTitle}>Assistant Chat</span>
                </div>
                <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                    <IoClose size={24} />
                </button>
            </div>

            {/* 4. Update the chat body to render messages dynamically */}
            <div className={styles.chatBody} ref={chatBodyRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* 5. Connect the input field and button to our state and handlers */}
            <div className={styles.chatInputContainer}>
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className={styles.chatInput}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button onClick={handleSend} className={styles.sendButton}>
                    <IoSend size={20} />
                </button>
            </div>
        </div>
    );
  }
  
  return (
    <button className={styles.chatToggleButton} onClick={() => setIsOpen(true)}>
      <IoChatbubbleEllipses size={24} />
      <span>Chat</span>
    </button>
  );
};

export default Chatbot;