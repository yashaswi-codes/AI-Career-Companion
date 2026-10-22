// ─── Quiz Questions Data ──────────────────────────────────────────────
const quizQuestions = [
  // ── Section 1: Personality (5 questions) ──────────────────────────
  {
    id: "p1",
    section: "personality",
    question: "When solving a problem, you prefer to:",
    options: [
      { label: "Analyze data and find patterns",     value: "analytical",  careers: ["Data Science & ML", "Business Analysis"] },
      { label: "Build or create something new",       value: "creative",    careers: ["UI/UX Design", "Software Development"] },
      { label: "Organize and plan step by step",      value: "organized",   careers: ["Product Management", "DevOps & Infrastructure"] },
      { label: "Communicate and collaborate",         value: "social",      careers: ["Digital Marketing", "Content Creation"] },
    ],
  },
  {
    id: "p2",
    section: "personality",
    question: "In a team project, you naturally take the role of:",
    options: [
      { label: "The one who writes the code/builds",  value: "builder",     careers: ["Software Development", "DevOps & Infrastructure"] },
      { label: "The one who designs the experience",  value: "designer",    careers: ["UI/UX Design", "Content Creation"] },
      { label: "The one who plans and coordinates",   value: "planner",     careers: ["Product Management", "Business Analysis"] },
      { label: "The one who presents and markets",    value: "marketer",    careers: ["Digital Marketing", "Content Creation"] },
    ],
  },
  {
    id: "p3",
    section: "personality",
    question: "You feel most productive when:",
    options: [
      { label: "Solving complex technical challenges",  value: "technical",  careers: ["Software Development", "Cybersecurity"] },
      { label: "Creating visual or written content",    value: "creative",   careers: ["UI/UX Design", "Content Creation"] },
      { label: "Analyzing reports and making decisions",value: "analytical", careers: ["Data Science & ML", "Business Analysis"] },
      { label: "Managing people and processes",         value: "managerial", careers: ["Product Management", "Digital Marketing"] },
    ],
  },
  {
    id: "p4",
    section: "personality",
    question: "Your biggest strength is:",
    options: [
      { label: "Logical thinking and problem solving", value: "logical",    careers: ["Software Development", "Data Science & ML"] },
      { label: "Creativity and aesthetic sense",       value: "creative",   careers: ["UI/UX Design", "Content Creation"] },
      { label: "Attention to detail and precision",    value: "detail",     careers: ["Cybersecurity", "DevOps & Infrastructure"] },
      { label: "Leadership and communication",         value: "leadership", careers: ["Product Management", "Digital Marketing"] },
    ],
  },
  {
    id: "p5",
    section: "personality",
    question: "You prefer working:",
    options: [
      { label: "Alone, with deep focus",               value: "solo",       careers: ["Software Development", "Data Science & ML"] },
      { label: "With a small creative team",           value: "small_team", careers: ["UI/UX Design", "Content Creation"] },
      { label: "In a structured environment",          value: "structured", careers: ["Business Analysis", "DevOps & Infrastructure"] },
      { label: "Across multiple teams and clients",    value: "cross_team", careers: ["Product Management", "Digital Marketing"] },
    ],
  },

  // ── Section 2: Interests (7 questions) ────────────────────────────
  {
    id: "i1",
    section: "interests",
    question: "Which activity excites you the most?",
    options: [
      { label: "Building apps or websites",            value: "coding",     careers: ["Software Development", "DevOps & Infrastructure"] },
      { label: "Finding insights from data",           value: "data",       careers: ["Data Science & ML", "Business Analysis"] },
      { label: "Designing user interfaces",            value: "design",     careers: ["UI/UX Design", "Content Creation"] },
      { label: "Protecting systems from hackers",      value: "security",   careers: ["Cybersecurity"] },
    ],
  },
  {
    id: "i2",
    section: "interests",
    question: "In your free time, you enjoy:",
    options: [
      { label: "Coding side projects",                 value: "coding",     careers: ["Software Development"] },
      { label: "Creating content on social media",     value: "content",    careers: ["Content Creation", "Digital Marketing"] },
      { label: "Reading about business & startups",    value: "business",   careers: ["Product Management", "Business Analysis"] },
      { label: "Experimenting with AI tools",          value: "ai",         careers: ["Data Science & ML", "AI/ML Engineering"] },
    ],
  },
  {
    id: "i3",
    section: "interests",
    question: "Which subject do you find most fascinating?",
    options: [
      { label: "Mathematics & Statistics",             value: "math",       careers: ["Data Science & ML", "Software Development"] },
      { label: "Psychology & User Behavior",           value: "psychology", careers: ["UI/UX Design", "Digital Marketing"] },
      { label: "Networks & Computer Systems",          value: "networks",   careers: ["Cybersecurity", "Cloud Computing"] },
      { label: "Business Strategy & Marketing",        value: "business",   careers: ["Product Management", "Digital Marketing"] },
    ],
  },
  {
    id: "i4",
    section: "interests",
    question: "Which type of problem do you love solving?",
    options: [
      { label: "Why is this software buggy?",          value: "debug",      careers: ["Software Development", "DevOps & Infrastructure"] },
      { label: "Why are users dropping off this page?",value: "ux",         careers: ["UI/UX Design", "Business Analysis"] },
      { label: "How can we grow our audience?",        value: "growth",     careers: ["Digital Marketing", "Content Creation"] },
      { label: "How do we secure this system?",        value: "security",   careers: ["Cybersecurity", "Cloud Computing"] },
    ],
  },
  {
    id: "i5",
    section: "interests",
    question: "Which technology interests you most?",
    options: [
      { label: "Artificial Intelligence & ML",         value: "ai",         careers: ["Data Science & ML"] },
      { label: "Cloud & DevOps",                       value: "cloud",      careers: ["Cloud Computing", "DevOps & Infrastructure"] },
      { label: "Web & Mobile Development",             value: "webdev",     careers: ["Software Development"] },
      { label: "Cybersecurity & Ethical Hacking",      value: "security",   careers: ["Cybersecurity"] },
    ],
  },
  {
    id: "i6",
    section: "interests",
    question: "What kind of output makes you proud?",
    options: [
      { label: "A working app or system",              value: "product",    careers: ["Software Development", "DevOps & Infrastructure"] },
      { label: "A beautiful, intuitive design",        value: "design",     careers: ["UI/UX Design"] },
      { label: "A viral post or campaign",             value: "content",    careers: ["Content Creation", "Digital Marketing"] },
      { label: "A data-driven business decision",      value: "data",       careers: ["Data Science & ML", "Business Analysis"] },
    ],
  },
  {
    id: "i7",
    section: "interests",
    question: "Your dream work environment is:",
    options: [
      { label: "Tech startup building cool products",  value: "startup",    careers: ["Software Development", "Product Management"] },
      { label: "Creative agency or media company",     value: "agency",     careers: ["UI/UX Design", "Content Creation"] },
      { label: "Data-driven company like Google",      value: "bigtech",    careers: ["Data Science & ML", "Cloud Computing"] },
      { label: "Cybersecurity firm or government",     value: "security",   careers: ["Cybersecurity"] },
    ],
  },

  // ── Section 3: Learning Style (4 questions) ───────────────────────
  {
    id: "l1",
    section: "learning_style",
    question: "You learn best by:",
    options: [
      { label: "Watching video tutorials",             value: "visual",      careers: [] },
      { label: "Reading docs and articles",            value: "reading",     careers: [] },
      { label: "Building real projects",               value: "kinesthetic", careers: [] },
      { label: "Listening to podcasts/lectures",       value: "auditory",    careers: [] },
    ],
  },
  {
    id: "l2",
    section: "learning_style",
    question: "When stuck, you prefer to:",
    options: [
      { label: "Watch a YouTube tutorial",               value: "visual",      careers: [] },
      { label: "Read Stack Overflow / documentation",    value: "reading",     careers: [] },
      { label: "Try different approaches until it works",value: "kinesthetic", careers: [] },
      { label: "Ask someone or join a community",        value: "auditory",    careers: [] },
    ],
  },
  {
    id: "l3",
    section: "learning_style",
    question: "How many hours a day can you dedicate to learning?",
    options: [
      { label: "Less than 1 hour",            value: "low",       careers: [] },
      { label: "1-2 hours",                   value: "medium",    careers: [] },
      { label: "3-4 hours",                   value: "high",      careers: [] },
      { label: "5+ hours (full commitment)",  value: "intensive", careers: [] },
    ],
  },
  {
    id: "l4",
    section: "learning_style",
    question: "You prefer learning resources that are:",
    options: [
      { label: "Free (YouTube, docs, blogs)",          value: "free",     careers: [] },
      { label: "Paid structured courses (Udemy, etc)", value: "paid",     careers: [] },
      { label: "Bootcamps & mentorship programs",      value: "bootcamp", careers: [] },
      { label: "Mix of everything",                    value: "mixed",    careers: [] },
    ],
  },

  // ── Section 4: Goals (4 questions) ────────────────────────────────
  {
    id: "g1",
    section: "goals",
    question: "Your primary career goal is:",
    options: [
      { label: "High salary & job security",            value: "stability",  careers: ["Software Development", "Cloud Computing", "Cybersecurity"] },
      { label: "Creative freedom & expression",         value: "creativity", careers: ["UI/UX Design", "Content Creation"] },
      { label: "Building products that impact millions",value: "impact",     careers: ["Product Management", "Software Development"] },
      { label: "Becoming a domain expert",              value: "expertise",  careers: ["Data Science & ML", "Cybersecurity"] },
    ],
  },
  {
    id: "g2",
    section: "goals",
    question: "Where do you see yourself in 5 years?",
    options: [
      { label: "Senior Engineer at a top tech company", value: "engineer",  careers: ["Software Development", "DevOps & Infrastructure"] },
      { label: "Running my own startup",                value: "founder",   careers: ["Product Management", "Software Development"] },
      { label: "Freelancing globally",                  value: "freelance", careers: ["UI/UX Design", "Digital Marketing", "Content Creation"] },
      { label: "Data or AI specialist",                 value: "ai_expert", careers: ["Data Science & ML"] },
    ],
  },
  {
    id: "g3",
    section: "goals",
    question: "Which earning model appeals most to you?",
    options: [
      { label: "Fixed salary at a company",         value: "salary",     careers: ["Software Development", "Business Analysis"] },
      { label: "Freelance / project-based income",  value: "freelance",  careers: ["UI/UX Design", "Digital Marketing"] },
      { label: "Build & sell digital products",     value: "products",   careers: ["Content Creation", "Software Development"] },
      { label: "Consulting & advisory work",        value: "consulting", careers: ["Business Analysis", "Product Management"] },
    ],
  },
  {
    id: "g4",
    section: "goals",
    question: "How important is work-life balance to you?",
    options: [
      { label: "Very important - I need boundaries", value: "balanced",  careers: ["UI/UX Design", "Digital Marketing"] },
      { label: "I can hustle hard for 2-3 years",    value: "hustle",    careers: ["Software Development", "Data Science & ML"] },
      { label: "I want flexible remote work",        value: "remote",    careers: ["Content Creation", "Cloud Computing"] },
      { label: "I thrive under pressure",            value: "pressure",  careers: ["Cybersecurity", "Product Management"] },
    ],
  },
];

