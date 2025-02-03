import React, { useState, useEffect, useRef } from "react"
import { MessageCircle, ThumbsUp, Heart, Smile, Star } from "lucide-react"
import "./Chat.css"

const YOUR_INFO = {
  name: "Andy Tambruino",
  github: "atamburino",
  threads: "tamburino.codes",
  email: "andy@tamburino.codes",
  company: "COX",
  initial: "Andy",
}

const getCurrentTimeMessage = () => {
  const hours = new Date().getHours()
  if (hours >= 5 && hours < 19) return "Have a nice day ☀️"
  if (hours >= 19 && hours < 22) return "Have a nice evening 🌅"
  return "Have a good night 🌙"
}

const messages = [
  "Hey there 👋",
  `I'm ${YOUR_INFO.name}`,
  "I create modern web experiences with React",
  `Currently working on exciting projects at ${YOUR_INFO.company}`,
  "You can find me on:",
  `→ GitHub: <a href="https://github.com/${YOUR_INFO.github}" target="_blank" rel="noopener noreferrer">@${YOUR_INFO.github}</a>`,
  `→ Threads: <a href="https://threads.com/${YOUR_INFO.threads}" target="_blank" rel="noopener noreferrer">@${YOUR_INFO.threads}</a>`,
  `Feel free to reach out at <a href="mailto:${YOUR_INFO.email}">${YOUR_INFO.email}</a>`,
  getCurrentTimeMessage(),
  `~ ${YOUR_INFO.initial}`,
]

const reactions = [
  { icon: ThumbsUp, label: "Like", color: "reaction-blue" },
  { icon: Heart, label: "Love", color: "reaction-red" },
  { icon: Star, label: "Star", color: "reaction-yellow" },
  { icon: Smile, label: "Smile", color: "reaction-green" },
]

const MessageBubble = ({ message, index }) => {
  const bubbleRef = useRef(null)
  const [showReactions, setShowReactions] = useState(false)
  const [messageReactions, setMessageReactions] = useState([])

  useEffect(() => {
    const element = bubbleRef.current
    element.style.transform = "translateX(-20px)"
    element.style.opacity = "0"

    requestAnimationFrame(() => {
      element.style.transition = "transform 800ms ease-out, opacity 800ms ease-out"
      element.style.transform = "translateX(0)"
      element.style.opacity = "1"
    })
  }, [])

  const handleReaction = (reaction) => {
    setMessageReactions((prev) => [...prev, reaction])
    setShowReactions(false)
  }

  return (
    <div className="message-bubble-container" ref={bubbleRef}>
      <div className="message-bubble" onDoubleClick={() => setShowReactions((prev) => !prev)}>
        <span className="message-text" dangerouslySetInnerHTML={{ __html: message }} />

        {messageReactions.length > 0 && (
          <div className="message-reactions">
            {messageReactions.map((reaction, i) => (
              <span key={i} className={`reaction-icon ${reaction.color}`}>
                <reaction.icon size={16} />
              </span>
            ))}
          </div>
        )}
      </div>

      {showReactions && (
        <div className="reactions-panel">
          {reactions.map((reaction, i) => (
            <button key={i} onClick={() => handleReaction(reaction)} className={`reaction-button ${reaction.color}`}>
              <reaction.icon size={20} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const TypingIndicator = () => (
  <div className="typing-indicator">
    <div className="typing-dot" />
    <div className="typing-dot" />
    <div className="typing-dot" />
  </div>
)

const Chat = ({ onComplete }) => {
  const [visibleMessages, setVisibleMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [showViewSiteButton, setShowViewSiteButton] = useState(false)
  const messagesEndRef = useRef(null)
  const headerRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const element = headerRef.current
    element.style.transform = "translateY(0)"
    element.style.opacity = "0"

    requestAnimationFrame(() => {
      element.style.transition = "opacity 800ms ease-out"
      element.style.opacity = "1"
    })

    scrollToBottom()
  }, [visibleMessages])

  useEffect(() => {
    const showMessage = async (index) => {
      if (index >= messages.length) {
        setShowViewSiteButton(true);
        return;
      }

      setIsTyping(true)

      const typingDelay = Math.min(messages[index].length * 50, 2000)
      await new Promise((resolve) => setTimeout(resolve, typingDelay))

      setVisibleMessages((prev) => [...prev, messages[index]])
      setIsTyping(false)

      const nextDelay = Math.random() * 500 + 700
      setTimeout(() => showMessage(index + 1), nextDelay)
    }

    showMessage(0)
  }, [])

  return (
    <div className="chat-container">
      <div ref={headerRef} className="chat-header">
        <MessageCircle size={24} />
        <span>Chat with {YOUR_INFO.name}</span>
        {/* Skip button commented out
        <button
          onClick={onComplete}
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.8rem',
            cursor: 'pointer',
            padding: '4px 8px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
        >
          Skip →
        </button>
        */}
      </div>

      <div className="messages-container">
        {visibleMessages.map((message, index) => (
          <MessageBubble key={index} message={message} index={index} />
        ))}

        {isTyping && <TypingIndicator />}
        
        {/* View site button commented out
        {showViewSiteButton && (
          <div className="view-site-button-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={onComplete}
              style={{
                padding: '12px 24px',
                fontSize: '1rem',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              View Full Site →
            </button>
          </div>
        )}
        */}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default Chat

