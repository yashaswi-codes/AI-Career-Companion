// ─── Stage 2: Career Quiz ─────────────────────────────────
// Category-specific questions to identify best career match
// Each option maps to specific careers with scores

export const CAREER_QUIZ = {

  // ── Technology & AI ──────────────────────────────────────
  technology: [
    {
      id: "tq1",
      question: "Which area of technology excites you most?",
      options: [
        { label: "Artificial Intelligence & Machine Learning",  careers: { "AI Engineer": 3, "ML Engineer": 3, "Data Scientist": 2 }                    },
        { label: "Web & Mobile App Development",                careers: { "Software Developer": 3, "Full Stack Developer": 3, "Mobile App Developer": 2 }},
        { label: "Cybersecurity & Ethical Hacking",             careers: { "Cybersecurity Engineer": 3 }                                                  },
        { label: "Cloud, DevOps & Infrastructure",              careers: { "Cloud Engineer": 3, "DevOps Engineer": 3 }                                    },
      ],
    },
    {
      id: "tq2",
      question: "What kind of problems do you love solving?",
      options: [
        { label: "Training AI models to think smarter",         careers: { "AI Engineer": 3, "ML Engineer": 3, "Prompt Engineer": 2 }                    },
        { label: "Building secure systems that can't be hacked",careers: { "Cybersecurity Engineer": 3 }                                                  },
        { label: "Creating apps that millions of people use",   careers: { "Software Developer": 3, "Full Stack Developer": 2, "Mobile App Developer": 2 }},
        { label: "Making infrastructure scalable and reliable", careers: { "Cloud Engineer": 3, "DevOps Engineer": 3 }                                    },
      ],
    },
    {
      id: "tq3",
      question: "Which programming language or tool appeals most?",
      options: [
        { label: "Python, TensorFlow, PyTorch",                 careers: { "AI Engineer": 3, "ML Engineer": 3, "Data Scientist": 2 }                    },
        { label: "JavaScript, React, Node.js",                  careers: { "Software Developer": 3, "Full Stack Developer": 3 }                           },
        { label: "Kali Linux, Metasploit, Wireshark",           careers: { "Cybersecurity Engineer": 3 }                                                  },
        { label: "Docker, Kubernetes, Terraform",               careers: { "Cloud Engineer": 3, "DevOps Engineer": 3 }                                    },
      ],
    },
    {
      id: "tq4",
      question: "What kind of projects would you build?",
      options: [
        { label: "AI chatbot or image recognition system",      careers: { "AI Engineer": 3, "ML Engineer": 2, "Prompt Engineer": 2 }                    },
        { label: "E-commerce website or social media app",      careers: { "Full Stack Developer": 3, "Software Developer": 2, "Mobile App Developer": 2 }},
        { label: "Decentralized finance or NFT marketplace",    careers: { "Blockchain Developer": 3 }                                                    },
        { label: "Immersive VR game or AR experience",          careers: { "AR/VR Developer": 3, "Game Developer": 2 }                                   },
      ],
    },
    {
      id: "tq5",
      question: "How do you feel about data and statistics?",
      options: [
        { label: "Love it — data tells the real story",         careers: { "Data Scientist": 3, "ML Engineer": 2, "AI Engineer": 2 }                     },
        { label: "I prefer building products over analyzing",   careers: { "Software Developer": 3, "Full Stack Developer": 2 }                           },
        { label: "I like using data to protect systems",        careers: { "Cybersecurity Engineer": 2, "QA Engineer": 2 }                               },
        { label: "I use data to optimize infrastructure",       careers: { "Cloud Engineer": 2, "DevOps Engineer": 2 }                                    },
      ],
    },
    {
      id: "tq6",
      question: "Which future tech trend excites you most?",
      options: [
        { label: "AGI — Artificial General Intelligence",       careers: { "AI Engineer": 3, "ML Engineer": 3, "Prompt Engineer": 2 }                    },
        { label: "Web3, Blockchain & Decentralization",         careers: { "Blockchain Developer": 3 }                                                    },
        { label: "Metaverse, AR & VR experiences",              careers: { "AR/VR Developer": 3, "Game Developer": 2 }                                   },
        { label: "IoT & Smart Connected Devices",               careers: { "IoT Engineer": 3 }                                                            },
      ],
    },
    {
      id: "tq7",
      question: "What is your preferred work style in tech?",
      options: [
        { label: "Research, experiment and innovate",           careers: { "AI Engineer": 3, "ML Engineer": 3, "Data Scientist": 2 }                     },
        { label: "Ship fast, iterate and build products",       careers: { "Software Developer": 3, "Full Stack Developer": 3 }                           },
        { label: "Automate, monitor and optimize systems",      careers: { "DevOps Engineer": 3, "Cloud Engineer": 2 }                                    },
        { label: "Test, find bugs and ensure quality",          careers: { "QA Engineer": 3 }                                                             },
      ],
    },
    {
      id: "tq8",
      question: "Where do you see yourself working?",
      options: [
        { label: "AI research lab like OpenAI or DeepMind",     careers: { "AI Engineer": 3, "ML Engineer": 3 }                                          },
        { label: "Tech startup building the next big product",  careers: { "Software Developer": 3, "Full Stack Developer": 2 }                           },
        { label: "Cybersecurity firm or government agency",     careers: { "Cybersecurity Engineer": 3 }                                                  },
        { label: "Cloud company like AWS, Azure or GCP",        careers: { "Cloud Engineer": 3, "DevOps Engineer": 2 }                                    },
      ],
    },
    {
      id: "tq9",
      question: "What device or platform interests you most?",
      options: [
        { label: "Mobile phones — iOS and Android apps",        careers: { "Mobile App Developer": 3 }                                                    },
        { label: "Gaming consoles and PC games",                careers: { "Game Developer": 3, "AR/VR Developer": 2 }                                   },
        { label: "Smart home and IoT devices",                  careers: { "IoT Engineer": 3 }                                                            },
        { label: "Web browsers and web applications",           careers: { "Full Stack Developer": 3, "Software Developer": 2 }                           },
      ],
    },
    {
      id: "tq10",
      question: "Which skill would you most like to develop?",
      options: [
        { label: "Crafting perfect prompts for AI models",      careers: { "Prompt Engineer": 3, "AI Engineer": 2 }                                      },
        { label: "Building and deploying ML pipelines",         careers: { "ML Engineer": 3, "AI Engineer": 2 }                                          },
        { label: "Writing smart contracts in Solidity",         careers: { "Blockchain Developer": 3 }                                                    },
        { label: "Penetration testing and ethical hacking",     careers: { "Cybersecurity Engineer": 3 }                                                  },
      ],
    },
  ],

  // ── Engineering ───────────────────────────────────────────
  engineering: [
    {
      id: "eq1",
      question: "Which branch of engineering interests you most?",
      options: [
        { label: "Civil — roads, bridges, buildings",           careers: { "Civil Engineer": 3 }                                                          },
        { label: "Mechanical — machines, engines, manufacturing",careers: { "Mechanical Engineer": 3, "Robotics Engineer": 2 }                            },
        { label: "Electrical — power systems, circuits, EVs",   careers: { "Electrical Engineer": 3 }                                                    },
        { label: "Chemical — processes, materials, pharma",     careers: { "Chemical Engineer": 3, "Petroleum Engineer": 1 }                              },
      ],
    },
    {
      id: "eq2",
      question: "Which project would you love to work on?",
      options: [
        { label: "Designing a smart city infrastructure",       careers: { "Civil Engineer": 3, "Environmental Engineer": 2 }                             },
        { label: "Building autonomous robots or drones",        careers: { "Robotics Engineer": 3, "Aerospace Engineer": 2 }                              },
        { label: "Developing electric vehicle systems",         careers: { "Electrical Engineer": 3, "Mechanical Engineer": 2 }                           },
        { label: "Launching a rocket or satellite",             careers: { "Aerospace Engineer": 3 }                                                      },
      ],
    },
    {
      id: "eq3",
      question: "What tools excite you most?",
      options: [
        { label: "AutoCAD, Revit — structural design",          careers: { "Civil Engineer": 3 }                                                          },
        { label: "SolidWorks, CATIA — mechanical design",       careers: { "Mechanical Engineer": 3 }                                                    },
        { label: "MATLAB, Simulink — simulation",               careers: { "Electrical Engineer": 3, "Mechanical Engineer": 2 }                           },
        { label: "ROS, Gazebo — robotics simulation",           careers: { "Robotics Engineer": 3 }                                                      },
      ],
    },
    {
      id: "eq4",
      question: "What kind of impact do you want to create?",
      options: [
        { label: "Build infrastructure for future cities",      careers: { "Civil Engineer": 3, "Environmental Engineer": 2 }                             },
        { label: "Create sustainable energy solutions",         careers: { "Environmental Engineer": 3, "Electrical Engineer": 2 }                        },
        { label: "Extract natural resources efficiently",       careers: { "Petroleum Engineer": 3, "Chemical Engineer": 2 }                              },
        { label: "Automate industries with robots",             careers: { "Robotics Engineer": 3, "Mechanical Engineer": 2 }                             },
      ],
    },
    {
      id: "eq5",
      question: "Which environment do you prefer working in?",
      options: [
        { label: "Construction sites and field work",           careers: { "Civil Engineer": 3, "Petroleum Engineer": 2 }                                 },
        { label: "Manufacturing plant or workshop",             careers: { "Mechanical Engineer": 3, "Chemical Engineer": 2 }                             },
        { label: "Research lab or simulation center",           careers: { "Robotics Engineer": 3, "Aerospace Engineer": 3 }                              },
        { label: "Power plant or renewable energy farm",        careers: { "Electrical Engineer": 3, "Environmental Engineer": 2 }                        },
      ],
    },
    {
      id: "eq6",
      question: "Which engineering challenge excites you?",
      options: [
        { label: "Making buildings earthquake proof",           careers: { "Civil Engineer": 3 }                                                          },
        { label: "Designing next-gen fighter jets",             careers: { "Aerospace Engineer": 3 }                                                      },
        { label: "Creating biodegradable materials",            careers: { "Chemical Engineer": 3, "Environmental Engineer": 2 }                          },
        { label: "Programming robots to think and move",        careers: { "Robotics Engineer": 3 }                                                       },
      ],
    },
    {
      id: "eq7",
      question: "How important is environmental impact in your work?",
      options: [
        { label: "Very important — I want green engineering",   careers: { "Environmental Engineer": 3 }                                                  },
        { label: "Important but not my primary focus",          careers: { "Civil Engineer": 2, "Mechanical Engineer": 2 }                               },
        { label: "I focus more on performance and efficiency",  careers: { "Aerospace Engineer": 3, "Electrical Engineer": 2 }                            },
        { label: "I work in extraction — oil, gas, chemicals",  careers: { "Petroleum Engineer": 3, "Chemical Engineer": 2 }                              },
      ],
    },
    {
      id: "eq8",
      question: "Which best describes your dream job?",
      options: [
        { label: "Working at NASA or SpaceX on space missions", careers: { "Aerospace Engineer": 3 }                                                      },
        { label: "Building smart factories and automation",     careers: { "Robotics Engineer": 3, "Mechanical Engineer": 2 }                             },
        { label: "Designing water treatment & sewage systems",  careers: { "Environmental Engineer": 3, "Civil Engineer": 2 }                             },
        { label: "Developing cutting-edge chip technology",     careers: { "Electrical Engineer": 3 }                                                     },
      ],
    },
    {
      id: "eq9",
      question: "Which skill do you want to master?",
      options: [
        { label: "Structural analysis and load calculations",   careers: { "Civil Engineer": 3 }                                                          },
        { label: "Thermodynamics and heat transfer",            careers: { "Mechanical Engineer": 3, "Chemical Engineer": 2 }                             },
        { label: "Control systems and power electronics",       careers: { "Electrical Engineer": 3 }                                                     },
        { label: "Reservoir engineering and drilling",          careers: { "Petroleum Engineer": 3 }                                                      },
      ],
    },
    {
      id: "eq10",
      question: "Which industry would you work in?",
      options: [
        { label: "Construction & Real Estate",                  careers: { "Civil Engineer": 3 }                                                          },
        { label: "Automobile & Manufacturing",                  careers: { "Mechanical Engineer": 3 }                                                    },
        { label: "Space & Defense",                             careers: { "Aerospace Engineer": 3 }                                                      },
        { label: "Oil, Gas & Energy",                           careers: { "Petroleum Engineer": 3, "Chemical Engineer": 2 }                              },
      ],
    },
  ],

  // ── Healthcare ────────────────────────────────────────────
  healthcare: [
    {
      id: "hq1",
      question: "Which healthcare role appeals to you most?",
      options: [
        { label: "Diagnosing and treating patients directly",   careers: { "Doctor (MBBS)": 3, "Dentist": 2 }                                            },
        { label: "Caring for patients day to day",             careers: { "Nurse": 3, "Physiotherapist": 2 }                                             },
        { label: "Researching diseases and developing cures",  careers: { "Research Scientist": 3, "Biotechnologist": 2 }                                },
        { label: "Using technology to improve healthcare",     careers: { "Healthcare IT Specialist": 3 }                                                 },
      ],
    },
    {
      id: "hq2",
      question: "What aspect of health interests you most?",
      options: [
        { label: "Mental health, emotions and psychology",      careers: { "Psychologist": 3 }                                                            },
        { label: "Physical recovery and rehabilitation",        careers: { "Physiotherapist": 3 }                                                         },
        { label: "Medicines, drugs and pharmacology",           careers: { "Pharmacist": 3 }                                                              },
        { label: "Nutrition, diet and wellness",                careers: { "Nutritionist": 3 }                                                            },
      ],
    },
    {
      id: "hq3",
      question: "How do you handle pressure and emergencies?",
      options: [
        { label: "Thrive — I want to be in the ER",            careers: { "Doctor (MBBS)": 3, "Nurse": 2 }                                              },
        { label: "Prefer planned and structured work",          careers: { "Pharmacist": 3, "Nutritionist": 2 }                                           },
        { label: "Like research more than clinical settings",   careers: { "Research Scientist": 3, "Healthcare IT Specialist": 2 }                       },
        { label: "Good under pressure but prefer rehabilitation",careers: { "Physiotherapist": 3, "Psychologist": 2 }                                    },
      ],
    },
    {
      id: "hq4",
      question: "How many years are you willing to study?",
      options: [
        { label: "10+ years — MBBS + MD + Specialization",     careers: { "Doctor (MBBS)": 3 }                                                           },
        { label: "5-6 years — Nursing or Allied Health",        careers: { "Nurse": 3, "Physiotherapist": 2 }                                            },
        { label: "4-5 years — Pharmacy or Nutrition",          careers: { "Pharmacist": 3, "Nutritionist": 2 }                                           },
        { label: "3-4 years + Tech skills",                    careers: { "Healthcare IT Specialist": 3 }                                                 },
      ],
    },
    {
      id: "hq5",
      question: "Where do you want to work?",
      options: [
        { label: "Hospital — wards, ICU, OT",                  careers: { "Doctor (MBBS)": 3, "Nurse": 3 }                                              },
        { label: "Dental clinic or oral health center",         careers: { "Dentist": 3 }                                                                 },
        { label: "Pharmacy or drug store",                      careers: { "Pharmacist": 3 }                                                              },
        { label: "Research lab or biotech company",             careers: { "Research Scientist": 3, "Biotechnologist": 3 }                                },
      ],
    },
    {
      id: "hq6",
      question: "Which healthcare challenge excites you?",
      options: [
        { label: "Developing cure for cancer or Alzheimer's",  careers: { "Research Scientist": 3, "Biotechnologist": 3 }                                },
        { label: "Making healthcare accessible through tech",   careers: { "Healthcare IT Specialist": 3 }                                                 },
        { label: "Helping athletes recover from injuries",      careers: { "Physiotherapist": 3 }                                                         },
        { label: "Improving mental health outcomes",            careers: { "Psychologist": 3 }                                                            },
      ],
    },
    {
      id: "hq7",
      question: "How do you feel about patient interaction?",
      options: [
        { label: "Love it — direct patient care is my calling", careers: { "Doctor (MBBS)": 3, "Nurse": 3, "Dentist": 2 }                               },
        { label: "Some interaction but more behind-the-scenes", careers: { "Pharmacist": 3, "Healthcare IT Specialist": 2 }                               },
        { label: "Deep one-on-one emotional support",           careers: { "Psychologist": 3 }                                                            },
        { label: "Hands-on physical treatment and recovery",    careers: { "Physiotherapist": 3 }                                                         },
      ],
    },
    {
      id: "hq8",
      question: "Which skill do you want to master?",
      options: [
        { label: "Diagnosis, surgery and clinical procedures",  careers: { "Doctor (MBBS)": 3 }                                                           },
        { label: "Drug formulation and patient counseling",     careers: { "Pharmacist": 3 }                                                              },
        { label: "CBT, therapy techniques and assessments",     careers: { "Psychologist": 3 }                                                            },
        { label: "EHR systems, HIPAA and health data",         careers: { "Healthcare IT Specialist": 3 }                                                 },
      ],
    },
    {
      id: "hq9",
      question: "What motivates you in healthcare?",
      options: [
        { label: "Saving lives in critical moments",            careers: { "Doctor (MBBS)": 3, "Nurse": 2 }                                              },
        { label: "Discovering new treatments through research", careers: { "Research Scientist": 3, "Biotechnologist": 2 }                                },
        { label: "Helping people feel better physically",       careers: { "Physiotherapist": 3, "Nutritionist": 2 }                                      },
        { label: "Supporting mental and emotional wellbeing",   careers: { "Psychologist": 3 }                                                            },
      ],
    },
    {
      id: "hq10",
      question: "Which healthcare sector do you prefer?",
      options: [
        { label: "Public health and government hospitals",      careers: { "Doctor (MBBS)": 3, "Nurse": 3 }                                              },
        { label: "Pharmaceutical and biotech companies",        careers: { "Pharmacist": 3, "Biotechnologist": 3 }                                        },
        { label: "Private clinics and specialized care",        careers: { "Dentist": 3, "Physiotherapist": 2 }                                           },
        { label: "Digital health startups and health tech",     careers: { "Healthcare IT Specialist": 3 }                                                 },
      ],
    },
  ],

  // ── Business ──────────────────────────────────────────────
  business: [
    {
      id: "bq1",
      question: "Which business role excites you most?",
      options: [
        { label: "Leading product strategy and vision",         careers: { "Product Manager": 3 }                                                         },
        { label: "Analyzing data to improve business",         careers: { "Business Analyst": 3 }                                                         },
        { label: "Managing people and culture",                 careers: { "HR Manager": 3 }                                                              },
        { label: "Overseeing daily operations and processes",   careers: { "Operations Manager": 3, "Supply Chain Manager": 2 }                           },
      ],
    },
    {
      id: "bq2",
      question: "What kind of decisions do you enjoy making?",
      options: [
        { label: "Product roadmap and feature prioritization",  careers: { "Product Manager": 3 }                                                         },
        { label: "Process improvement and efficiency gains",    careers: { "Operations Manager": 3, "Business Analyst": 2 }                               },
        { label: "Hiring, firing and team building",            careers: { "HR Manager": 3 }                                                              },
        { label: "Marketing campaigns and brand strategy",      careers: { "Marketing Manager": 3 }                                                       },
      ],
    },
    {
      id: "bq3",
      question: "Which tool do you enjoy using?",
      options: [
        { label: "Jira, Notion — product management",           careers: { "Product Manager": 3, "Project Manager": 2 }                                   },
        { label: "Excel, Tableau, SQL — data analysis",         careers: { "Business Analyst": 3 }                                                        },
        { label: "Workday, BambooHR — HR systems",              careers: { "HR Manager": 3 }                                                              },
        { label: "HubSpot, Google Analytics — marketing",       careers: { "Marketing Manager": 3 }                                                       },
      ],
    },
    {
      id: "bq4",
      question: "What type of problem do you love solving?",
      options: [
        { label: "Why is this product not getting users?",      careers: { "Product Manager": 3, "Marketing Manager": 2 }                                 },
        { label: "How can we cut costs and improve efficiency?", careers: { "Operations Manager": 3, "Business Analyst": 2 }                              },
        { label: "How do we attract and retain top talent?",    careers: { "HR Manager": 3 }                                                              },
        { label: "How do we deliver this project on time?",     careers: { "Project Manager": 3 }                                                         },
      ],
    },
    {
      id: "bq5",
      question: "Where do you see yourself in 5 years?",
      options: [
        { label: "VP of Product at a tech company",             careers: { "Product Manager": 3 }                                                         },
        { label: "Head of Operations at a Fortune 500",         careers: { "Operations Manager": 3 }                                                      },
        { label: "CHRO managing 10,000+ employees",             careers: { "HR Manager": 3 }                                                              },
        { label: "Partner at McKinsey or BCG",                  careers: { "Management Consultant": 3 }                                                   },
      ],
    },
    {
      id: "bq6",
      question: "What aspect of business fascinates you?",
      options: [
        { label: "User psychology and product-market fit",      careers: { "Product Manager": 3 }                                                         },
        { label: "Supply chain and logistics optimization",     careers: { "Supply Chain Manager": 3, "Operations Manager": 2 }                           },
        { label: "Brand building and customer acquisition",     careers: { "Marketing Manager": 3 }                                                       },
        { label: "Organizational design and culture",           careers: { "HR Manager": 3, "Management Consultant": 2 }                                  },
      ],
    },
    {
      id: "bq7",
      question: "How do you work best?",
      options: [
        { label: "Cross-functional teams — talking to everyone",careers: { "Product Manager": 3, "Project Manager": 3 }                                   },
        { label: "Deep data analysis and reports",              careers: { "Business Analyst": 3 }                                                        },
        { label: "People-focused — interviews and coaching",    careers: { "HR Manager": 3 }                                                              },
        { label: "Client facing — presenting and advising",     careers: { "Management Consultant": 3 }                                                   },
      ],
    },
    {
      id: "bq8",
      question: "Which industry would you work in?",
      options: [
        { label: "Tech startup or product company",             careers: { "Product Manager": 3 }                                                         },
        { label: "Consulting firm like McKinsey or Deloitte",   careers: { "Management Consultant": 3 }                                                   },
        { label: "Manufacturing, retail or e-commerce",         careers: { "Supply Chain Manager": 3, "Operations Manager": 2 }                           },
        { label: "Any company — HR is everywhere",              careers: { "HR Manager": 3 }                                                              },
      ],
    },
    {
      id: "bq9",
      question: "What skill do you want to master?",
      options: [
        { label: "Agile, Scrum and product frameworks",         careers: { "Product Manager": 3, "Project Manager": 2 }                                   },
        { label: "SQL, Power BI and business intelligence",     careers: { "Business Analyst": 3 }                                                        },
        { label: "Employer branding and talent acquisition",    careers: { "HR Manager": 3 }                                                              },
        { label: "Problem structuring and case frameworks",     careers: { "Management Consultant": 3 }                                                   },
      ],
    },
    {
      id: "bq10",
      question: "What motivates you most at work?",
      options: [
        { label: "Seeing users love the product I built",       careers: { "Product Manager": 3 }                                                         },
        { label: "Optimizing systems for maximum efficiency",   careers: { "Operations Manager": 3, "Business Analyst": 2 }                               },
        { label: "Building a great company culture",            careers: { "HR Manager": 3 }                                                              },
        { label: "Solving complex business problems for clients",careers: { "Management Consultant": 3 }                                                  },
      ],
    },
  ],

  // ── Finance ───────────────────────────────────────────────
  finance: [
    {
      id: "fq1",
      question: "Which finance role excites you most?",
      options: [
        { label: "Investment banking — M&A and IPOs",           careers: { "Investment Banker": 3 }                                                       },
        { label: "Trading stocks and making money from markets",careers: { "Stock Trader": 3 }                                                            },
        { label: "Accounting, auditing and taxation",           careers: { "Chartered Accountant": 3 }                                                    },
        { label: "Building financial technology products",      careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
    {
      id: "fq2",
      question: "What kind of analysis do you enjoy?",
      options: [
        { label: "Company valuation and DCF modeling",          careers: { "Investment Banker": 3, "Financial Analyst": 3 }                               },
        { label: "Technical chart analysis and market trends",  careers: { "Stock Trader": 3 }                                                            },
        { label: "Risk assessment and probability modeling",    careers: { "Risk Analyst": 3, "Actuary": 3 }                                              },
        { label: "Tax planning and compliance",                 careers: { "Chartered Accountant": 3 }                                                    },
      ],
    },
    {
      id: "fq3",
      question: "Which tool do you use or want to learn?",
      options: [
        { label: "Bloomberg Terminal and Excel modeling",        careers: { "Investment Banker": 3, "Financial Analyst": 3 }                              },
        { label: "TradingView, Zerodha and chart tools",        careers: { "Stock Trader": 3 }                                                            },
        { label: "Tally, SAP and accounting software",          careers: { "Chartered Accountant": 3 }                                                    },
        { label: "Stripe API, Python and payment systems",      careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
    {
      id: "fq4",
      question: "What type of financial decisions interest you?",
      options: [
        { label: "Should Company A acquire Company B?",         careers: { "Investment Banker": 3, "Financial Analyst": 2 }                               },
        { label: "Is this stock undervalued or overvalued?",    careers: { "Stock Trader": 3, "Financial Analyst": 2 }                                    },
        { label: "How do we minimize tax liability legally?",   careers: { "Chartered Accountant": 3 }                                                    },
        { label: "How do we assess credit risk of borrowers?",  careers: { "Risk Analyst": 3, "Insurance Specialist": 2 }                                },
      ],
    },
    {
      id: "fq5",
      question: "How do you handle uncertainty and risk?",
      options: [
        { label: "I thrive on it — high risk high reward",      careers: { "Stock Trader": 3, "Investment Banker": 2 }                                    },
        { label: "I quantify risk with models and math",        careers: { "Actuary": 3, "Risk Analyst": 3 }                                              },
        { label: "I prefer stable processes and compliance",    careers: { "Chartered Accountant": 3 }                                                    },
        { label: "I build tech systems to manage risk",         careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
    {
      id: "fq6",
      question: "Where do you want to work?",
      options: [
        { label: "Goldman Sachs, Morgan Stanley or JPMorgan",   careers: { "Investment Banker": 3 }                                                       },
        { label: "Hedge fund or proprietary trading firm",      careers: { "Stock Trader": 3 }                                                            },
        { label: "Big 4 accounting firm or own CA practice",    careers: { "Chartered Accountant": 3 }                                                    },
        { label: "Fintech startup like Razorpay or Stripe",     careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
    {
      id: "fq7",
      question: "Which certification would you pursue?",
      options: [
        { label: "CFA — Chartered Financial Analyst",           careers: { "Financial Analyst": 3, "Investment Banker": 2 }                               },
        { label: "CA — Chartered Accountant",                   careers: { "Chartered Accountant": 3 }                                                    },
        { label: "FRM — Financial Risk Manager",                careers: { "Risk Analyst": 3 }                                                            },
        { label: "Actuarial exams (SOA/IOA)",                   careers: { "Actuary": 3 }                                                                 },
      ],
    },
    {
      id: "fq8",
      question: "What motivates you in finance?",
      options: [
        { label: "Closing billion-dollar deals",                careers: { "Investment Banker": 3 }                                                       },
        { label: "Beating the market consistently",             careers: { "Stock Trader": 3 }                                                            },
        { label: "Helping clients plan their finances",         careers: { "Financial Analyst": 3, "Insurance Specialist": 2 }                            },
        { label: "Disrupting finance with technology",          careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
    {
      id: "fq9",
      question: "How mathematical are you?",
      options: [
        { label: "Very — I love stats, probability, calculus",  careers: { "Actuary": 3, "Risk Analyst": 3 }                                             },
        { label: "Moderately — Excel modeling and analysis",    careers: { "Financial Analyst": 3, "Investment Banker": 2 }                               },
        { label: "Basic — accounting and bookkeeping",          careers: { "Chartered Accountant": 3 }                                                    },
        { label: "Applied — coding algorithms and APIs",        careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
    {
      id: "fq10",
      question: "Which sector would you specialize in?",
      options: [
        { label: "Capital markets, IPOs and M&A",               careers: { "Investment Banker": 3 }                                                       },
        { label: "Insurance and pension fund management",        careers: { "Actuary": 3, "Insurance Specialist": 3 }                                     },
        { label: "Corporate finance and audit",                 careers: { "Chartered Accountant": 3 }                                                    },
        { label: "Payments, lending and digital banking",       careers: { "FinTech Developer": 3 }                                                       },
      ],
    },
  ],

  // ── Creative Arts & Design ────────────────────────────────
  creative: [
    {
      id: "crq1",
      question: "Which creative field excites you most?",
      options: [
        { label: "UI/UX — designing digital products and apps", careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Graphic design — logos, brands, posters",    careers: { "Graphic Designer": 3 }                                                         },
        { label: "Fashion — clothing, accessories, style",      careers: { "Fashion Designer": 3 }                                                        },
        { label: "Interior design — spaces and environments",   careers: { "Interior Designer": 3 }                                                       },
      ],
    },
    {
      id: "crq2",
      question: "What tools do you love or want to learn?",
      options: [
        { label: "Figma, Adobe XD, Sketch",                    careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Photoshop, Illustrator, Canva",              careers: { "Graphic Designer": 3 }                                                         },
        { label: "Maya, Blender, After Effects",               careers: { "Animator / VFX Artist": 3 }                                                   },
        { label: "Camera, Lightroom, Photoshop",               careers: { "Photographer": 3 }                                                             },
      ],
    },
    {
      id: "crq3",
      question: "What type of projects would you work on?",
      options: [
        { label: "Redesigning a mobile banking app",           careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Branding for a startup from scratch",        careers: { "Graphic Designer": 3 }                                                         },
        { label: "Designing a luxury fashion collection",      careers: { "Fashion Designer": 3 }                                                         },
        { label: "Designing a 5-star hotel lobby",             careers: { "Interior Designer": 3, "Architect": 2 }                                       },
      ],
    },
    {
      id: "crq4",
      question: "What inspires your creativity?",
      options: [
        { label: "User problems and human psychology",         careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Typography, color and visual aesthetics",    careers: { "Graphic Designer": 3, "Illustrator": 2 }                                      },
        { label: "Architecture, nature and spatial design",    careers: { "Architect": 3, "Interior Designer": 2 }                                       },
        { label: "Movies, animations and storytelling",        careers: { "Animator / VFX Artist": 3 }                                                   },
      ],
    },
    {
      id: "crq5",
      question: "What is your dream client or project?",
      options: [
        { label: "Redesigning Instagram or Spotify's UX",     careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Designing for Nike, Apple or Netflix",      careers: { "Graphic Designer": 3 }                                                         },
        { label: "Fashion show at Paris or Milan",            careers: { "Fashion Designer": 3 }                                                         },
        { label: "Iconic building like a museum or stadium",  careers: { "Architect": 3 }                                                                },
      ],
    },
    {
      id: "crq6",
      question: "How do you prefer to express creativity?",
      options: [
        { label: "Wireframes, prototypes and user flows",      careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Digital illustrations and artwork",          careers: { "Illustrator": 3, "Graphic Designer": 2 }                                      },
        { label: "Photography and visual storytelling",        careers: { "Photographer": 3 }                                                             },
        { label: "3D animation and motion graphics",           careers: { "Animator / VFX Artist": 3 }                                                   },
      ],
    },
    {
      id: "crq7",
      question: "Which output makes you proudest?",
      options: [
        { label: "An app where users say it's intuitive",      careers: { "UI/UX Designer": 3 }                                                          },
        { label: "A logo that defines a brand forever",        careers: { "Graphic Designer": 3 }                                                         },
        { label: "A dress worn on a red carpet",               careers: { "Fashion Designer": 3 }                                                         },
        { label: "A VFX scene in a blockbuster movie",         careers: { "Animator / VFX Artist": 3 }                                                   },
      ],
    },
    {
      id: "crq8",
      question: "Do you prefer 2D or 3D creative work?",
      options: [
        { label: "2D — flat design and illustrations",         careers: { "Graphic Designer": 3, "Illustrator": 2, "UI/UX Designer": 2 }                 },
        { label: "3D — models, renders and animations",        careers: { "Animator / VFX Artist": 3, "Architect": 2 }                                   },
        { label: "Physical — fabric, furniture, structures",   careers: { "Fashion Designer": 3, "Interior Designer": 3 }                                },
        { label: "Photography — capturing real moments",       careers: { "Photographer": 3 }                                                             },
      ],
    },
    {
      id: "crq9",
      question: "Where would you work?",
      options: [
        { label: "Tech company or product design agency",      careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Creative agency or as a freelancer",         careers: { "Graphic Designer": 3, "Illustrator": 2 }                                      },
        { label: "Fashion house or start own label",           careers: { "Fashion Designer": 3 }                                                         },
        { label: "Film studio or animation company",           careers: { "Animator / VFX Artist": 3 }                                                   },
      ],
    },
    {
      id: "crq10",
      question: "Which skill do you want to master?",
      options: [
        { label: "User research and usability testing",        careers: { "UI/UX Designer": 3 }                                                          },
        { label: "Pattern making and garment construction",    careers: { "Fashion Designer": 3 }                                                         },
        { label: "3D modeling and character rigging",          careers: { "Animator / VFX Artist": 3 }                                                   },
        { label: "Architectural drawing and rendering",        careers: { "Architect": 3 }                                                                },
      ],
    },
  ],

  // ── Media & Creator Economy ───────────────────────────────
  media: [
    {
      id: "mq1",
      question: "Which media role excites you most?",
      options: [
        { label: "YouTuber — create videos and build audience", careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Influencer — Instagram, TikTok, personal brand",careers: { "Social Media Influencer": 3 }                                              },
        { label: "Journalist — news, stories, reporting",       careers: { "Journalist": 3 }                                                              },
        { label: "Podcaster — audio content and interviews",    careers: { "Podcaster": 3 }                                                               },
      ],
    },
    {
      id: "mq2",
      question: "What kind of content do you create or want to?",
      options: [
        { label: "Educational videos or tutorials",             careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Lifestyle, fashion or travel posts",          careers: { "Social Media Influencer": 3 }                                                 },
        { label: "News articles or investigative reports",      careers: { "Journalist": 3 }                                                              },
        { label: "Brand copy — ads, emails, websites",          careers: { "Copywriter": 3 }                                                              },
      ],
    },
    {
      id: "mq3",
      question: "Which platform do you use most?",
      options: [
        { label: "YouTube — long form video content",           careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Instagram/TikTok — short form reels",         careers: { "Social Media Influencer": 3 }                                                 },
        { label: "Spotify/Apple Podcasts — audio",              careers: { "Podcaster": 3 }                                                               },
        { label: "Google — SEO-driven blogs and articles",      careers: { "SEO Specialist": 3, "Copywriter": 2 }                                         },
      ],
    },
    {
      id: "mq4",
      question: "What drives you to create content?",
      options: [
        { label: "Teaching and educating people",               careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Building a personal brand and community",     careers: { "Social Media Influencer": 3 }                                                 },
        { label: "Reporting truth and holding power accountable",careers: { "Journalist": 3 }                                                             },
        { label: "Promoting brands and products creatively",    careers: { "PR Specialist": 3, "Copywriter": 2 }                                          },
      ],
    },
    {
      id: "mq5",
      question: "Which skill do you want to master?",
      options: [
        { label: "Video editing and thumbnail design",          careers: { "YouTuber / Content Creator": 3, "Video Editor": 2 }                           },
        { label: "Reels, hashtags and audience growth hacks",   careers: { "Social Media Influencer": 3 }                                                 },
        { label: "SEO, keyword research and ranking articles",  careers: { "SEO Specialist": 3 }                                                          },
        { label: "Persuasive writing and copywriting formulas", careers: { "Copywriter": 3 }                                                              },
      ],
    },
    {
      id: "mq6",
      question: "What is your monetization goal?",
      options: [
        { label: "AdSense and sponsorships on YouTube",         careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Brand deals and affiliate marketing",         careers: { "Social Media Influencer": 3 }                                                 },
        { label: "Salary at a media house or newspaper",        careers: { "Journalist": 3 }                                                              },
        { label: "Freelance clients or agency job",             careers: { "Copywriter": 3, "SEO Specialist": 2 }                                         },
      ],
    },
    {
      id: "mq7",
      question: "Which output makes you proudest?",
      options: [
        { label: "A video with 1 million views",                careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "100K followers on Instagram",                 careers: { "Social Media Influencer": 3 }                                                 },
        { label: "A viral article that changed public opinion",  careers: { "Journalist": 3 }                                                             },
        { label: "A perfectly edited short film",               careers: { "Video Editor": 3 }                                                            },
      ],
    },
    {
      id: "mq8",
      question: "How do you handle criticism of your work?",
      options: [
        { label: "I use it to improve my content quality",      careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "I focus on engagement and what works",        careers: { "Social Media Influencer": 3 }                                                 },
        { label: "I fact-check and defend my reporting",        careers: { "Journalist": 3 }                                                              },
        { label: "I refine my copy based on A/B testing",       careers: { "Copywriter": 3 }                                                              },
      ],
    },
    {
      id: "mq9",
      question: "Which tool would you invest in?",
      options: [
        { label: "Camera, mic, lights for YouTube studio",      careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Ring light, tripod for Instagram content",    careers: { "Social Media Influencer": 3 }                                                 },
        { label: "Premium mic and recording software",          careers: { "Podcaster": 3 }                                                               },
        { label: "Premiere Pro, DaVinci for editing",           careers: { "Video Editor": 3 }                                                            },
      ],
    },
    {
      id: "mq10",
      question: "Which media niche would you focus on?",
      options: [
        { label: "Tech, science or education content",          careers: { "YouTuber / Content Creator": 3 }                                              },
        { label: "Fashion, beauty or lifestyle",                careers: { "Social Media Influencer": 3 }                                                 },
        { label: "Business, finance or entrepreneurship",       careers: { "Podcaster": 3, "Copywriter": 2 }                                              },
        { label: "Brand reputation and crisis management",      careers: { "PR Specialist": 3 }                                                           },
      ],
    },
  ],

  // ── Hospitality & Tourism ─────────────────────────────────
  hospitality: [
    {
      id: "hoq1",
      question: "Which hospitality role excites you?",
      options: [
        { label: "Managing a 5-star hotel",                     careers: { "Hotel Manager": 3 }                                                           },
        { label: "Planning dream vacations for clients",        careers: { "Travel Consultant": 3 }                                                       },
        { label: "Creating incredible dining experiences",      careers: { "Chef": 3 }                                                                    },
        { label: "Flying as an airline pilot",                  careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq2",
      question: "What kind of guest experience do you want to create?",
      options: [
        { label: "Luxury resort with world-class amenities",    careers: { "Resort Manager": 3, "Hotel Manager": 2 }                                      },
        { label: "Unforgettable culinary journey",              careers: { "Chef": 3 }                                                                    },
        { label: "Perfect guided tour experience",              careers: { "Tour Guide": 3 }                                                              },
        { label: "Smooth and memorable travel experience",      careers: { "Travel Consultant": 3, "Airline Pilot": 2 }                                   },
      ],
    },
    {
      id: "hoq3",
      question: "Where would you love to work?",
      options: [
        { label: "Taj, Marriott or Hilton hotel",               careers: { "Hotel Manager": 3 }                                                           },
        { label: "Travel agency or tour operator",              careers: { "Travel Consultant": 3 }                                                       },
        { label: "Michelin-star restaurant kitchen",            careers: { "Chef": 3 }                                                                    },
        { label: "International airline cockpit",               careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq4",
      question: "What motivates you in hospitality?",
      options: [
        { label: "Creating memories that guests never forget",  careers: { "Hotel Manager": 3, "Resort Manager": 2 }                                      },
        { label: "Exploring the world and different cultures",  careers: { "Travel Consultant": 3, "Tour Guide": 2 }                                      },
        { label: "Mastering culinary arts and new cuisines",    careers: { "Chef": 3 }                                                                    },
        { label: "Operating complex aircraft with precision",   careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq5",
      question: "Which skill do you want to master?",
      options: [
        { label: "Revenue management and hotel operations",     careers: { "Hotel Manager": 3 }                                                           },
        { label: "GDS systems and destination knowledge",       careers: { "Travel Consultant": 3 }                                                       },
        { label: "Culinary techniques and menu planning",       careers: { "Chef": 3 }                                                                    },
        { label: "Flight navigation and aircraft systems",      careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq6",
      question: "How do you handle difficult guests or situations?",
      options: [
        { label: "Professionally resolve any complaint quickly",careers: { "Hotel Manager": 3, "Resort Manager": 2 }                                      },
        { label: "Find alternative travel solutions fast",      careers: { "Travel Consultant": 3 }                                                       },
        { label: "Stay calm and maintain food quality always",  careers: { "Chef": 3 }                                                                    },
        { label: "Follow emergency protocols with precision",   careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq7",
      question: "What is your dream destination to work in?",
      options: [
        { label: "Dubai — luxury hotels and mega resorts",      careers: { "Hotel Manager": 3, "Resort Manager": 3 }                                      },
        { label: "Switzerland — mountain tourism",              careers: { "Travel Consultant": 3, "Tour Guide": 2 }                                      },
        { label: "France or Japan — culinary capital",          careers: { "Chef": 3 }                                                                    },
        { label: "International routes — global airline",       careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq8",
      question: "How important is travel to you?",
      options: [
        { label: "I want to travel the world for work",         careers: { "Airline Pilot": 3, "Travel Consultant": 2 }                                   },
        { label: "I prefer one great location with luxury",     careers: { "Hotel Manager": 3, "Resort Manager": 3 }                                      },
        { label: "I want to explore local culture and history", careers: { "Tour Guide": 3 }                                                              },
        { label: "Travel is part of research for my cooking",   careers: { "Chef": 3 }                                                                    },
      ],
    },
    {
      id: "hoq9",
      question: "What would you study for your career?",
      options: [
        { label: "Hotel Management from IHM or Oberoi STEP",   careers: { "Hotel Manager": 3, "Resort Manager": 2 }                                      },
        { label: "IATA certification and travel management",    careers: { "Travel Consultant": 3 }                                                       },
        { label: "Culinary arts from Le Cordon Bleu",           careers: { "Chef": 3 }                                                                    },
        { label: "CPL and ATPL — pilot license",                careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
    {
      id: "hoq10",
      question: "Which aspect of service is most important to you?",
      options: [
        { label: "Flawless execution of every detail",         careers: { "Hotel Manager": 3 }                                                           },
        { label: "Personalized and unique experiences",        careers: { "Travel Consultant": 3, "Tour Guide": 2 }                                      },
        { label: "Creative innovation in food and flavor",     careers: { "Chef": 3 }                                                                    },
        { label: "Safety, precision and technical excellence", careers: { "Airline Pilot": 3 }                                                           },
      ],
    },
  ],

  // ── Event Management ──────────────────────────────────────
  events: [
    {
      id: "evq1",
      question: "Which type of event excites you most?",
      options: [
        { label: "Corporate conferences and product launches",  careers: { "Corporate Event Manager": 3 }                                                 },
        { label: "Dream weddings and social celebrations",      careers: { "Wedding Planner": 3 }                                                         },
        { label: "Music concerts and entertainment festivals",  careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Sports tournaments and athletic events",      careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq2",
      question: "What is your event planning superpower?",
      options: [
        { label: "Vendor negotiation and cost management",      careers: { "Event Planner": 3, "Corporate Event Manager": 2 }                             },
        { label: "Creative decoration and theme design",        careers: { "Wedding Planner": 3 }                                                         },
        { label: "Stage production and artist management",      careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Logistics and crowd management",              careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq3",
      question: "How do you handle last-minute problems?",
      options: [
        { label: "Stay calm and execute backup plans",          careers: { "Event Planner": 3 }                                                           },
        { label: "Emotionally support while fixing the issue",  careers: { "Wedding Planner": 3 }                                                         },
        { label: "Coordinate with technical teams quickly",     careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Coordinate with security and authorities",    careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq4",
      question: "What is your ideal event size?",
      options: [
        { label: "Intimate 50-200 person corporate event",      careers: { "Corporate Event Manager": 3 }                                                 },
        { label: "100-300 person wedding or celebration",       careers: { "Wedding Planner": 3 }                                                         },
        { label: "10,000+ person music festival",               careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "50,000+ person sports stadium event",         careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq5",
      question: "Which tool do you use for events?",
      options: [
        { label: "Cvent, Asana and project management tools",   careers: { "Corporate Event Manager": 3, "Event Planner": 2 }                             },
        { label: "Aisle Planner, Pinterest and mood boards",    careers: { "Wedding Planner": 3 }                                                         },
        { label: "Eventbrite and box office software",          careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Sports management and ticketing software",    careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq6",
      question: "What motivates you in event management?",
      options: [
        { label: "Making business events run flawlessly",       careers: { "Corporate Event Manager": 3 }                                                 },
        { label: "Creating the perfect day for couples",        careers: { "Wedding Planner": 3 }                                                         },
        { label: "Giving fans unforgettable live experiences",  careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Bringing sports communities together",        careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq7",
      question: "Which client would you most want to work with?",
      options: [
        { label: "A Fortune 500 company annual conference",     careers: { "Corporate Event Manager": 3 }                                                 },
        { label: "A Bollywood celebrity wedding",               careers: { "Wedding Planner": 3 }                                                         },
        { label: "A Coldplay or AR Rahman concert",             careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "IPL or Olympics organizing committee",        careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq8",
      question: "What is your biggest strength?",
      options: [
        { label: "Budgeting and stakeholder management",        careers: { "Corporate Event Manager": 3, "Event Planner": 2 }                             },
        { label: "Creativity and attention to detail",          careers: { "Wedding Planner": 3 }                                                         },
        { label: "Artist relations and production management",  careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Security, safety and crowd control",          careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq9",
      question: "Where do you see yourself in 5 years?",
      options: [
        { label: "Running a corporate event management firm",   careers: { "Corporate Event Manager": 3 }                                                 },
        { label: "Most sought-after wedding planner in India",  careers: { "Wedding Planner": 3 }                                                         },
        { label: "Managing Sunburn or Lollapalooza festival",   careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Working with BCCI or FIFA organizing events", careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
    {
      id: "evq10",
      question: "Which certification would you pursue?",
      options: [
        { label: "CMP — Certified Meeting Professional",        careers: { "Corporate Event Manager": 3, "Event Planner": 2 }                             },
        { label: "Certified Wedding Planner (CWP)",             careers: { "Wedding Planner": 3 }                                                         },
        { label: "Music business and event production course",  careers: { "Concert / Music Event Manager": 3 }                                           },
        { label: "Sports management certification",             careers: { "Sports Event Manager": 3 }                                                    },
      ],
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      id: "edq1",
      question: "Which education role excites you most?",
      options: [
        { label: "Teaching students in school or college",      careers: { "Teacher / Professor": 3 }                                                     },
        { label: "Building online learning platforms",          careers: { "EdTech Developer": 3 }                                                        },
        { label: "Designing training and learning programs",    careers: { "Instructional Designer": 3 }                                                  },
        { label: "Creating and selling online courses",         careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq2",
      question: "What kind of learners do you want to teach?",
      options: [
        { label: "School children — foundational education",    careers: { "Teacher / Professor": 3 }                                                     },
        { label: "College students — higher education",         careers: { "Teacher / Professor": 3, "Academic Researcher": 2 }                           },
        { label: "Corporate employees — professional training", careers: { "Instructional Designer": 3 }                                                  },
        { label: "Anyone globally through online courses",      careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq3",
      question: "What motivates you in education?",
      options: [
        { label: "Seeing students grow and achieve success",    careers: { "Teacher / Professor": 3, "School Counselor": 2 }                              },
        { label: "Research and publishing new knowledge",       careers: { "Academic Researcher": 3 }                                                     },
        { label: "Making education accessible globally",        careers: { "EdTech Developer": 3, "Online Course Creator": 2 }                            },
        { label: "Designing perfect learning experiences",      careers: { "Instructional Designer": 3 }                                                  },
      ],
    },
    {
      id: "edq4",
      question: "What tools do you use or want to master?",
      options: [
        { label: "Google Classroom, Zoom, PowerPoint",          careers: { "Teacher / Professor": 3 }                                                     },
        { label: "React, Node.js, Moodle, LMS development",     careers: { "EdTech Developer": 3 }                                                        },
        { label: "Articulate Storyline, Adobe Captivate",       careers: { "Instructional Designer": 3 }                                                  },
        { label: "Teachable, Kajabi, Canva, Camtasia",          careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq5",
      question: "Which education challenge excites you?",
      options: [
        { label: "Making complex topics simple for students",   careers: { "Teacher / Professor": 3 }                                                     },
        { label: "Building adaptive AI-powered learning",       careers: { "EdTech Developer": 3 }                                                        },
        { label: "Maximizing learning retention and engagement",careers: { "Instructional Designer": 3 }                                                  },
        { label: "Building a course that earns passive income", careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq6",
      question: "What is your preferred subject or domain?",
      options: [
        { label: "Science, Math or Technology",                 careers: { "Teacher / Professor": 3, "Academic Researcher": 2 }                           },
        { label: "Humanities, Language or Social Science",      careers: { "Teacher / Professor": 3, "School Counselor": 2 }                              },
        { label: "Corporate skills — leadership, productivity", careers: { "Instructional Designer": 3 }                                                  },
        { label: "My own expertise — cooking, coding, finance", careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq7",
      question: "Do you prefer online or offline education?",
      options: [
        { label: "Offline — classroom interaction is irreplaceable",careers: { "Teacher / Professor": 3 }                                                 },
        { label: "Online — reach millions globally",            careers: { "Online Course Creator": 3, "EdTech Developer": 2 }                            },
        { label: "Blended — mix of both",                       careers: { "Instructional Designer": 3 }                                                  },
        { label: "Research — journals and academic conferences", careers: { "Academic Researcher": 3 }                                                    },
      ],
    },
    {
      id: "edq8",
      question: "How do you handle student struggles?",
      options: [
        { label: "Give extra attention and personalized help",  careers: { "Teacher / Professor": 3, "School Counselor": 3 }                              },
        { label: "Use adaptive tech to identify learning gaps", careers: { "EdTech Developer": 3 }                                                        },
        { label: "Redesign the course for better clarity",      careers: { "Instructional Designer": 3 }                                                  },
        { label: "Add FAQs and supplementary materials",        careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq9",
      question: "Where do you see yourself working?",
      options: [
        { label: "IIT, IIM or top university as professor",     careers: { "Teacher / Professor": 3, "Academic Researcher": 2 }                           },
        { label: "Byju's, Coursera or own EdTech startup",      careers: { "EdTech Developer": 3 }                                                        },
        { label: "L&D department of a Fortune 500 company",     careers: { "Instructional Designer": 3 }                                                  },
        { label: "Independent creator with global students",    careers: { "Online Course Creator": 3 }                                                   },
      ],
    },
    {
      id: "edq10",
      question: "What is your dream achievement in education?",
      options: [
        { label: "Winning the best teacher award nationally",   careers: { "Teacher / Professor": 3 }                                                     },
        { label: "Publishing research in Nature or Science",    careers: { "Academic Researcher": 3 }                                                     },
        { label: "Course with 100,000+ enrolled students",      careers: { "Online Course Creator": 3 }                                                   },
        { label: "Building award-winning learning platform",    careers: { "EdTech Developer": 3 }                                                        },
      ],
    },
  ],

  // ── Law ───────────────────────────────────────────────────
  law: [
    {
      id: "lq1",
      question: "Which legal role excites you most?",
      options: [
        { label: "Arguing cases in court as an advocate",       careers: { "Lawyer / Advocate": 3 }                                                       },
        { label: "Handling corporate deals and M&A",            careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Protecting intellectual property and patents",careers: { "Patent Attorney": 3 }                                                         },
        { label: "Applying technology to solve legal problems", careers: { "Legal Tech Specialist": 3 }                                                   },
      ],
    },
    {
      id: "lq2",
      question: "Which area of law interests you?",
      options: [
        { label: "Criminal law and justice",                    careers: { "Lawyer / Advocate": 3 }                                                       },
        { label: "Corporate law and business transactions",     careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Cybersecurity and data privacy law",          careers: { "Cybersecurity Lawyer": 3 }                                                    },
        { label: "Intellectual property and innovation",        careers: { "Patent Attorney": 3 }                                                         },
      ],
    },
    {
      id: "lq3",
      question: "What motivates you in the legal profession?",
      options: [
        { label: "Fighting for justice for the common person",  careers: { "Lawyer / Advocate": 3 }                                                       },
        { label: "Enabling business growth and transactions",   careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Protecting innovators and their creations",   careers: { "Patent Attorney": 3 }                                                         },
        { label: "Navigating complex regulatory environments",  careers: { "Cybersecurity Lawyer": 3, "Legal Tech Specialist": 2 }                        },
      ],
    },
    {
      id: "lq4",
      question: "Which skill do you want to master?",
      options: [
        { label: "Courtroom argumentation and evidence",        careers: { "Lawyer / Advocate": 3 }                                                       },
        { label: "Contract drafting and deal negotiation",      careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Patent prosecution and IP strategy",         careers: { "Patent Attorney": 3 }                                                          },
        { label: "GDPR, IT Act and data privacy compliance",    careers: { "Cybersecurity Lawyer": 3 }                                                    },
      ],
    },
    {
      id: "lq5",
      question: "Where do you want to work?",
      options: [
        { label: "Supreme Court or High Court chambers",        careers: { "Lawyer / Advocate": 3, "Judge / Magistrate": 2 }                              },
        { label: "Top law firm like AZB or Cyril Amarchand",    careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Tech company legal department",               careers: { "Cybersecurity Lawyer": 3, "Legal Tech Specialist": 2 }                        },
        { label: "Patent office or IP firm",                    careers: { "Patent Attorney": 3 }                                                         },
      ],
    },
    {
      id: "lq6",
      question: "How do you approach complex problems?",
      options: [
        { label: "Research precedents and build strong arguments",careers: { "Lawyer / Advocate": 3 }                                                     },
        { label: "Analyze risk and structure the deal carefully",careers: { "Corporate Lawyer": 3 }                                                       },
        { label: "Apply tech solutions to legal workflows",     careers: { "Legal Tech Specialist": 3 }                                                   },
        { label: "Review technical specs for patentability",    careers: { "Patent Attorney": 3 }                                                         },
      ],
    },
    {
      id: "lq7",
      question: "How important is technology in your legal work?",
      options: [
        { label: "Very — I want to build legal tech products",  careers: { "Legal Tech Specialist": 3 }                                                   },
        { label: "Important — I specialize in cyber/data law",  careers: { "Cybersecurity Lawyer": 3 }                                                    },
        { label: "Moderate — I use legal research databases",   careers: { "Lawyer / Advocate": 2, "Corporate Lawyer": 2 }                                },
        { label: "Low — I prefer traditional legal practice",   careers: { "Judge / Magistrate": 3 }                                                      },
      ],
    },
    {
      id: "lq8",
      question: "What is your career goal in law?",
      options: [
        { label: "Become a Supreme Court judge",                careers: { "Judge / Magistrate": 3, "Lawyer / Advocate": 2 }                              },
        { label: "Partner at a top corporate law firm",         careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Head of Legal at a tech giant",               careers: { "Cybersecurity Lawyer": 3, "Legal Tech Specialist": 2 }                        },
        { label: "Own a successful IP law firm",                careers: { "Patent Attorney": 3 }                                                         },
      ],
    },
    {
      id: "lq9",
      question: "Which legal challenge fascinates you?",
      options: [
        { label: "Defending someone wrongly accused",           careers: { "Lawyer / Advocate": 3 }                                                       },
        { label: "Structuring a billion-dollar M&A deal",       careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Prosecuting a cybercriminal internationally", careers: { "Cybersecurity Lawyer": 3 }                                                    },
        { label: "Protecting an inventor's groundbreaking idea",careers: { "Patent Attorney": 3 }                                                         },
      ],
    },
    {
      id: "lq10",
      question: "What type of clients would you serve?",
      options: [
        { label: "Individuals needing legal representation",    careers: { "Lawyer / Advocate": 3 }                                                       },
        { label: "Large corporations and MNCs",                 careers: { "Corporate Lawyer": 3 }                                                        },
        { label: "Startups and inventors protecting their IP",  careers: { "Patent Attorney": 3 }                                                         },
        { label: "Tech companies navigating data regulations",  careers: { "Cybersecurity Lawyer": 3, "Legal Tech Specialist": 2 }                        },
      ],
    },
  ],

  // ── Science ───────────────────────────────────────────────
  science: [
    {
      id: "scq1",
      question: "Which scientific field excites you most?",
      options: [
        { label: "Biology, genetics and living organisms",       careers: { "Biotechnologist": 3, "Research Scientist": 2 }                               },
        { label: "Physics, space and the universe",             careers: { "Astrophysicist": 3, "Research Scientist": 2 }                                 },
        { label: "Chemistry and molecular science",             careers: { "Chemist": 3 }                                                                 },
        { label: "Earth, environment and climate",              careers: { "Environmental Scientist": 3, "Geologist": 2 }                                 },
      ],
    },
    {
      id: "scq2",
      question: "What kind of research would you do?",
      options: [
        { label: "Gene editing and disease treatment",          careers: { "Biotechnologist": 3 }                                                         },
        { label: "Dark matter, black holes, exoplanets",        careers: { "Astrophysicist": 3 }                                                          },
        { label: "New materials and chemical compounds",        careers: { "Chemist": 3 }                                                                 },
        { label: "Climate change and ecosystem restoration",    careers: { "Environmental Scientist": 3 }                                                 },
      ],
    },
    {
      id: "scq3",
      question: "Which tool would you use in your work?",
      options: [
        { label: "PCR, CRISPR, Bioinformatics tools",           careers: { "Biotechnologist": 3 }                                                         },
        { label: "Telescopes, Python, astronomical databases",  careers: { "Astrophysicist": 3 }                                                          },
        { label: "HPLC, Spectroscopy, Lab equipment",           careers: { "Chemist": 3 }                                                                 },
        { label: "GIS, Remote sensing, Environmental models",   careers: { "Environmental Scientist": 3, "Geologist": 2 }                                 },
      ],
    },
    {
      id: "scq4",
      question: "What motivates you in science?",
      options: [
        { label: "Discovering cures for diseases",              careers: { "Biotechnologist": 3, "Research Scientist": 2 }                                },
        { label: "Exploring the mysteries of the cosmos",       careers: { "Astrophysicist": 3 }                                                          },
        { label: "Creating new materials and compounds",        careers: { "Chemist": 3 }                                                                 },
        { label: "Protecting the planet and biodiversity",      careers: { "Environmental Scientist": 3 }                                                 },
      ],
    },
    {
      id: "scq5",
      question: "Where would you work?",
      options: [
        { label: "Biotech company or pharma research lab",      careers: { "Biotechnologist": 3 }                                                         },
        { label: "NASA, ISRO or a university observatory",      careers: { "Astrophysicist": 3 }                                                          },
        { label: "Chemical company or materials lab",           careers: { "Chemist": 3 }                                                                 },
        { label: "Government environmental agency or NGO",      careers: { "Environmental Scientist": 3 }                                                 },
      ],
    },
    {
      id: "scq6",
      question: "Which scientific achievement excites you?",
      options: [
        { label: "CRISPR curing a genetic disease",             careers: { "Biotechnologist": 3 }                                                         },
        { label: "Discovering a new exoplanet with life",       careers: { "Astrophysicist": 3 }                                                          },
        { label: "Synthesizing a room-temperature superconductor",careers: { "Chemist": 3 }                                                               },
        { label: "Reversing climate change with science",       careers: { "Environmental Scientist": 3 }                                                 },
      ],
    },
    {
      id: "scq7",
      question: "Do you prefer lab work or field work?",
      options: [
        { label: "Lab — experiments and controlled environments",careers: { "Biotechnologist": 3, "Chemist": 3 }                                          },
        { label: "Observatory and data analysis remotely",      careers: { "Astrophysicist": 3 }                                                          },
        { label: "Field — sampling, mapping and surveys",       careers: { "Environmental Scientist": 3, "Geologist": 3 }                                 },
        { label: "Mix of both — depends on the project",        careers: { "Research Scientist": 3 }                                                      },
      ],
    },
    {
      id: "scq8",
      question: "How important is publication and research?",
      options: [
        { label: "Very — I want to publish in top journals",    careers: { "Research Scientist": 3, "Astrophysicist": 2 }                                 },
        { label: "Important but I prefer applied science",      careers: { "Biotechnologist": 3, "Chemist": 2 }                                           },
        { label: "Moderate — field data is most important",     careers: { "Environmental Scientist": 3, "Geologist": 2 }                                 },
        { label: "Not a priority — I focus on solving problems",careers: { "Environmental Scientist": 2, "Chemist": 2 }                                   },
      ],
    },
    {
      id: "scq9",
      question: "Which subject are you strongest in?",
      options: [
        { label: "Biology and molecular genetics",              careers: { "Biotechnologist": 3 }                                                         },
        { label: "Physics and advanced mathematics",            careers: { "Astrophysicist": 3 }                                                          },
        { label: "Chemistry and chemical engineering",          careers: { "Chemist": 3 }                                                                 },
        { label: "Earth sciences and geography",                careers: { "Geologist": 3, "Environmental Scientist": 2 }                                 },
      ],
    },
    {
      id: "scq10",
      question: "What is your dream scientific achievement?",
      options: [
        { label: "Win Nobel Prize in Medicine or Physiology",   careers: { "Biotechnologist": 3, "Research Scientist": 2 }                                },
        { label: "Win Nobel Prize in Physics or discover planet",careers: { "Astrophysicist": 3 }                                                         },
        { label: "Develop a revolutionary new material",        careers: { "Chemist": 3 }                                                                 },
        { label: "Lead UN climate change task force",           careers: { "Environmental Scientist": 3 }                                                 },
      ],
    },
  ],

  // ── Sports ────────────────────────────────────────────────
  sports: [
    {
      id: "spq1",
      question: "Which sports role excites you most?",
      options: [
        { label: "Competing professionally as an athlete",      careers: { "Professional Athlete": 3 }                                                    },
        { label: "Coaching and developing athletes",            careers: { "Sports Coach": 3 }                                                            },
        { label: "Analyzing sports data and performance",       careers: { "Sports Analyst": 3 }                                                          },
        { label: "Marketing sports teams and events",           careers: { "Sports Marketing Manager": 3 }                                                },
      ],
    },
    {
      id: "spq2",
      question: "What is your relationship with sports?",
      options: [
        { label: "I am an active competitive player",           careers: { "Professional Athlete": 3, "Esports Professional": 2 }                         },
        { label: "I love training and helping others improve",  careers: { "Sports Coach": 3, "Sports Physiotherapist": 2 }                               },
        { label: "I love stats, data and game analysis",        careers: { "Sports Analyst": 3 }                                                          },
        { label: "I love the business side of sports",         careers: { "Sports Marketing Manager": 3 }                                                 },
      ],
    },
    {
      id: "spq3",
      question: "Which sport or game do you follow most?",
      options: [
        { label: "Cricket, Football, Basketball — team sports",  careers: { "Professional Athlete": 3, "Sports Coach": 2 }                                },
        { label: "Chess, Formula 1 — strategy based sports",    careers: { "Sports Analyst": 3 }                                                          },
        { label: "PUBG, FIFA, CS:GO — esports and gaming",      careers: { "Esports Professional": 3 }                                                   },
        { label: "I follow all sports as a business observer",  careers: { "Sports Marketing Manager": 3 }                                                },
      ],
    },
    {
      id: "spq4",
      question: "What motivates you in sports?",
      options: [
        { label: "The thrill of competition and winning",       careers: { "Professional Athlete": 3, "Esports Professional": 2 }                         },
        { label: "Seeing athletes reach their potential",       careers: { "Sports Coach": 3 }                                                            },
        { label: "Finding patterns in performance data",        careers: { "Sports Analyst": 3 }                                                          },
        { label: "Building fan communities and brand value",    careers: { "Sports Marketing Manager": 3 }                                                },
      ],
    },
    {
      id: "spq5",
      question: "Which skill do you want to master?",
      options: [
        { label: "Athletic performance and recovery",           careers: { "Professional Athlete": 3, "Sports Physiotherapist": 2 }                       },
        { label: "Coaching methodologies and drills",           careers: { "Sports Coach": 3 }                                                            },
        { label: "Python, Tableau and video analysis tools",    careers: { "Sports Analyst": 3 }                                                          },
        { label: "Digital marketing and sponsorship deals",     careers: { "Sports Marketing Manager": 3 }                                                },
      ],
    },
    {
      id: "spq6",
      question: "Where do you see yourself in sports?",
      options: [
        { label: "Playing for national team or IPL",            careers: { "Professional Athlete": 3 }                                                    },
        { label: "Head coach of a national team",               careers: { "Sports Coach": 3 }                                                            },
        { label: "Data scientist for a Premier League club",    careers: { "Sports Analyst": 3 }                                                          },
        { label: "Esports world champion",                      careers: { "Esports Professional": 3 }                                                   },
      ],
    },
    {
      id: "spq7",
      question: "How do you handle sports injuries?",
      options: [
        { label: "Recover fast and get back stronger",          careers: { "Professional Athlete": 3 }                                                    },
        { label: "Study how to prevent and treat them",         careers: { "Sports Physiotherapist": 3 }                                                  },
        { label: "Analyze injury data to prevent future ones",  careers: { "Sports Analyst": 3 }                                                          },
        { label: "Manage the PR around injured star players",   careers: { "Sports Marketing Manager": 2 }                                                },
      ],
    },
    {
      id: "spq8",
      question: "Which organization would you work for?",
      options: [
        { label: "BCCI, FIFA or Olympic committee",             careers: { "Professional Athlete": 3, "Sports Event Manager": 2 }                         },
        { label: "National sports academy or club team",        careers: { "Sports Coach": 3 }                                                            },
        { label: "StatsBomb, Opta or sports analytics firm",    careers: { "Sports Analyst": 3 }                                                          },
        { label: "Nike, Adidas or sports marketing agency",     careers: { "Sports Marketing Manager": 3 }                                                },
      ],
    },
    {
      id: "spq9",
      question: "What is your dream sports achievement?",
      options: [
        { label: "Win an Olympic gold medal",                   careers: { "Professional Athlete": 3 }                                                    },
        { label: "Produce a world champion athlete",            careers: { "Sports Coach": 3 }                                                            },
        { label: "Build the data analytics system for World Cup",careers: { "Sports Analyst": 3 }                                                         },
        { label: "Win a world esports championship tournament", careers: { "Esports Professional": 3 }                                                   },
      ],
    },
    {
      id: "spq10",
      question: "How physically demanding do you want your career?",
      options: [
        { label: "Very — I am an athlete and love training",    careers: { "Professional Athlete": 3 }                                                    },
        { label: "Moderate — demo exercises as a coach",        careers: { "Sports Coach": 3, "Sports Physiotherapist": 2 }                               },
        { label: "Low — desk based analysis and strategy",      careers: { "Sports Analyst": 3, "Sports Marketing Manager": 2 }                           },
        { label: "Sedentary — esports is my thing",             careers: { "Esports Professional": 3 }                                                   },
      ],
    },
  ],

  // ── Entrepreneurship ──────────────────────────────────────
  entrepreneurship: [
    {
      id: "enq1",
      question: "Which entrepreneurial path excites you?",
      options: [
        { label: "Building a tech startup from scratch",        careers: { "Startup Founder": 3 }                                                         },
        { label: "Investing in and scaling other startups",     careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Running an online business or e-commerce",   careers: { "E-commerce Entrepreneur": 3 }                                                  },
        { label: "Creating a business that solves social issues",careers: { "Social Entrepreneur": 3 }                                                   },
      ],
    },
    {
      id: "enq2",
      question: "What type of business would you build?",
      options: [
        { label: "SaaS product or AI-powered platform",         careers: { "Startup Founder": 3 }                                                         },
        { label: "Online store selling physical products",      careers: { "E-commerce Entrepreneur": 3 }                                                 },
        { label: "Coaching or consulting business",             careers: { "Business Coach": 3 }                                                          },
        { label: "Freelance agency or service business",        careers: { "Freelancer": 3 }                                                              },
      ],
    },
    {
      id: "enq3",
      question: "What motivates you most as an entrepreneur?",
      options: [
        { label: "Building something from zero to billion",     careers: { "Startup Founder": 3 }                                                         },
        { label: "Financial returns and portfolio growth",      careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Freedom and flexibility to work on my terms", careers: { "Freelancer": 3, "E-commerce Entrepreneur": 2 }                               },
        { label: "Solving problems that matter to society",     careers: { "Social Entrepreneur": 3 }                                                    },
      ],
    },
    {
      id: "enq4",
      question: "How do you handle risk and failure?",
      options: [
        { label: "Embrace it — failure is learning",            careers: { "Startup Founder": 3, "E-commerce Entrepreneur": 2 }                           },
        { label: "Mitigate it with portfolio diversification",  careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Minimize it — steady income from services",  careers: { "Freelancer": 3, "Business Coach": 2 }                                         },
        { label: "Accept it for a greater social cause",        careers: { "Social Entrepreneur": 3 }                                                    },
      ],
    },
    {
      id: "enq5",
      question: "Which business skill do you want to master?",
      options: [
        { label: "Fundraising, pitching and product building",  careers: { "Startup Founder": 3 }                                                         },
        { label: "Due diligence and startup evaluation",        careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Shopify, digital ads and conversion rate",    careers: { "E-commerce Entrepreneur": 3 }                                                 },
        { label: "Client acquisition and personal branding",    careers: { "Freelancer": 3, "Business Coach": 2 }                                         },
      ],
    },
    {
      id: "enq6",
      question: "What is your funding preference?",
      options: [
        { label: "VC funding — raise millions and scale fast",  careers: { "Startup Founder": 3 }                                                         },
        { label: "Deploy capital into promising startups",      careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Bootstrap — grow organically from revenue",   careers: { "E-commerce Entrepreneur": 3, "Freelancer": 2 }                                },
        { label: "Grants and impact funding for social causes", careers: { "Social Entrepreneur": 3 }                                                    },
      ],
    },
    {
      id: "enq7",
      question: "Which tool or platform do you use?",
      options: [
        { label: "Notion, Jira, Stripe, AWS",                   careers: { "Startup Founder": 3 }                                                         },
        { label: "Pitchbook, Crunchbase, Excel",                careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Shopify, Meta Ads, Klaviyo",                  careers: { "E-commerce Entrepreneur": 3 }                                                 },
        { label: "Upwork, Fiverr, LinkedIn, Zoom",              careers: { "Freelancer": 3 }                                                              },
      ],
    },
    {
      id: "enq8",
      question: "Who is your entrepreneurial hero?",
      options: [
        { label: "Elon Musk, Steve Jobs — disruptive founders", careers: { "Startup Founder": 3 }                                                         },
        { label: "Sequoia, Andreessen — legendary investors",   careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Muhammad Yunus — social impact leader",       careers: { "Social Entrepreneur": 3 }                                                    },
        { label: "Tim Ferriss — lifestyle entrepreneur",        careers: { "Freelancer": 3, "Business Coach": 2 }                                         },
      ],
    },
    {
      id: "enq9",
      question: "What is your 5-year entrepreneurial goal?",
      options: [
        { label: "Raise Series B and expand globally",          careers: { "Startup Founder": 3 }                                                         },
        { label: "Build a $100M VC fund",                       careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Build 7-figure online business",              careers: { "E-commerce Entrepreneur": 3 }                                                 },
        { label: "Impact 1 million lives with my social venture",careers: { "Social Entrepreneur": 3 }                                                   },
      ],
    },
    {
      id: "enq10",
      question: "How do you define business success?",
      options: [
        { label: "Unicorn valuation — $1 billion company",      careers: { "Startup Founder": 3 }                                                         },
        { label: "Successful exits from portfolio companies",   careers: { "Venture Capitalist": 3 }                                                      },
        { label: "Financial freedom and passive income",        careers: { "E-commerce Entrepreneur": 3, "Freelancer": 2 }                                },
        { label: "Measurable positive impact on society",       careers: { "Social Entrepreneur": 3 }                                                    },
      ],
    },
  ],

  // ── Sustainability ────────────────────────────────────────
  sustainability: [
    {
      id: "suq1",
      question: "Which sustainability role excites you?",
      options: [
        { label: "Studying climate patterns and modeling",       careers: { "Climate Scientist": 3 }                                                       },
        { label: "Designing solar and wind energy systems",      careers: { "Renewable Energy Engineer": 3 }                                              },
        { label: "Analyzing ESG data for investors",            careers: { "ESG Analyst": 3 }                                                             },
        { label: "Helping companies go green",                  careers: { "Sustainability Consultant": 3 }                                               },
      ],
    },
    {
      id: "suq2",
      question: "What sustainability challenge excites you?",
      options: [
        { label: "Reversing climate change with science",        careers: { "Climate Scientist": 3, "Environmental Scientist": 2 }                        },
        { label: "Replacing fossil fuels with clean energy",     careers: { "Renewable Energy Engineer": 3, "Green Tech Entrepreneur": 2 }                },
        { label: "Making capital markets more sustainable",      careers: { "ESG Analyst": 3 }                                                            },
        { label: "Eliminating waste through circular design",    careers: { "Circular Economy Specialist": 3, "Sustainability Consultant": 2 }            },
      ],
    },
    {
      id: "suq3",
      question: "Which tool do you want to master?",
      options: [
        { label: "Python, R, Climate modeling software",         careers: { "Climate Scientist": 3 }                                                       },
        { label: "PVsyst, AutoCAD, Energy modeling tools",       careers: { "Renewable Energy Engineer": 3 }                                              },
        { label: "Bloomberg ESG, MSCI, Excel",                   careers: { "ESG Analyst": 3 }                                                            },
        { label: "LCA software, GHG Protocol tools",             careers: { "Sustainability Consultant": 3, "Circular Economy Specialist": 2 }            },
      ],
    },
    {
      id: "suq4",
      question: "What motivates you in sustainability?",
      options: [
        { label: "Understanding how climate systems work",        careers: { "Climate Scientist": 3 }                                                      },
        { label: "Engineering solutions to the energy crisis",   careers: { "Renewable Energy Engineer": 3 }                                              },
        { label: "Influencing capital towards good companies",   careers: { "ESG Analyst": 3 }                                                            },
        { label: "Building green businesses from scratch",       careers: { "Green Tech Entrepreneur": 3 }                                                },
      ],
    },
    {
      id: "suq5",
      question: "Where do you want to work?",
      options: [
        { label: "IPCC, NASA or university climate lab",          careers: { "Climate Scientist": 3 }                                                      },
        { label: "Renewable energy company or grid operator",     careers: { "Renewable Energy Engineer": 3 }                                             },
        { label: "Investment bank or asset management firm",      careers: { "ESG Analyst": 3 }                                                           },
        { label: "Consulting firm or own green startup",          careers: { "Sustainability Consultant": 3, "Green Tech Entrepreneur": 2 }               },
      ],
    },
    {
      id: "suq6",
      question: "How do you want to create impact?",
      options: [
        { label: "Publish research that shapes global policy",    careers: { "Climate Scientist": 3 }                                                      },
        { label: "Install renewable energy in rural villages",    careers: { "Renewable Energy Engineer": 3 }                                             },
        { label: "Redirect trillions in ESG investments",         careers: { "ESG Analyst": 3 }                                                           },
        { label: "Build circular supply chains for companies",    careers: { "Circular Economy Specialist": 3 }                                           },
      ],
    },
    {
      id: "suq7",
      question: "Which sustainability framework do you follow?",
      options: [
        { label: "IPCC, Paris Agreement, NDCs",                   careers: { "Climate Scientist": 3 }                                                      },
        { label: "IEC, IEEE standards for energy systems",        careers: { "Renewable Energy Engineer": 3 }                                             },
        { label: "GRI, TCFD, SASB reporting standards",           careers: { "ESG Analyst": 3, "Sustainability Consultant": 2 }                           },
        { label: "Ellen MacArthur circular economy principles",   careers: { "Circular Economy Specialist": 3 }                                           },
      ],
    },
    {
      id: "suq8",
      question: "What is your dream achievement?",
      options: [
        { label: "Develop climate model used by governments",     careers: { "Climate Scientist": 3 }                                                      },
        { label: "Power 1 million homes with renewable energy",   careers: { "Renewable Energy Engineer": 3 }                                             },
        { label: "Shift $10 billion to green investments",        careers: { "ESG Analyst": 3 }                                                           },
        { label: "Build a zero-waste city or community",          careers: { "Circular Economy Specialist": 3, "Green Tech Entrepreneur": 2 }             },
      ],
    },
    {
      id: "suq9",
      question: "Which degree would you pursue?",
      options: [
        { label: "Climate Science or Atmospheric Science",        careers: { "Climate Scientist": 3 }                                                      },
        { label: "Renewable Energy or Electrical Engineering",    careers: { "Renewable Energy Engineer": 3 }                                             },
        { label: "Finance, Economics or MBA with ESG focus",      careers: { "ESG Analyst": 3 }                                                           },
        { label: "Environmental Science or Industrial Ecology",   careers: { "Sustainability Consultant": 3, "Circular Economy Specialist": 2 }           },
      ],
    },
    {
      id: "suq10",
      question: "Which global challenge is most important to you?",
      options: [
        { label: "Understanding tipping points in climate system", careers: { "Climate Scientist": 3 }                                                     },
        { label: "Achieving 100% renewable energy globally",       careers: { "Renewable Energy Engineer": 3, "Green Tech Entrepreneur": 2 }              },
        { label: "Making every company carbon neutral by 2050",    careers: { "Sustainability Consultant": 3, "ESG Analyst": 2 }                          },
        { label: "Creating a world with zero waste",               careers: { "Circular Economy Specialist": 3 }                                          },
      ],
    },
  ],
};

// ── Calculate Career Scores from Stage 2 ─────────────────
export const calculateCareerScores = (answers, categoryId) => {
  const questions = CAREER_QUIZ[categoryId];
  if (!questions) return {};

  const scores = {};

  Object.entries(answers).forEach(([questionId, selectedIndex]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const selectedOption = question.options[selectedIndex];
    if (!selectedOption) return;

    Object.entries(selectedOption.careers).forEach(([career, score]) => {
      scores[career] = (scores[career] || 0) + score;
    });
  });

  return scores;
};

// ── Get Top 5 Careers ─────────────────────────────────────
export const getTop5Careers = (scores) => {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([career, score]) => ({
      career,
      score,
      percentage: Math.round((score / total) * 100),
    }));
};