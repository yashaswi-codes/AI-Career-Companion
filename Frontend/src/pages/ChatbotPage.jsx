
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/$/, "");

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hi! I'm your AI Career Companion 🤖 I'm here to help you with career guidance, learning tips, and motivation. What would you like to know today?",
      time: "10:00 AM",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "What skills should I learn first?",
    "How long to become job ready?",
    "Best resources for React?",
    "How to build a portfolio?",
    "Tips for job interviews?",
    "How to stay consistent?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    const messageText = (text ?? input).trim();

    if (!messageText || isTyping) return;

    const token = localStorage.getItem("acc_token");

    if (!token) {
      setError("Please log in again to use the career chatbot.");
      return;
    }

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: messageText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Send previous conversation for follow-up context.
    const history = messages
      .filter((message) => message.id !== 1)
      .map(({ role, text }) => ({ role, text }));

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError("");
    setIsTyping(true);

    try {
      const response = await axios.post(
        `${API_URL}/chatbot/message`,
        {
          message: messageText,
          history,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("acc_token")}`,
          },
        }
      );

      const botMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: response.data.message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chatbot error:", err);

      const errorMessage =
        err.response?.status === 401
          ? "Your session may have expired. Please log in again."
          : err.response?.data?.message ||
            "Unable to get a response. Please try again.";

      setError(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    if (isTyping) return;

    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "Chat cleared! How can I help you today? 🤖",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setError("");
    setInput("");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🤖
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  AI Career Chatbot
                </h1>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Online — Ready to help
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={clearChat}
              disabled={isTyping}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-300 hover:text-red-500 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-50"
            >
              🗑️ Clear Chat
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden">
          <div className="h-125 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                    message.role === "assistant"
                      ? "bg-linear-to-br from-blue-500 to-purple-600 shadow-md"
                      : "bg-linear-to-br from-green-400 to-emerald-500 shadow-md"
                  }`}
                >
                  {message.role === "assistant" ? "🤖" : "👤"}
                </div>

                <div
                  className={`max-w-[75%] ${
                    message.role === "user"
                      ? "items-end"
                      : "items-start"
                  } flex flex-col gap-1`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap wrap-break-word ${
                      message.role === "assistant"
                        ? "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white rounded-tl-sm"
                        : "bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {message.text}
                  </div>

                  <span className="text-xs text-slate-400 px-1">
                    {message.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md">
                  🤖
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1 items-center h-4">
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-700">
            <p className="text-xs text-slate-400 mb-2 font-medium">
              Quick Questions:
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  disabled={isTyping}
                  className="shrink-0 text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 rounded-full transition-all duration-200 font-medium disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-700">
            {error && (
              <div className="mb-3 text-sm text-red-500 flex items-center justify-between gap-3">
                <span>{error}</span>
                <button
                  onClick={() => sendMessage(messages[messages.length - 1]?.role === "user"
                    ? messages[messages.length - 1].text
                    : input)}
                  disabled={isTyping || !messages.some((m) => m.role === "user")}
                  className="underline font-medium shrink-0 disabled:opacity-50"
                >
                  Retry
                </button>
              </div>
            )}

            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about your career..."
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>

              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {isTyping ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span className="text-lg">➤</span>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-400 text-center mt-2">
              Press Enter to send · Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
