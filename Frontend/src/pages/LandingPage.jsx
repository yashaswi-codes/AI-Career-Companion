import { Link } from "react-router-dom";

const LandingPage = () => {

  const features = [
    {
      emoji: "🧠",
      title: "AI Career Analysis",
      description: "Advanced AI analyzes your personality, interests & skills to find your perfect career match.",
    },
    {
      emoji: "🗺️",
      title: "Personalized Roadmap",
      description: "Get a step-by-step learning roadmap tailored specifically for your chosen career path.",
    },
    {
      emoji: "📚",
      title: "Curated Resources",
      description: "Access the best YouTube channels, courses, docs & practice platforms for your career.",
    },
    {
      emoji: "🤖",
      title: "AI Study Buddy",
      description: "Your personal AI assistant to answer questions, motivate you & keep you on track.",
    },
    {
      emoji: "📅",
      title: "Smart Planner",
      description: "Daily & weekly study plans that adapt to your schedule and learning pace.",
    },
    {
      emoji: "🔥",
      title: "Streak Tracking",
      description: "Build consistency with streak tracking, progress monitoring & achievement badges.",
    },
  ];

  const stats = [
    { number: "50+",  label: "Career Paths"  },
    { number: "10K+", label: "Resources"     },
    { number: "95%",  label: "Success Rate"  },
    { number: "24/7", label: "AI Support"    },
  ];

  const steps = [
    { step: "01", title: "Take the Quiz",       description: "Answer 20 smart questions about your personality, interests & goals."          },
    { step: "02", title: "Get AI Analysis",     description: "Our AI analyzes your answers and recommends the best career matches."          },
    { step: "03", title: "Follow Your Roadmap", description: "Get a personalized roadmap with resources, tasks & milestones."               },
    { step: "04", title: "Track & Grow",        description: "Use the planner, chatbot & streak system to stay consistent."                 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">

        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400 rounded-full opacity-5 blur-3xl" />
        </div>

        {/* ✅ animate-fadeIn — no useEffect needed */}
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeIn">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
              AI-Powered Career Guidance
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Discover Your{" "}
            <span className="relative">
              <span className="bg-linear-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Dream Career
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 3 100 10 150 6C200 2 250 9 298 5" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#f97316"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            with AI
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take a smart quiz, get AI-powered career recommendations, and follow a personalized roadmap to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/quiz"
              className="group bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-2"
            >
              Start Free Quiz
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link
              to="/login"
              className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-500 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Login to Dashboard
            </Link>  
            <Link
              to="/browse-careers"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Browse Careers 🎯
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {["🧑", "👩", "👨", "🧑‍💻", "👩‍💼"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 ml-2">
              <span className="font-bold text-slate-700 dark:text-white">2,000+</span> students found their career path
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Section ─────────────────────────────────────── */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section ──────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              Everything You Need to
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              From career discovery to skill mastery — we've got every step covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="py-24 px-4 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              How It Works
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              4 simple steps to find and pursue your dream career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-blue-300 to-transparent z-0" />
                )}
                <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-black bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-linear-to-br from-blue-600 to-purple-700 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-5 rounded-full translate-y-20 -translate-x-20" />
            <div className="relative z-10">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Your Dream Career?
              </h2>
              <p className="text-blue-200 text-lg mb-8">
                Take our free 5-minute quiz and get personalized AI career recommendations instantly.
              </p>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Start Free Quiz →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;