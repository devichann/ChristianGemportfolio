"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Copy, ThumbsUp, ThumbsDown } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! 👋 I'm Christian Gem's AI version. Ask me anything about my skills, projects, or what I'm working on!",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    "What are your strengths?",
    "What are your weaknesses?",
    "Show me your projects",
    "What are your goals?",
    "How can I contact you?",
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (messageToSend: string = input) => {
    if (!messageToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      })

      const data = await response.json()

      if (response.ok) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.reply,
          sender: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      } else {
        const errorText = data.details || data.error || "Failed to load response"
        console.error("Chat error response:", data)
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Sorry, something went wrong. Please try again. (${errorText})`,
          sender: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't connect. Please try again.",
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const clearHistory = () => {
    setMessages([
      {
        id: "1",
        text: "Hey there! 👋 I'm Christian Gem's AI version. Ask me anything about my skills, projects, or what I'm working on!",
        sender: "assistant",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <>
      {/* Support Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 w-20 h-24 bg-gray-900 text-white shadow-lg hover:bg-black transition-colors flex flex-col items-center justify-center gap-1 z-40"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs font-semibold text-center">Support Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white flex flex-col z-50 border border-gray-300 shadow-xl rounded-lg overflow-hidden" style={{ height: "540px" }}>
          {/* Header */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-300 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-black">Digital Twin</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-white min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "assistant" && (
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" />
                    </svg>
                  </div>
                )}

                <div
                  className={`max-w-[200px] flex flex-col ${
                    message.sender === "user" ? "" : "gap-2"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-black border border-gray-300"
                    }`}
                  >
                    <p className="text-xs leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                  </div>

                  {message.sender === "assistant" && (
                    <div className="flex items-center gap-2 px-1">
                      <button
                        onClick={() => handleCopy(message.text, message.id)}
                        className="p-1 hover:bg-gray-200 transition-colors"
                        title="Copy"
                      >
                        <Copy className={`w-4 h-4 ${copiedId === message.id ? "text-green-600" : "text-gray-600"}`} />
                      </button>
                      <button className="p-1 hover:bg-gray-200 transition-colors" title="Like">
                        <ThumbsUp className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 transition-colors" title="Dislike">
                        <ThumbsDown className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" />
                  </svg>
                </div>
                <div className="bg-gray-100 px-4 py-3 border border-gray-300">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black animate-bounce"></div>
                    <div className="w-2 h-2 bg-black animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-black animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions — shown only on initial state, outside scroll area */}
          {messages.length === 1 && !isLoading && (
            <div className="px-3 py-2 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <p className="text-xs text-gray-500 font-medium mb-1.5">Quick questions:</p>
              <div className="grid grid-cols-2 gap-1">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-left text-xs px-2 py-1.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors rounded leading-tight"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-300 p-3 bg-white flex-shrink-0">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects, goals..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50 rounded"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-gray-500">
              Chat history saved locally •{" "}
              <button onClick={clearHistory} className="text-blue-600 hover:text-blue-800">
                Clear history
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
