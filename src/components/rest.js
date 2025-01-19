import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { MessageCircle, ThumbsUp, Heart, Smile, Star } from 'lucide-react';

const YOUR_INFO = {
  name: "Andy Tambruino",
  github: "atamburino",
  threads: "tamburino.codes",
  email: "Coming Soon",
  company: "n/a",
  initial: "AT"
};

const getCurrentTimeMessage = () => {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 19) return 'Have a nice day ☀️';
  if (hours >= 19 && hours < 22) return 'Have a nice evening 🌅';
  return 'Have a good night 🌙';
};

const messages = [
  'Hey there 👋',
  `I'm ${YOUR_INFO.name}`,
  'I create modern web experiences with React',
  `Currently working on exciting projects at ${YOUR_INFO.company}`,
  'You can find me on:',
  `→ GitHub: <a href="https://github.com/${YOUR_INFO.github}" target="_blank" rel="noopener noreferrer">@${YOUR_INFO.github}</a>`,
  `→ Threads: <a href="https://threads.com/${YOUR_INFO.threads}" target="_blank" rel="noopener noreferrer">@${YOUR_INFO.threads}</a>`,
  `Feel free to reach out at <a href="mailto:${YOUR_INFO.email}">${YOUR_INFO.email}</a>`,
  getCurrentTimeMessage(),
  `~ ${YOUR_INFO.initial}`
];

const reactions = [
  { icon: ThumbsUp, label: 'Like', color: 'text-blue-500' },
  { icon: Heart, label: 'Love', color: 'text-red-500' },
  { icon: Star, label: 'Star', color: 'text-yellow-500' },
  { icon: Smile, label: 'Smile', color: 'text-green-500' }
];

const MessageBubble = ({ message, index }) => {
  const [showReactions, setShowReactions] = useState(false);
  const [messageReactions, setMessageReactions] = useState([]);
  
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
    delay: index * 200
  });

  const handleReaction = (reaction) => {
    setMessageReactions(prev => [...prev, reaction]);
    setShowReactions(false);
  };

  return (
    <animated.div style={springProps} className="relative group mb-4">
      <div 
        className="max-w-full bg-gray-800 text-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300"
        onDoubleClick={() => setShowReactions(prev => !prev)}
      >
        <span 
          dangerouslySetInnerHTML={{ __html: message }}
        />
        
        {messageReactions.length > 0 && (
          <div className="flex gap-1 mt-2">
            {messageReactions.map((reaction, i) => (
              <span 
                key={i}
                className={`${reaction.color} bg-gray-700 p-1 rounded-full transform transition-transform duration-300`}
              >
                <reaction.icon size={16} />
              </span>
            ))}
          </div>
        )}
      </div>

      {showReactions && (
        <div className="absolute -top-12 left-0 bg-gray-700 rounded-full shadow-lg p-2 flex gap-2">
          {reactions.map((reaction, i) => (
            <button
              key={i}
              onClick={() => handleReaction(reaction)}
              className={`${reaction.color} hover:scale-125 transition-transform duration-200 p-2 rounded-full`}
            >
              <reaction.icon size={20} />
            </button>
          ))}
        </div>
      )}
    </animated.div>
  );
};

const TypingIndicator = () => (
  <div className="flex space-x-2 max-w-full bg-gray-800 rounded-lg p-3 shadow-sm mb-4">
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400" />
  </div>
);

const Chat = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages]);

  useEffect(() => {
    const showMessage = async (index) => {
      if (index >= messages.length) return;
      
      setIsTyping(true);
      
      const typingDelay = Math.min(messages[index].length * 50, 2000);
      await new Promise(resolve => setTimeout(resolve, typingDelay));
      
      setVisibleMessages(prev => [...prev, messages[index]]);
      setIsTyping(false);
      
      const nextDelay = Math.random() * 500 + 700;
      setTimeout(() => showMessage(index + 1), nextDelay);
    };

    showMessage(0);
  }, []);

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(-20px)' }
  });

  return (
    <div className="w-full min-h-screen bg-black text-white p-4 overflow-y-auto">
      <animated.div style={springProps} className="max-w-3xl mx-auto">
        {visibleMessages.map((message, index) => (
          <MessageBubble 
            key={index} 
            message={message} 
            index={index}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </animated.div>
    </div>
  );
};

export default Chat;

