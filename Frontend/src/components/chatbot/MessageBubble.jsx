const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>

      {/* Avatar */}
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md ${
        isUser
          ? "bg-linear-to-br from-green-400 to-emerald-500"
          : "bg-linear-to-br from-blue-500 to-purple-600"
      }`}>
        {isUser ? "👤" : "🤖"}
      </div>

      {/* Bubble */}
      <div className={`max-w-[75%] flex flex-col gap-1 ${
        isUser ? "items-end" : "items-start"
      }`}>
        <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-tr-sm"
            : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white rounded-tl-sm"
        }`}>
          {message.text}
        </div>
        <span className="text-xs text-slate-400 px-1">
          {message.time}
        </span>
      </div>

    </div>
  );
};

export default MessageBubble;