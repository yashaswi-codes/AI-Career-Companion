// ─── Stage 1: Category Quiz ───────────────────────────────
// 15 questions — identify user's best category
// Each option maps to one or more categories with scores

const CATEGORY_QUIZ = [
  {
    id: "cq1",
    question: "Which activity excites you the most?",
    options: [
      { label: "Building apps, websites or AI systems",        categories: { technology: 3, engineering: 1 }              },
      { label: "Designing creative visuals or experiences",    categories: { creative: 3, media: 1 }                      },
      { label: "Helping people with health or emotions",       categories: { healthcare: 3, education: 1 }                },
      { label: "Running a business or making money",          categories: { entrepreneurship: 3, business: 2, finance: 1 }},
    ],
  },
  {
    id: "cq2",
    question: "Which subject did you enjoy the most in school?",
    options: [
      { label: "Mathematics & Computer Science",               categories: { technology: 3, engineering: 2, finance: 1 }  },
      { label: "Biology & Chemistry",                          categories: { healthcare: 3, science: 3 }                  },
      { label: "Arts, Music & Literature",                     categories: { creative: 3, media: 2, education: 1 }        },
      { label: "Economics & Business Studies",                 categories: { business: 3, finance: 3, entrepreneurship: 2}},
    ],
  },
  {
    id: "cq3",
    question: "How do you prefer to spend your free time?",
    options: [
      { label: "Coding projects, gaming or tech exploration",  categories: { technology: 3, engineering: 1 }              },
      { label: "Creating content, art or photography",         categories: { creative: 3, media: 3 }                      },
      { label: "Volunteering, teaching or helping others",     categories: { education: 3, healthcare: 2, sustainability: 1}},
      { label: "Planning events, networking or business ideas",categories: { entrepreneurship: 3, events: 2, business: 2 }},
    ],
  },
  {
    id: "cq4",
    question: "What kind of work environment do you prefer?",
    options: [
      { label: "Remote office with computers and technology",  categories: { technology: 3, finance: 2, business: 1 }     },
      { label: "Creative studio or outdoor shoots",            categories: { creative: 3, media: 3 }                      },
      { label: "Hospital, lab or research center",             categories: { healthcare: 3, science: 3 }                  },
      { label: "Traveling, hotels or event venues",            categories: { hospitality: 3, events: 3, sports: 1 }       },
    ],
  },
  {
    id: "cq5",
    question: "What is your biggest strength?",
    options: [
      { label: "Logical thinking and problem solving",         categories: { technology: 3, engineering: 3, finance: 2 }  },
      { label: "Creativity and artistic expression",          categories: { creative: 3, media: 2 }                      },
      { label: "Empathy and helping people",                  categories: { healthcare: 3, education: 3, law: 1 }         },
      { label: "Leadership and taking initiative",            categories: { entrepreneurship: 3, business: 3, sports: 2 } },
    ],
  },
  {
    id: "cq6",
    question: "Which of these goals excites you most?",
    options: [
      { label: "Build the next big tech product or AI startup",categories: { technology: 3, entrepreneurship: 2 }         },
      { label: "Become a successful artist, designer or creator",categories: { creative: 3, media: 3 }                   },
      { label: "Save lives and improve public health",         categories: { healthcare: 3, science: 2 }                  },
      { label: "Build wealth and financial independence",      categories: { finance: 3, entrepreneurship: 3, business: 2}},
    ],
  },
  {
    id: "cq7",
    question: "How do you like to solve problems?",
    options: [
      { label: "Using data, logic and systematic analysis",    categories: { technology: 3, finance: 2, science: 2 }      },
      { label: "Through creative thinking and brainstorming",  categories: { creative: 3, entrepreneurship: 2, media: 2 } },
      { label: "By researching and following established methods",categories: { science: 3, law: 3, healthcare: 2 }       },
      { label: "Through people, teamwork and communication",   categories: { business: 3, education: 2, events: 2 }       },
    ],
  },
  {
    id: "cq8",
    question: "Which of these industries fascinates you?",
    options: [
      { label: "Tech, AI, Software & Cybersecurity",           categories: { technology: 3, engineering: 1 }              },
      { label: "Fashion, Film, Music & Entertainment",         categories: { creative: 3, media: 3 }                      },
      { label: "Healthcare, Pharma & Wellness",                categories: { healthcare: 3, science: 2 }                  },
      { label: "Finance, Banking & Investment",                categories: { finance: 3, business: 2, entrepreneurship: 1}},
    ],
  },
  {
    id: "cq9",
    question: "What motivates you the most at work?",
    options: [
      { label: "Building innovative things that scale",        categories: { technology: 3, entrepreneurship: 3 }         },
      { label: "Expressing creativity and making beautiful things",categories: { creative: 3, media: 2 }                  },
      { label: "Making a positive impact on people's lives",   categories: { healthcare: 2, education: 3, sustainability: 3}},
      { label: "Earning high income and financial security",   categories: { finance: 3, business: 2, law: 2 }            },
    ],
  },
  {
    id: "cq10",
    question: "Which type of content do you consume the most?",
    options: [
      { label: "Tech news, coding tutorials, AI videos",       categories: { technology: 3, engineering: 1 }              },
      { label: "Design inspiration, films, music or fashion",  categories: { creative: 3, media: 3 }                      },
      { label: "Health tips, science documentaries, nature",   categories: { healthcare: 2, science: 3, sustainability: 2}},
      { label: "Business podcasts, startup stories, finance",  categories: { business: 3, finance: 3, entrepreneurship: 3}},
    ],
  },
  {
    id: "cq11",
    question: "How important is physical activity in your career?",
    options: [
      { label: "I prefer desk job — minimal physical work",    categories: { technology: 2, finance: 2, business: 2 }     },
      { label: "Some physical work is fine",                   categories: { creative: 2, education: 2, events: 2 }       },
      { label: "I love active, hands-on work",                 categories: { healthcare: 2, sports: 3, engineering: 2 }   },
      { label: "I want to travel and be on the move",          categories: { hospitality: 3, sports: 2, events: 2 }       },
    ],
  },
  {
    id: "cq12",
    question: "Which skill would you most like to master?",
    options: [
      { label: "Programming, AI or Data Science",              categories: { technology: 3, engineering: 1 }              },
      { label: "Drawing, filming or music production",         categories: { creative: 3, media: 3 }                      },
      { label: "Public speaking, law or negotiation",          categories: { law: 3, business: 2, education: 2 }          },
      { label: "Investing, financial modeling or trading",     categories: { finance: 3, entrepreneurship: 2 }            },
    ],
  },
  {
    id: "cq13",
    question: "What kind of impact do you want to make?",
    options: [
      { label: "Technological innovation changing the world",  categories: { technology: 3, entrepreneurship: 2 }         },
      { label: "Environmental and climate positive impact",    categories: { sustainability: 3, science: 2, engineering: 1}},
      { label: "Social impact — education, health, equality",  categories: { education: 3, healthcare: 3, law: 2 }        },
      { label: "Economic impact — create jobs, build business",categories: { entrepreneurship: 3, business: 3, finance: 2}},
    ],
  },
  {
    id: "cq14",
    question: "Which work style suits you best?",
    options: [
      { label: "Independent, deep focused technical work",     categories: { technology: 3, science: 2, creative: 2 }     },
      { label: "Collaborative team projects and meetings",     categories: { business: 3, events: 2, education: 2 }       },
      { label: "Client-facing, customer service oriented",     categories: { hospitality: 3, law: 2, healthcare: 2 }      },
      { label: "Leadership, strategy and decision making",     categories: { entrepreneurship: 3, business: 3, sports: 2 }},
    ],
  },
  {
    id: "cq15",
    question: "Where do you see yourself in 10 years?",
    options: [
      { label: "CTO or AI researcher at a top tech company",   categories: { technology: 3, engineering: 2 }              },
      { label: "Famous creator, designer or artist",           categories: { creative: 3, media: 3 }                      },
      { label: "Running my own successful business or startup",categories: { entrepreneurship: 3, business: 2 }           },
      { label: "Making real difference in health, law or education",categories: { healthcare: 3, law: 3, education: 3, sustainability: 2}},
    ],
  },
];

// ── Calculate Category Scores ─────────────────────────────
const calculateCategoryScores = (answers) => {
  const scores = {};

  Object.entries(answers).forEach(([questionId, selectedIndex]) => {
    const question = CATEGORY_QUIZ.find((q) => q.id === questionId);
    if (!question) return;

    const selectedOption = question.options[selectedIndex];
    if (!selectedOption) return;

    Object.entries(selectedOption.categories).forEach(([category, score]) => {
      scores[category] = (scores[category] || 0) + score;
    });
  });

  return scores;
};

// ── Get Top Categories ────────────────────────────────────
const getTopCategories = (scores, topN = 3) => {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([category, score]) => ({
      category,
      score,
      percentage: Math.round((score / total) * 100),
    }));
};

module.exports = {
  CATEGORY_QUIZ,
  calculateCategoryScores,
  getTopCategories,
};
