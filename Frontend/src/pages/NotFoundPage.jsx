import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto animate-fadeIn">

        {/* 404 Text */}
        <div className="relative mb-6">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl md:text-8xl animate-bounce">
              🚀
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Oops! Lost in Space
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-500 font-semibold px-8 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-10">
          <p className="text-slate-400 text-sm mb-4">Or go to:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { path: "/quiz",      label: "Take Quiz",  emoji: "📝" },
              { path: "/dashboard", label: "Dashboard",  emoji: "📊" },
              { path: "/roadmap",   label: "Roadmap",    emoji: "🗺️" },
              { path: "/chatbot",   label: "AI Chatbot", emoji: "🤖" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-slate-600 dark:text-slate-300 hover:text-blue-500 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{link.emoji}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;