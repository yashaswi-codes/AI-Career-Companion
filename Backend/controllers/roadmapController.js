const asyncHandler = require("express-async-handler");
const Roadmap      = require("../models/Roadmap");
const QuizResult   = require("../models/QuizResult");

// ── Roadmap Data ──────────────────────────────────────────
const roadmapData = {
  "Software Development": {
    totalDuration: "12 months",
    phases: [
      {
        phase:  "Phase 1",
        title:  "Foundations",
        duration: "2 months",
        status: "in_progress",
        milestones: [
          { title: "Learn HTML & CSS",           done: false, resources: ["MDN Docs", "freeCodeCamp"]        },
          { title: "JavaScript Basics",           done: false, resources: ["JavaScript.info", "Eloquent JS"] },
          { title: "Git & GitHub",                done: false, resources: ["Git Docs", "GitHub Learning Lab"] },
          { title: "VS Code & Dev Tools",         done: false, resources: ["VS Code Docs"]                   },
        ],
      },
      {
        phase:  "Phase 2",
        title:  "Core Skills",
        duration: "3 months",
        status: "locked",
        milestones: [
          { title: "React.js Fundamentals",       done: false, resources: ["React Docs", "Scrimba React"]    },
          { title: "Node.js & Express",           done: false, resources: ["Node Docs", "The Odin Project"]  },
          { title: "REST APIs",                   done: false, resources: ["Postman Docs", "freeCodeCamp"]   },
          { title: "MongoDB & Mongoose",          done: false, resources: ["MongoDB Docs"]                   },
        ],
      },
      {
        phase:  "Phase 3",
        title:  "Advanced Topics",
        duration: "3 months",
        status: "locked",
        milestones: [
          { title: "Data Structures & Algorithms",done: false, resources: ["LeetCode", "NeetCode"]           },
          { title: "System Design Basics",        done: false, resources: ["System Design Primer"]           },
          { title: "TypeScript",                  done: false, resources: ["TypeScript Docs"]                },
          { title: "Testing (Jest)",              done: false, resources: ["Jest Docs"]                      },
        ],
      },
      {
        phase:  "Phase 4",
        title:  "Job Ready",
        duration: "4 months",
        status: "locked",
        milestones: [
          { title: "Build 3 Portfolio Projects",  done: false, resources: ["GitHub", "Vercel"]               },
          { title: "Resume & LinkedIn",           done: false, resources: ["Resumake", "LinkedIn"]           },
          { title: "Interview Preparation",       done: false, resources: ["LeetCode", "InterviewBit"]       },
          { title: "Apply for Jobs",              done: false, resources: ["LinkedIn", "Naukri"]             },
        ],
      },
    ],
  },
  "Data Science & ML": {
    totalDuration: "14 months",
    phases: [
      {
        phase:  "Phase 1",
        title:  "Math & Python Basics",
        duration: "2 months",
        status: "in_progress",
        milestones: [
          { title: "Python Programming",          done: false, resources: ["Python Docs", "Automate Boring Stuff"] },
          { title: "Statistics & Probability",    done: false, resources: ["Khan Academy", "StatQuest"]            },
          { title: "Linear Algebra",              done: false, resources: ["3Blue1Brown", "Khan Academy"]          },
          { title: "Calculus Basics",             done: false, resources: ["Khan Academy"]                         },
        ],
      },
      {
        phase:  "Phase 2",
        title:  "Data Analysis",
        duration: "3 months",
        status: "locked",
        milestones: [
          { title: "NumPy & Pandas",              done: false, resources: ["Kaggle", "Pandas Docs"]               },
          { title: "Data Visualization",          done: false, resources: ["Matplotlib", "Seaborn Docs"]          },
          { title: "SQL for Data Science",        done: false, resources: ["Mode SQL", "SQLZoo"]                  },
          { title: "EDA Projects",                done: false, resources: ["Kaggle Datasets"]                     },
        ],
      },
      {
        phase:  "Phase 3",
        title:  "Machine Learning",
        duration: "4 months",
        status: "locked",
        milestones: [
          { title: "Scikit-Learn",                done: false, resources: ["Scikit Docs", "Kaggle"]               },
          { title: "Deep Learning Basics",        done: false, resources: ["fast.ai", "DeepLearning.AI"]          },
          { title: "NLP Fundamentals",            done: false, resources: ["Hugging Face", "NLTK"]                },
          { title: "ML Projects",                 done: false, resources: ["Kaggle Competitions"]                 },
        ],
      },
      {
        phase:  "Phase 4",
        title:  "Industry Ready",
        duration: "5 months",
        status: "locked",
        milestones: [
          { title: "MLOps Basics",                done: false, resources: ["MLflow", "DVC"]                       },
          { title: "Cloud ML (AWS/GCP)",          done: false, resources: ["AWS SageMaker", "GCP Vertex AI"]      },
          { title: "Kaggle Competitions",         done: false, resources: ["Kaggle"]                              },
          { title: "Portfolio & Job Hunt",        done: false, resources: ["LinkedIn", "GitHub"]                  },
        ],
      },
    ],
  },
};

// ── Get Roadmap ───────────────────────────────────────────
// GET /api/roadmap
const getRoadmap = asyncHandler(async (req, res) => {

  // Pehle check karo DB mein hai?
  let roadmap = await Roadmap.findOne({ user: req.user._id });

  if (!roadmap) {
    // Quiz result se career lo
    const quizResult = await QuizResult.findOne({ user: req.user._id });
    const career     = quizResult?.topCareers?.[0]?.career || "Software Development";
    const data       = roadmapData[career] || roadmapData["Software Development"];

    // Roadmap create karo
    roadmap = await Roadmap.create({
      user:          req.user._id,
      career,
      totalDuration: data.totalDuration,
      phases:        data.phases,
    });
  }

  res.json({
    success: true,
    data:    roadmap,
  });
});

// ── Update Milestone ──────────────────────────────────────
// PUT /api/roadmap/milestone
const updateMilestone = asyncHandler(async (req, res) => {
  const { phaseIndex, milestoneIndex, done } = req.body;

  const roadmap = await Roadmap.findOne({ user: req.user._id });

  if (!roadmap) {
    res.status(404);
    throw new Error("Roadmap not found");
  }

  // Milestone update karo
  roadmap.phases[phaseIndex].milestones[milestoneIndex].done = done;

  // Overall progress calculate karo
  const totalMilestones     = roadmap.phases.flatMap((p) => p.milestones).length;
  const completedMilestones = roadmap.phases.flatMap((p) => p.milestones).filter((m) => m.done).length;
  roadmap.overallProgress   = Math.round((completedMilestones / totalMilestones) * 100);

  // Phase status update karo
  roadmap.phases[phaseIndex].status = roadmap.phases[phaseIndex].milestones.every((m) => m.done)
    ? "completed"
    : roadmap.phases[phaseIndex].milestones.some((m) => m.done)
    ? "in_progress"
    : "locked";

  await roadmap.save();

  res.json({
    success: true,
    data:    roadmap,
  });
});

module.exports = { getRoadmap, updateMilestone };