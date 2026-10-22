const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  type = "button",
}) => {

  const base = `
    flex items-center justify-center gap-2 font-semibold
    px-6 py-3 rounded-xl transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed active:scale-95
    ${fullWidth ? "w-full" : ""}
  `;

  const variants = {
    primary:   "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost:     "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300",
    danger:    "bg-red-500 hover:bg-red-600 text-white",
    accent:    "bg-orange-500 hover:bg-orange-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;