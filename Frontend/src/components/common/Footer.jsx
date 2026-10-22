const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand Name */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-lg text-slate-700 dark:text-white">
              AI-Powered Career Companion
            </span>
            <span className="text-blue-500">✨</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
            Made with <span className="text-red-500">♥</span> for your career journey.
          </p>


          {/* Copyright */}
          <p className="text-sm text-slate-400">
            © 2026 AI Career Companion. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;