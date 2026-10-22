const Card = ({
  children,
  className = "",
  hover = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-slate-800
        rounded-2xl shadow-md
        border border-slate-100 dark:border-slate-700
        p-6 transition-all duration-200
        ${hover ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;