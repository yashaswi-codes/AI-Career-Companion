const ChatInput = ({ input, setInput, onSend, isTyping }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-slate-100 dark:border-slate-700">
      <div className="flex gap-3 items-end">

        {/* Input */}
        <div className="flex-1">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about your career..."
            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
          />
        </div>

        {/* Send Button */}
        <button
          onClick={onSend}
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
  );
};

export default ChatInput;