// ─── Generate Quiz ────────────────────────────────────────────────────
const generateQuiz = () => {
  return quizQuestions;
};

// ─── Calculate Career Scores ──────────────────────────────────────────
const calculateScores = (answers) => {
  const scores = {};

  Object.entries(answers).forEach(([questionId, selectedValue]) => {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) return;

    const selectedOption = question.options.find(
      (opt) => opt.value === selectedValue
    );
    if (!selectedOption) return;

    selectedOption.careers.forEach((career) => {
      scores[career] = (scores[career] || 0) + 1;
    });
  });

  return scores;
};

// ─── Get Top Career Recommendations ──────────────────────────────────
const getTopCareers = (scores, topN = 3) => {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([career, score]) => ({
      career,
      score,
      percentage: Math.round(
        (score / Object.values(scores).reduce((a, b) => a + b, 0)) * 100
      ),
    }));
};

// ─── Get Learning Style ───────────────────────────────────────────────
const getLearningStyle = (answers) => {
  const styleCount = { visual: 0, reading: 0, kinesthetic: 0, auditory: 0 };
  const learningQIds = ["l1", "l2"];

  learningQIds.forEach((qId) => {
    const answer = answers[qId];
    if (answer && answer in styleCount) {
      styleCount[answer]++;
    }
  });

  return Object.entries(styleCount).sort((a, b) => b[1] - a[1])[0][0];
};

// ─── Module Exports ───────────────────────────────────────────────────
module.exports = {
  quizQuestions,
  generateQuiz,
  calculateScores,
  getTopCareers,
  getLearningStyle,
};