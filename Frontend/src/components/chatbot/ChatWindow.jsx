import { useRef } from "react";
import MessageBubble from "./MessageBubble";

const ChatWindow = ({ messages, isTyping, quickPrompts, onQuickPrompt }) => {
  const messagesEndRef = useRef(null);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md">
              🤖
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1 items-center h-4">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms"   }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      {quickPrompts && quickPrompts.length > 0 && (
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-700">
          <p className="text-xs text-slate-400 mb-2 font-medium">
            Quick Questions:
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => onQuickPrompt && onQuickPrompt(prompt)}
                className="shrink-0 text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 rounded-full transition-all duration-200 font-medium"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ChatWindow;