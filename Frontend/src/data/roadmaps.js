export const ROADMAPS = {

  // ── AI Engineer ───────────────────────────────────────────
  "AI Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Python & Math Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Python Programming Basics",        done: false, resources: ["Python Docs", "Automate Boring Stuff", "freeCodeCamp Python"] },
          { title: "Linear Algebra & Calculus",        done: false, resources: ["Khan Academy", "3Blue1Brown", "MIT OCW"] },
          { title: "Statistics & Probability",         done: false, resources: ["StatQuest", "Khan Academy Statistics"] },
          { title: "NumPy & Pandas",                   done: false, resources: ["Kaggle Learn", "Pandas Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Machine Learning Core",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "ML Algorithms & Scikit-Learn",     done: false, resources: ["Scikit-Learn Docs", "Kaggle Learn ML"] },
          { title: "Data Preprocessing & Feature Eng", done: false, resources: ["Kaggle Courses", "Towards Data Science"] },
          { title: "Model Evaluation & Tuning",        done: false, resources: ["fast.ai", "Google ML Crash Course"] },
          { title: "Build 3 ML Projects",              done: false, resources: ["Kaggle Datasets", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Deep Learning & NLP",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Neural Networks & PyTorch",        done: false, resources: ["fast.ai", "PyTorch Docs", "Andrej Karpathy YouTube"] },
          { title: "Computer Vision (CNN)",            done: false, resources: ["CS231n Stanford", "Hugging Face"] },
          { title: "NLP & Transformers",               done: false, resources: ["Hugging Face Course", "Papers With Code"] },
          { title: "LLMs & Fine-Tuning",               done: false, resources: ["OpenAI Docs", "LangChain Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "MLOps & Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "MLOps & Model Deployment",         done: false, resources: ["MLflow", "AWS SageMaker", "Docker"] },
          { title: "AI Portfolio (3 projects)",        done: false, resources: ["GitHub", "Hugging Face Spaces"] },
          { title: "LeetCode & Interview Prep",        done: false, resources: ["LeetCode", "InterviewBit"] },
          { title: "Apply for AI Roles",               done: false, resources: ["LinkedIn", "AngelList", "Naukri"] },
        ],
      },
    ],
  },

  // ── Data Scientist ────────────────────────────────────────
  "Data Scientist": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Python & Statistics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Python for Data Science",          done: false, resources: ["Kaggle Learn", "Python Docs"] },
          { title: "Statistics & Probability",         done: false, resources: ["StatQuest", "Khan Academy"] },
          { title: "SQL for Data Analysis",            done: false, resources: ["Mode SQL", "SQLZoo"] },
          { title: "NumPy, Pandas, Matplotlib",        done: false, resources: ["Kaggle", "Towards Data Science"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Data Analysis & Visualization",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Exploratory Data Analysis (EDA)",  done: false, resources: ["Kaggle Datasets", "Seaborn Docs"] },
          { title: "Tableau & Power BI",               done: false, resources: ["Tableau Public", "Microsoft Learn"] },
          { title: "Advanced SQL",                     done: false, resources: ["LeetCode SQL", "HackerRank SQL"] },
          { title: "3 EDA Projects",                   done: false, resources: ["Kaggle", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Machine Learning",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Scikit-Learn & ML Algorithms",     done: false, resources: ["Scikit-Learn Docs", "Kaggle ML"] },
          { title: "Feature Engineering",              done: false, resources: ["Kaggle Courses"] },
          { title: "Deep Learning Basics",             done: false, resources: ["fast.ai", "Keras Docs"] },
          { title: "Kaggle Competition",               done: false, resources: ["Kaggle"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "End-to-End DS Project",            done: false, resources: ["GitHub", "Streamlit"] },
          { title: "Portfolio & Resume",               done: false, resources: ["GitHub Pages", "LinkedIn"] },
          { title: "DS Interview Prep",                done: false, resources: ["Glassdoor", "InterviewBit"] },
          { title: "Apply for DS Roles",               done: false, resources: ["LinkedIn", "Naukri", "AngelList"] },
        ],
      },
    ],
  },

  // ── Software Developer ────────────────────────────────────
  "Software Developer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Web Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "HTML & CSS",                       done: false, resources: ["MDN Web Docs", "freeCodeCamp"] },
          { title: "JavaScript Basics",                done: false, resources: ["JavaScript.info", "Eloquent JS"] },
          { title: "Git & GitHub",                     done: false, resources: ["Git Docs", "GitHub Learning Lab"] },
          { title: "VS Code & Dev Tools",              done: false, resources: ["VS Code Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Frontend Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "React.js Fundamentals",            done: false, resources: ["React Docs", "Scrimba React"] },
          { title: "State Management & Hooks",         done: false, resources: ["React Docs", "Zustand Docs"] },
          { title: "Responsive Design & Tailwind",     done: false, resources: ["Tailwind Docs", "Frontend Mentor"] },
          { title: "3 Frontend Projects",              done: false, resources: ["Frontend Mentor", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Backend & Databases",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Node.js & Express",                done: false, resources: ["Node Docs", "The Odin Project"] },
          { title: "REST APIs & Authentication",       done: false, resources: ["Postman Docs", "JWT Docs"] },
          { title: "MongoDB & SQL",                    done: false, resources: ["MongoDB Docs", "SQLZoo"] },
          { title: "Full Stack Project",               done: false, resources: ["GitHub", "Vercel"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "DSA & LeetCode (150 problems)",    done: false, resources: ["LeetCode", "NeetCode"] },
          { title: "System Design Basics",             done: false, resources: ["System Design Primer"] },
          { title: "Portfolio & Resume",               done: false, resources: ["GitHub Pages", "LinkedIn"] },
          { title: "Apply for Dev Roles",              done: false, resources: ["LinkedIn", "Naukri", "Wellfound"] },
        ],
      },
    ],
  },

  // ── Cybersecurity Engineer ────────────────────────────────
  "Cybersecurity Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Networking & Linux Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Networking Fundamentals (TCP/IP)", done: false, resources: ["CompTIA Net+ Guide", "Professor Messer"] },
          { title: "Linux Command Line",               done: false, resources: ["Linux Journey", "OverTheWire"] },
          { title: "Python for Security",              done: false, resources: ["Python Docs", "Automate the Boring Stuff"] },
          { title: "CompTIA Security+ Basics",         done: false, resources: ["Professor Messer", "Darril Gibson"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Ethical Hacking",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Kali Linux & Tools",               done: false, resources: ["Kali Docs", "TryHackMe"] },
          { title: "Web App Penetration Testing",      done: false, resources: ["OWASP", "PortSwigger Web Academy"] },
          { title: "Network Pentesting",               done: false, resources: ["HackTheBox", "TryHackMe"] },
          { title: "CEH or eJPT Certification",        done: false, resources: ["EC-Council", "eLearnSecurity"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Security",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Malware Analysis",                 done: false, resources: ["Any.run", "Malwarebytes Blog"] },
          { title: "SIEM & SOC Operations",            done: false, resources: ["Splunk Free", "IBM QRadar"] },
          { title: "Cloud Security (AWS)",             done: false, resources: ["AWS Security Docs", "Cloud Guru"] },
          { title: "OSCP Preparation",                 done: false, resources: ["Offensive Security", "HackTheBox"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "CTF Competitions",                 done: false, resources: ["CTFtime", "PicoCTF"] },
          { title: "Security Portfolio & Blog",        done: false, resources: ["GitHub", "Medium"] },
          { title: "OSCP or CompTIA CySA+",            done: false, resources: ["Offensive Security"] },
          { title: "Apply for Security Roles",         done: false, resources: ["LinkedIn", "CyberSecJobs"] },
        ],
      },
    ],
  },

  // ── Cloud Engineer ────────────────────────────────────────
  "Cloud Engineer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Cloud & Linux Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Linux Fundamentals",               done: false, resources: ["Linux Journey", "TryHackMe Linux"] },
          { title: "Networking Basics",                done: false, resources: ["Professor Messer", "CompTIA Net+"] },
          { title: "AWS Cloud Practitioner",           done: false, resources: ["AWS Free Tier", "Cloud Guru"] },
          { title: "Python or Bash Scripting",         done: false, resources: ["Python Docs", "Shell Scripting Guide"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "AWS & DevOps Core",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "AWS Solutions Architect Associate",done: false, resources: ["Stephane Maarek Udemy", "AWS Docs"] },
          { title: "Docker & Containers",              done: false, resources: ["Docker Docs", "Play With Docker"] },
          { title: "Kubernetes Basics",                done: false, resources: ["Kubernetes Docs", "KodeKloud"] },
          { title: "CI/CD with GitHub Actions",        done: false, resources: ["GitHub Actions Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Infrastructure as Code",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Terraform",                        done: false, resources: ["Terraform Docs", "HashiCorp Learn"] },
          { title: "Ansible",                          done: false, resources: ["Ansible Docs", "Red Hat Training"] },
          { title: "Monitoring (Prometheus & Grafana)",done: false, resources: ["Prometheus Docs", "Grafana Docs"] },
          { title: "Multi-Cloud Project",              done: false, resources: ["GitHub", "AWS + GCP"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certifications & Jobs",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "AWS DevOps Pro or GCP Associate",  done: false, resources: ["AWS Certification", "GCP Certification"] },
          { title: "Cloud Portfolio",                  done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for Cloud Roles",            done: false, resources: ["LinkedIn", "Naukri", "Wellfound"] },
          { title: "Mock Interviews",                  done: false, resources: ["Pramp", "InterviewBit"] },
        ],
      },
    ],
  },

  // ── DevOps Engineer ───────────────────────────────────────
  "DevOps Engineer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Linux & Scripting",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Linux Administration",             done: false, resources: ["Linux Journey", "LPIC Guide"] },
          { title: "Bash & Python Scripting",          done: false, resources: ["Shell Scripting Guide", "Python Docs"] },
          { title: "Git & Version Control",            done: false, resources: ["Git Docs", "Atlassian Git"] },
          { title: "Networking Fundamentals",          done: false, resources: ["Professor Messer"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Containers & CI/CD",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Docker & Docker Compose",          done: false, resources: ["Docker Docs", "TechWorld with Nana"] },
          { title: "Kubernetes",                       done: false, resources: ["Kubernetes Docs", "KodeKloud"] },
          { title: "Jenkins & GitHub Actions",         done: false, resources: ["Jenkins Docs", "GitHub Actions Docs"] },
          { title: "CI/CD Pipeline Project",           done: false, resources: ["GitHub", "DockerHub"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Cloud & IaC",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "AWS or Azure Fundamentals",        done: false, resources: ["AWS Docs", "Microsoft Learn"] },
          { title: "Terraform Infrastructure as Code", done: false, resources: ["HashiCorp Learn", "Terraform Docs"] },
          { title: "Ansible Configuration Management", done: false, resources: ["Ansible Docs"] },
          { title: "Monitoring & Alerting",            done: false, resources: ["Prometheus", "Grafana", "ELK Stack"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "DevOps Portfolio Project",         done: false, resources: ["GitHub"] },
          { title: "CKA Certification",                done: false, resources: ["Linux Foundation", "KodeKloud"] },
          { title: "Resume & LinkedIn",                done: false, resources: ["LinkedIn"] },
          { title: "Apply for DevOps Roles",           done: false, resources: ["LinkedIn", "Naukri", "Wellfound"] },
        ],
      },
    ],
  },

  // ── Full Stack Developer ──────────────────────────────────
  "Full Stack Developer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Frontend Foundations",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "HTML, CSS & JavaScript",           done: false, resources: ["MDN Docs", "JavaScript.info"] },
          { title: "React.js",                         done: false, resources: ["React Docs", "Scrimba"] },
          { title: "Tailwind CSS & UI Libraries",      done: false, resources: ["Tailwind Docs", "shadcn/ui"] },
          { title: "2 Frontend Projects",              done: false, resources: ["Frontend Mentor", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Backend Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Node.js & Express",                done: false, resources: ["Node Docs", "The Odin Project"] },
          { title: "REST APIs & Authentication (JWT)", done: false, resources: ["JWT Docs", "Postman"] },
          { title: "MongoDB & PostgreSQL",             done: false, resources: ["MongoDB Docs", "PostgreSQL Tutorial"] },
          { title: "Full Stack MERN Project",          done: false, resources: ["GitHub", "Vercel", "Render"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Topics",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "TypeScript",                       done: false, resources: ["TypeScript Docs", "Matt Pocock"] },
          { title: "Next.js & SSR",                    done: false, resources: ["Next.js Docs", "Vercel Tutorials"] },
          { title: "Testing (Jest & Cypress)",         done: false, resources: ["Jest Docs", "Cypress Docs"] },
          { title: "Docker & Deployment",              done: false, resources: ["Docker Docs", "Railway.app"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "DSA — 150 LeetCode Problems",      done: false, resources: ["LeetCode", "NeetCode"] },
          { title: "System Design Basics",             done: false, resources: ["System Design Primer"] },
          { title: "Portfolio with 3 Projects",        done: false, resources: ["GitHub Pages", "Vercel"] },
          { title: "Apply for Full Stack Roles",       done: false, resources: ["LinkedIn", "Wellfound", "Naukri"] },
        ],
      },
    ],
  },

  // ── Mobile App Developer ──────────────────────────────────
  "Mobile App Developer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "JavaScript & React Native Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "JavaScript ES6+",                  done: false, resources: ["JavaScript.info", "freeCodeCamp"] },
          { title: "React Fundamentals",               done: false, resources: ["React Docs"] },
          { title: "React Native Setup",               done: false, resources: ["React Native Docs", "Expo Docs"] },
          { title: "First Mobile App",                 done: false, resources: ["Expo Go", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core Mobile Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Navigation & Routing",             done: false, resources: ["React Navigation Docs"] },
          { title: "State Management (Redux/Zustand)", done: false, resources: ["Redux Docs", "Zustand Docs"] },
          { title: "Firebase Integration",             done: false, resources: ["Firebase Docs"] },
          { title: "REST API Integration",             done: false, resources: ["Axios Docs", "React Query"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced & Native Features",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Camera, Location, Notifications",  done: false, resources: ["Expo Docs", "React Native Docs"] },
          { title: "App Performance Optimization",     done: false, resources: ["React Native Performance"] },
          { title: "App Store Deployment",             done: false, resources: ["Apple Developer", "Google Play Console"] },
          { title: "2 Published Apps",                 done: false, resources: ["App Store", "Play Store"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Flutter or Swift as Second Skill", done: false, resources: ["Flutter Docs", "Swift Docs"] },
          { title: "Portfolio & Resume",               done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for Mobile Dev Roles",       done: false, resources: ["LinkedIn", "Naukri", "Wellfound"] },
          { title: "Technical Interview Prep",         done: false, resources: ["LeetCode", "InterviewBit"] },
        ],
      },
    ],
  },

  // ── Blockchain Developer ──────────────────────────────────
  "Blockchain Developer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Blockchain Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Blockchain & Crypto Basics",       done: false, resources: ["Bitcoin Whitepaper", "Investopedia"] },
          { title: "JavaScript & Node.js",             done: false, resources: ["JavaScript.info", "Node Docs"] },
          { title: "Ethereum & Smart Contracts",       done: false, resources: ["Ethereum Docs", "CryptoZombies"] },
          { title: "Solidity Basics",                  done: false, resources: ["Solidity Docs", "CryptoZombies"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Smart Contract Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Advanced Solidity",                done: false, resources: ["Solidity Docs", "OpenZeppelin"] },
          { title: "Hardhat & Testing",                done: false, resources: ["Hardhat Docs", "Waffle"] },
          { title: "DeFi Protocols",                   done: false, resources: ["Uniswap Docs", "Aave Docs"] },
          { title: "Deploy Smart Contract",            done: false, resources: ["Hardhat", "Alchemy"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "DApp Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Web3.js & Ethers.js",              done: false, resources: ["Web3.js Docs", "Ethers.js Docs"] },
          { title: "React + Web3 Frontend",            done: false, resources: ["wagmi Docs", "RainbowKit"] },
          { title: "IPFS & Decentralized Storage",     done: false, resources: ["IPFS Docs", "Filecoin"] },
          { title: "Build Full DApp",                  done: false, resources: ["GitHub", "Alchemy", "Vercel"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "NFT Marketplace Project",          done: false, resources: ["OpenSea API", "GitHub"] },
          { title: "Security Auditing Basics",         done: false, resources: ["ConsenSys Diligence", "Trail of Bits"] },
          { title: "Portfolio & GitHub",               done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for Web3 Roles",             done: false, resources: ["Web3.career", "CryptoJobs", "LinkedIn"] },
        ],
      },
    ],
  },

  // ── Prompt Engineer ───────────────────────────────────────
  "Prompt Engineer": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "AI & LLM Foundations",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "How LLMs Work",                    done: false, resources: ["Andrej Karpathy YouTube", "OpenAI Blog"] },
          { title: "ChatGPT & Claude Mastery",         done: false, resources: ["OpenAI Docs", "Anthropic Docs"] },
          { title: "Prompt Engineering Basics",        done: false, resources: ["Learn Prompting", "OpenAI Cookbook"] },
          { title: "Python Basics",                    done: false, resources: ["Python Docs", "freeCodeCamp"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Advanced Prompting",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Chain of Thought Prompting",       done: false, resources: ["Learn Prompting", "Papers With Code"] },
          { title: "Few-Shot & Zero-Shot Learning",    done: false, resources: ["OpenAI Cookbook"] },
          { title: "RAG & Vector Databases",           done: false, resources: ["LangChain Docs", "Pinecone Docs"] },
          { title: "LangChain & LlamaIndex",           done: false, resources: ["LangChain Docs", "LlamaIndex Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "AI Applications",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Build AI Chatbot",                 done: false, resources: ["OpenAI API", "LangChain"] },
          { title: "AI Agents & Tools",                done: false, resources: ["AutoGPT", "LangChain Agents"] },
          { title: "Midjourney & Image Prompting",     done: false, resources: ["Midjourney Docs"] },
          { title: "Prompt Portfolio",                 done: false, resources: ["GitHub", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "AI Tool Comparison Portfolio",     done: false, resources: ["GitHub", "Medium"] },
          { title: "LinkedIn & Personal Brand",        done: false, resources: ["LinkedIn"] },
          { title: "Apply for Prompt Engineering Roles",done: false, resources: ["LinkedIn", "AI Job Boards"] },
          { title: "Freelance on Upwork",              done: false, resources: ["Upwork", "Fiverr"] },
        ],
      },
    ],
  },

  // ── Game Developer ────────────────────────────────────────
  "Game Developer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Game Dev Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Unity Engine Basics",              done: false, resources: ["Unity Learn", "Brackeys YouTube"] },
          { title: "C# Programming",                   done: false, resources: ["Microsoft C# Docs", "Unity Learn"] },
          { title: "Game Design Principles",           done: false, resources: ["Game Maker's Toolkit", "GDC Talks"] },
          { title: "First 2D Game",                    done: false, resources: ["Unity Learn", "Brackeys"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core Game Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Physics & Collision Systems",      done: false, resources: ["Unity Docs", "Sebastian Lague"] },
          { title: "UI & Game Menus",                  done: false, resources: ["Unity UI Docs"] },
          { title: "Audio & Particle Systems",         done: false, resources: ["Unity Docs"] },
          { title: "First 3D Game",                    done: false, resources: ["Unity Learn", "itch.io"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Game Dev",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "AI for Games (Pathfinding, FSM)",  done: false, resources: ["Unity AI Docs", "GDC Talks"] },
          { title: "Multiplayer with Photon",          done: false, resources: ["Photon Docs"] },
          { title: "Shader & Visual Effects",          done: false, resources: ["Unity Shader Graph"] },
          { title: "Unreal Engine Basics (Optional)",  done: false, resources: ["Unreal Online Learning"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Publish & Get Hired",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Publish Game on itch.io or Steam", done: false, resources: ["itch.io", "Steam Developer"] },
          { title: "Game Portfolio",                   done: false, resources: ["GitHub", "itch.io"] },
          { title: "Game Jam Participation",           done: false, resources: ["itch.io Game Jams", "Ludum Dare"] },
          { title: "Apply for Game Dev Roles",         done: false, resources: ["LinkedIn", "GameJobs.co"] },
        ],
      },
    ],
  },

  // ── AR/VR Developer ───────────────────────────────────────
  "AR/VR Developer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "XR Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Unity Basics",                     done: false, resources: ["Unity Learn", "Brackeys"] },
          { title: "C# Programming",                   done: false, resources: ["Microsoft C# Docs"] },
          { title: "XR & Spatial Computing Concepts",  done: false, resources: ["Meta XR Docs", "Apple Vision Pro Docs"] },
          { title: "First AR App",                     done: false, resources: ["AR Foundation Docs", "Unity Learn"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "VR Development",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Meta Quest Development",           done: false, resources: ["Meta XR SDK", "Unity XR"] },
          { title: "Hand Tracking & Controllers",      done: false, resources: ["Meta XR Docs"] },
          { title: "VR UI & UX Design",                done: false, resources: ["Valem Tutorials"] },
          { title: "First VR Experience",              done: false, resources: ["Meta Quest", "SideQuest"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced XR",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "ARKit & ARCore",                   done: false, resources: ["Apple ARKit Docs", "Google ARCore"] },
          { title: "Spatial Audio & Haptics",          done: false, resources: ["Resonance Audio", "Unity Haptics"] },
          { title: "WebXR Development",                done: false, resources: ["WebXR Docs", "A-Frame"] },
          { title: "XR Portfolio Project",             done: false, resources: ["GitHub", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Publish App on Meta Store",        done: false, resources: ["Meta Developer"] },
          { title: "AR/VR Portfolio",                  done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for XR Developer Roles",     done: false, resources: ["LinkedIn", "XR Jobs"] },
          { title: "Mock Interviews",                  done: false, resources: ["Pramp", "Interviewing.io"] },
        ],
      },
    ],
  },

  // ── IoT Engineer ─────────────────────────────────────────
  "IoT Engineer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Electronics & Programming",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Electronics & Circuit Basics",     done: false, resources: ["All About Electronics", "Khan Academy"] },
          { title: "Arduino Programming",              done: false, resources: ["Arduino Docs", "Paul McWhorter"] },
          { title: "Python Basics",                    done: false, resources: ["Python Docs"] },
          { title: "Raspberry Pi Setup",               done: false, resources: ["Raspberry Pi Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "IoT Communication",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "MQTT Protocol",                    done: false, resources: ["MQTT Docs", "HiveMQ"] },
          { title: "WiFi, Bluetooth & LoRa",           done: false, resources: ["ESP32 Docs", "Arduino Docs"] },
          { title: "REST APIs for IoT",                done: false, resources: ["Node-RED Docs"] },
          { title: "First IoT Project",                done: false, resources: ["Instructables", "Hackster.io"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Cloud IoT",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "AWS IoT Core",                     done: false, resources: ["AWS IoT Docs"] },
          { title: "Azure IoT Hub",                    done: false, resources: ["Microsoft IoT Docs"] },
          { title: "Edge Computing",                   done: false, resources: ["AWS Greengrass Docs"] },
          { title: "IoT Dashboard Project",            done: false, resources: ["Grafana", "Node-RED"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "IoT Portfolio (3 Projects)",       done: false, resources: ["GitHub", "Hackster.io"] },
          { title: "AWS IoT Certification",            done: false, resources: ["AWS Certification"] },
          { title: "Resume & LinkedIn",                done: false, resources: ["LinkedIn"] },
          { title: "Apply for IoT Roles",              done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
        ],
      },
    ],
  },

  // ── QA Engineer ───────────────────────────────────────────
  "QA Engineer": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Testing Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Software Testing Basics",          done: false, resources: ["ISTQB Foundation", "Guru99"] },
          { title: "Manual Testing",                   done: false, resources: ["Software Testing Help", "Guru99"] },
          { title: "Bug Reporting with JIRA",          done: false, resources: ["Atlassian JIRA Docs"] },
          { title: "API Testing with Postman",         done: false, resources: ["Postman Docs", "Postman Learning"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Test Automation",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Python or Java for Testing",       done: false, resources: ["Python Docs", "Java Docs"] },
          { title: "Selenium WebDriver",               done: false, resources: ["Selenium Docs", "Automation Step by Step"] },
          { title: "Cypress.io",                       done: false, resources: ["Cypress Docs"] },
          { title: "Automation Test Project",          done: false, resources: ["GitHub"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Testing",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Performance Testing (JMeter)",     done: false, resources: ["JMeter Docs", "Blazemeter"] },
          { title: "Security Testing Basics",          done: false, resources: ["OWASP Testing Guide"] },
          { title: "CI/CD Integration",                done: false, resources: ["Jenkins Docs", "GitHub Actions"] },
          { title: "Mobile App Testing",               done: false, resources: ["Appium Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "ISTQB Certification",              done: false, resources: ["ISTQB Official"] },
          { title: "QA Portfolio",                     done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for QA Roles",               done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Mock Interviews",                  done: false, resources: ["Pramp", "InterviewBit"] },
        ],
      },
    ],
  },

  // ── ML Engineer ───────────────────────────────────────────
  "ML Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Python & ML Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Python & OOP",                     done: false, resources: ["Python Docs", "Real Python"] },
          { title: "NumPy, Pandas, Scikit-Learn",      done: false, resources: ["Kaggle Learn", "Scikit-Learn Docs"] },
          { title: "SQL & Data Wrangling",             done: false, resources: ["Mode SQL", "Kaggle SQL"] },
          { title: "Statistics for ML",                done: false, resources: ["StatQuest", "Khan Academy"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Deep Learning",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "PyTorch Fundamentals",             done: false, resources: ["PyTorch Docs", "fast.ai"] },
          { title: "CNNs, RNNs, Transformers",         done: false, resources: ["CS231n", "Andrej Karpathy"] },
          { title: "NLP & Hugging Face",               done: false, resources: ["Hugging Face Course"] },
          { title: "Build & Train a Model",            done: false, resources: ["Kaggle", "Google Colab"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "MLOps & Production",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Docker & Kubernetes for ML",       done: false, resources: ["Docker Docs", "KodeKloud"] },
          { title: "MLflow & Experiment Tracking",     done: false, resources: ["MLflow Docs"] },
          { title: "Model Serving (FastAPI)",          done: false, resources: ["FastAPI Docs"] },
          { title: "End-to-End ML Pipeline",           done: false, resources: ["Made With ML", "MLflow"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Kaggle Competition (Top 10%)",     done: false, resources: ["Kaggle"] },
          { title: "ML Portfolio (3 Projects)",        done: false, resources: ["GitHub", "Hugging Face Spaces"] },
          { title: "LeetCode DSA",                     done: false, resources: ["LeetCode", "NeetCode"] },
          { title: "Apply for ML Engineer Roles",      done: false, resources: ["LinkedIn", "Wellfound", "AI Jobs"] },
        ],
      },
    ],
  },
  
  // ── Civil Engineer ────────────────────────────────────────
  "Civil Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Core Civil Engineering",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Structural Analysis Basics",       done: false, resources: ["NPTEL Civil", "MIT OCW"] },
          { title: "AutoCAD 2D & 3D",                  done: false, resources: ["AutoCAD Docs", "Udemy AutoCAD"] },
          { title: "Building Materials & Construction",done: false, resources: ["NPTEL", "Civil Engineering Academy"] },
          { title: "Surveying & Leveling",             done: false, resources: ["NPTEL Surveying"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Design & Software",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "STAAD Pro Structural Design",      done: false, resources: ["Bentley STAAD Docs", "YouTube STAAD"] },
          { title: "Revit BIM Basics",                 done: false, resources: ["Autodesk Revit Docs"] },
          { title: "Geotechnical Engineering",         done: false, resources: ["NPTEL Geotechnical"] },
          { title: "Highway & Transportation Design",  done: false, resources: ["IRC Codes", "NPTEL"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Project Management",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Construction Project Management",  done: false, resources: ["PMBOK", "Coursera PM"] },
          { title: "Quantity Estimation & Costing",    done: false, resources: ["Civil Engineering Academy"] },
          { title: "Environmental Impact Assessment",  done: false, resources: ["EPA Docs", "NPTEL"] },
          { title: "Internship / Site Visit",          done: false, resources: ["Local Construction Sites"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GATE Preparation (Optional)",      done: false, resources: ["Made Easy", "GATE Academy"] },
          { title: "Portfolio of Design Projects",     done: false, resources: ["LinkedIn", "GitHub"] },
          { title: "Apply for Civil Engineering Roles",done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Government Exams (PWD/CPWD)",      done: false, resources: ["SSC JE Guide", "PWD Exam"] },
        ],
      },
    ],
  },

  // ── Mechanical Engineer ───────────────────────────────────
  "Mechanical Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Mechanical Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Engineering Drawing & CAD",        done: false, resources: ["AutoCAD Docs", "NPTEL"] },
          { title: "Thermodynamics Basics",            done: false, resources: ["MIT OCW Thermo", "NPTEL"] },
          { title: "SolidWorks Basics",                done: false, resources: ["SolidWorks Docs", "MySolidWorks"] },
          { title: "Materials Science",                done: false, resources: ["MIT OCW Materials", "NPTEL"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Design & Simulation",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Advanced SolidWorks / CATIA",      done: false, resources: ["CATIA Docs", "Udemy SolidWorks"] },
          { title: "ANSYS FEA Simulation",             done: false, resources: ["ANSYS Docs", "ANSYS YouTube"] },
          { title: "Fluid Mechanics & CFD",            done: false, resources: ["NPTEL CFD", "OpenFOAM"] },
          { title: "Machine Design",                   done: false, resources: ["Shigley's ME Design", "NPTEL"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Manufacturing & Industry",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Manufacturing Processes",          done: false, resources: ["NPTEL Manufacturing", "MIT OCW"] },
          { title: "CNC & CAM Programming",            done: false, resources: ["Mastercam Docs", "Udemy CNC"] },
          { title: "Industry 4.0 & Automation",        done: false, resources: ["Siemens Learning", "Coursera"] },
          { title: "Internship in Manufacturing",      done: false, resources: ["Local Industries", "Internshala"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GATE Preparation (Optional)",      done: false, resources: ["Made Easy", "GATE Academy"] },
          { title: "Design Portfolio",                 done: false, resources: ["LinkedIn", "GrabCAD"] },
          { title: "Apply for Mech Eng Roles",         done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Core Company Interviews",          done: false, resources: ["InterviewBit", "PrepInsta"] },
        ],
      },
    ],
  },

  // ── Electrical Engineer ───────────────────────────────────
  "Electrical Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Electrical Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Circuit Analysis Basics",          done: false, resources: ["All About Circuits", "Khan Academy"] },
          { title: "MATLAB & Simulink",                done: false, resources: ["MathWorks Docs", "Coursera MATLAB"] },
          { title: "Digital Electronics",              done: false, resources: ["NPTEL Digital", "Neso Academy"] },
          { title: "Electrical Machines",              done: false, resources: ["NPTEL Electrical Machines"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Power Systems",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Power Systems Analysis",           done: false, resources: ["NPTEL Power Systems", "MIT OCW"] },
          { title: "Renewable Energy Systems",         done: false, resources: ["IRENA Docs", "Coursera Energy"] },
          { title: "PLC & SCADA",                      done: false, resources: ["Siemens PLC Docs", "RealPars"] },
          { title: "AutoCAD Electrical",               done: false, resources: ["AutoCAD Electrical Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Embedded & Advanced",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Embedded Systems & Microcontrollers",done: false, resources: ["Arduino Docs", "STM32 Docs"] },
          { title: "Power Electronics",                done: false, resources: ["NPTEL Power Electronics"] },
          { title: "Control Systems",                  done: false, resources: ["NPTEL Control", "Brian Douglas YouTube"] },
          { title: "EV Technology Basics",             done: false, resources: ["Coursera EV", "MIT OCW"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GATE Electrical Preparation",      done: false, resources: ["Made Easy", "GATE Academy"] },
          { title: "Portfolio & Projects",             done: false, resources: ["LinkedIn", "GitHub"] },
          { title: "Apply for Electrical Roles",       done: false, resources: ["LinkedIn", "Naukri", "BHEL Careers"] },
          { title: "Government PSU Exams",             done: false, resources: ["GATE Score", "BHEL", "NTPC"] },
        ],
      },
    ],
  },

  // ── Chemical Engineer ─────────────────────────────────────
  "Chemical Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Chemical Eng Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Thermodynamics & Heat Transfer",   done: false, resources: ["NPTEL Chemical", "MIT OCW"] },
          { title: "Fluid Mechanics",                  done: false, resources: ["NPTEL Fluid", "LearnChemE"] },
          { title: "Mass Transfer",                    done: false, resources: ["LearnChemE", "NPTEL"] },
          { title: "Chemical Reaction Engineering",    done: false, resources: ["NPTEL CRE", "LearnChemE"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Process Design",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Aspen HYSYS Process Simulation",   done: false, resources: ["AspenTech Docs", "Udemy HYSYS"] },
          { title: "Process Equipment Design",         done: false, resources: ["NPTEL Equipment Design"] },
          { title: "Safety & HAZOP Analysis",          done: false, resources: ["AIChE Safety Docs"] },
          { title: "MATLAB for ChE",                   done: false, resources: ["MathWorks Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Industry Applications",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Petroleum Refining Processes",     done: false, resources: ["SPE Docs", "NPTEL Petroleum"] },
          { title: "Polymer & Materials Science",      done: false, resources: ["MIT OCW Polymer"] },
          { title: "Pharmaceutical Manufacturing",     done: false, resources: ["FDA GMP Docs"] },
          { title: "Environmental Engineering",        done: false, resources: ["EPA Docs", "NPTEL"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GATE Chemical Engineering",        done: false, resources: ["Made Easy", "GATE Academy"] },
          { title: "Internship in Chemical Plant",     done: false, resources: ["Internshala", "LinkedIn"] },
          { title: "Apply for Chemical Eng Roles",     done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "PSU Exams (ONGC, IOCL)",          done: false, resources: ["GATE Score", "Company Portals"] },
        ],
      },
    ],
  },

  // ── Aerospace Engineer ────────────────────────────────────
  "Aerospace Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Aerospace Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Aerodynamics Basics",              done: false, resources: ["NASA Aeronautics", "NPTEL Aerospace"] },
          { title: "Flight Mechanics",                 done: false, resources: ["MIT OCW Aerospace", "NPTEL"] },
          { title: "MATLAB & Python",                  done: false, resources: ["MathWorks", "Python Docs"] },
          { title: "Aircraft Structures",              done: false, resources: ["NPTEL Aircraft Structures"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Design & Simulation",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "CATIA / SolidWorks",               done: false, resources: ["CATIA Docs", "SolidWorks Docs"] },
          { title: "CFD with ANSYS Fluent",            done: false, resources: ["ANSYS Docs", "SimScale"] },
          { title: "Propulsion Systems",               done: false, resources: ["MIT OCW Propulsion", "NPTEL"] },
          { title: "Avionics & Systems",               done: false, resources: ["NPTEL Avionics"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Space & Defense",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Orbital Mechanics",                done: false, resources: ["NASA JPL", "MIT OCW"] },
          { title: "Satellite Systems",                done: false, resources: ["ESA Education", "ISRO Docs"] },
          { title: "Rocket Propulsion",                done: false, resources: ["Everyday Astronaut", "NASA"] },
          { title: "UAV / Drone Design",               done: false, resources: ["ArduPilot Docs", "PX4 Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GATE Aerospace",                   done: false, resources: ["Made Easy", "GATE Academy"] },
          { title: "ISRO / DRDO Exam Prep",            done: false, resources: ["Previous Papers", "Made Easy"] },
          { title: "Apply for Aerospace Roles",        done: false, resources: ["LinkedIn", "ISRO Careers", "HAL Careers"] },
          { title: "Aerospace Portfolio",              done: false, resources: ["GitHub", "LinkedIn"] },
        ],
      },
    ],
  },

  // ── Robotics Engineer ─────────────────────────────────────
  "Robotics Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Robotics Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Python & C++ Basics",              done: false, resources: ["Python Docs", "C++ Primer"] },
          { title: "Electronics & Arduino",            done: false, resources: ["Arduino Docs", "Paul McWhorter"] },
          { title: "Linear Algebra & Kinematics",      done: false, resources: ["Khan Academy", "MIT OCW"] },
          { title: "Build Simple Robot",               done: false, resources: ["Instructables", "Hackster.io"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "ROS & Control Systems",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "ROS 2 Fundamentals",               done: false, resources: ["ROS Docs", "The Construct"] },
          { title: "Control Systems & PID",            done: false, resources: ["Brian Douglas YouTube", "NPTEL"] },
          { title: "Computer Vision with OpenCV",      done: false, resources: ["OpenCV Docs", "PyImageSearch"] },
          { title: "Robot Simulation in Gazebo",       done: false, resources: ["Gazebo Docs", "The Construct"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Robotics",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Motion Planning & SLAM",           done: false, resources: ["MoveIt Docs", "OpenSLAM"] },
          { title: "Deep Learning for Robotics",       done: false, resources: ["fast.ai", "Coursera Robotics"] },
          { title: "Manipulation & Grasping",          done: false, resources: ["MoveIt Docs"] },
          { title: "Autonomous Robot Project",         done: false, resources: ["GitHub", "ROS"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Robotics Portfolio",               done: false, resources: ["GitHub", "LinkedIn", "Hackster.io"] },
          { title: "Participate in Robotics Competition",done: false, resources: ["RoboCup", "FIRST Robotics"] },
          { title: "Apply for Robotics Roles",         done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "GATE Robotics / Mechatronics",     done: false, resources: ["GATE Academy", "Made Easy"] },
        ],
      },
    ],
  },

  // ── Environmental Engineer ────────────────────────────────
  "Environmental Engineer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Environmental Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Environmental Science Fundamentals",done: false, resources: ["Khan Academy", "EPA Docs"] },
          { title: "Water & Wastewater Treatment",     done: false, resources: ["NPTEL Env Eng", "WHO Docs"] },
          { title: "Air Quality & Pollution Control",  done: false, resources: ["EPA Air Docs", "NPTEL"] },
          { title: "Environmental Laws & Regulations", done: false, resources: ["MoEFCC Docs", "EPA Regulations"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Technical Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GIS & Remote Sensing",             done: false, resources: ["QGIS Docs", "Esri Learn"] },
          { title: "Environmental Impact Assessment",  done: false, resources: ["UNEP EIA Guide", "MoEFCC"] },
          { title: "Solid Waste Management",           done: false, resources: ["NPTEL SWM", "WHO Docs"] },
          { title: "Environmental Sampling & Analysis",done: false, resources: ["EPA Methods", "APHA Standards"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Topics",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Climate Change & Carbon Footprint",done: false, resources: ["IPCC Reports", "GHG Protocol"] },
          { title: "Remediation & Cleanup",            done: false, resources: ["EPA Remediation Docs"] },
          { title: "Environmental Modeling",           done: false, resources: ["EPA Models", "MATLAB"] },
          { title: "Field Project / Internship",       done: false, resources: ["NGOs", "Consulting Firms"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "GATE Environmental Science",       done: false, resources: ["GATE Academy"] },
          { title: "ISO 14001 EMS Certification",      done: false, resources: ["ISO Docs", "BSI Group"] },
          { title: "Apply for Env Eng Roles",          done: false, resources: ["LinkedIn", "Naukri", "NGO Jobs"] },
          { title: "Portfolio of EIA Projects",        done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
    ],
  },

  // ── Petroleum Engineer ────────────────────────────────────
  "Petroleum Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Petroleum Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Geology & Geophysics Basics",      done: false, resources: ["SPE Docs", "NPTEL Petroleum"] },
          { title: "Reservoir Engineering",            done: false, resources: ["SPE Textbooks", "NPTEL"] },
          { title: "Fluid Mechanics & PVT",            done: false, resources: ["NPTEL", "SPE Docs"] },
          { title: "Drilling Engineering Basics",      done: false, resources: ["IADC Drilling Manual"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Reservoir & Drilling",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Petrel Reservoir Modeling",        done: false, resources: ["Schlumberger Petrel Docs"] },
          { title: "Well Log Analysis",                done: false, resources: ["Halliburton Docs", "SPE"] },
          { title: "Drilling Fluids & Cementing",      done: false, resources: ["IADC", "Baker Hughes Docs"] },
          { title: "Production Engineering",           done: false, resources: ["SPE Docs", "NPTEL"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Simulation & Production",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Eclipse Reservoir Simulation",     done: false, resources: ["Schlumberger Eclipse Docs"] },
          { title: "Enhanced Oil Recovery (EOR)",      done: false, resources: ["SPE EOR Docs"] },
          { title: "Offshore Operations",              done: false, resources: ["IADC Offshore Guide"] },
          { title: "HSE in Petroleum Industry",        done: false, resources: ["IOGP Safety Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "GATE Petroleum Engineering",       done: false, resources: ["GATE Academy"] },
          { title: "Internship with Oil Company",      done: false, resources: ["ONGC", "Reliance", "Cairn"] },
          { title: "Apply for Petroleum Roles",        done: false, resources: ["LinkedIn", "Naukri", "ONGC Careers"] },
          { title: "SPE Student Membership",           done: false, resources: ["SPE Org"] },
        ],
      },
    ],
  },

  // ── Doctor (MBBS) ─────────────────────────────────────────
  "Doctor (MBBS)": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "NEET Preparation",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "Physics — NEET Syllabus",          done: false, resources: ["HC Verma", "DC Pandey", "Allen"] },
          { title: "Chemistry — NEET Syllabus",        done: false, resources: ["NCERT Chemistry", "OP Tandon"] },
          { title: "Biology — NEET Syllabus",          done: false, resources: ["NCERT Biology", "Trueman's Biology"] },
          { title: "NEET Mock Tests",                  done: false, resources: ["Allen", "Aakash", "PW"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "MBBS — Pre-Clinical (1st Year)",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Anatomy",                          done: false, resources: ["Gray's Anatomy", "BD Chaurasia"] },
          { title: "Physiology",                       done: false, resources: ["Guyton & Hall", "AK Jain"] },
          { title: "Biochemistry",                     done: false, resources: ["Harper's Biochemistry", "DM Vasudevan"] },
          { title: "First Professional Exam",          done: false, resources: ["College Study Material"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "MBBS — Para-Clinical (2nd & 3rd Year)",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "Pathology & Microbiology",         done: false, resources: ["Robbins Pathology", "Ananthanarayan"] },
          { title: "Pharmacology & Forensic Medicine", done: false, resources: ["KD Tripathi Pharmacology"] },
          { title: "Community Medicine (PSM)",         done: false, resources: ["Park's Textbook PSM"] },
          { title: "Clinical Postings Begin",          done: false, resources: ["Hospital Rotations"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "MBBS — Clinical & Internship",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Medicine, Surgery, OBG, Pediatrics",done: false, resources: ["Harrison's", "Bailey & Love"] },
          { title: "Final MBBS Examinations",          done: false, resources: ["Across Textbooks"] },
          { title: "Internship (1 Year)",              done: false, resources: ["Hospital Rotations"] },
          { title: "NEET-PG Preparation (Optional)",   done: false, resources: ["DAMS", "MedPG"] },
        ],
      },
    ],
  },

  // ── Nurse ─────────────────────────────────────────────────
  "Nurse": {
    totalDuration: "48 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "BSc Nursing — Year 1",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "Anatomy & Physiology",             done: false, resources: ["Ross & Wilson", "BD Chaurasia"] },
          { title: "Fundamentals of Nursing",          done: false, resources: ["Potter & Perry", "Taylor's Nursing"] },
          { title: "Nutrition & Biochemistry",         done: false, resources: ["College Material"] },
          { title: "Microbiology & Psychology",        done: false, resources: ["Ananthanarayan", "Morgan"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "BSc Nursing — Year 2 & 3",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "Medical-Surgical Nursing",         done: false, resources: ["Brunner & Suddarth"] },
          { title: "Pediatric & Maternity Nursing",    done: false, resources: ["College Material"] },
          { title: "Community Health Nursing",         done: false, resources: ["Park's Textbook"] },
          { title: "Mental Health Nursing",            done: false, resources: ["Townsend Psychiatric Nursing"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "BSc Nursing — Year 4 & Internship",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Nursing Research & Education",     done: false, resources: ["Polit & Beck Research"] },
          { title: "Administration & Management",      done: false, resources: ["College Material"] },
          { title: "Final Nursing Examinations",       done: false, resources: ["College Exam Guides"] },
          { title: "Clinical Internship",              done: false, resources: ["Hospital Rotations"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Registration & Specialization",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "State Nursing Council Registration",done: false, resources: ["INC Docs", "State Council"] },
          { title: "AIIMS / PGI Specialization Exam",  done: false, resources: ["MedPG", "DAMS"] },
          { title: "Apply for Nursing Jobs",           done: false, resources: ["LinkedIn", "Naukri", "NHS Jobs"] },
          { title: "International Nursing (NCLEX-RN)", done: false, resources: ["Kaplan NCLEX", "Saunders NCLEX"] },
        ],
      },
    ],
  },

  // ── Psychologist ──────────────────────────────────────────
  "Psychologist": {
    totalDuration: "24 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Psychology Foundations",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Introduction to Psychology",       done: false, resources: ["Psychology by Myers", "Crash Course Psych"] },
          { title: "Developmental Psychology",         done: false, resources: ["Santrock Lifespan Development"] },
          { title: "Abnormal Psychology",              done: false, resources: ["Kring Abnormal Psychology", "DSM-5"] },
          { title: "Research Methods",                 done: false, resources: ["APA Research Guide"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Clinical Skills",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "Cognitive Behavioral Therapy (CBT)",done: false, resources: ["Aaron Beck CBT", "Greenberger Padesky"] },
          { title: "Assessment & Testing",             done: false, resources: ["Psychological Assessment"] },
          { title: "Counseling Skills",                done: false, resources: ["Gerald Corey Counseling"] },
          { title: "Ethics in Psychology",             done: false, resources: ["APA Ethics Code"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization",
        duration: "9 months",
        status:   "locked",
        milestones: [
          { title: "Child & Adolescent Psychology",    done: false, resources: ["Kaplan Child Psychiatry"] },
          { title: "Organizational Psychology",        done: false, resources: ["Robbins OB"] },
          { title: "Neuropsychology Basics",           done: false, resources: ["Lezak Neuropsychological Assessment"] },
          { title: "Supervised Clinical Hours",        done: false, resources: ["Hospital / Clinic Supervision"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "RCI Registration (India)",         done: false, resources: ["RCI Docs"] },
          { title: "Start Private Practice",           done: false, resources: ["LinkedIn", "Practo"] },
          { title: "Online Therapy Platforms",         done: false, resources: ["YourDost", "BetterHelp"] },
          { title: "Apply for Clinical / Corporate Roles",done: false, resources: ["LinkedIn", "Naukri"] },
        ],
      },
    ],
  },

  // ── Pharmacist ────────────────────────────────────────────
  "Pharmacist": {
    totalDuration: "48 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "B.Pharm Year 1 & 2",
        duration: "24 months",
        status:   "in_progress",
        milestones: [
          { title: "Pharmaceutical Chemistry",         done: false, resources: ["Medicinal Chemistry by Foye"] },
          { title: "Pharmacognosy & Anatomy",          done: false, resources: ["Trease Evans Pharmacognosy"] },
          { title: "Pharmaceutical Analysis",          done: false, resources: ["Instrumental Methods Analysis"] },
          { title: "Human Anatomy & Physiology",       done: false, resources: ["Ross & Wilson"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "B.Pharm Year 3 & 4",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "Pharmacology",                     done: false, resources: ["KD Tripathi", "Rang & Dale"] },
          { title: "Pharmaceutics & Drug Delivery",    done: false, resources: ["Lachman Pharmaceutical"] },
          { title: "Clinical Pharmacy",                done: false, resources: ["Dipiro Pharmacotherapy"] },
          { title: "Pharmacy Practice",                done: false, resources: ["Remington's Pharmacy"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Registration & Internship",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "Pharmacy Council Registration",    done: false, resources: ["PCI Docs", "State Pharmacy Council"] },
          { title: "Hospital Internship",              done: false, resources: ["Hospital Rotations"] },
          { title: "GPAT Preparation (M.Pharm)",       done: false, resources: ["GPAT Guide", "GoCBT"] },
          { title: "Apply for Pharmacy Roles",         done: false, resources: ["LinkedIn", "Naukri", "1mg Careers"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Specialization",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "Clinical Research Associate",      done: false, resources: ["ACRP Certification"] },
          { title: "Regulatory Affairs",               done: false, resources: ["RAPS Certification"] },
          { title: "Drug Store / Own Pharmacy",        done: false, resources: ["Drug License Docs"] },
          { title: "FDA / Drug Authority Roles",       done: false, resources: ["CDSCO Docs"] },
        ],
      },
    ],
  },

  // ── Physiotherapist ───────────────────────────────────────
  "Physiotherapist": {
    totalDuration: "48 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "BPT Year 1 & 2",
        duration: "24 months",
        status:   "in_progress",
        milestones: [
          { title: "Anatomy & Physiology",             done: false, resources: ["Ross & Wilson", "BD Chaurasia"] },
          { title: "Biomechanics",                     done: false, resources: ["Nordin & Frankel Biomechanics"] },
          { title: "Exercise Physiology",              done: false, resources: ["ACSM Exercise Physiology"] },
          { title: "Electrotherapy Basics",            done: false, resources: ["Clayton's Electrotherapy"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "BPT Year 3 & 4",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "Musculoskeletal Physiotherapy",    done: false, resources: ["Maitland Manual Therapy"] },
          { title: "Neurological Physiotherapy",       done: false, resources: ["Bobath Therapy", "PNF"] },
          { title: "Cardiopulmonary Physiotherapy",    done: false, resources: ["Frownfelter Cardiopulmonary"] },
          { title: "Sports Physiotherapy",             done: false, resources: ["Brukner & Khan Sports Medicine"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Internship",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "6-Month Clinical Internship",      done: false, resources: ["Hospital Rotations"] },
          { title: "IAP Registration",                 done: false, resources: ["IAP Docs"] },
          { title: "CPD Courses",                      done: false, resources: ["Physiotutors", "Evidence in Motion"] },
          { title: "Apply for Physiotherapy Roles",    done: false, resources: ["LinkedIn", "Naukri", "Practo"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Specialization",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "Sports Physio Certification",      done: false, resources: ["ISOKINETIC", "SMA"] },
          { title: "Manual Therapy Certification",     done: false, resources: ["IFOMPT", "NAIOMT"] },
          { title: "Start Own Clinic",                 done: false, resources: ["Clinic Setup Guide"] },
          { title: "International Opportunities",      done: false, resources: ["NHS Jobs UK", "Indeed Australia"] },
        ],
      },
    ],
  },

  // ── Dentist ───────────────────────────────────────────────
  "Dentist": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "NEET & BDS Year 1",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "NEET UG Preparation",              done: false, resources: ["NCERT Biology", "HC Verma", "Allen"] },
          { title: "Dental Anatomy & Histology",       done: false, resources: ["Wheeler's Dental Anatomy"] },
          { title: "General Human Anatomy",            done: false, resources: ["BD Chaurasia", "Gray's Anatomy"] },
          { title: "Dental Materials",                 done: false, resources: ["Craig Dental Materials"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "BDS Year 2 & 3",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "General Pathology & Microbiology", done: false, resources: ["Robbins Pathology", "Ananthanarayan"] },
          { title: "Oral Pathology",                   done: false, resources: ["Shafer's Oral Pathology"] },
          { title: "Pharmacology",                     done: false, resources: ["KD Tripathi Pharmacology"] },
          { title: "Conservative Dentistry",           done: false, resources: ["Sturdevant's Operative Dentistry"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "BDS Year 4 & Final",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Oral Surgery",                     done: false, resources: ["Peterson's Oral Surgery"] },
          { title: "Prosthodontics",                   done: false, resources: ["Zarb Bolender"] },
          { title: "Orthodontics & Periodontics",      done: false, resources: ["Graber Orthodontics"] },
          { title: "Final BDS Exams",                  done: false, resources: ["Across Dental Textbooks"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Internship & Practice",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Compulsory Rotating Internship",   done: false, resources: ["Dental College Hospital"] },
          { title: "DCI Registration",                 done: false, resources: ["DCI Docs"] },
          { title: "NEET MDS for Specialization",      done: false, resources: ["DAMS", "MedPG Dental"] },
          { title: "Start Own Dental Clinic",          done: false, resources: ["Clinic Setup Guide"] },
        ],
      },
    ],
  },

  // ── Healthcare IT Specialist ──────────────────────────────
  "Healthcare IT Specialist": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Healthcare & IT Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Healthcare System Overview",       done: false, resources: ["Coursera Health Informatics"] },
          { title: "EHR Systems (Epic, Cerner)",       done: false, resources: ["Epic UserWeb", "Cerner Docs"] },
          { title: "SQL & Database Basics",            done: false, resources: ["SQLZoo", "Mode SQL"] },
          { title: "HIPAA & Healthcare Compliance",    done: false, resources: ["HHS HIPAA Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Health Informatics",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "HL7 & FHIR Standards",             done: false, resources: ["HL7 Docs", "FHIR Docs"] },
          { title: "Clinical Data Analysis",           done: false, resources: ["Coursera Health Data"] },
          { title: "Healthcare Interoperability",      done: false, resources: ["ONC Docs", "Healthit.gov"] },
          { title: "ICD-10 & Medical Coding",          done: false, resources: ["AAPC Medical Coding"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced HIT",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Digital Health & Telehealth",      done: false, resources: ["ATA Telehealth Docs"] },
          { title: "Healthcare Cybersecurity",         done: false, resources: ["HHS Security Docs"] },
          { title: "Project Management in Health IT",  done: false, resources: ["HIMSS Docs", "PMP Guide"] },
          { title: "Health IT Implementation Project", done: false, resources: ["GitHub", "Epic Sandbox"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "CHDA or CPHIMS Certification",     done: false, resources: ["HIMSS Certification"] },
          { title: "Epic or Cerner Certification",     done: false, resources: ["Epic UserWeb Training"] },
          { title: "Apply for Health IT Roles",        done: false, resources: ["LinkedIn", "HIMSS Job Board"] },
          { title: "Portfolio of HIT Projects",        done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
    ],
  },

  // ── Nutritionist ─────────────────────────────────────────
  "Nutritionist": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Nutrition Science Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Macronutrients & Micronutrients",  done: false, resources: ["Krause's Food & Nutrition", "AND Docs"] },
          { title: "Human Physiology & Metabolism",    done: false, resources: ["Guyton & Hall", "NPTEL"] },
          { title: "Food Science & Technology",        done: false, resources: ["Potter's Food Science"] },
          { title: "Introduction to Dietetics",        done: false, resources: ["Mahan Escott-Stump RDN"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Clinical Nutrition",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Medical Nutrition Therapy (MNT)",  done: false, resources: ["Nelms Clinical Nutrition"] },
          { title: "Diabetes & Obesity Nutrition",     done: false, resources: ["ADA Standards Care"] },
          { title: "Sports Nutrition",                 done: false, resources: ["ISSN Sports Nutrition"] },
          { title: "Pediatric & Maternal Nutrition",   done: false, resources: ["Pediatric Nutrition Reference"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Counseling & Practice",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Nutrition Counseling Skills",      done: false, resources: ["Miller Motivational Interviewing"] },
          { title: "Meal Planning Software",           done: false, resources: ["NutriAdmin", "Cronometer"] },
          { title: "Content Creation (Instagram Blog)",done: false, resources: ["Canva", "Instagram"] },
          { title: "Supervised Practice Hours",        done: false, resources: ["Hospital / Clinic"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Practice",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "RD or RDN Certification",          done: false, resources: ["AND Certification", "IDA India"] },
          { title: "Start Online Nutrition Consulting",done: false, resources: ["Practo", "HealthifyMe"] },
          { title: "Apply for Nutrition Roles",        done: false, resources: ["LinkedIn", "Naukri", "Hospital Jobs"] },
          { title: "Build Social Media Brand",         done: false, resources: ["Instagram", "YouTube"] },
        ],
      },
    ],
  },

  // ── Product Manager ───────────────────────────────────────
  "Product Manager": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "PM Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Product Management Basics",        done: false, resources: ["Inspired by Marty Cagan", "Lenny's Newsletter"] },
          { title: "User Research & Interviews",       done: false, resources: ["IDEO Design Thinking", "Nielsen Norman Group"] },
          { title: "Product Strategy & Roadmapping",   done: false, resources: ["Product School", "Mind the Product"] },
          { title: "Agile & Scrum Fundamentals",       done: false, resources: ["Scrum.org", "Mountain Goat Software"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "PM Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Data Analysis & SQL",              done: false, resources: ["Mode SQL", "Kaggle SQL"] },
          { title: "Figma & Wireframing",              done: false, resources: ["Figma Docs", "Figma YouTube"] },
          { title: "A/B Testing & Metrics",            done: false, resources: ["Mixpanel Docs", "Amplitude Docs"] },
          { title: "PRD & Spec Writing",               done: false, resources: ["Product School", "Atlassian"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced PM",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Growth Product Management",        done: false, resources: ["Reforge", "Lenny's Newsletter"] },
          { title: "Monetization & Pricing",           done: false, resources: ["OpenView Pricing"] },
          { title: "Stakeholder Management",           done: false, resources: ["Harvard Business Review"] },
          { title: "Technical PM Skills",              done: false, resources: ["Andrew Chen", "Joel Spolsky"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "PM Portfolio & Case Studies",      done: false, resources: ["LinkedIn", "Medium"] },
          { title: "PM Interview Prep",                done: false, resources: ["Cracking PM Interview", "PM Exercises"] },
          { title: "Apply for PM Roles",               done: false, resources: ["LinkedIn", "Naukri", "AngelList"] },
          { title: "Mock PM Interviews",               done: false, resources: ["Pramp", "Exponent"] },
        ],
      },
    ],
  },

  // ── Business Analyst ──────────────────────────────────────
  "Business Analyst": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "BA Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Business Analysis Basics",         done: false, resources: ["BABOK Guide", "IIBA Docs"] },
          { title: "Excel Advanced",                   done: false, resources: ["Leila Gharani YouTube", "Excel Campus"] },
          { title: "SQL for Business Analysis",        done: false, resources: ["Mode SQL", "SQLZoo"] },
          { title: "Requirements Gathering",           done: false, resources: ["BABOK", "Karl Wiegers RE"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Data & Process Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Tableau or Power BI",              done: false, resources: ["Tableau Public", "Microsoft Learn"] },
          { title: "Process Mapping (BPMN)",           done: false, resources: ["Bizagi Docs", "Camunda Docs"] },
          { title: "Agile BA Practices",               done: false, resources: ["Scrum.org", "Agile Alliance"] },
          { title: "Business Case Writing",            done: false, resources: ["HBR", "Business Case Template"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced BA",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "UML & Use Case Diagrams",          done: false, resources: ["Lucidchart", "Draw.io"] },
          { title: "Financial Analysis Basics",        done: false, resources: ["CFI Docs", "Investopedia"] },
          { title: "Stakeholder Management",           done: false, resources: ["PMI Docs", "HBR"] },
          { title: "BA Portfolio Project",             done: false, resources: ["GitHub", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "ECBA or CCBA Certification",       done: false, resources: ["IIBA Certification"] },
          { title: "Resume & LinkedIn",                done: false, resources: ["LinkedIn"] },
          { title: "Apply for BA Roles",               done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "BA Interview Prep",                done: false, resources: ["Glassdoor", "InterviewBit"] },
        ],
      },
    ],
  },

  // ── HR Manager ────────────────────────────────────────────
  "HR Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "HR Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Human Resource Management Basics", done: false, resources: ["Gary Dessler HRM", "SHRM Docs"] },
          { title: "Recruitment & Selection",          done: false, resources: ["LinkedIn Recruiter", "SHRM"] },
          { title: "Labour Laws & Compliance",         done: false, resources: ["Labour Law India", "SHRM"] },
          { title: "HR Software (SAP HR / Workday)",   done: false, resources: ["Workday Docs", "SAP HR Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core HR Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Performance Management",           done: false, resources: ["SHRM Docs", "Gallup Research"] },
          { title: "Learning & Development (L&D)",     done: false, resources: ["ATD Docs", "AIHR"] },
          { title: "Compensation & Benefits",          done: false, resources: ["WorldatWork", "SHRM Comp Docs"] },
          { title: "HR Analytics",                     done: false, resources: ["AIHR Analytics", "Coursera HR Analytics"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced HR",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Organizational Development",       done: false, resources: ["Burke OD", "Cummings Worley"] },
          { title: "Employee Engagement & Culture",    done: false, resources: ["Gallup Q12", "Culture Amp"] },
          { title: "HR Business Partner Skills",       done: false, resources: ["AIHR HRBP Course"] },
          { title: "DEI & Inclusion",                  done: false, resources: ["SHRM DEI Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "SHRM-CP or PHR Certification",     done: false, resources: ["SHRM Certification"] },
          { title: "LinkedIn & Personal Brand",        done: false, resources: ["LinkedIn"] },
          { title: "Apply for HR Roles",               done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "HR Interview Prep",                done: false, resources: ["Glassdoor", "SHRM Prep"] },
        ],
      },
    ],
  },

  // ── Operations Manager ────────────────────────────────────
  "Operations Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Operations Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Operations Management Basics",     done: false, resources: ["Chase Aquilano Ops Mgmt", "Coursera Ops"] },
          { title: "Process Improvement (Lean)",       done: false, resources: ["Lean Enterprise Institute", "GoLeanSixSigma"] },
          { title: "Six Sigma Basics",                 done: false, resources: ["ASQ Six Sigma", "iSixSigma"] },
          { title: "Supply Chain Basics",              done: false, resources: ["APICS CSCP Guide"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Operations Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Excel & Data Analysis",            done: false, resources: ["Leila Gharani YouTube"] },
          { title: "ERP Systems (SAP / Oracle)",       done: false, resources: ["SAP Learning Hub", "Oracle Docs"] },
          { title: "Project Management",               done: false, resources: ["PMI PMBOK", "Coursera PM"] },
          { title: "KPI & Performance Management",     done: false, resources: ["KPI.org", "Balanced Scorecard"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Operations",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Lean Six Sigma Green Belt",        done: false, resources: ["GoLeanSixSigma", "ASQ"] },
          { title: "Inventory & Demand Planning",      done: false, resources: ["APICS Docs"] },
          { title: "Vendor & Contract Management",     done: false, resources: ["ISM Docs"] },
          { title: "Operations Case Study",            done: false, resources: ["HBR Cases", "MIT OpenCourseWare"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Lean Six Sigma Black Belt (Optional)",done: false, resources: ["ASQ", "IASSC"] },
          { title: "PMP Certification",                done: false, resources: ["PMI Certification"] },
          { title: "Apply for Operations Roles",       done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Operations Interview Prep",        done: false, resources: ["Glassdoor", "PrepInsta"] },
        ],
      },
    ],
  },

  // ── Supply Chain Manager ──────────────────────────────────
  "Supply Chain Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Supply Chain Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Supply Chain Management Overview", done: false, resources: ["Chopra Meindl SCM", "APICS Docs"] },
          { title: "Logistics & Transportation",       done: false, resources: ["Council of SCM Professionals"] },
          { title: "Procurement Fundamentals",         done: false, resources: ["ISM Procurement Docs"] },
          { title: "Inventory Management",             done: false, resources: ["APICS CSCP Guide"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "SCM Tools & Analytics",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "SAP SCM or Oracle SCM",            done: false, resources: ["SAP Learning Hub"] },
          { title: "Excel & Power BI for SCM",         done: false, resources: ["Leila Gharani", "Microsoft Learn"] },
          { title: "Demand Forecasting",               done: false, resources: ["APICS Docs", "Coursera SCM"] },
          { title: "Warehouse Management",             done: false, resources: ["WERC Docs", "Coursera"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced SCM",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Global Supply Chain",              done: false, resources: ["MIT SCM Program", "World Trade Org"] },
          { title: "Sustainability in Supply Chain",   done: false, resources: ["GRI Docs", "UN Global Compact"] },
          { title: "Risk & Resilience Management",     done: false, resources: ["APICS Docs"] },
          { title: "SCM Case Study Project",           done: false, resources: ["HBR Cases", "MIT OCW"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "APICS CSCP or CPIM Certification",done: false, resources: ["APICS Certification"] },
          { title: "Resume & LinkedIn",                done: false, resources: ["LinkedIn"] },
          { title: "Apply for SCM Roles",              done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "SCM Interview Prep",               done: false, resources: ["Glassdoor", "PrepInsta"] },
        ],
      },
    ],
  },

  // ── Marketing Manager ─────────────────────────────────────
  "Marketing Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Marketing Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Marketing Basics & 4Ps",           done: false, resources: ["Philip Kotler Marketing", "HubSpot Academy"] },
          { title: "Digital Marketing Overview",       done: false, resources: ["Google Digital Garage", "HubSpot"] },
          { title: "Social Media Marketing",           done: false, resources: ["HubSpot Social Media", "Meta Blueprint"] },
          { title: "SEO Basics",                       done: false, resources: ["Moz SEO Guide", "Google SEO Starter"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Digital Marketing Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Google Ads & PPC",                 done: false, resources: ["Google Skillshop", "WordStream"] },
          { title: "Content Marketing",                done: false, resources: ["HubSpot Content", "Copyblogger"] },
          { title: "Email Marketing",                  done: false, resources: ["Mailchimp Docs", "Klaviyo Docs"] },
          { title: "Google Analytics 4",               done: false, resources: ["Google Analytics Academy"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Marketing",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Marketing Automation (HubSpot)",   done: false, resources: ["HubSpot Academy"] },
          { title: "Brand Strategy",                   done: false, resources: ["Keller Brand Management"] },
          { title: "Influencer & Affiliate Marketing", done: false, resources: ["Grin Docs", "Impact Docs"] },
          { title: "Marketing Campaign Project",       done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Google Ads Certification",         done: false, resources: ["Google Skillshop"] },
          { title: "HubSpot Marketing Certification",  done: false, resources: ["HubSpot Academy"] },
          { title: "Apply for Marketing Roles",        done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Marketing Portfolio",              done: false, resources: ["LinkedIn", "Portfolio Website"] },
        ],
      },
    ],
  },

  // ── Management Consultant ─────────────────────────────────
  "Management Consultant": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Consulting Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Consulting Industry Overview",     done: false, resources: ["Management Consulted", "McKinsey Insights"] },
          { title: "Problem Structuring (MECE)",       done: false, resources: ["Case Interview Secrets", "Victor Cheng"] },
          { title: "Business Frameworks",              done: false, resources: ["Porter's Frameworks", "BCG Matrix"] },
          { title: "Excel & PowerPoint",               done: false, resources: ["McKinsey Style PPT", "Excel Campus"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Case Interview Prep",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Case Interview Frameworks",        done: false, resources: ["Case in Point", "Victor Cheng"] },
          { title: "Market Sizing Problems",           done: false, resources: ["Management Consulted"] },
          { title: "Business Case Analysis",           done: false, resources: ["HBR Cases", "Case Interview Prep"] },
          { title: "50+ Case Practice",                done: false, resources: ["PrepLounge", "Management Consulted"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Consulting Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Data Analysis & Insights",         done: false, resources: ["SQL", "Tableau", "Excel"] },
          { title: "Client Communication & Decks",     done: false, resources: ["McKinsey Style Communication"] },
          { title: "Financial Modeling Basics",        done: false, resources: ["WSP Financial Modeling"] },
          { title: "Industry Expertise (1 sector)",    done: false, resources: ["BCG Insights", "Deloitte Reports"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Consulting CV & Cover Letter",     done: false, resources: ["Management Consulted CV"] },
          { title: "Networking with Consultants",      done: false, resources: ["LinkedIn"] },
          { title: "Apply for Consulting Roles",       done: false, resources: ["LinkedIn", "McKinsey", "BCG", "Bain"] },
          { title: "Mock Case Interviews",             done: false, resources: ["PrepLounge", "Exponent"] },
        ],
      },
    ],
  },

  // ── Project Manager ───────────────────────────────────────
  "Project Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "PM Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Project Management Basics",        done: false, resources: ["PMBOK Guide", "Coursera PM"] },
          { title: "Agile & Scrum",                    done: false, resources: ["Scrum.org", "Agile Alliance"] },
          { title: "Jira & Asana",                     done: false, resources: ["Atlassian Jira Docs", "Asana Docs"] },
          { title: "Stakeholder Management",           done: false, resources: ["PMI Docs", "HBR"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "PM Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Risk Management",                  done: false, resources: ["PMI Risk Docs", "PMBOK Ch11"] },
          { title: "Budget & Resource Management",     done: false, resources: ["PMBOK", "Coursera PM"] },
          { title: "MS Project / Smartsheet",          done: false, resources: ["Microsoft Project Docs"] },
          { title: "Communication & Leadership",       done: false, resources: ["HBR", "Dale Carnegie"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced PM",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Program & Portfolio Management",   done: false, resources: ["PMI Docs", "PMBOK"] },
          { title: "Change Management",                done: false, resources: ["Prosci ADKAR Model"] },
          { title: "Lean PM & Kanban",                 done: false, resources: ["Lean Enterprise Institute"] },
          { title: "PM Case Study",                    done: false, resources: ["HBR Cases"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "PMP or CAPM Certification",        done: false, resources: ["PMI Certification"] },
          { title: "PSM I (Scrum Master)",             done: false, resources: ["Scrum.org"] },
          { title: "Apply for PM Roles",               done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "PM Interview Prep",                done: false, resources: ["Exponent", "Glassdoor"] },
        ],
      },
    ],
  },

  // ── Investment Banker ─────────────────────────────────────
  "Investment Banker": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Finance Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Accounting Basics",                done: false, resources: ["Financial Accounting by Brealey", "Coursera Accounting"] },
          { title: "Corporate Finance",                done: false, resources: ["Brealey Myers Allen", "Damodaran"] },
          { title: "Excel Financial Modeling",         done: false, resources: ["WSP Excel", "CFI Docs"] },
          { title: "Capital Markets Overview",         done: false, resources: ["Investopedia", "Wall Street Oasis"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Valuation & Modeling",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "DCF Valuation",                    done: false, resources: ["Damodaran Online", "WSP Modeling"] },
          { title: "Comparable Company Analysis",      done: false, resources: ["Wall Street Prep", "CFI"] },
          { title: "LBO Modeling",                     done: false, resources: ["WSP LBO", "Breaking Into Wall Street"] },
          { title: "M&A Modeling",                     done: false, resources: ["WSP M&A", "CFI M&A"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "IB Skills",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Pitchbook & Deck Creation",        done: false, resources: ["McKinsey Deck Style", "WSP"] },
          { title: "Bloomberg Terminal",               done: false, resources: ["Bloomberg Essentials"] },
          { title: "Deal Process & Due Diligence",     done: false, resources: ["WSO IB Guide"] },
          { title: "Financial Modeling Competition",   done: false, resources: ["CFA Institute", "WSP"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "NISM / CFA Level 1",               done: false, resources: ["CFA Institute", "NISM Docs"] },
          { title: "IB Interview Prep",                done: false, resources: ["WSO IB Interview Guide", "Mergers & Inquisitions"] },
          { title: "Networking with Bankers",          done: false, resources: ["LinkedIn", "WSO Forums"] },
          { title: "Apply for IB Roles",               done: false, resources: ["LinkedIn", "Goldman Sachs", "JPMorgan Careers"] },
        ],
      },
    ],
  },

  // ── Chartered Accountant ──────────────────────────────────
  "Chartered Accountant": {
    totalDuration: "36 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "CA Foundation",
        duration: "4 months",
        status:   "in_progress",
        milestones: [
          { title: "Principles of Accounting",         done: false, resources: ["ICAI Study Material", "CA Raja Classes"] },
          { title: "Business Laws",                    done: false, resources: ["ICAI Study Material"] },
          { title: "Quantitative Aptitude",            done: false, resources: ["ICAI Study Material", "RS Aggarwal"] },
          { title: "Business Economics",               done: false, resources: ["ICAI Study Material"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "CA Intermediate",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Advanced Accounting",              done: false, resources: ["ICAI Study Material", "Padhuka"] },
          { title: "Corporate & Other Laws",           done: false, resources: ["ICAI Material", "CS Rajkumar"] },
          { title: "Cost & Management Accounting",     done: false, resources: ["ICAI Material", "RAVI M GUPTA"] },
          { title: "Taxation (Income Tax & GST)",      done: false, resources: ["ICAI Material", "Vinod Gupta"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Articleship (3 Years)",
        duration: "36 months",
        status:   "locked",
        milestones: [
          { title: "Audit & Assurance",                done: false, resources: ["ICAI Audit Manual", "Surbhi Bansal"] },
          { title: "Financial Reporting (Ind AS)",     done: false, resources: ["ICAI Material", "DISA"] },
          { title: "Strategic Financial Management",   done: false, resources: ["ICAI Final Material"] },
          { title: "Practical Training (3 years)",     done: false, resources: ["CA Firm Articleship"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "CA Final & Jobs",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "CA Final Group 1 & 2",             done: false, resources: ["ICAI Final Material", "Surbhi Bansal"] },
          { title: "ICAI Membership",                  done: false, resources: ["ICAI Docs"] },
          { title: "Specialization (Tax/Audit/Finance)",done: false, resources: ["DISA", "ISA Certification"] },
          { title: "Apply for CA Roles / Own Practice",done: false, resources: ["LinkedIn", "ICAI Job Portal"] },
        ],
      },
    ],
  },

  // ── Financial Analyst ─────────────────────────────────────
  "Financial Analyst": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Finance Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Financial Statements Analysis",    done: false, resources: ["Financial Shenanigans", "Damodaran"] },
          { title: "Excel for Finance",                done: false, resources: ["CFI Excel", "WSP Excel"] },
          { title: "Accounting Basics",                done: false, resources: ["Accounting Made Simple", "Coursera"] },
          { title: "SQL for Financial Data",           done: false, resources: ["Mode SQL", "Kaggle SQL"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Financial Modeling",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "3-Statement Modeling",             done: false, resources: ["WSP 3-Statement Model", "CFI"] },
          { title: "DCF Valuation",                    done: false, resources: ["Damodaran Online", "WSP"] },
          { title: "Comparable Analysis",              done: false, resources: ["CFI Comps Guide", "WSP"] },
          { title: "Industry Research Reports",        done: false, resources: ["Statista", "Sector Reports"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Analysis",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Python for Finance",               done: false, resources: ["Python for Finance Yves Hilpisch"] },
          { title: "Tableau / Power BI",               done: false, resources: ["Tableau Public", "Microsoft Learn"] },
          { title: "Bloomberg Terminal",               done: false, resources: ["Bloomberg Essentials"] },
          { title: "Equity Research Report",           done: false, resources: ["CFA Institute", "Morningstar"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "CFA & Jobs",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "CFA Level 1 Preparation",          done: false, resources: ["CFA Institute", "Kaplan Schweser"] },
          { title: "Financial Analyst Portfolio",      done: false, resources: ["LinkedIn", "GitHub"] },
          { title: "Apply for FA Roles",               done: false, resources: ["LinkedIn", "Naukri", "Wellfound"] },
          { title: "FA Interview Prep",                done: false, resources: ["Glassdoor", "WSO"] },
        ],
      },
    ],
  },

  // ── FinTech Developer ─────────────────────────────────────
  "FinTech Developer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Tech + Finance Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Python & JavaScript Basics",       done: false, resources: ["Python Docs", "JavaScript.info"] },
          { title: "Financial Systems Overview",       done: false, resources: ["Investopedia", "FinTech Explained"] },
          { title: "REST APIs Basics",                 done: false, resources: ["Postman Docs"] },
          { title: "SQL & Database Basics",            done: false, resources: ["SQLZoo", "Mode SQL"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "FinTech Core",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Payment Gateways (Stripe, Razorpay)",done: false, resources: ["Stripe Docs", "Razorpay Docs"] },
          { title: "Open Banking & Plaid API",         done: false, resources: ["Plaid Docs"] },
          { title: "Blockchain Basics",                done: false, resources: ["Ethereum Docs", "Bitcoin Whitepaper"] },
          { title: "FinTech Regulations (RBI/SEBI)",   done: false, resources: ["RBI Docs", "SEBI Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced FinTech",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "ML for Finance (Fraud Detection)", done: false, resources: ["Coursera ML Finance"] },
          { title: "Cloud (AWS/GCP) for FinTech",      done: false, resources: ["AWS FinTech", "GCP Finance"] },
          { title: "Security & Compliance",            done: false, resources: ["PCI DSS Docs", "OWASP"] },
          { title: "Build FinTech App",                done: false, resources: ["GitHub", "Stripe", "Firebase"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "FinTech Portfolio",                done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for FinTech Roles",          done: false, resources: ["LinkedIn", "Wellfound", "AngelList"] },
          { title: "FinTech Interview Prep",           done: false, resources: ["InterviewBit", "Glassdoor"] },
          { title: "Contribute to Open Source FinTech",done: false, resources: ["GitHub", "Open Source Finance"] },
        ],
      },
    ],
  },

  // ── Stock Trader ──────────────────────────────────────────
  "Stock Trader": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Markets Foundation",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Stock Market Basics",              done: false, resources: ["Zerodha Varsity", "Investopedia"] },
          { title: "Fundamental Analysis",             done: false, resources: ["Zerodha Varsity", "Damodaran"] },
          { title: "Technical Analysis",               done: false, resources: ["TradingView", "Steve Nison Candlesticks"] },
          { title: "Open Demat Account & Paper Trade", done: false, resources: ["Zerodha", "Groww"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Trading Strategies",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Price Action Trading",             done: false, resources: ["Al Brooks Price Action"] },
          { title: "Options & Derivatives",            done: false, resources: ["Zerodha Varsity Options", "NSE Academy"] },
          { title: "Risk & Money Management",          done: false, resources: ["Van Tharp Trading", "Zerodha"] },
          { title: "Live Trading (Small Capital)",     done: false, resources: ["Zerodha", "Groww"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Trading",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Algorithmic Trading Basics",       done: false, resources: ["QuantInsti", "Zerodha Streak"] },
          { title: "Python for Trading",               done: false, resources: ["Python for Finance", "QuantConnect"] },
          { title: "Backtesting Strategies",           done: false, resources: ["Backtrader", "Zipline"] },
          { title: "Macro Economics & Global Markets", done: false, resources: ["Ray Dalio Videos", "Bloomberg"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Professional Trading",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "NISM Series VIII Certification",   done: false, resources: ["NISM Docs"] },
          { title: "Build Trading System",             done: false, resources: ["QuantConnect", "Zerodha Kite API"] },
          { title: "Apply for Trading Desk Roles",     done: false, resources: ["LinkedIn", "NSE Careers", "Hedge Funds"] },
          { title: "Proprietary Trading Track Record", done: false, resources: ["Personal Trading Journal"] },
        ],
      },
    ],
  },

  // ── Risk Analyst ──────────────────────────────────────────
  "Risk Analyst": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Risk Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Risk Management Basics",           done: false, resources: ["GARP FRM Guide", "Risk Management by Michel Crouhy"] },
          { title: "Statistics & Probability",         done: false, resources: ["Khan Academy Stats", "StatQuest"] },
          { title: "Excel for Risk Modeling",          done: false, resources: ["CFI Excel", "WSP"] },
          { title: "Financial Markets Overview",       done: false, resources: ["Investopedia", "CFA Institute"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Risk Modeling",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Value at Risk (VaR) Models",       done: false, resources: ["GARP FRM", "Philippe Jorion VaR"] },
          { title: "Credit Risk Analysis",             done: false, resources: ["GARP Credit Risk", "Moody's Analytics"] },
          { title: "Python for Risk",                  done: false, resources: ["Python Risk Tools", "QuantLib"] },
          { title: "Stress Testing & Scenario Analysis",done: false, resources: ["BIS Docs", "Fed Reserve"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Risk",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Market Risk & Basel Norms",        done: false, resources: ["BIS Basel Docs"] },
          { title: "Operational Risk",                 done: false, resources: ["GARP Operational Risk"] },
          { title: "Regulatory Compliance (RBI/SEBI)", done: false, resources: ["RBI Docs", "SEBI Docs"] },
          { title: "Risk Dashboard Project",           done: false, resources: ["Tableau", "Power BI"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "FRM & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "FRM Part 1 & 2 Prep",              done: false, resources: ["GARP FRM", "Bionic Turtle"] },
          { title: "Apply for Risk Analyst Roles",     done: false, resources: ["LinkedIn", "Naukri", "Banking Jobs"] },
          { title: "Risk Interview Prep",              done: false, resources: ["Glassdoor", "WSO"] },
          { title: "Risk Portfolio & Projects",        done: false, resources: ["GitHub", "LinkedIn"] },
        ],
      },
    ],
  },

  // ── Insurance Specialist ──────────────────────────────────
  "Insurance Specialist": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Insurance Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Insurance Principles & Types",     done: false, resources: ["IRDAI Docs", "III.org"] },
          { title: "Life & Health Insurance",          done: false, resources: ["IRDAI Life Docs", "LOMA Certification"] },
          { title: "General & Motor Insurance",        done: false, resources: ["IRDAI General Docs"] },
          { title: "Insurance Laws & Regulations",     done: false, resources: ["Insurance Act India", "IRDAI"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Underwriting & Risk Assessment",   done: false, resources: ["LOMA Underwriting", "CII Docs"] },
          { title: "Claims Management",                done: false, resources: ["IRDAI Claims Guide"] },
          { title: "Insurance CRM Systems",            done: false, resources: ["Salesforce Insurance"] },
          { title: "Customer Service & Sales",         done: false, resources: ["IRDA Agent Manual"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Reinsurance Basics",               done: false, resources: ["Swiss Re Docs", "Lloyd's Docs"] },
          { title: "Digital Insurance & InsurTech",    done: false, resources: ["InsurTech Magazine"] },
          { title: "IRDAI Exam Preparation",           done: false, resources: ["IRDAI Exam Guide"] },
          { title: "Insurance Product Knowledge",      done: false, resources: ["LIC", "HDFC Life", "Max Life"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "IRDA License / POSP",              done: false, resources: ["IRDAI Docs"] },
          { title: "LOMA or CII Certification",        done: false, resources: ["LOMA", "CII UK"] },
          { title: "Apply for Insurance Roles",        done: false, resources: ["LinkedIn", "Naukri", "LIC Careers"] },
          { title: "Build Client Portfolio",           done: false, resources: ["LinkedIn", "Local Network"] },
        ],
      },
    ],
  },

  // ── Actuary ───────────────────────────────────────────────
  "Actuary": {
    totalDuration: "36 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Actuarial Foundations",
        duration: "6 months",
        status:   "in_progress",
        milestones: [
          { title: "Probability & Statistics",         done: false, resources: ["Finan Probability", "Broverman"] },
          { title: "Financial Mathematics",            done: false, resources: ["Broverman FM", "McDonald Derivatives"] },
          { title: "IAI CT1 & CT3 Exams",              done: false, resources: ["IAI Study Material", "ActEd"] },
          { title: "Excel & R for Actuarial Work",     done: false, resources: ["R Docs", "Coursera R"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core Actuarial Exams",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "IAI CT4 — Models",                 done: false, resources: ["ActEd CT4", "IAI Material"] },
          { title: "IAI CT5 — Contingencies",          done: false, resources: ["ActEd CT5", "Dickson Hardy Waters"] },
          { title: "IAI CT7 — Economics",              done: false, resources: ["ActEd CT7", "IAI Material"] },
          { title: "IAI CT8 — Financial Economics",    done: false, resources: ["ActEd CT8", "McDonald Derivatives"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialist Exams",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Life Insurance (ST2)",             done: false, resources: ["ActEd ST2"] },
          { title: "General Insurance (ST3)",          done: false, resources: ["ActEd ST3"] },
          { title: "Pensions (ST4)",                   done: false, resources: ["ActEd ST4"] },
          { title: "Work-Based Skills (WBS)",          done: false, resources: ["IAI WBS Guide"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Fellowship & Jobs",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "Fellow of IAI",                    done: false, resources: ["IAI Fellowship Docs"] },
          { title: "Actuarial Software (Prophet, MoSes)",done: false, resources: ["FIS Docs", "Moody's Analytics"] },
          { title: "Apply for Actuarial Roles",        done: false, resources: ["LinkedIn", "Naukri", "IAI Job Board"] },
          { title: "Actuarial Interview Prep",         done: false, resources: ["Glassdoor", "ActuarialOutpost"] },
        ],
      },
    ],
  },

  // ── UI/UX Designer ────────────────────────────────────────
  "UI/UX Designer": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Design Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Design Principles & Theory",       done: false, resources: ["The Design of Everyday Things", "Refactoring UI"] },
          { title: "Color, Typography & Layout",       done: false, resources: ["Canva Design School", "Figma Learn"] },
          { title: "Figma Basics",                     done: false, resources: ["Figma YouTube", "Figma Learn"] },
          { title: "UX Research Basics",               done: false, resources: ["Nielsen Norman Group", "IDEO Design Thinking"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core UX Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "User Research & Interviews",       done: false, resources: ["Nielsen Norman UX", "IDEO"] },
          { title: "Wireframing & Information Architecture",done: false, resources: ["Figma Docs", "UX Collective"] },
          { title: "Prototyping in Figma",             done: false, resources: ["Figma Learn", "DesignCourse YouTube"] },
          { title: "Usability Testing",                done: false, resources: ["Maze Docs", "UserTesting"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced UI/UX",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Design Systems",                   done: false, resources: ["Material Design", "Apple HIG"] },
          { title: "Motion & Micro-Interactions",      done: false, resources: ["Principle App", "Figma Smart Animate"] },
          { title: "Mobile App Design",                done: false, resources: ["Apple HIG", "Material Design 3"] },
          { title: "3 Portfolio Projects",             done: false, resources: ["Behance", "Dribbble"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "UX Portfolio on Behance/Dribbble",done: false, resources: ["Behance", "Dribbble"] },
          { title: "Google UX Certificate",            done: false, resources: ["Coursera Google UX"] },
          { title: "Apply for UX Roles",               done: false, resources: ["LinkedIn", "Dribbble Jobs", "Wellfound"] },
          { title: "UX Interview Prep",                done: false, resources: ["UX Interview Questions", "Glassdoor"] },
        ],
      },
    ],
  },

  // ── Graphic Designer ──────────────────────────────────────
  "Graphic Designer": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Design Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Design Principles",                done: false, resources: ["Satori Graphics YouTube", "The Futur"] },
          { title: "Adobe Photoshop",                  done: false, resources: ["Adobe Learn", "PHLEARN"] },
          { title: "Adobe Illustrator",                done: false, resources: ["Adobe Learn", "Will Paterson YouTube"] },
          { title: "Color Theory & Typography",        done: false, resources: ["Canva Design School", "Satori Graphics"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core Design Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Logo Design",                      done: false, resources: ["Will Paterson YouTube", "Satori Graphics"] },
          { title: "Brand Identity Design",            done: false, resources: ["The Futur", "Brand New"] },
          { title: "Print Design (Brochures, Posters)",done: false, resources: ["Adobe InDesign Docs"] },
          { title: "Social Media Graphics",            done: false, resources: ["Canva", "Adobe Express"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Design",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Motion Graphics (After Effects)",  done: false, resources: ["School of Motion", "Premiere Gal"] },
          { title: "3D Design Basics (Blender)",       done: false, resources: ["Blender Guru", "CGMatter"] },
          { title: "Packaging Design",                 done: false, resources: ["Dieline", "Packaging Digest"] },
          { title: "5 Portfolio Projects",             done: false, resources: ["Behance", "Dribbble"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Portfolio on Behance",             done: false, resources: ["Behance", "Dribbble"] },
          { title: "Freelance on Fiverr / Upwork",     done: false, resources: ["Fiverr", "Upwork"] },
          { title: "Apply for Design Roles",           done: false, resources: ["LinkedIn", "Dribbble Jobs", "Creative Hotlist"] },
          { title: "Design Interview Prep",            done: false, resources: ["Glassdoor", "The Futur"] },
        ],
      },
    ],
  },

  // ── Fashion Designer ──────────────────────────────────────
  "Fashion Designer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Fashion Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Fashion History & Theory",         done: false, resources: ["Fashionista", "Vogue Runway"] },
          { title: "Fashion Sketching & Illustration", done: false, resources: ["Justine Leconte YouTube", "Fashion Drawing by Bina Abling"] },
          { title: "Textiles & Fabric Knowledge",      done: false, resources: ["Textile School", "Fabric Merchant"] },
          { title: "Basic Sewing & Pattern Making",    done: false, resources: ["Craftsy", "Threads Magazine"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Design Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Advanced Pattern Making",          done: false, resources: ["Winifred Aldrich Metric Pattern Cutting"] },
          { title: "Draping & Tailoring",              done: false, resources: ["Threads Magazine", "Craftsy"] },
          { title: "Adobe Illustrator for Fashion",    done: false, resources: ["Adobe Fashion Tutorials"] },
          { title: "CLO 3D Virtual Fashion",           done: false, resources: ["CLO 3D Docs", "YouTube CLO 3D"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Collection Development",
        duration: "5 months",
        status:   "locked",
        milestones: [
          { title: "Collection Concept & Moodboarding",done: false, resources: ["Pinterest", "WGSN Trend"] },
          { title: "Garment Construction",             done: false, resources: ["Craftsy", "YouTube Sewing"] },
          { title: "Fashion Photography Basics",       done: false, resources: ["Peter McKinnon", "PHLEARN"] },
          { title: "First Collection (6-10 pieces)",   done: false, resources: ["Portfolio Photoshoot"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Launch & Jobs",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Fashion Portfolio",                done: false, resources: ["Behance", "Instagram"] },
          { title: "Apply for Fashion Brand Roles",    done: false, resources: ["LinkedIn", "Fashion Jobs India"] },
          { title: "Start Own Label / Brand",          done: false, resources: ["Shopify", "Instagram Shop"] },
          { title: "Fashion Week / Exhibition",        done: false, resources: ["Lakme Fashion Week", "Amazon Fashion Week"] },
        ],
      },
    ],
  },

  // ── Interior Designer ─────────────────────────────────────
  "Interior Designer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Interior Design Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Elements & Principles of Design",  done: false, resources: ["Interior Design by Pile", "YouTube Interior Design"] },
          { title: "Space Planning Basics",            done: false, resources: ["NCIDQ Study Guide", "Coursera Interior Design"] },
          { title: "AutoCAD 2D Basics",                done: false, resources: ["AutoCAD Docs", "Udemy AutoCAD"] },
          { title: "Materials & Finishes",             done: false, resources: ["Material Bank", "Houzz"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Design Tools",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "SketchUp 3D Modeling",             done: false, resources: ["SketchUp Learn", "YouTube SketchUp"] },
          { title: "Revit Architecture",               done: false, resources: ["Autodesk Revit Docs"] },
          { title: "3ds Max or Lumion Rendering",      done: false, resources: ["3ds Max Docs", "Lumion Docs"] },
          { title: "Photoshop for Presentations",      done: false, resources: ["Adobe Learn"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Project Experience",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Residential Interior Project",     done: false, resources: ["Houzz", "Archdaily"] },
          { title: "Commercial Interior Project",      done: false, resources: ["Archdaily", "Interior Design Magazine"] },
          { title: "Kitchen & Bathroom Design",        done: false, resources: ["NKBA Docs", "Houzz"] },
          { title: "Sustainable Interior Design",      done: false, resources: ["LEED Docs", "USGBC"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Interior Design Portfolio",        done: false, resources: ["Behance", "Houzz", "Instagram"] },
          { title: "NCIDQ Certification (Optional)",   done: false, resources: ["NCIDQ Docs"] },
          { title: "Apply for Interior Design Roles",  done: false, resources: ["LinkedIn", "Naukri", "Houzz Pro"] },
          { title: "Start Freelance Interior Practice",done: false, resources: ["Houzz Pro", "Instagram"] },
        ],
      },
    ],
  },

  // ── Animator / VFX Artist ─────────────────────────────────
  "Animator / VFX Artist": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Animation Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "12 Principles of Animation",       done: false, resources: ["Animator's Survival Kit", "Alan Becker YouTube"] },
          { title: "Blender 3D Basics",                done: false, resources: ["Blender Guru", "CGMatter"] },
          { title: "Drawing & Sketching",              done: false, resources: ["Proko YouTube", "Watts Atelier"] },
          { title: "Color Theory",                     done: false, resources: ["Sycra YouTube", "Color & Light by James Gurney"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "3D Animation",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Blender Rigging & Character Setup",done: false, resources: ["Blender Guru", "CGDive YouTube"] },
          { title: "Character Animation",              done: false, resources: ["Animation Mentor", "Animator's Survival Kit"] },
          { title: "Maya Basics (Industry Standard)",  done: false, resources: ["Maya Docs", "Pluralsight Maya"] },
          { title: "After Effects Motion Graphics",    done: false, resources: ["School of Motion", "Video Copilot"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "VFX & Advanced",
        duration: "5 months",
        status:   "locked",
        milestones: [
          { title: "Compositing with Nuke",            done: false, resources: ["Nuke Docs", "The Foundry Learning"] },
          { title: "Particle & Simulation Effects",    done: false, resources: ["Blender Guru", "Houdini Docs"] },
          { title: "Environment & Lighting",           done: false, resources: ["CGMatter", "Blender Guru"] },
          { title: "Short Film / Demo Reel",           done: false, resources: ["Vimeo", "YouTube"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Demo Reel on Vimeo",               done: false, resources: ["Vimeo", "YouTube", "ArtStation"] },
          { title: "ArtStation Portfolio",             done: false, resources: ["ArtStation"] },
          { title: "Apply for Animation Studios",      done: false, resources: ["LinkedIn", "DreamWorks Jobs", "Technicolor Jobs"] },
          { title: "Freelance on Fiverr / Upwork",     done: false, resources: ["Fiverr", "Upwork"] },
        ],
      },
    ],
  },

  // ── Photographer ──────────────────────────────────────────
  "Photographer": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Photography Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Camera Settings (Exposure Triangle)",done: false, resources: ["Tony Northrup YouTube", "Photography Life"] },
          { title: "Composition Techniques",           done: false, resources: ["Peter McKinnon YouTube", "Scott Kelby"] },
          { title: "Lighting Fundamentals",            done: false, resources: ["Jay P Morgan YouTube", "Strobist"] },
          { title: "Adobe Lightroom Basics",           done: false, resources: ["Adobe Learn", "PHLEARN"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Photography Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Portrait Photography",             done: false, resources: ["Lindsay Adler YouTube", "CreativeLive"] },
          { title: "Product & Commercial Photography", done: false, resources: ["Karl Taylor YouTube"] },
          { title: "Adobe Photoshop Retouching",       done: false, resources: ["PHLEARN", "Adobe Learn"] },
          { title: "Shoot 50 Photos Weekly",           done: false, resources: ["Instagram", "500px"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Wedding Photography",              done: false, resources: ["SLR Lounge", "CreativeLive Wedding"] },
          { title: "Street & Travel Photography",      done: false, resources: ["Eric Kim Photography", "Steve McCurry"] },
          { title: "Studio Lighting Setup",            done: false, resources: ["Jay P Morgan", "Karl Taylor"] },
          { title: "Photography Portfolio",            done: false, resources: ["500px", "Instagram", "Squarespace"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Business & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Photography Website & Portfolio",  done: false, resources: ["Squarespace", "Format.com"] },
          { title: "Photography Business & Pricing",   done: false, resources: ["Sprout Studio", "Photo Business Insider"] },
          { title: "Sell Stock Photos",                done: false, resources: ["Shutterstock", "Getty Images", "Adobe Stock"] },
          { title: "Apply for Commercial Photo Jobs",  done: false, resources: ["LinkedIn", "Indeed", "Backstage"] },
        ],
      },
    ],
  },

  // ── Architect ─────────────────────────────────────────────
  "Architect": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "B.Arch Foundation",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "Architectural Drawing & Graphics",  done: false, resources: ["Ching Architecture Form & Space", "AutoCAD Docs"] },
          { title: "Building Materials & Construction",done: false, resources: ["NPTEL Architecture"] },
          { title: "History of Architecture",          done: false, resources: ["Banister Fletcher", "Ching"] },
          { title: "Studio Design Project 1",          done: false, resources: ["Design Studio"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "B.Arch Core (Year 2-4)",
        duration: "36 months",
        status:   "locked",
        milestones: [
          { title: "Structural Systems",               done: false, resources: ["Salvadori Structure", "NPTEL Structures"] },
          { title: "AutoCAD & Revit",                  done: false, resources: ["AutoCAD Docs", "Autodesk Revit"] },
          { title: "Environmental Design (Passive)",   done: false, resources: ["SunEarth & Architecture", "GRIHA Docs"] },
          { title: "Urban Design & Planning",          done: false, resources: ["Urban Design Reader", "TNCP Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "B.Arch Thesis & Advanced Tools",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "SketchUp & Lumion / Enscape",      done: false, resources: ["SketchUp Learn", "Lumion Docs"] },
          { title: "BIM with Revit",                   done: false, resources: ["Autodesk BIM Docs"] },
          { title: "Thesis Project",                   done: false, resources: ["Design Studio"] },
          { title: "Grasshopper Parametric Design",    done: false, resources: ["Mode Lab Grasshopper"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Registration & Practice",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "Council of Architecture Registration",done: false, resources: ["COA India Docs"] },
          { title: "Portfolio & Behance",              done: false, resources: ["Behance", "Archinect"] },
          { title: "Apply for Architecture Firms",     done: false, resources: ["LinkedIn", "Naukri", "Archinect Jobs"] },
          { title: "GRIHA / LEED Green Certification", done: false, resources: ["GRIHA Docs", "USGBC LEED"] },
        ],
      },
    ],
  },

  // ── Illustrator ───────────────────────────────────────────
  "Illustrator": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Drawing Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Figure Drawing Basics",            done: false, resources: ["Proko YouTube", "Loomis Figure Drawing"] },
          { title: "Perspective & Composition",        done: false, resources: ["Draw A Box", "Peter Han Dynamic Sketching"] },
          { title: "Color Theory",                     done: false, resources: ["Sycra YouTube", "James Gurney Color & Light"] },
          { title: "Digital Art Basics (Procreate)",   done: false, resources: ["Procreate Docs", "Will Terrell YouTube"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Digital Illustration",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Character Design",                 done: false, resources: ["Character Design with Aaron Blaise"] },
          { title: "Environment & Background Art",     done: false, resources: ["Marc Brunet YouTube", "Ctrl+Paint"] },
          { title: "Adobe Illustrator for Vector Art", done: false, resources: ["Adobe Learn", "Will Paterson"] },
          { title: "Clip Studio Paint",                done: false, resources: ["Clip Studio Docs", "SmirkyGuy"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Commercial Illustration",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Editorial & Book Illustration",    done: false, resources: ["Society of Illustrators"] },
          { title: "Children's Book Style",            done: false, resources: ["Make Art That Sells"] },
          { title: "NFT Art & Digital Collectibles",   done: false, resources: ["OpenSea Docs", "Foundation"] },
          { title: "10-Piece Portfolio",               done: false, resources: ["ArtStation", "Behance"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Business & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "ArtStation / Behance Portfolio",   done: false, resources: ["ArtStation", "Behance"] },
          { title: "Freelance on Fiverr / Upwork",     done: false, resources: ["Fiverr", "Upwork"] },
          { title: "Apply for Illustration Roles",     done: false, resources: ["LinkedIn", "Dribbble Jobs"] },
          { title: "Sell Prints on Society6 / Redbubble",done: false, resources: ["Society6", "Redbubble"] },
        ],
      },
    ],
  },

  // ── YouTuber / Content Creator ────────────────────────────
  "YouTuber / Content Creator": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Content Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "YouTube Algorithm & SEO",          done: false, resources: ["Think Media YouTube", "VidIQ Blog"] },
          { title: "Video Scripting & Storytelling",   done: false, resources: ["Roberto Blake YouTube"] },
          { title: "Camera & Audio Basics",            done: false, resources: ["Peter McKinnon YouTube", "DSLR Video Shooter"] },
          { title: "First 10 Videos",                  done: false, resources: ["YouTube Studio"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Video Production",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Video Editing (Premiere Pro / DaVinci)",done: false, resources: ["Premiere Gal", "Casey Faris YouTube"] },
          { title: "Thumbnail Design",                 done: false, resources: ["Canva", "Photoshop"] },
          { title: "Lighting Setup",                   done: false, resources: ["Peter McKinnon", "DSLR Video Shooter"] },
          { title: "Grow to 1000 Subscribers",         done: false, resources: ["YouTube Studio Analytics"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Growth & Monetization",
        duration: "5 months",
        status:   "locked",
        milestones: [
          { title: "YouTube Monetization (4000 hours)",done: false, resources: ["YouTube Partner Program"] },
          { title: "Sponsorship & Brand Deals",        done: false, resources: ["Creator Academy YouTube"] },
          { title: "Shorts & Multi-Platform Strategy", done: false, resources: ["Nick Nimmin YouTube"] },
          { title: "Email List & Community",           done: false, resources: ["ConvertKit", "Beehiiv"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale & Diversify",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Online Course / Digital Products", done: false, resources: ["Teachable", "Gumroad"] },
          { title: "Podcast or Newsletter",            done: false, resources: ["Spotify Podcasters", "Beehiiv"] },
          { title: "Hire Team & Systemize",            done: false, resources: ["Upwork", "Fiverr"] },
          { title: "Brand Collab Strategy",            done: false, resources: ["AspireIQ", "Grin"] },
        ],
      },
    ],
  },

  // ── Social Media Influencer ───────────────────────────────
  "Social Media Influencer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Niche & Branding",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Choose Your Niche",                done: false, resources: ["GaryVee YouTube", "Later Blog"] },
          { title: "Personal Brand Identity",          done: false, resources: ["Canva", "Adobe Express"] },
          { title: "Instagram & TikTok Setup",         done: false, resources: ["Instagram Creator Academy", "TikTok Creator Portal"] },
          { title: "First 30 Posts",                   done: false, resources: ["Later App", "Planoly"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Content Creation",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Reels & Short Form Video",         done: false, resources: ["Vanessa Lau YouTube", "Creator Academy"] },
          { title: "Content Calendar & Planning",      done: false, resources: ["Later", "Notion"] },
          { title: "Photography & Aesthetic",          done: false, resources: ["Lightroom Presets", "VSCO"] },
          { title: "Reach 10K Followers",              done: false, resources: ["Instagram Insights"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Monetization",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Brand Partnerships & UGC",         done: false, resources: ["AspireIQ", "Collabstr"] },
          { title: "Affiliate Marketing",              done: false, resources: ["Amazon Associates", "ShareASale"] },
          { title: "Merchandise / Digital Products",   done: false, resources: ["Shopify", "Gumroad"] },
          { title: "Media Kit Creation",               done: false, resources: ["Canva Media Kit Template"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "LinkedIn & YouTube Expansion",     done: false, resources: ["LinkedIn Creator", "YouTube"] },
          { title: "Podcast / Newsletter Launch",      done: false, resources: ["Beehiiv", "Spotify Podcasters"] },
          { title: "Talent Agency / Management",       done: false, resources: ["Collective Voice", "Creator IQ"] },
          { title: "100K Followers Goal",              done: false, resources: ["Analytics & Strategy"] },
        ],
      },
    ],
  },

  // ── Journalist ────────────────────────────────────────────
  "Journalist": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Journalism Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "News Writing & AP Style",          done: false, resources: ["AP Stylebook", "Poynter"] },
          { title: "Journalism Ethics",                done: false, resources: ["SPJ Ethics Code", "Poynter"] },
          { title: "Interviewing Techniques",          done: false, resources: ["IRE Docs", "Nieman Lab"] },
          { title: "Media Law & Defamation",           done: false, resources: ["Press Council India", "Reporters Committee"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Reporting Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Investigative Journalism",         done: false, resources: ["IRE Tipsheets", "GIJN Docs"] },
          { title: "Data Journalism",                  done: false, resources: ["NICAR Docs", "DataJournalism.com"] },
          { title: "Multimedia Journalism",            done: false, resources: ["OJR Docs", "Reynolds Journalism"] },
          { title: "Beat Reporting (Choose a Beat)",   done: false, resources: ["SPJ Docs", "Nieman Reports"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Digital Journalism",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "SEO for Journalism",               done: false, resources: ["Google News Initiative"] },
          { title: "Social Media Journalism",          done: false, resources: ["Twitter Journalism", "Facebook Journalism"] },
          { title: "Video Journalism",                 done: false, resources: ["Reuters Training", "NPPA"] },
          { title: "Build Journalism Portfolio",       done: false, resources: ["Muck Rack", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Journalism Portfolio / Clips",     done: false, resources: ["Muck Rack", "Portfolio Site"] },
          { title: "Apply for News Orgs",              done: false, resources: ["LinkedIn", "Hindustan Times", "NDTV Careers"] },
          { title: "Freelance Writing",                done: false, resources: ["Freelance Writing Jobs", "Upwork"] },
          { title: "PRII / Press Club Membership",     done: false, resources: ["Press Club of India"] },
        ],
      },
    ],
  },

  // ── Podcaster ─────────────────────────────────────────────
  "Podcaster": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Podcast Basics",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Podcast Format & Niche",           done: false, resources: ["Pat Flynn YouTube", "Podcast Movement"] },
          { title: "Equipment Setup",                  done: false, resources: ["Podcastage YouTube", "Marco Arment Setup"] },
          { title: "Audacity / GarageBand Basics",     done: false, resources: ["Audacity Docs", "GarageBand Docs"] },
          { title: "First 3 Episode Recording",        done: false, resources: ["Buzzsprout", "Anchor"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Launch & Distribution",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Podcast Artwork & Branding",       done: false, resources: ["Canva", "Adobe Express"] },
          { title: "Distribution (Spotify, Apple)",    done: false, resources: ["Spotify for Podcasters", "Apple Podcasts Connect"] },
          { title: "Show Notes & SEO",                 done: false, resources: ["Buzzsprout Blog"] },
          { title: "Guest Outreach & Interviews",      done: false, resources: ["LinkedIn", "PodMatch"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Growth & Monetization",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Podcast SEO & Discovery",          done: false, resources: ["Listen Notes", "Podchaser"] },
          { title: "Sponsorships & Ads",               done: false, resources: ["AdvertiseCast", "Podcorn"] },
          { title: "Patreon & Premium Content",        done: false, resources: ["Patreon Docs", "Supercast"] },
          { title: "Cross-Promotion Strategy",         done: false, resources: ["Podcast Movement Community"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Video Podcast (YouTube)",          done: false, resources: ["YouTube Studio"] },
          { title: "Podcast Community Building",       done: false, resources: ["Discord", "Circle"] },
          { title: "Newsletter from Podcast",          done: false, resources: ["Beehiiv", "Substack"] },
          { title: "Podcast Network / Own Show",       done: false, resources: ["Podcast Movement"] },
        ],
      },
    ],
  },

  // ── Video Editor ──────────────────────────────────────────
  "Video Editor": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Editing Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "DaVinci Resolve Basics",           done: false, resources: ["Casey Faris YouTube", "DaVinci Docs"] },
          { title: "Adobe Premiere Pro Basics",        done: false, resources: ["Premiere Gal YouTube", "Adobe Learn"] },
          { title: "Cuts, Pacing & Story Editing",     done: false, resources: ["Justin Odisho YouTube"] },
          { title: "Color Correction Basics",          done: false, resources: ["DaVinci Resolve Docs", "Casey Faris"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Advanced Editing",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Color Grading",                    done: false, resources: ["Ground Control Color", "Film Riot"] },
          { title: "After Effects Motion Graphics",    done: false, resources: ["Video Copilot", "School of Motion"] },
          { title: "Sound Design & Audio Mixing",      done: false, resources: ["Musicbed Blog", "Epidemic Sound"] },
          { title: "Edit 10 YouTube Videos",           done: false, resources: ["Fiverr Clients", "Own Projects"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Wedding / Event Video Editing",    done: false, resources: ["SLR Lounge", "Stillmotion"] },
          { title: "Corporate & Commercial Editing",   done: false, resources: ["LinkedIn", "Vimeo Staff Picks"] },
          { title: "Short Film Editing",               done: false, resources: ["No Film School", "Vimeo"] },
          { title: "Portfolio Demo Reel",              done: false, resources: ["Vimeo", "YouTube"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Job Ready",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Video Portfolio on Vimeo",         done: false, resources: ["Vimeo", "YouTube"] },
          { title: "Freelance on Fiverr / Upwork",     done: false, resources: ["Fiverr", "Upwork"] },
          { title: "Apply for Video Editor Roles",     done: false, resources: ["LinkedIn", "Indeed", "ProductionHub"] },
          { title: "YouTube Channel Editing Clients",  done: false, resources: ["Fiverr", "LinkedIn"] },
        ],
      },
    ],
  },

  // ── PR Specialist ─────────────────────────────────────────
  "PR Specialist": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "PR Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "PR Principles & History",          done: false, resources: ["Cutlip Center Effective PR", "PRSA Docs"] },
          { title: "Writing Press Releases",           done: false, resources: ["PR Newswire Guide", "Ragan PR"] },
          { title: "Media Relations",                  done: false, resources: ["Cision Blog", "Muck Rack Blog"] },
          { title: "Brand Storytelling",               done: false, resources: ["Ann Handley Everybody Writes"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "PR Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Crisis Communication",             done: false, resources: ["Fearn-Banks Crisis Communication"] },
          { title: "Social Media PR",                  done: false, resources: ["Hootsuite Blog", "Sprout Social"] },
          { title: "Event PR & Launch Strategy",       done: false, resources: ["PRSA Event Docs"] },
          { title: "Influencer Relations",             done: false, resources: ["Grin Docs", "AspireIQ"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Digital PR",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Digital PR & Link Building",       done: false, resources: ["Ahrefs PR Guide", "Backlinko"] },
          { title: "PR Measurement & Analytics",       done: false, resources: ["Cision Analytics", "Meltwater"] },
          { title: "PR Campaign Project",              done: false, resources: ["LinkedIn", "Portfolio Website"] },
          { title: "PR Tools (Cision, Meltwater)",     done: false, resources: ["Cision Docs", "Meltwater Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "PRSA APR Certification",           done: false, resources: ["PRSA APR Docs"] },
          { title: "PR Portfolio",                     done: false, resources: ["LinkedIn", "Portfolio Site"] },
          { title: "Apply for PR Roles",               done: false, resources: ["LinkedIn", "PRSA Job Board", "Naukri"] },
          { title: "PR Interview Prep",                done: false, resources: ["Glassdoor", "PRSA"] },
        ],
      },
    ],
  },

  // ── Copywriter ────────────────────────────────────────────
  "Copywriter": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Copywriting Basics",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Copywriting Principles",           done: false, resources: ["The Copywriter's Handbook by Bly", "Alex Cattoni YouTube"] },
          { title: "Persuasion & Psychology",          done: false, resources: ["Influence by Cialdini", "Copyblogger"] },
          { title: "Copywriting Formulas (AIDA, PAS)", done: false, resources: ["Copyhackers", "Neville Medhora"] },
          { title: "Write 10 Practice Ads",            done: false, resources: ["Swiped.co", "Ad inspiration"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core Copy Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Email Copywriting",                done: false, resources: ["Klaviyo Blog", "Email Mastery by Kale"] },
          { title: "Landing Page Copy",                done: false, resources: ["Copyhackers", "Unbounce Blog"] },
          { title: "Ad Copy (Google & Meta)",          done: false, resources: ["AdEspresso Blog", "WordStream"] },
          { title: "Brand Voice & Tone",               done: false, resources: ["Ann Handley Everybody Writes"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Copywriting",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Long Form Sales Page",             done: false, resources: ["Copyhackers", "AWAI"] },
          { title: "SEO Copywriting",                  done: false, resources: ["Backlinko SEO Writing", "Ahrefs Blog"] },
          { title: "Video Script Writing",             done: false, resources: ["Video Creators", "Roberto Blake"] },
          { title: "10-Piece Copy Portfolio",          done: false, resources: ["LinkedIn", "Portfolio Site"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Freelance & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Copywriting Portfolio Website",    done: false, resources: ["Squarespace", "Carrd"] },
          { title: "Freelance on Upwork / Fiverr",     done: false, resources: ["Upwork", "Fiverr"] },
          { title: "Apply for Copywriting Roles",      done: false, resources: ["LinkedIn", "Indeed", "We Work Remotely"] },
          { title: "Cold Email Outreach",              done: false, resources: ["Alex Berman YouTube"] },
        ],
      },
    ],
  },

  // ── SEO Specialist ────────────────────────────────────────
  "SEO Specialist": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "SEO Fundamentals",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "SEO Basics & How Google Works",    done: false, resources: ["Moz Beginner Guide", "Google SEO Starter Guide"] },
          { title: "Keyword Research",                 done: false, resources: ["Ahrefs Academy", "Semrush Blog"] },
          { title: "On-Page SEO",                      done: false, resources: ["Backlinko On-Page SEO", "Yoast Blog"] },
          { title: "Technical SEO Basics",             done: false, resources: ["Google Search Console Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Core SEO Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Link Building",                    done: false, resources: ["Backlinko Link Building", "Ahrefs Blog"] },
          { title: "Content SEO Strategy",             done: false, resources: ["HubSpot Blog", "Animalz Blog"] },
          { title: "Technical SEO (Speed, Core Vitals)",done: false, resources: ["Google PageSpeed", "GTmetrix"] },
          { title: "Local SEO",                        done: false, resources: ["Moz Local SEO Guide"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced SEO",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "SEO Auditing",                     done: false, resources: ["Screaming Frog", "Ahrefs Site Audit"] },
          { title: "E-commerce SEO",                   done: false, resources: ["Ahrefs Ecommerce SEO", "Semrush"] },
          { title: "International SEO",                done: false, resources: ["Ahrefs International SEO"] },
          { title: "SEO Case Study Project",           done: false, resources: ["LinkedIn", "Own Blog"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Google Analytics 4 Certification", done: false, resources: ["Google Analytics Academy"] },
          { title: "Semrush SEO Certification",        done: false, resources: ["Semrush Academy"] },
          { title: "Apply for SEO Roles",              done: false, resources: ["LinkedIn", "Indeed", "We Work Remotely"] },
          { title: "SEO Portfolio & Case Studies",     done: false, resources: ["LinkedIn", "Own Blog"] },
        ],
      },
    ],
  },


  // ── Hotel Manager ─────────────────────────────────────────
  "Hotel Manager": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Hospitality Fundamentals",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Hotel Operations Overview",        done: false, resources: ["Cornell Hospitality", "AHLEI Docs"] },
          { title: "Front Office Management",          done: false, resources: ["Front Office Ops by Kasavana", "AHLEI"] },
          { title: "Food & Beverage Management",       done: false, resources: ["F&B Management by Ninemeier"] },
          { title: "Housekeeping Operations",          done: false, resources: ["AHLEI Housekeeping Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Hotel Management Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Revenue Management",               done: false, resources: ["HSMAI Revenue Management", "IDeaS Docs"] },
          { title: "Hotel PMS (Opera / Protel)",       done: false, resources: ["Oracle OPERA Docs", "Protel Docs"] },
          { title: "Customer Experience & CRM",        done: false, resources: ["Medallia Docs", "Salesforce CRM"] },
          { title: "Event & Banquet Management",       done: false, resources: ["AHLEI Event Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Leadership & Strategy",
        duration: "5 months",
        status:   "locked",
        milestones: [
          { title: "Hotel Financial Management",       done: false, resources: ["Hospitality FM by Schmidgall"] },
          { title: "HR in Hospitality",                done: false, resources: ["SHRM Hospitality Docs"] },
          { title: "Digital Marketing for Hotels",     done: false, resources: ["Revinate Blog", "OTA Insight"] },
          { title: "Internship at 5-Star Hotel",       done: false, resources: ["Taj Hotels", "Marriott Training"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "CHA Certification (AHLEI)",        done: false, resources: ["AHLEI Certification"] },
          { title: "IHM Diploma / Degree",             done: false, resources: ["IHM Mumbai", "Oberoi STEP"] },
          { title: "Apply for Hotel Management Roles", done: false, resources: ["LinkedIn", "HCareers", "Naukri"] },
          { title: "Interview Prep",                   done: false, resources: ["Glassdoor Hospitality", "HCareers"] },
        ],
      },
    ],
  },

  // ── Travel Consultant ─────────────────────────────────────
  "Travel Consultant": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Travel Industry Basics",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Travel Industry Overview",         done: false, resources: ["IATA Travel Agent Docs", "TAAI Docs"] },
          { title: "Geography & Destinations",         done: false, resources: ["Lonely Planet", "TripAdvisor"] },
          { title: "Visa & Documentation",             done: false, resources: ["Official Embassy Sites", "VFS Docs"] },
          { title: "Travel Insurance Basics",          done: false, resources: ["IRDAI Travel Insurance Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "GDS & Booking Systems",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Amadeus GDS",                      done: false, resources: ["Amadeus Docs", "Amadeus Academy"] },
          { title: "Sabre & Galileo Basics",           done: false, resources: ["Sabre Training Portal"] },
          { title: "Hotel & Package Booking",          done: false, resources: ["Booking.com Partner", "Expedia TAAP"] },
          { title: "Air Fare & Ticketing Rules",       done: false, resources: ["IATA Ticketing Manual"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Sales & Operations",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Tour Package Design",              done: false, resources: ["Travel Agent Pro", "TAAI"] },
          { title: "Customer Service & Sales",         done: false, resources: ["TATA Skillbox", "Coursera Sales"] },
          { title: "Corporate Travel Management",      done: false, resources: ["GBTA Docs", "Concur Docs"] },
          { title: "Social Media for Travel",          done: false, resources: ["Instagram Travel", "TripAdvisor"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "IATA Travel & Tourism Diploma",    done: false, resources: ["IATA Training"] },
          { title: "TAAI Membership",                  done: false, resources: ["TAAI Docs"] },
          { title: "Apply for Travel Consultant Roles",done: false, resources: ["LinkedIn", "MakeMyTrip Careers", "Naukri"] },
          { title: "Start Own Travel Agency",          done: false, resources: ["TAAI Docs", "MoT India"] },
        ],
      },
    ],
  },

  // ── Chef ──────────────────────────────────────────────────
  "Chef": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Culinary Foundations",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Knife Skills & Kitchen Safety",    done: false, resources: ["Gordon Ramsay MasterClass", "America's Test Kitchen"] },
          { title: "Basic Cooking Techniques",         done: false, resources: ["Ethan Chlebowski YouTube", "Serious Eats"] },
          { title: "Food Science & Nutrition",         done: false, resources: ["On Food & Cooking by McGee"] },
          { title: "Kitchen Brigade System",           done: false, resources: ["Escoffier Culinary Docs", "ICE Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Cuisine Specialization",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Indian Cuisine Mastery",           done: false, resources: ["Sanjeev Kapoor YouTube", "ITC Culinary"] },
          { title: "Continental / International",      done: false, resources: ["Jacques Pepin YouTube", "MasterClass"] },
          { title: "Pastry & Baking Basics",           done: false, resources: ["Preppy Kitchen YouTube", "Joshua Weissman"] },
          { title: "Menu Planning & Costing",          done: false, resources: ["Restaurant Business Online"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Professional Kitchen",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "FSSAI Food Safety Certification",  done: false, resources: ["FSSAI Docs"] },
          { title: "Kitchen Management",               done: false, resources: ["Culinary Institute of America"] },
          { title: "Restaurant Stage / Internship",    done: false, resources: ["Local Restaurants", "Hotel Kitchens"] },
          { title: "Advanced Techniques (Molecular)",  done: false, resources: ["ChefSteps", "Modernist Cuisine"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "IHM Diploma / IICA Certification", done: false, resources: ["IHM Mumbai", "Le Cordon Bleu India"] },
          { title: "Food Blog / Social Media",         done: false, resources: ["Instagram", "YouTube Cooking Channel"] },
          { title: "Apply for Chef Roles",             done: false, resources: ["LinkedIn", "HCareers", "Taj Hotels Careers"] },
          { title: "Start Cloud Kitchen / Catering",   done: false, resources: ["Zomato Partner", "Swiggy Partner"] },
        ],
      },
    ],
  },

  // ── Resort Manager ────────────────────────────────────────
  "Resort Manager": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Resort Operations Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Resort Management Overview",       done: false, resources: ["AHLEI Resort Docs", "Cornell Hospitality"] },
          { title: "Rooms Division Management",        done: false, resources: ["AHLEI Front Office", "IHM Docs"] },
          { title: "Recreation & Activities Mgmt",     done: false, resources: ["Resort & Recreation Docs"] },
          { title: "Spa & Wellness Management",        done: false, resources: ["ISPA Docs", "AHLEI"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Resort Business Skills",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Revenue & Yield Management",       done: false, resources: ["HSMAI Revenue Docs", "IDeaS"] },
          { title: "OTA & Distribution Management",   done: false, resources: ["Booking.com Partner", "Expedia"] },
          { title: "Food & Beverage Operations",       done: false, resources: ["AHLEI F&B Docs"] },
          { title: "Sustainability in Resorts",        done: false, resources: ["Green Key Docs", "Travelife"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Leadership & Marketing",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Team Leadership & HR",             done: false, resources: ["SHRM Hospitality", "Cornell HR"] },
          { title: "Digital Marketing for Resorts",    done: false, resources: ["Revinate Blog", "OTA Insight"] },
          { title: "Internship at Premium Resort",     done: false, resources: ["Club Med", "Six Senses", "Taj"] },
          { title: "Resort Financial Planning",        done: false, resources: ["Hospitality FM Schmidgall"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "CHA or CRME Certification",        done: false, resources: ["AHLEI", "HSMAI Certification"] },
          { title: "Resort Management Portfolio",      done: false, resources: ["LinkedIn"] },
          { title: "Apply for Resort Manager Roles",   done: false, resources: ["LinkedIn", "HCareers", "Marriott Careers"] },
          { title: "International Resort Opportunities",done: false, resources: ["Club Med Careers", "Six Senses Careers"] },
        ],
      },
    ],
  },

  // ── Tour Guide ────────────────────────────────────────────
  "Tour Guide": {
    totalDuration: "4 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Tourism Basics",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Local History & Culture",          done: false, resources: ["ASI India Docs", "Local History Books"] },
          { title: "Tourism Industry Overview",        done: false, resources: ["Ministry of Tourism India", "UNWTO"] },
          { title: "Communication & Public Speaking",  done: false, resources: ["Toastmasters", "Coursera Communication"] },
          { title: "First Aid Basics",                 done: false, resources: ["Red Cross First Aid"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Guide Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Tour Planning & Itinerary Design", done: false, resources: ["WFTGA Docs", "Travel Agent Pro"] },
          { title: "Language Skills",                  done: false, resources: ["Duolingo", "Babbel", "Google Translate"] },
          { title: "Photography for Tour Guides",      done: false, resources: ["Peter McKinnon YouTube"] },
          { title: "Safety & Emergency Procedures",    done: false, resources: ["WFTGA Safety Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Heritage & Cultural Tourism",      done: false, resources: ["ASI Docs", "UNESCO World Heritage"] },
          { title: "Adventure & Eco Tourism",          done: false, resources: ["TIES Ecotourism Docs"] },
          { title: "Food & Culinary Tours",            done: false, resources: ["EatWith", "Airbnb Experiences"] },
          { title: "Digital Tour Guide Apps",          done: false, resources: ["Airbnb Experiences", "GetYourGuide"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "License & Jobs",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "Ministry of Tourism License",      done: false, resources: ["MoT India Docs"] },
          { title: "IATO / ADTOI Membership",          done: false, resources: ["IATO Docs", "ADTOI Docs"] },
          { title: "List on Airbnb Experiences",       done: false, resources: ["Airbnb Experience Host"] },
          { title: "Apply for Tour Operator Roles",    done: false, resources: ["LinkedIn", "MakeMyTrip", "Thomas Cook India"] },
        ],
      },
    ],
  },

  // ── Airline Pilot ─────────────────────────────────────────
  "Airline Pilot": {
    totalDuration: "36 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Student Pilot License",
        duration: "6 months",
        status:   "in_progress",
        milestones: [
          { title: "DGCA Medical (Class 1)",           done: false, resources: ["DGCA India Docs"] },
          { title: "Ground School — Air Navigation",   done: false, resources: ["DGCA Ground School", "Aviation Theory Centre"] },
          { title: "Ground School — Meteorology",      done: false, resources: ["DGCA Meteor", "Oxford ATC"] },
          { title: "Student Pilot License (SPL)",      done: false, resources: ["DGCA Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Private Pilot License",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "40 Hours Flight Training",         done: false, resources: ["DGCA Approved Flying School"] },
          { title: "Solo Flight Completion",           done: false, resources: ["Flight Instructor"] },
          { title: "PPL Written Exams (DGCA)",         done: false, resources: ["DGCA PPL Syllabus"] },
          { title: "Night Flying Rating",              done: false, resources: ["DGCA Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Commercial Pilot License",
        duration: "18 months",
        status:   "locked",
        milestones: [
          { title: "200 Hours Total Flight Time",      done: false, resources: ["Flying School Logbook"] },
          { title: "CPL Ground Exams (DGCA)",          done: false, resources: ["DGCA CPL Syllabus", "Oxford ATC"] },
          { title: "Instrument Rating",                done: false, resources: ["DGCA Docs", "Flight Simulator"] },
          { title: "Multi-Engine Rating",              done: false, resources: ["DGCA Multi-Engine Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Airline Career",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "Type Rating (Boeing/Airbus)",      done: false, resources: ["CAE Training", "FlightSafety Intl"] },
          { title: "ATPL Ground Exams",                done: false, resources: ["DGCA ATPL Syllabus", "Oxford ATC"] },
          { title: "Apply for Airline Cadet Programs", done: false, resources: ["IndiGo Cadet", "Air India Cadet"] },
          { title: "First Officer Position",           done: false, resources: ["IndiGo", "Air India", "SpiceJet"] },
        ],
      },
    ],
  },

  // ── Event Planner ─────────────────────────────────────────
  "Event Planner": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Event Planning Basics",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Event Planning Fundamentals",      done: false, resources: ["Special Events by Goldblatt", "MPI Docs"] },
          { title: "Vendor Management",                done: false, resources: ["EventMB Blog", "BizBash"] },
          { title: "Event Budgeting",                  done: false, resources: ["Eventbrite Blog", "Cvent Blog"] },
          { title: "Event Design Basics",              done: false, resources: ["Pinterest", "Canva"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Event Management Tools",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Eventbrite & Cvent",               done: false, resources: ["Eventbrite Docs", "Cvent Docs"] },
          { title: "Project Management (Asana/Trello)",done: false, resources: ["Asana Docs", "Trello Docs"] },
          { title: "Event Marketing",                  done: false, resources: ["HubSpot Event Marketing", "Eventbrite Blog"] },
          { title: "AV & Production Basics",           done: false, resources: ["EventMB AV Guide"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Practical Experience",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Volunteer at 3 Events",            done: false, resources: ["Local Event Companies", "NGOs"] },
          { title: "Plan Own Small Event",             done: false, resources: ["Eventbrite", "Local Venues"] },
          { title: "Corporate Event Planning",         done: false, resources: ["PCMA Docs", "MPI Docs"] },
          { title: "Event Portfolio",                  done: false, resources: ["LinkedIn", "Instagram"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "CMP Certification (Events Industry)",done: false, resources: ["Events Industry Council"] },
          { title: "MPI Membership",                   done: false, resources: ["MPI Docs"] },
          { title: "Apply for Event Planning Roles",   done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Start Freelance Event Business",   done: false, resources: ["Instagram", "LinkedIn"] },
        ],
      },
    ],
  },

  // ── Wedding Planner ───────────────────────────────────────
  "Wedding Planner": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Wedding Industry Basics",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Wedding Planning Overview",        done: false, resources: ["The Wedding School", "Brides Magazine"] },
          { title: "Indian Wedding Traditions",        done: false, resources: ["WeddingWire India", "WedMeGood Blog"] },
          { title: "Wedding Budget Planning",          done: false, resources: ["Aisle Planner", "WedMeGood"] },
          { title: "Vendor Research & Empanelment",    done: false, resources: ["WedMeGood", "WeddingWire"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Wedding Planning Skills",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Decor & Theme Design",             done: false, resources: ["Pinterest", "Shaadi.com Blog"] },
          { title: "Wedding Catering Planning",        done: false, resources: ["WedMeGood Catering"] },
          { title: "Wedding Photography Brief",        done: false, resources: ["SLR Lounge Wedding"] },
          { title: "Day-of Timeline Management",       done: false, resources: ["Aisle Planner Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Destination Weddings & Events",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Destination Wedding Planning",     done: false, resources: ["Destination Wedding Collective"] },
          { title: "Wedding Marketing & Instagram",    done: false, resources: ["Instagram Wedding", "Pinterest"] },
          { title: "Plan 2 Real Weddings (Assist)",    done: false, resources: ["Local Wedding Planners"] },
          { title: "Wedding Portfolio",                done: false, resources: ["Instagram", "Behance"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Business Launch",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Certified Wedding Planner (CWP)", done: false, resources: ["The Bridal Society", "JWIC"] },
          { title: "Wedding Business Setup",           done: false, resources: ["Shopify", "Google My Business"] },
          { title: "WedMeGood / Shaadi.com Listing",  done: false, resources: ["WedMeGood Vendor", "Shaadi Bazaar"] },
          { title: "Apply for Wedding Planning Firms", done: false, resources: ["LinkedIn", "Indeed Wedding Jobs"] },
        ],
      },
    ],
  },

  // ── Concert / Music Event Manager ─────────────────────────
  "Concert / Music Event Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Music Event Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Music Industry Overview",          done: false, resources: ["Berklee Online", "Music Business Worldwide"] },
          { title: "Concert Production Basics",        done: false, resources: ["Live Event Production by Lommers"] },
          { title: "Artist Contracts & Riders",        done: false, resources: ["Music Business Insider"] },
          { title: "Venue & Logistics Management",     done: false, resources: ["EventMB Blog", "Pollstar"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Production Skills",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Stage & Sound Production",         done: false, resources: ["PSW Magazine", "ProSoundWeb"] },
          { title: "Lighting Design Basics",           done: false, resources: ["Entertainment Lighting by Cadena"] },
          { title: "Ticketing & Box Office",           done: false, resources: ["Eventbrite", "BookMyShow Partner"] },
          { title: "Music Festival Operations",        done: false, resources: ["IQ Magazine", "Festival Insights"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Marketing & Business',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Concert Promotion & Marketing",    done: false, resources: ["Pollstar", "Music Ally"] },
          { title: "Sponsorship Acquisition",          done: false, resources: ["IEG Sponsorship Report"] },
          { title: "Social Media for Events",          done: false, resources: ["Eventbrite Blog", "Hootsuite"] },
          { title: "Assist in 2 Live Events",          done: false, resources: ["Local Promoters", "Event Companies"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Music Business Certification",     done: false, resources: ["Berklee Online Music Business"] },
          { title: "Event Portfolio",                  done: false, resources: ["LinkedIn", "Instagram"] },
          { title: "Apply for Music Event Roles",      done: false, resources: ["LinkedIn", "Indeed", "Pollstar Jobs"] },
          { title: "Start Own Promotions Company",     done: false, resources: ["BookMyShow Partner", "Insider.in"] },
        ],
      },
    ],
  },

  // ── Corporate Event Manager ───────────────────────────────
  "Corporate Event Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Corporate Events Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Corporate Event Types & Formats",  done: false, resources: ["PCMA Docs", "MPI Docs"] },
          { title: "Conference & Meeting Planning",    done: false, resources: ["PCMA Education", "MeetingsNet"] },
          { title: "Event Tech (Cvent, Zoom Events)", done: false, resources: ["Cvent Docs", "Zoom Events Docs"] },
          { title: "Corporate Event Budgeting",        done: false, resources: ["Eventbrite Blog", "Cvent Blog"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Production & Logistics",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "AV & Hybrid Event Production",     done: false, resources: ["EventMB AV Guide", "PSAV Docs"] },
          { title: "Venue Selection & Contracts",      done: false, resources: ["PCMA Venue Sourcing Docs"] },
          { title: "Event Marketing & Communications", done: false, resources: ["Eventbrite Marketing", "HubSpot Events"] },
          { title: "Stakeholder Management",           done: false, resources: ["PMI Docs", "HBR"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Events',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Virtual & Hybrid Events",          done: false, resources: ["Hopin Docs", "ON24 Docs"] },
          { title: "Event Analytics & ROI",            done: false, resources: ["Cvent Analytics", "Eventbrite Insights"] },
          { title: "Sustainability in Events",         done: false, resources: ["Events Industry Council Sustainability"] },
          { title: "Assist 3 Corporate Events",        done: false, resources: ["Event Companies", "Hotels"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "CMP (Certified Meeting Professional)",done: false, resources: ["Events Industry Council"] },
          { title: "PCMA Membership",                  done: false, resources: ["PCMA Docs"] },
          { title: "Apply for Corporate Event Roles",  done: false, resources: ["LinkedIn", "Naukri", "Indeed"] },
          { title: "Corporate Event Portfolio",        done: false, resources: ["LinkedIn", "Portfolio Site"] },
        ],
      },
    ],
  },

  // ── Sports Event Manager ──────────────────────────────────
  "Sports Event Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Sports Event Basics",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Sports Event Management Overview", done: false, resources: ["NASSM Docs", "Sport Management by Masteralexis"] },
          { title: "Sports Governing Bodies",          done: false, resources: ["BCCI Docs", "FIFA Docs", "IOC Docs"] },
          { title: "Tournament & League Planning",     done: false, resources: ["Sport:80 Docs", "SportzInteractive"] },
          { title: "Sports Venue Management",          done: false, resources: ["IAVM Docs", "Venue Management Assoc"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Operations & Logistics",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Sports Event Operations",          done: false, resources: ["NASSM", "Event Management by Allen"] },
          { title: "Ticketing & Fan Experience",       done: false, resources: ["Paytm Insider", "BookMyShow Partner"] },
          { title: "Sports Media & Broadcasting",      done: false, resources: ["SVG Docs", "Sports Video Group"] },
          { title: "Safety & Security Management",     done: false, resources: ["ISO 20121 Docs", "IAAM Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Sponsorship & Marketing',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Sports Sponsorship",               done: false, resources: ["IEG Sponsorship", "Nielsen Sports"] },
          { title: "Social Media for Sports Events",   done: false, resources: ["SportsPro Media", "Twitter Sports"] },
          { title: "International Sports Events",      done: false, resources: ["IOC Organiser Docs", "FIFA Organising"] },
          { title: "Volunteer at 2 Sports Events",     done: false, resources: ["Local Sports Bodies", "National Federations"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Sports Management Certification",  done: false, resources: ["NASSM", "Coventry Sports Management"] },
          { title: "Apply for Sports Event Roles",     done: false, resources: ["LinkedIn", "BCCI Careers", "FIFA Careers"] },
          { title: "Sports Event Portfolio",           done: false, resources: ["LinkedIn", "Instagram"] },
          { title: "Network with Sports Federations",  done: false, resources: ["LinkedIn", "National Sports Federations"] },
        ],
      },
    ],
  },

  // ── Teacher / Professor ───────────────────────────────────
  "Teacher / Professor": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Teaching Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Pedagogy & Teaching Methods",      done: false, resources: ["Coursera Teaching", "NCERT Training Docs"] },
          { title: "Bloom's Taxonomy",                 done: false, resources: ["Vanderbilt CFT Docs", "ATD Docs"] },
          { title: "Classroom Management",             done: false, resources: ["The Teaching Channel", "Edutopia"] },
          { title: "Curriculum Design Basics",         done: false, resources: ["NCERT Docs", "IB Curriculum Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Subject Mastery',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Deep Subject Knowledge",           done: false, resources: ["NCERT Textbooks", "Reference Books"] },
          { title: "B.Ed / M.Ed Program",              done: false, resources: ["B.Ed Colleges", "IGNOU B.Ed"] },
          { title: "Assessment & Evaluation",          done: false, resources: ["Educational Testing Service", "NCERT Eval"] },
          { title: "Inclusive Education",              done: false, resources: ["UNESCO Inclusive Ed Docs", "RTE Act"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Modern Teaching',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "EdTech Tools (Zoom, Google Classroom)",done: false, resources: ["Google for Education", "Zoom Docs"] },
          { title: "Blended Learning Design",          done: false, resources: ["iNACOL Docs", "Coursera"] },
          { title: "Special Education Basics",         done: false, resources: ["CEC Docs", "Understood.org"] },
          { title: "Research & Publication",           done: false, resources: ["Google Scholar", "ERIC Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "CTET / STET Exam",                 done: false, resources: ["CTET Docs", "CBSE Docs"] },
          { title: "UGC NET (For Professor)",          done: false, resources: ["UGC NET Docs", "NTA Docs"] },
          { title: "Apply for Teaching Positions",     done: false, resources: ["LinkedIn", "TeachersIndia", "Naukri"] },
          { title: "International Teaching (IB / CBSE)",done: false, resources: ["Tieonline", "Search Associates"] },
        ],
      },
    ],
  },

  // ── EdTech Developer ──────────────────────────────────────
  "EdTech Developer": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Tech + Education Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "React & Node.js",                  done: false, resources: ["React Docs", "Node Docs"] },
          { title: "Learning Management Systems",      done: false, resources: ["Moodle Docs", "Canvas Docs"] },
          { title: "EdTech Industry Overview",         done: false, resources: ["EdTech Magazine", "eLearning Industry"] },
          { title: "Instructional Design Basics",      done: false, resources: ["ATD Docs", "ASTD Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "EdTech Development',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "LMS Development (Moodle/Open edX)",done: false, resources: ["Moodle Docs", "Open edX Docs"] },
          { title: "Video Streaming Integration",      done: false, resources: ["Wowza Docs", "Vimeo API"] },
          { title: "Quiz & Assessment Systems",        done: false, resources: ["Canvas API", "Custom Quiz Docs"] },
          { title: "Mobile Learning App",              done: false, resources: ["React Native Docs", "Flutter Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced EdTech',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "AI in Education (Personalization)", done: false, resources: ["Knewton Docs", "Carnegie Learning"] },
          { title: "Gamification in Learning",         done: false, resources: ["Duolingo Case Study", "Kahoot Docs"] },
          { title: "Learning Analytics",               done: false, resources: ["xAPI Docs", "Tin Can API"] },
          { title: "EdTech Product Launch",            done: false, resources: ["ProductHunt", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Jobs & Startup',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "EdTech Portfolio",                 done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for EdTech Roles",           done: false, resources: ["LinkedIn", "Byju's Careers", "Unacademy Careers"] },
          { title: "EdTech Startup Idea",              done: false, resources: ["Y Combinator", "EdTechHub"] },
          { title: "EdTech Interview Prep",            done: false, resources: ["InterviewBit", "Glassdoor"] },
        ],
      },
    ],
  },

  // ── Instructional Designer ────────────────────────────────
  "Instructional Designer": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "ID Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "ADDIE Model",                      done: false, resources: ["ATD ADDIE Docs", "Instructional Design Central"] },
          { title: "Learning Theory (Bloom, Gagne)",   done: false, resources: ["Educational Psychology by Woolfolk"] },
          { title: "Needs Analysis",                   done: false, resources: ["ATD Needs Analysis", "Training Magazine"] },
          { title: "Storyboarding",                    done: false, resources: ["E-Learning Heroes", "Tim Slade"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "ID Tools',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Articulate Storyline 360",         done: false, resources: ["E-Learning Heroes", "Articulate Docs"] },
          { title: "Adobe Captivate",                  done: false, resources: ["Adobe Captivate Docs"] },
          { title: "Rise 360",                         done: false, resources: ["Articulate Rise Docs"] },
          { title: "Video-Based Learning",             done: false, resources: ["Camtasia Docs", "TechSmith"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced ID',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Microlearning Design",             done: false, resources: ["Training Magazine", "ATD"] },
          { title: "xAPI & Learning Analytics',",      done: false, resources: ["xAPI Spec", "SCORM Docs"] },
          { title: "Virtual Classroom Facilitation",   done: false, resources: ["ATD Virtual Classroom Docs"] },
          { title: "ID Portfolio (5 Modules)',",       done: false, resources: ["Behance", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "ATD CPTD or APTD Certification",   done: false, resources: ["ATD Certification"] },
          { title: "Apply for ID Roles',",             done: false, resources: ["LinkedIn", "ATD Job Board", "Indeed"] },
          { title: "Freelance ID Projects",            done: false, resources: ["Upwork", "Fiverr", "LinkedIn"] },
          { title: "ID Interview Prep",                done: false, resources: ["Glassdoor", "E-Learning Heroes"] },
        ],
      },
    ],
  },

  // ── Academic Researcher ───────────────────────────────────
  "Academic Researcher": {
    totalDuration: "24 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Research Foundations',",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Research Methodology",             done: false, resources: ["Creswell Research Design", "Kothari Research Methodology"] },
          { title: "Literature Review',",              done: false, resources: ["Google Scholar", "Zotero Docs"] },
          { title: "Statistics & SPSS',",              done: false, resources: ["SPSS Docs", "Field Discovering Statistics"] },
          { title: "Academic Writing',",               done: false, resources: ["APA Manual", "Purdue OWL"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Research Execution',",
        duration: "9 months",
        status:   "locked",
        milestones: [
          { title: "Research Proposal Writing',",      done: false, resources: ["UGC Research Docs", "University Guidelines"] },
          { title: "Data Collection',",                done: false, resources: ["Survey Monkey", "Qualtrics"] },
          { title: "Data Analysis (R / Python)',",     done: false, resources: ["R Docs", "Python Docs"] },
          { title: "First Research Paper',",           done: false, resources: ["Google Scholar Journals", "Elsevier"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Publication & PhD',",
        duration: "9 months",
        status:   "locked",
        milestones: [
          { title: "Journal Paper Submission',",       done: false, resources: ["Elsevier", "Springer", "IEEE Xplore"] },
          { title: "PhD Registration',",               done: false, resources: ["UGC PhD Guidelines", "University Portal"] },
          { title: "Conference Presentations',",       done: false, resources: ["Scopus Conferences", "IEEE Conferences"] },
          { title: "Research Grant Application',",     done: false, resources: ["DST India", "UGC Grants", "SERB India"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Academic Career',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "UGC NET Qualification',",          done: false, resources: ["UGC NET Docs", "NTA Docs"] },
          { title: "Post-Doc Opportunities',",         done: false, resources: ["Academia.edu", "ResearchGate"] },
          { title: "Apply for Faculty Positions',",    done: false, resources: ["LinkedIn", "UGC Vacancies", "IIT Careers"] },
          { title: "H-Index & Citations Growth',",     done: false, resources: ["Google Scholar Profile"] },
        ],
      },
    ],
  },

  // ── Online Course Creator ─────────────────────────────────
  "Online Course Creator": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Course Foundation',",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Choose Your Course Niche',",       done: false, resources: ["Udemy Research", "Teachable Blog"] },
          { title: "Course Outline & Curriculum',",    done: false, resources: ["Coursera Design Docs", "Udemy Instructor"] },
          { title: "Video Recording Setup',",          done: false, resources: ["Camtasia Docs", "OBS Studio Docs"] },
          { title: "Slide Design (PowerPoint)',",       done: false, resources: ["Canva", "PowerPoint"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Course Creation',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Record All Course Videos',",       done: false, resources: ["Camtasia", "Loom", "ScreenFlow"] },
          { title: "Video Editing for Courses',",      done: false, resources: ["Camtasia", "DaVinci Resolve"] },
          { title: "Quizzes & Assignments',",          done: false, resources: ["Teachable Quizzes", "Thinkific"] },
          { title: "Course Landing Page',",            done: false, resources: ["Teachable", "Kajabi", "Thinkific"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Launch & Marketing',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Email List Building',",            done: false, resources: ["ConvertKit", "Mailchimp"] },
          { title: "Course Launch Strategy',",         done: false, resources: ["Amy Porterfield Docs"  , "Jeff Walker Launch"] },
          { title: "Udemy vs Own Platform',",          done: false, resources: ["Teachable vs Udemy Comparison"] },
          { title: "YouTube for Course Marketing',",   done: false, resources: ["Think Media YouTube", "YouTube Studio"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale & Automate',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Affiliate Program Setup,",        done: false, resources: ["Teachable Affiliates", "PartnerStack"] },
          { title: "Community Building,",             done: false, resources: ["Circle", "Discord", "Mighty Networks"] },
          { title: "Second Course Creation,",         done: false, resources: ["Teachable", "Udemy Instructor"] },
          { title: "Passive Income Automation,",      done: false, resources: ["Kajabi Automations", "ActiveCampaign"] },
        ],
      },
    ],
  },

  // ── School Counselor ──────────────────────────────────────
  "School Counselor": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Counseling Basics',",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Counseling Theories,",            done: false, resources: ["Corey Theory & Practice of Counseling", "ACA Docs"] },
          { title: "Child & Adolescent Psychology,",  done: false, resources: ["Santrock Adolescence", "Steinberg Adolescence"] },
          { title: "Career Counseling Basics,",       done: false, resources: ["NCDA Docs", "Holland Career Theory"] },
          { title: "Active Listening Skills,",        done: false, resources: ["MicroCounseling by Ivey"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "School Counseling Skills',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "ASCA National Model,",            done: false, resources: ["ASCA Docs", "School Counseling Program"] },
          { title: "Crisis Intervention,",            done: false, resources: ["ASCA Crisis Docs", "Suicide Prevention"] },
          { title: "College Admission Counseling,",   done: false, resources: ["NACAC Docs", "Common App Docs"] },
          { title: "Group Counseling Basics,",        done: false, resources: ["Yalom Group Psychotherapy"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Practical Experience',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "School Counseling Internship,",   done: false, resources: ["Local Schools", "NGOs"] },
          { title: "Individual & Group Sessions,",    done: false, resources: ["Supervised Practice"] },
          { title: "Parent & Teacher Consultation,",  done: false, resources: ["ASCA Consultation Docs"] },
          { title: "Psychometric Assessment Tools,",  done: false, resources: ["Holland SDS", "MBTI Basics"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "RCI Registration (India) ,",       done: false, resources: ["RCI Docs"] },
          { title: "Apply for School Counselor Roles",done: false, resources: ["LinkedIn", "Naukri", "School Job Portals"] },
          { title: "IB / CBSE International Counselor",done: false, resources: ["Search Associates", "Tieonline"] },
          { title: "Online Counseling Platform,",     done: false, resources: ["YourDost", "iCall", "Vandrevala"] },
        ],
      },
    ],
  },

  // ── Lawyer / Advocate ─────────────────────────────────────
  "Lawyer / Advocate": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "CLAT & LLB Foundation',",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "CLAT Preparation,",               done: false, resources: ["Legal Edge CLAT", "Career Launcher CLAT"] },
          { title: "Constitution of India,",          done: false, resources: ["D.D. Basu Constitution", "M.P. Jain"] },
          { title: "Legal Reasoning Basics,",         done: false, resources: ["CLAT Legal Reasoning Guide"] },
          { title: "General Knowledge & Current Affairs",done: false, resources: ["The Hindu", "Current Affairs for CLAT"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "LLB Core Subjects',",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "Criminal Law (IPC & CrPC),",      done: false, resources: ["Ratanlal Dhirajlal IPC", "R.V. Kelkar CrPC"] },
          { title: "Civil Procedure Code (CPC),",     done: false, resources: ["Mulla CPC","C.K. Takwani CPC"] },
          { title: "Contract Law,",                   done: false, resources: ["Avtar Singh Contract Law"] },
          { title: "Moot Court & Legal Writing ,",     done: false, resources: ["Law School Moot Court Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "LLB Specialization',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Constitutional Law & PIL,",       done: false, resources: ["M.P. Jain Constitutional Law"] },
          { title: "Corporate & Commercial Law,",     done: false, resources: ["Avtar Singh Company Law"] },
          { title: "Internship at Law Firm,",         done: false, resources: ["Bar Council Internship Rules"] },
          { title: "Legal Aid Clinic,",               done: false, resources: ["NALSA Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Bar & Practice',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "All India Bar Exam (AIBE),",      done: false, resources: ["BCI AIBE Docs"] },
          { title: "Bar Council Enrollment,",         done: false, resources: ["State Bar Council Docs"] },
          { title: "Junior Associate at Law Firm,",   done: false, resources: ["LinkedIn", "Legal Jobs India"] },
          { title: "Judiciary Exam Prep (Optional),", done: false, resources: ["DJS Exam", "HJS Exam Docs"] },
        ],  
      },
    ],
  },

  // ── Corporate Lawyer ──────────────────────────────────────
  "Corporate Lawyer": {
    totalDuration: "72 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Law School Foundation',",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "CLAT / LSAT Preparation',",        done: false, resources: ["Legal Edge", "Career Launcher CLAT"] },
          { title: "Business & Economic Basics',",     done: false, resources: ["Economics NCERT", "Business Studies"] },
          { title: "English & Legal Reasoning',",      done: false, resources: ["CLAT Prep Books"] },
          { title: "Current Affairs & GK',",           done: false, resources: ["The Hindu", "Business Standard"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "LLB / LLB(Hons) Core',",
        duration: "36 months",
        status:   "locked",
        milestones: [
          { title: "Contract, Company & Commercial Law",done: false, resources: ["Avtar Singh", "Corporate Law by Kapoor"] },
          { title: "Securities Law & SEBI ,",          done: false, resources: ["SEBI Docs", "SC Aggarwal"] },
          { title: "Mergers & Acquisitions Law,",     done: false, resources: ["AZB & Partners Blog", "Cyril Amarchand Blog"] },
          { title: "Law Firm Internships,",           done: false, resources: ["LinkedIn", "NLUD", "NLS Internship Portals"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization & LLM',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "LLM in Corporate / Commercial Law",done: false, resources: ["NLU Docs", "ILS Pune"] },
          { title: "Due Diligence & Contract Drafting",done: false, resources: ["Practical Law India", "Manupatra"] },
          { title: "Capital Markets & IPO Process,",  done: false, resources: ["SEBI ICDR Regulations"] },
          { title: "International Business Law,",     done: false, resources: ["ICC Docs", "UNCITRAL Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Big Law Career',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Associate at Top Law Firm,",      done: false, resources: ["AZB", "Cyril Amarchand", "Shardul Amarchand"] },
          { title: "Bar Council Enrollment,",         done: false, resources: ["BCI Docs"] },
          { title: "AIBE Exam,",                      done: false, resources: ["BCI AIBE Docs"] },
          { title: "In-House Counsel Track (Optional)",done: false, resources: ["LinkedIn", "Corporate Legal Jobs"] },
        ],
      },
    ],
  },

  // ── Legal Tech Specialist ─────────────────────────────────
  "Legal Tech Specialist": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Law + Tech Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Legal Industry Overview,",        done: false, resources: ["Legal Geek", "Law Technology Today"] },
          { title: "Programming Basics (Python),",    done: false, resources: ["Python Docs", "freeCodeCamp Python"] },
          { title: "Legal Research Tools ,",           done: false, resources: ["Manupatra", "SCC Online", "Westlaw"] },
          { title: "Contract Management Software ,",   done: false, resources: ["Clio Docs", "DocuSign Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Legal Tech Applications',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Contract AI & Document Review,",  done: false, resources: ["LexisNexis AI", "Kira Systems Docs"] },
          { title: "Legal Analytics,",                done: false, resources: ["Lex Machina", "Docket Alarm"] },
          { title: "E-Discovery Tools,",              done: false, resources: ["Relativity Docs", "Everlaw Docs"] },
          { title: "Chatbots for Legal Services,",    done: false, resources: ["DoNotPay", "Ironclad Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Legal Tech',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "AI in Legal Practice,",           done: false, resources: ["Legal Geek AI Reports"] },
          { title: "Blockchain for Legal (Smart Contracts),", done: false, resources: ["Ethereum Docs", "OpenLaw"] },
          { title: "Legal Tech Product Management,",  done: false, resources: ["Mind the Product", "Product School"] },
          { title: "Build Legal Tech Product,",       done: false, resources: ["GitHub", "ProductHunt"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Legal Tech Portfolio,",           done: false, resources: ["GitHub" , "LinkedIn"] },
          { title: "Apply for Legal Tech Roles,",     done: false, resources: ["LinkedIn", "Legal Geek Jobs"] },
          { title: "Legal Tech Startup Ideas,",       done: false, resources: ["Y Combinator", "LegalTech Fund"] },
          { title: "Legal Tech Interview Prep,",      done: false, resources: ["Glassdoor", "Legal Geek"] },
        ],
      },
    ],
  },

  // ── Patent Attorney ───────────────────────────────────────
  "Patent Attorney": {
    totalDuration: "72 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Science + Law Foundation',",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "Science / Engg Degree (B.Tech/BSc)",done: false, resources: ["University Curriculum"] },
          { title: "Patent Basics,",                  done: false, resources: ["CGPDTM Docs", "WIPO Docs"] },
          { title: "IP Law Overview,",                done: false, resources: ["WIPO Academy", "NASSCOM IP Docs"] },
          { title: "LLB / LLB(Hons) Admission,",     done: false, resources: ["CLAT", "Law University Portals"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "IP Law & Patent Prosecution',",
        duration: "36 months",
        status:   "locked",
        milestones: [
          { title: "Patent Law & Drafting,",          done: false, resources: ["Patent Practitioner by Matthews", "WIPO Patent Drafting"] },
          { title: "Prior Art Search,",               done: false, resources: ["Espacenet", "Google Patents"] },
          { title: "Trade Mark & Copyright Law,",     done: false, resources: ["WIPO IP Training"] },
          { title: "Patent Office Internship,",       done: false, resources: ["CGPDTM India", "USPTO Externship"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Patent Agent Exam',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "CGPDTM Patent Agent Exam,",       done: false, resources: ["CGPDTM Exam Docs"] },
          { title: "Advanced Patent Drafting,",       done: false, resources: ["PLI Patent Course", "USPTO Docs"] },
          { title: "PCT & International Filing,",     done: false, resources: ["WIPO PCT Docs"] },
          { title: "IP Litigation Basics,",           done: false, resources: ["Patent Litigation Guide"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Practice & Bar',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Patent Agent Certificate',",       done: false, resources: ["CGPDTM Docs"] },
          { title: "AIBE & Bar Enrollment',",          done: false, resources: ["BCI Docs"] },
          { title: "Apply for IP Law Firms',",         done: false, resources: ["LinkedIn", "IP India Job Board"] },
          { title: "USPTO Bar (Optional for US)',",    done: false, resources: ["USPTO OED Docs"] },
        ],
      },
    ],
  },

  // ── Cybersecurity Lawyer ──────────────────────────────────
  "Cybersecurity Lawyer": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Law + Tech Foundation',",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "CLAT / Law School Admission',",    done: false, resources: ["Legal Edge", "Career Launcher"] },
          { title: "Technology Basics',",              done: false, resources: ["CS50 Harvard", "Coursera Tech Basics"] },
          { title: "Cybersecurity Overview',",         done: false, resources: ["Cybrary", "SANS Reading Room"] },
          { title: "Data Privacy Introduction',",      done: false, resources: ["IAPP Docs", "GDPR.eu"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "LLB & Cyber Law',",
        duration: "36 months",
        status:   "locked",
        milestones: [
          { title: "IT Act 2000 & Amendments',",       done: false, resources: ["MeitY IT Act Docs"] },
          { title: "Data Protection Bill (India)',",   done: false, resources: ["MeitY PDPB Docs"] },
          { title: "GDPR & Global Privacy Laws',",     done: false, resources: ["GDPR.eu", "IAPP Docs"] },
          { title: "Cyber Crime & Investigation',",    done: false, resources: ["CBI Cyber Crime Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "CIPP/E or CIPM Certification',",   done: false, resources: ["IAPP Certification"] },
          { title: "Cyber Forensics Basics',",         done: false, resources: ["EC-Council CEH", "Cybrary"] },
          { title: "Fintech & Healthtech Privacy',",   done: false, resources: ["IAPP Fintech Privacy Docs"] },
          { title: "LLM in Cyber Law (Optional)',",    done: false, resources: ["NLU Docs", "NALSAR Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "Bar Council Enrollment',",         done: false, resources: ["BCI Docs"] },
          { title: "Apply for Cyber Law Roles',",      done: false, resources: ["LinkedIn", "Naukri", "Legal Tech Jobs"] },
          { title: "In-House Privacy Counsel Track',", done: false, resources: ["LinkedIn", "IAPP Job Board"] },
          { title: "Cyber Law Portfolio',",            done: false, resources: ["LinkedIn", "ResearchGate"] },
        ],
      },
    ],
  },

  // ── Judge / Magistrate ────────────────────────────────────
  "Judge / Magistrate": {
    totalDuration: "84 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Law Degree',",
        duration: "36 months",
        status:   "in_progress",
        milestones: [
          { title: "LLB / LLB(Hons) Completion',",    done: false, resources: ["NLU", "BCI Approved Law Colleges"] },
          { title: "Core Law Subjects',",              done: false, resources: ["LLB Textbooks"] },
          { title: "Moot Court & Internships',",       done: false, resources: ["Law School Moot Courts"] },
          { title: "Constitutional Law Mastery',",     done: false, resources: ["M.P. Jain", "D.D. Basu"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Judicial Exam Preparation',",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "State Judicial Services Exam',",   done: false, resources: ["DJS Guide", "HJS Guide", "State PSC Docs"] },
          { title: "Civil Procedure Code (CPC)',",     done: false, resources: ["Mulla CPC", "C.K. Takwani"] },
          { title: "Criminal Procedure Code (CrPC)',", done: false, resources: ["R.V. Kelkar CrPC"] },
          { title: "Evidence Act',",                   done: false, resources: ["Ratanlal Evidence Act", "Sarkar Evidence"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Practice at Bar (2-7 Years)',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Bar Council Enrollment & Practice", done: false, resources: ["BCI Docs"] },
          { title: "Courtroom Experience',",           done: false, resources: ["District Courts", "High Court"] },
          { title: "Legal Research & Case Preparation",done: false, resources: ["Manupatra", "SCC Online"] },
          { title: "Mock Trial Participation',",       done: false, resources: ["Bar Association Events"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Judicial Appointment',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Qualify Judicial Services Exam',", done: false, resources: ["State PSC Results"] },
          { title: "Judicial Training (NJA)',",        done: false, resources: ["NJA India Docs"] },
          { title: "Civil Judge / JMFC Posting',",     done: false, resources: ["High Court Orders"] },
          { title: "Continuous Legal Education',",     done: false, resources: ["NJA", "State Judicial Academies"] },
        ],
      },
    ],
  },

  // ── Research Scientist ────────────────────────────────────
  "Research Scientist": {
    totalDuration: "36 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Science Fundamentals',",
        duration: "6 months",
        status:   "in_progress",
        milestones: [
          { title: "Advanced Subject Knowledge',",     done: false, resources: ["University Textbooks", "MIT OCW"] },
          { title: "Research Methodology',",           done: false, resources: ["Creswell Research Design", "Kothari"] },
          { title: "Statistics & R / Python',",        done: false, resources: ["R Docs", "Python Docs"] },
          { title: "Literature Review',",              done: false, resources: ["Google Scholar", "PubMed"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "MSc / MTech Research',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Laboratory Techniques',",          done: false, resources: ["Lab Protocol Docs", "Nature Methods"] },
          { title: "Academic Paper Writing',",         done: false, resources: ["APA Manual", "Purdue OWL"] },
          { title: "Conference Paper Submission',",    done: false, resources: ["IEEE", "Elsevier Conferences"] },
          { title: "MSc Dissertation',",               done: false, resources: ["University Guidelines"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "PhD Research',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "PhD Registration & Proposal',",    done: false, resources: ["UGC PhD Guidelines"] },
          { title: "Original Research & Experiments',",done: false, resources: ["Lab Protocols", "Research Tools"] },
          { title: "Journal Publications (2+)',",      done: false, resources: ["Nature", "Science", "IEEE", "Elsevier"] },
          { title: "International Conference Talks',", done: false, resources: ["Scopus Conferences"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "Post-Doc Fellowship',",            done: false, resources: ["DST India", "SERB", "IndiaBioscience"] },
          { title: "Research Grant Applications',",    done: false, resources: ["DST", "DBT", "ICMR Grants"] },
          { title: "Apply for Research Positions',",   done: false, resources: ["CSIR Jobs", "IISc", "IIT Research"] },
          { title: "H-Index & Citation Growth',",      done: false, resources: ["Google Scholar Profile"] },
        ],
      },
    ],
  },

  // ── Biotechnologist ───────────────────────────────────────
  "Biotechnologist": {
    totalDuration: "24 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Biotech Fundamentals',",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Molecular Biology Basics',",       done: false, resources: ["Alberts Molecular Biology Cell", "NCBI Docs"] },
          { title: "Genetics & Genomics',",            done: false, resources: ["Lewin Genes", "NCBI Gene"] },
          { title: "Cell Biology',",                   done: false, resources: ["Lodish Molecular Cell Biology"] },
          { title: "Biochemistry',",                   done: false, resources: ["Stryer Biochemistry", "Lehninger"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Lab Techniques',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "PCR & Gel Electrophoresis',",      done: false, resources: ["Bio-Rad PCR Docs", "Thermo Scientific"] },
          { title: "CRISPR Gene Editing',",            done: false, resources: ["Addgene CRISPR Docs"] },
          { title: "Protein Expression & Purification",done: false, resources: ["Qiagen Docs", "GE Life Sciences"] },
          { title: "Bioinformatics Basics',",          done: false, resources: ["NCBI Tutorial", "Rosalind Bioinformatics"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Applied Biotech',",
        duration: "9 months",
        status:   "locked",
        milestones: [
          { title: "Pharmaceutical Biotech',",         done: false, resources: ["FDA Biotech Docs", "EMA Docs"] },
          { title: "Agricultural Biotech & GMO',",     done: false, resources: ["ISAAA Docs"] },
          { title: "Biosafety & Ethics',",             done: false, resources: ["WHO Biosafety Docs"] },
          { title: "Research Paper Publication',",     done: false, resources: ["Nature Biotechnology", "Elsevier"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "GATE Biotechnology (Optional)',",  done: false, resources: ["GATE Biotech Guide"] },
          { title: "Biotech Industry Internship',",    done: false, resources: ["Biocon", "Serum Institute", "Zydus"] },
          { title: "Apply for Biotech Roles',",        done: false, resources: ["LinkedIn", "Naukri", "BioPharma Jobs"] },
          { title: "PhD Track (Optional)',",           done: false, resources: ["JNCASR", "IISc", "CCMB"] },
        ],
      },
    ],
  },

  // ── Environmental Scientist ───────────────────────────────
  "Environmental Scientist": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Environmental Science Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Ecology & Ecosystem Science',",    done: false, resources: ["Odum Ecology", "Khan Academy Ecology"] },
          { title: "Climate Science Basics',",         done: false, resources: ["IPCC Reports", "NASA Climate Docs"] },
          { title: "Environmental Chemistry',",        done: false, resources: ["Baird Environmental Chemistry"] },
          { title: "Field Research Methods',",         done: false, resources: ["Krebs Ecological Methods"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Technical Skills',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "GIS & Remote Sensing',",           done: false, resources: ["QGIS Docs", "Esri Learn"] },
          { title: "Environmental Data Analysis (R)',",done: false, resources: ["R Ecology Docs", "DataCamp"] },
          { title: "Air & Water Quality Analysis',",   done: false, resources: ["EPA Methods", "CPCB Docs"] },
          { title: "Environmental Impact Assessment',",done: false, resources: ["MoEFCC EIA Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Applied Science',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Climate Modeling Basics',",        done: false, resources: ["CMIP6 Docs", "NCAR Docs"] },
          { title: "Biodiversity Assessment',",        done: false, resources: ["IUCN Red List Docs", "CBD Docs"] },
          { title: "Pollution Control Technology',",   done: false, resources: ["EPA Technology Docs"] },
          { title: "Research Paper / Field Report',",  done: false, resources: ["Environmental Science Journals"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "GATE Environmental Science',",     done: false, resources: ["GATE Academy"] },
          { title: "Apply for Env Scientist Roles',",  done: false, resources: ["LinkedIn", "CPCB Jobs", "MoEFCC Careers"] },
          { title: "NGO & Consulting Opportunities',", done: false, resources: ["Development Sector Jobs", "LinkedIn"] },
          { title: "International Env Research',",     done: false, resources: ["UNEP Jobs", "WWF Careers"] },
        ],
      },
    ],
  },

  // ── Astrophysicist ────────────────────────────────────────
  "Astrophysicist": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Physics & Math Mastery',",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "Advanced Physics (Halliday/Resnick)',",done: false, resources: ["Halliday Resnick", "Irodov Problems"] },
          { title: "Mathematical Methods',",           done: false, resources: ["Arfken Mathematical Methods", "Griffiths"] },
          { title: "Classical Mechanics',",            done: false, resources: ["Goldstein Classical Mechanics"] },
          { title: "Python for Physics',",             done: false, resources: ["Python Docs", "Numerical Python"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Astrophysics Fundamentals',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Stellar Astrophysics',",           done: false, resources: ["Carroll Ostlie Modern Astrophysics"] },
          { title: "Galactic & Extragalactic Astronomy",done: false, resources: ["Binney Merrifield Galactic Astronomy"] },
          { title: "Cosmology Basics',",               done: false, resources: ["Ryden Introduction Cosmology"] },
          { title: "Observational Astronomy',",        done: false, resources: ["IUCAA Docs", "Telescope Operation Guides"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Research & MSc/PhD',",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "MSc Physics / Astrophysics',",     done: false, resources: ["IUCAA", "IIA", "TIFR Docs"] },
          { title: "JAM / JEST Exam Prep',",           done: false, resources: ["JAM Physics Guide", "JEST Prep"] },
          { title: "Research Paper',",                 done: false, resources: ["arXiv", "NASA ADS"] },
          { title: "Telescope & Data Analysis',",      done: false, resources: ["IRAF", "AstroPy Python Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "PhD & Career',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "PhD at TIFR / IUCAA / IIA',",     done: false, resources: ["TIFR GS Docs", "IUCAA PhD Docs"] },
          { title: "Post-Doc International',",         done: false, resources: ["NASA JPL", "ESA", "IAU Grants"] },
          { title: "Apply for Research Positions',",   done: false, resources: ["AAS Job Register", "ESO Jobs"] },
          { title: "Space Mission Proposals',",        done: false, resources: ["ISRO Docs", "NASA Research Announcements"] },
        ],
      },
    ],
  },

  // ── Chemist ───────────────────────────────────────────────
  "Chemist": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Chemistry Mastery',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Organic Chemistry',",              done: false, resources: ["Clayden Organic Chemistry", "Morrison Boyd"] },
          { title: "Inorganic Chemistry',",            done: false, resources: ["Shriver Atkins Inorganic Chemistry"] },
          { title: "Physical Chemistry',",             done: false, resources: ["Atkins Physical Chemistry"] },
          { title: "Analytical Chemistry',",           done: false, resources: ["Skoog West Analytical Chemistry"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Lab & Instrumentation',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "HPLC & GC Techniques',",           done: false, resources: ["Agilent HPLC Guide", "Thermo Scientific"] },
          { title: "NMR & Mass Spectrometry',",        done: false, resources: ["Silverstein Spectrometric Identification"] },
          { title: "X-Ray Crystallography Basics',",   done: false, resources: ["Rhodes Crystallography Docs"] },
          { title: "Lab Safety & GLP',",               done: false, resources: ["ACS Safety Docs", "WHO GLP Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Applied Chemistry',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Pharmaceutical Chemistry',",       done: false, resources: ["Foye Medicinal Chemistry"] },
          { title: "Materials Chemistry',",            done: false, resources: ["West Solid State Chemistry"] },
          { title: "Green Chemistry',",                done: false, resources: ["Anastas Green Chemistry Docs"] },
          { title: "Research Paper Submission',",      done: false, resources: ["RSC Journals", "ACS Journals"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "GATE Chemistry',",                 done: false, resources: ["GATE Chemistry Guide"] },
          { title: "Apply for Chemistry Roles',",      done: false, resources: ["LinkedIn", "Naukri", "CSIR Careers"] },
          { title: "Pharma Industry Roles',",          done: false, resources: ["Sun Pharma", "Cipla", "Dr. Reddy's Careers"] },
          { title: "PhD Track (Optional)',",           done: false, resources: ["CSIR-CFTRI", "NCL", "IICT Docs"] },
        ],
      },
    ],
  },

  // ── Geologist ─────────────────────────────────────────────
  "Geologist": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Geology Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Physical Geology',",               done: false, resources: ["Tarbuck Lutgens Earth Science", "Press Siever"] },
          { title: "Mineralogy & Petrology',",         done: false, resources: ["Klein Mineralogy", "Best Igneous Petrology"] },
          { title: "Structural Geology',",             done: false, resources: ["Davis Reynolds Structural Geology"] },
          { title: "Geomorphology',",                  done: false, resources: ["Summerfield Global Geomorphology"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Technical Skills',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "GIS & Remote Sensing for Geology'",done: false, resources: ["QGIS Docs", "Esri Geology"] },
          { title: "Geophysics Basics',",              done: false, resources: ["Sheriff Exploration Seismology"] },
          { title: "Hydrogeology',",                   done: false, resources: ["Fetter Contaminant Hydrogeology"] },
          { title: "Geological Mapping',",             done: false, resources: ["GSI Field Guide", "USGS Mapping Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Field Experience',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "GSI Field Training',",             done: false, resources: ["GSI India Training Docs"] },
          { title: "Mining Geology',",                 done: false, resources: ["Evans Ore Geology"] },
          { title: "Environmental Geology',",          done: false, resources: ["Bell Environmental Geology"] },
          { title: "Research Report / Mapping Project",done: false, resources: ["GSI Memoir", "USGS Reports"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "GATE Geology / Geophysics',",      done: false, resources: ["GATE Geology Guide"] },
          { title: "Apply for Geology Roles',",        done: false, resources: ["GSI Careers", "ONGC Careers", "LinkedIn"] },
          { title: "Oil & Gas Industry Entry',",       done: false, resources: ["Schlumberger", "Halliburton Careers"] },
          { title: "PhD in Geology (Optional)',",      done: false, resources: ["IIT Geology Dept", "WIHG Docs"] },
        ],
      },
    ],
  },

  // ── Professional Athlete ──────────────────────────────────
  "Professional Athlete": {
    totalDuration: "24 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Athletic Foundation',",
        duration: "6 months",
        status:   "in_progress",
        milestones: [
          { title: "Sport-Specific Skill Development',",done: false, resources: ["National Sports Federation Docs"] },
          { title: "Strength & Conditioning',",        done: false, resources: ["NSCA S&C Docs", "Essentials Strength Training"] },
          { title: "Nutrition for Athletes',",         done: false, resources: ["ISSN Sports Nutrition", "IOC Nutrition Docs"] },
          { title: "Mental Toughness Training',",      done: false, resources: ["The Inner Game of Tennis", "Mind Gym"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Competitive Training',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "State Level Competitions',",       done: false, resources: ["State Sports Federation"] },
          { title: "Sports Psychology',",              done: false, resources: ["Applied Sport Psychology", "Weinberg Gould"] },
          { title: "Video Analysis & Tactics',",       done: false, resources: ["Sportscode", "Hudl"] },
          { title: "Recovery & Injury Prevention',",   done: false, resources: ["NSCA Recovery Docs", "Sports Medicine"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "National Level',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "National Championship Participation",done: false, resources: ["National Federation Docs"] },
          { title: "Professional Coach Appointment',", done: false, resources: ["SAI India", "National Federation"] },
          { title: "Anti-Doping Education (NADA)',",   done: false, resources: ["NADA India Docs"] },
          { title: "Sports Agent / Management',",      done: false, resources: ["Sports Agent Network"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Professional Career',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "International Competition',",      done: false, resources: ["National Federation Selection"] },
          { title: "Sponsorship & Brand Deals',",      done: false, resources: ["SportsPro Media", "Sports Agent"] },
          { title: "IPL / Pro League Trials',",        done: false, resources: ["BCCI", "ISL", "Pro Kabaddi"] },
          { title: "Long-Term Athletic Career Plan',", done: false, resources: ["SAI India", "Olympic Mission"] },
        ],
      },
    ],
  },

  // ── Sports Coach ──────────────────────────────────────────
  "Sports Coach": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Coaching Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Coaching Theory & Principles,",   done: false, resources: ["NCCP Coaching Docs", "NSCA Coaching"] },
          { title: "Sport-Specific Technical Skills,",done: false, resources: ["National Federation Coaching Manual"] },
          { title: "Player Development Models,",      done: false, resources: ["LTAD Model Docs", "Sport Canada Docs"] },
          { title: "Communication & Leadership,",     done: false, resources: ["Positive Coaching Alliance", "John Wooden"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Coaching Skills',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Strength & Conditioning for Coaches",done: false, resources: ["NSCA CSCS Guide"] },
          { title: "Sports Nutrition Basics',",        done: false, resources: ["ISSN Sports Nutrition Docs"] },
          { title: "Video & Performance Analysis',",   done: false, resources: ["Hudl", "Dartfish Docs"] },
          { title: "Injury Prevention & First Aid',",  done: false, resources: ["NSCA Safety Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Practical Coaching',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Assistant Coach at Club / Academy'",done: false, resources: ["Local Sports Clubs", "School Sports"] },
          { title: "Youth Athlete Development',",      done: false, resources: ["LTAD Model", "Positive Coaching"] },
          { title: "Competition Planning & Periodization",done: false, resources: ["Tudor Bompa Periodization"] },
          { title: "Team Management',",                done: false, resources: ["Harvard Leadership Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "NIS Patiala Coaching Diploma',",   done: false, resources: ["NIS Patiala Docs"] },
          { title: "SAI Coaching License',",           done: false, resources: ["SAI India Docs"] },
          { title: "Apply for Coaching Roles',",       done: false, resources: ["LinkedIn", "SAI Jobs", "School Sports Jobs"] },
          { title: "International Coaching License',", done: false, resources: ["AFC", "AIFF", "BWF Coaching Docs"] },
        ],
      },
    ],
  },

  // ── Sports Analyst ────────────────────────────────────────
  "Sports Analyst": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Sports Analytics Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Statistics for Sports',",          done: false, resources: ["Moneyball by Lewis", "Stats by Sports Reference"] },
          { title: "Python / R Basics',",              done: false, resources: ["Python Docs", "R Docs"] },
          { title: "SQL for Sports Databases',",       done: false, resources: ["Mode SQL", "SQLZoo"] },
          { title: "Sport-Specific Metrics',",         done: false, resources: ["StatsBomb Data Docs", "Opta Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Analytics Skills',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Tableau / Power BI for Sports',",  done: false, resources: ["Tableau Public", "Microsoft Learn"] },
          { title: "Video Analysis Tools',",           done: false, resources: ["Wyscout", "Hudl Docs"] },
          { title: "Expected Goals (xG) Models',",     done: false, resources: ["StatsBomb Resources", "FBref Docs"] },
          { title: "Player Tracking Data',",           done: false, resources: ["Second Spectrum Docs", "Stats Perform"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Analytics',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Machine Learning for Sports',",    done: false, resources: ["Coursera ML", "Sports Analytics by Anderson"] },
          { title: "Injury Prediction Models',",       done: false, resources: ["Research Papers", "Kaggle Sports Datasets"] },
          { title: "Sports Analytics Project',",       done: false, resources: ["StatsBomb Open Data", "GitHub"] },
          { title: "Open Source Contribution',",       done: false, resources: ["GitHub Sports Analytics Repos"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Sports Analytics Portfolio',",     done: false, resources: ["GitHub", "LinkedIn"] },
          { title: "Apply for Sports Analytics Roles'",done: false, resources: ["LinkedIn", "Sports Analytics Job Board"] },
          { title: "Network at Sloan Sports Conference",done: false, resources: ["MIT Sloan Sports Analytics"] },
          { title: "Sports Data Science Interview Prep",done: false, resources: ["Glassdoor", "Sports Analytics Community"] },
        ],
      },
    ],
  },

  // ── Sports Physiotherapist ────────────────────────────────
  "Sports Physiotherapist": {
    totalDuration: "48 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "BPT Degree',",
        duration: "48 months",
        status:   "in_progress",
        milestones: [
          { title: "Anatomy, Physiology & Biomechanics'",done: false, resources: ["Ross & Wilson", "Nordin Biomechanics"] },
          { title: "Musculoskeletal Physiotherapy",  done: false, resources: ["Maitland Manual Therapy"] },
          { title: "Sports Medicine Basics",         done: false, resources: ["Brukner Khan Sports Medicine"] },
          { title: "Exercise Prescription",          done: false, resources: ["ACSM Exercise Guidelines"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Sports Physio Specialization',",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "MSc Sports Physiotherapy',",       done: false, resources: ["Loughborough Docs", "MUSC Docs"] },
          { title: "Taping & Strapping',",             done: false, resources: ["Kinesio Taping Docs", "McConnell Taping"] },
          { title: "Injury Rehabilitation Programs',", done: false, resources: ["FIFA Medical Docs", "ATP Physio Docs"] },
          { title: "Return to Sport Testing',",        done: false, resources: ["ISOKINETIC Docs", "Altis Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Clinical Experience',",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "Sports Team Attachment',",         done: false, resources: ["Local Sports Clubs", "National Teams"] },
          { title: "High Performance Center Internship",done: false, resources: ["SAI Training Centers"] },
          { title: "FICS Sports Chiro / Physio Training",done: false, resources: ["FICS Docs"] },
          { title: "Research in Sports Physio',",      done: false, resources: ["JOSPT", "BJSM Journals"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "0 months",
        status:   "locked",
        milestones: [
          { title: "IAP Sports Physio Membership',",   done: false, resources: ["IAP Docs"] },
          { title: "Apply for Sports Team Roles',",    done: false, resources: ["LinkedIn", "IPL Team Physio Jobs", "SAI Jobs"] },
          { title: "International Sports Events',",    done: false, resources: ["Olympics Medical Team", "FIFA Medical"] },
          { title: "Start Sports Clinic',",            done: false, resources: ["Practo", "Clinic Setup Guide"] },
        ],
      },
    ],
  },

  // ── Sports Marketing Manager ──────────────────────────────
  "Sports Marketing Manager": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Marketing + Sports Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Sports Marketing Overview',",      done: false, resources: ["Mullin Hardy Sutton Sport Marketing", "NASSM"] },
          { title: "Digital Marketing Fundamentals',", done: false, resources: ["Google Digital Garage", "HubSpot Academy"] },
          { title: "Sports Industry Knowledge',",      done: false, resources: ["SportsPro Media", "Sports Business Journal"] },
          { title: "Social Media Strategy',",          done: false, resources: ["Sprout Social", "Hootsuite Blog"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Sports Marketing Skills',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Sponsorship & Activation',",       done: false, resources: ["IEG Sponsorship Docs", "Sports Marketing Survey"] },
          { title: "Sports Fan Engagement',",          done: false, resources: ["Nielsen Sports Docs", "YouGov Sport"] },
          { title: "Brand Management in Sports',",     done: false, resources: ["Keller Brand Management"] },
          { title: "Sports Event Marketing',",         done: false, resources: ["EventMB", "Eventbrite Blog"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced Sports Marketing',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Sports Analytics & Fan Data',",    done: false, resources: ["Tableau", "Nielsen Sports Docs"] },
          { title: "eSports Marketing',",              done: false, resources: ["Newzoo eSports Docs", "eSports Insider"] },
          { title: "Campaign Project for Sports Brand'",done: false, resources: ["LinkedIn", "Portfolio Website"] },
          { title: "Internship at Sports Property',",  done: false, resources: ["BCCI", "ISL", "Pro Kabaddi Internships"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Sports Marketing Certification',", done: false, resources: ["NASSM", "Coventry Sports Marketing"] },
          { title: "Apply for Sports Marketing Roles'",done: false, resources: ["LinkedIn", "BCCI Careers", "ISL Careers"] },
          { title: "Sports Marketing Portfolio',",     done: false, resources: ["LinkedIn", "Instagram"] },
          { title: "Network at Sports Business Events'",done: false, resources: ["Sport Innovation Summit", "SportsPro"] },
        ],
      },
    ],
  },

  // ── Esports Professional ──────────────────────────────────
  "Esports Professional": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Game Mastery',",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Achieve Top Rank in Chosen Game',",done: false, resources: ["Game Training Resources", "Pro Player VODs"] },
          { title: "Game Sense & Strategy',",          done: false, resources: ["Professional Player Guides"] },
          { title: "Aim & Mechanics Training',",       done: false, resources: ["Aim Lab", "KovaaK's"] },
          { title: "Analyze Pro Player VODs',",        done: false, resources: ["YouTube Esports Teams", "Twitch VODs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Competitive Gaming',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Join Amateur Team',",              done: false, resources: ["Discord Servers", "Battlefy", "Challonge"] },
          { title: "Participate in Online Tournaments'",done: false, resources: ["ESL Play", "FACEIT", "DreamHack"] },
          { title: "Mental Resilience Training',",     done: false, resources: ["Performance Psychology Docs"] },
          { title: "Nutrition & Health for Gamers',",  done: false, resources: ["Esports Health Guide", "1HP"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Streaming & Brand',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Twitch / YouTube Gaming Channel',",done: false, resources: ["Twitch Creator Camp", "Think Media"] },
          { title: "Build Gaming Community',",         done: false, resources: ["Discord Server", "Reddit"] },
          { title: "Sponsor Outreach',",               done: false, resources: ["Gamer Sensei", "Discord Gaming"] },
          { title: "Open Qualifier Participation',",   done: false, resources: ["Valve Majors", "BLAST Premier", "VCT"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Professional Career',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Esports Team Tryouts',",           done: false, resources: ["Esports Jobs", "TeamFind"] },
          { title: "Esports Scholarship Applications'",done: false, resources: ["NACE Esports", "PlayVS"] },
          { title: "Apply for Pro Team Roster',",      done: false, resources: ["Esports Jobs", "LinkedIn Esports"] },
          { title: "Esports Agent / Management',",     done: false, resources: ["Esports Management Docs"] },
        ],
      },
    ],
  },

  // ── Startup Founder ───────────────────────────────────────
  "Startup Founder": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Idea & Validation',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Problem Discovery & Ideation',",   done: false, resources: ["The Mom Test", "Zero to One", "Y Combinator"] },
          { title: "Market Research & TAM',",          done: false, resources: ["Statista", "Google Trends"] },
          { title: "Customer Discovery Interviews',",  done: false, resources: ["Running Lean by Maurya"] },
          { title: "MVP Definition',",                 done: false, resources: ["Lean Startup by Ries", "Y Combinator"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Build MVP',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "No-Code MVP (if non-tech)',",      done: false, resources: ["Bubble Docs", "Webflow Docs"] },
          { title: "Tech MVP with Co-Founder',",       done: false, resources: ["GitHub", "Vercel", "Firebase"] },
          { title: "Landing Page & Waitlist',",        done: false, resources: ["Webflow", "Carrd"] },
          { title: "First 100 Users',",                done: false, resources: ["Reddit", "ProductHunt", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Traction & Growth',",
        duration: "5 months",
        status:   "locked",
        milestones: [
          { title: "Product Market Fit',",             done: false, resources: ["Sean Ellis PMF Survey", "Reforge"] },
          { title: "Revenue & Business Model',",       done: false, resources: ["Business Model Canvas", "Stripe Atlas"] },
          { title: "Growth Hacking',",                 done: false, resources: ["Andrew Chen Blog", "Reforge Growth"] },
          { title: "Team Building',",                  done: false, resources: ["Who by Geoff Smart", "LinkedIn Recruiter"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Fundraising & Scale',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Pitch Deck Creation',",            done: false, resources: ["Y Combinator Pitch Deck", "Sequoia Pitch"] },
          { title: "Angel & Seed Fundraising',",       done: false, resources: ["AngelList", "Venture Deals by Feld"] },
          { title: "Apply to Accelerators',",          done: false, resources: ["Y Combinator", "Techstars", "Sequoia Surge"] },
          { title: "Legal & Company Setup',",          done: false, resources: ["Stripe Atlas", "LegalZoom"] },
        ],
      },
    ],
  },

  // ── Venture Capitalist ────────────────────────────────────
  "Venture Capitalist": {
    totalDuration: "24 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "VC Fundamentals',",
        duration: "3 months",
        status:   "in_progress",
        milestones: [
          { title: "Venture Capital Industry Overview'",done: false, resources: ["Venture Deals by Feld", "Secrets of Sand Hill Road"] },
          { title: "Startup Ecosystem Understanding'", done: false, resources: ["Y Combinator Library", "First Round Review"] },
          { title: "Financial Modeling for Startups'", done: false, resources: ["VC Financial Modeling", "WSP"] },
          { title: "Term Sheet & Deal Docs',",          done: false, resources: ["NVCA Model Docs", "Y Combinator Safe Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Deal Sourcing & Diligence',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "Deal Flow Management',",           done: false, resources: ["Crunchbase", "Pitchbook"] },
          { title: "Startup Due Diligence',",          done: false, resources: ["a16z Diligence Checklist"] },
          { title: "Portfolio Company Support',",      done: false, resources: ["First Round Review", "Bessemer Docs"] },
          { title: "Angel Investing Practice',",       done: false, resources: ["AngelList", "SyndicateRoom"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "VC Operations',",
        duration: "9 months",
        status:   "locked",
        milestones: [
          { title: "Fund Structure & LP Relations',",  done: false, resources: ["Venture Deals by Feld"] },
          { title: "Valuation Methods',",              done: false, resources: ["Damodaran Valuation", "Aswath YouTube"] },
          { title: "Sector Deep Dives',",              done: false, resources: ["CB Insights", "Andreessen Horowitz Blog"] },
          { title: "VC Network Building',",            done: false, resources: ["LinkedIn", "VC Events"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career in VC',",
        duration: "6 months",
        status:   "locked",
        milestones: [
          { title: "VC Analyst / Associate Role',",    done: false, resources: ["LinkedIn", "VC Job Boards"] },
          { title: "MBA from Top B-School (Optional)'",done: false, resources: ["IIM", "ISB", "Harvard MBA"] },
          { title: "Build Own Scout / SPV Fund',",     done: false, resources: ["AngelList SPV", "Assure Syndicate"] },
          { title: "Raise Own Micro-VC Fund',",        done: false, resources: ["Venture Deals", "Emerging VC Docs"] },
        ],
      },
    ],
  },

  // ── Social Entrepreneur ───────────────────────────────────
  "Social Entrepreneur": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Social Innovation Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Social Entrepreneurship Overview'",done: false, resources: ["Ashoka", "SSIR Docs"] },
          { title: "Problem Identification & Theory of Change'",done: false, resources: ["UNDP Theory of Change", "FSG Docs"] },
          { title: "Impact Measurement',",             done: false, resources: ["IRIS+ Docs", "GIIN Docs"] },
          { title: "Business Model for Social Good',", done: false, resources: ["Social Business Model Canvas"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Build & Launch',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Legal Structure (NGO / Section 8)'",done: false, resources: ["NGO India Docs", "CSR Docs"] },
          { title: "Grant Writing',",                  done: false, resources: ["GuideStar", "Foundation Center Docs"] },
          { title: "Community Engagement',",           done: false, resources: ["UNDP Community Dev Docs"] },
          { title: "Pilot Project Launch',",           done: false, resources: ["Local Community"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Scale & Funding',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Government Grants & CSR Funding'", done: false, resources: ["DST Social Grants", "Tata Trusts Docs"] },
          { title: "Impact Investing',",               done: false, resources: ["GIIN Impact Investing", "Omidyar Network"] },
          { title: "Partnership Development',",        done: false, resources: ["B Corp Docs", "UN SDG Partnerships"] },
          { title: "Media & Communication',",          done: false, resources: ["SSIR Communications", "LinkedIn"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Recognition & Growth',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Ashoka Fellowship Application',",  done: false, resources: ["Ashoka Docs"] },
          { title: "B Corp Certification',",           done: false, resources: ["B Lab Docs"] },
          { title: "UN SDG Award Programs',",          done: false, resources: ["UN Awards Docs"] },
          { title: "Scale to New Geographies',",       done: false, resources: ["Social Enterprise Alliance"] },
        ],
      },
    ],
  },

  // ── Freelancer ────────────────────────────────────────────
  "Freelancer": {
    totalDuration: "6 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Freelance Foundation',",
        duration: "1 month",
        status:   "in_progress",
        milestones: [
          { title: "Choose Your Freelance Skill',",    done: false, resources: ["Upwork Skills Guide", "Fiverr Categories"] },
          { title: "Build Core Portfolio',",           done: false, resources: ["Behance", "GitHub", "Dribbble"] },
          { title: "Pricing Strategy',",               done: false, resources: ["Freelance Rate Calculator", "Bonsai Pricing"] },
          { title: "Fiverr & Upwork Profile Setup',",  done: false, resources: ["Fiverr Docs", "Upwork Getting Started"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "First Clients',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "First 5 Projects (Low Rate OK)',", done: false, resources: ["Fiverr", "Upwork", "LinkedIn"] },
          { title: "Client Communication',",           done: false, resources: ["Bonsai Freelance Docs"] },
          { title: "Project Delivery & Reviews',",     done: false, resources: ["Fiverr Rating Guide"] },
          { title: "Proposal Writing',",               done: false, resources: ["Upwork Proposal Guide"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Growth & Specialization',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Niche Down & Specialize',",        done: false, resources: ["Freelance to Freedom by Preston"] },
          { title: "Raise Your Rates',",               done: false, resources: ["Brennan Dunn Double Your Freelancing"] },
          { title: "LinkedIn & Personal Brand',",      done: false, resources: ["LinkedIn Creator Mode"] },
          { title: "Retainer Clients',",               done: false, resources: ["Bonsai Retainer Templates"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale & Automate',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "Own Website & Blog',",             done: false, resources: ["Squarespace", "WordPress"] },
          { title: "Passive Income Products',",        done: false, resources: ["Gumroad", "Teachable"] },
          { title: "Build Freelance Agency',",         done: false, resources: ["Agency Management Docs"] },
          { title: "Financial Planning (Tax & GST)',", done: false, resources: ["ClearTax", "Tax Docs India"] },
        ],
      },
    ],
  },

  // ── E-commerce Entrepreneur ───────────────────────────────
  "E-commerce Entrepreneur": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "E-commerce Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "E-commerce Business Models',",     done: false, resources: ["Shopify Learn", "A2X Docs"] },
          { title: "Product Research & Sourcing',",    done: false, resources: ["Jungle Scout", "AliExpress"] },
          { title: "Shopify Store Setup',",            done: false, resources: ["Shopify Academy", "Shopify Docs"] },
          { title: "Payment Gateway Integration',",    done: false, resources: ["Razorpay Docs", "Stripe Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Marketing & Sales',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Meta Ads (Facebook & Instagram)',", done: false, resources: ["Meta Blueprint", "AdEspresso Blog"] },
          { title: "Google Ads & Shopping',",          done: false, resources: ["Google Skillshop", "WordStream"] },
          { title: "Email Marketing (Klaviyo)',",       done: false, resources: ["Klaviyo Docs", "Email Mastery Docs"] },
          { title: "SEO for E-commerce',",             done: false, resources: ["Ahrefs Ecommerce SEO", "Semrush"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Operations & Scale',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Inventory & Supply Chain',",       done: false, resources: ["ShipBob Docs", "Inventory Planner"] },
          { title: "Customer Service Automation',",    done: false, resources: ["Gorgias Docs", "Zendesk"] },
          { title: "Amazon FBA (Optional)',",          done: false, resources: ["Amazon Seller Central", "Jungle Scout"] },
          { title: "Analytics & Optimization',",       done: false, resources: ["Google Analytics 4", "Hotjar"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale & Exit',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "7-Figure Revenue Target',",        done: false, resources: ["Shopify Plus Docs"] },
          { title: "Build Brand & Community',",        done: false, resources: ["Klaviyo", "Discord"] },
          { title: "Business Valuation & Exit',",      done: false, resources: ["Empire Flippers", "Flippa"] },
          { title: "Fundraising for Scale',",          done: false, resources: ["VC Firms", "Revenue Based Financing"] },
        ],
      },
    ],
  },

  // ── Business Coach ────────────────────────────────────────
  "Business Coach": {
    totalDuration: "8 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Coaching Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Coaching Models & Frameworks',",   done: false, resources: ["ICF Docs", "GROW Model Docs"] },
          { title: "Business Fundamentals',",          done: false, resources: ["Business Model Generation", "Zero to One"] },
          { title: "Active Listening & Communication'",done: false, resources: ["Co-Active Coaching", "MicroSkills Coaching"] },
          { title: "Psychology of Change',",           done: false, resources: ["Prochaska Stages of Change", "CBT Basics"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Coaching Skills',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "1-on-1 Coaching Methodology',",   done: false, resources: ["ICF Core Competencies Docs"] },
          { title: "Group Coaching Facilitation',",    done: false, resources: ["Yalom Group Psychotherapy"] },
          { title: "Business Strategy Frameworks',",   done: false, resources: ["HBR Strategy", "Blue Ocean Strategy"] },
          { title: "Client Onboarding Process',",      done: false, resources: ["Bonsai Coaching Templates"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Build Coaching Business',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Coaching Packages & Pricing',",    done: false, resources: ["Brennan Dunn Pricing Docs"] },
          { title: "LinkedIn & Content Marketing',",   done: false, resources: ["LinkedIn Creator Mode"] },
          { title: "Webinar & Workshop Strategy',",    done: false, resources: ["Zoom Webinar", "Kajabi"] },
          { title: "Testimonials & Social Proof',",    done: false, resources: ["Google Reviews", "LinkedIn Recs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Scale',",
        duration: "1 month",
        status:   "locked",
        milestones: [
          { title: "ICF ACC Certification',",          done: false, resources: ["ICF Certification Docs"] },
          { title: "Online Course / Group Program',",  done: false, resources: ["Kajabi", "Teachable"] },
          { title: "Speaking & Thought Leadership',",  done: false, resources: ["TEDx Talks", "LinkedIn Articles"] },
          { title: "Mastermind Groups',",              done: false, resources: ["Mastermind to Millions Docs"] },
        ],
      },
    ],
  },

  // ── Climate Scientist ─────────────────────────────────────
  "Climate Scientist": {
    totalDuration: "60 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Science & Math Foundation',",
        duration: "12 months",
        status:   "in_progress",
        milestones: [
          { title: "Physics & Mathematics Mastery',",  done: false, resources: ["Halliday Resnick", "MIT OCW Math"] },
          { title: "Earth System Science',",           done: false, resources: ["Trenberth Climate System", "IPCC Docs"] },
          { title: "Python for Climate Science',",     done: false, resources: ["Python Docs", "Unidata Docs"] },
          { title: "Statistics & Data Analysis',",     done: false, resources: ["R Docs", "StatQuest"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Climate Science Core',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "Atmospheric Science',",            done: false, resources: ["Wallace Hobbs Atmospheric Science"] },
          { title: "Oceanography',",                   done: false, resources: ["Tomczak Godfrey Regional Oceanography"] },
          { title: "Climate Modeling Basics',",        done: false, resources: ["NCAR CESM Docs", "CMIP6 Docs"] },
          { title: "Remote Sensing & GIS',",           done: false, resources: ["QGIS Docs", "NASA ARSET"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "MSc & PhD Research',",
        duration: "24 months",
        status:   "locked",
        milestones: [
          { title: "MSc Climate Science / Meteorology'",done: false, resources: ["IIT Climate Programs", "IITM Pune"] },
          { title: "Climate Research Paper',",         done: false, resources: ["Nature Climate Change", "GRL Journals"] },
          { title: "International Conference',",       done: false, resources: ["AGU Fall Meeting", "EGU Conference"] },
          { title: "Climate Model Analysis',",         done: false, resources: ["CMIP6", "NCAR Climate Data"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Career Launch',",
        duration: "12 months",
        status:   "locked",
        milestones: [
          { title: "PhD & Post-Doc',",                 done: false, resources: ["IITM", "NCMRWF", "TROPMET Docs"] },
          { title: "IPCC Contributing Author',",       done: false, resources: ["IPCC Docs"] },
          { title: "Apply for Climate Research Roles'",done: false, resources: ["NOAA Jobs", "Met Office Careers", "IMD Jobs"] },
          { title: "Climate Policy Communication',",   done: false, resources: ["Climate Communication Docs"] },
        ],
      },
    ],
  },

  // ── Renewable Energy Engineer ─────────────────────────────
  "Renewable Energy Engineer": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Energy Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Electrical Engineering Basics',",  done: false, resources: ["All About Circuits", "Hayt Engineering Circuits"] },
          { title: "Solar Energy Basics',",            done: false, resources: ["IRENA Solar Docs", "SolarPower Europe"] },
          { title: "Wind Energy Basics',",             done: false, resources: ["GWEC Wind Docs", "IRENA Wind Report"] },
          { title: "Python / MATLAB',",                done: false, resources: ["Python Docs", "MathWorks Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Renewable Systems',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Solar PV System Design',",         done: false, resources: ["PVsyst Docs", "SolarEdge Docs"] },
          { title: "Wind Turbine Engineering',",       done: false, resources: ["Manwell Wind Energy Explained"] },
          { title: "Energy Storage (Batteries)',",     done: false, resources: ["NREL Battery Docs", "BloombergNEF"] },
          { title: "Grid Integration',",               done: false, resources: ["IEC Grid Docs", "CERC Docs India"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Design & Projects',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "PVsyst Solar Design',",            done: false, resources: ["PVsyst Docs", "YouTube PVsyst"] },
          { title: "HOMER Energy Modeling',",          done: false, resources: ["HOMER Docs", "NREL Docs"] },
          { title: "Energy Audit Techniques',",        done: false, resources: ["BEE India Docs", "ASHRAE Docs"] },
          { title: "Rooftop Solar Project',",          done: false, resources: ["MNRE Docs", "Tata Power Solar"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "BEE Energy Auditor Certification'",done: false, resources: ["BEE India Certification"] },
          { title: "IRENA / MNRE Training',",          done: false, resources: ["IRENA Docs", "MNRE Training"] },
          { title: "Apply for Renewable Energy Roles'",done: false, resources: ["LinkedIn", "ReNew Power Careers", "Adani Green"] },
          { title: "Startup in Solar / Wind',",        done: false, resources: ["MNRE Schemes", "IREDA Loans"] },
        ],
      },
    ],
  },

  // ── ESG Analyst ───────────────────────────────────────────
  "ESG Analyst": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "ESG Fundamentals',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "ESG Framework Overview',",         done: false, resources: ["GRI Standards", "SASB Docs", "TCFD Docs"] },
          { title: "Sustainability Reporting',",       done: false, resources: ["GRI 2021 Standards", "ISSB Docs"] },
          { title: "Climate Risk & Finance',",         done: false, resources: ["TCFD Recommendations", "NGFS Docs"] },
          { title: "Finance & Accounting Basics',",    done: false, resources: ["CFA Institute Docs", "Financial Statements"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "ESG Analysis Skills',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "ESG Data Providers (MSCI, Bloomberg)'",done: false, resources: ["Bloomberg ESG", "MSCI ESG Docs"] },
          { title: "Carbon Accounting (GHG Protocol)',",done: false, resources: ["GHG Protocol Docs"] },
          { title: "Supply Chain ESG',",               done: false, resources: ["CDP Supply Chain", "UN Global Compact"] },
          { title: "Excel & Power BI for ESG Data',",  done: false, resources: ["Microsoft Learn", "Leila Gharani"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Advanced ESG',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Impact Investing',",               done: false, resources: ["GIIN Docs", "IFC Impact Principles"] },
          { title: "ESG Integration in Portfolios',",  done: false, resources: ["CFA ESG Certificate Docs"] },
          { title: "SDG Alignment',",                  done: false, resources: ["UN SDG Docs", "SDG Compass"] },
          { title: "ESG Research Report Project',",    done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "CFA ESG Certificate',",            done: false, resources: ["CFA Institute ESG"] },
          { title: "GARP SCR Certification',",         done: false, resources: ["GARP Docs"] },
          { title: "Apply for ESG Analyst Roles',",    done: false, resources: ["LinkedIn", "GIIN Job Board"] },
          { title: "ESG Portfolio & Reports',",        done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
    ],
  },

  // ── Sustainability Consultant ──────────────────────────────
  "Sustainability Consultant": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Sustainability Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Sustainability Frameworks',",      done: false, resources: ["GRI Standards", "UN SDGs", "ISO 14001"] },
          { title: "Carbon Footprint Basics',",        done: false, resources: ["GHG Protocol Docs"] },
          { title: "Corporate Sustainability Strategy'",done: false, resources: ["Accenture Sustainability Docs"] },
          { title: "Environmental Laws (India)',",      done: false, resources: ["MoEFCC Docs", "EPA Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Consulting Skills',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Sustainability Reporting (GRI/BRSR)'",done: false, resources: ["GRI 2021", "SEBI BRSR Docs"] },
          { title: "Life Cycle Assessment (LCA)',",     done: false, resources: ["ISO 14040 Docs", "SimaPro Docs"] },
          { title: "Stakeholder Engagement',",         done: false, resources: ["AA1000 SES Docs"] },
          { title: "Green Building (GRIHA / LEED)',",   done: false, resources: ["GRIHA Docs", "USGBC LEED Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Specialization',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Net Zero Strategy',",              done: false, resources: ["Science Based Targets Docs", "Net Zero Tracker"] },
          { title: "Circular Economy Projects',",      done: false, resources: ["Ellen MacArthur Foundation Docs"] },
          { title: "ESG Due Diligence',",              done: false, resources: ["GIIN Docs", "IFC Docs"] },
          { title: "Sustainability Consulting Project'",done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Jobs',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "ISO 14001 Lead Auditor',",         done: false, resources: ["BSI Group", "DNV GL Docs"] },
          { title: "LEED AP Certification',",          done: false, resources: ["USGBC LEED Docs"] },
          { title: "Apply for Sustainability Roles',", done: false, resources: ["LinkedIn", "Indeed", "Green Jobs Network"] },
          { title: "Freelance Sustainability Projects'",done: false, resources: ["Upwork", "LinkedIn"] },
        ],
      },
    ],
  },

  // ── Green Tech Entrepreneur ───────────────────────────────
  "Green Tech Entrepreneur": {
    totalDuration: "12 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Green Tech Foundation',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Climate Tech Landscape',",         done: false, resources: ["MCJ Collective", "Climate Draft", "CTVC"] },
          { title: "Clean Energy Technologies',",      done: false, resources: ["IRENA Docs", "BloombergNEF"] },
          { title: "Business Model for Green Tech',",  done: false, resources: ["Social Business Model Canvas"] },
          { title: "Climate Policy & Regulations',",   done: false, resources: ["MNRE Docs", "UNFCCC Docs"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "Build Green Startup',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Problem Identification in Climate'",done: false, resources: ["Drawdown Solutions", "Y Combinator Climate"] },
          { title: "MVP Development',",                done: false, resources: ["Lean Startup", "Y Combinator Library"] },
          { title: "Climate Tech Grants (MNRE / DST)'",done: false, resources: ["MNRE Schemes", "DST Grants"] },
          { title: "First 100 Customers',",            done: false, resources: ["LinkedIn", "Green Communities"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Fundraising & Scale',",
        duration: "4 months",
        status:   "locked",
        milestones: [
          { title: "Climate VC Fundraising',",         done: false, resources: ["Breakthrough Energy", "Congruent Ventures"] },
          { title: "IREDA & Government Loans',",       done: false, resources: ["IREDA Docs"] },
          { title: "B Corp Certification',",           done: false, resources: ["B Lab Docs"] },
          { title: "Impact Measurement',",             done: false, resources: ["IRIS+ Docs", "GIIN Docs"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Scale & Recognition',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "Apply to Climate Accelerators',",  done: false, resources: ["Y Combinator", "Elemental Excelerator", "Third Derivative"] },
          { title: "UN SDG Impact Recognition',",      done: false, resources: ["UN SDG Awards Docs"] },
          { title: "Carbon Credit Generation',",       done: false, resources: ["Verra Gold Standard", "Gold Standard Docs"] },
          { title: "International Expansion',",        done: false, resources: ["Climate KIC", "IRENA Docs"] },
        ],
      },
    ],
  },

  // ── Circular Economy Specialist ───────────────────────────
  "Circular Economy Specialist": {
    totalDuration: "10 months",
    phases: [
      {
        phase:    "Phase 1",
        title:    "Circular Economy Basics',",
        duration: "2 months",
        status:   "in_progress",
        milestones: [
          { title: "Circular Economy Principles',",    done: false, resources: ["Ellen MacArthur Foundation Docs"] },
          { title: "Linear vs Circular Business Models'",done: false, resources: ["EMF Docs", "CE100 Network"] },
          { title: "Waste Management Systems',",       done: false, resources: ["CPCB Docs", "EU Circular Economy Docs"] },
          { title: "Biomimicry & Design for Circularity'",done: false, resources: ["Biomimicry Institute", "Cradle to Cradle"] },
        ],
      },
      {
        phase:    "Phase 2",
        title:    "CE Tools & Analysis',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Life Cycle Assessment (LCA)',",     done: false, resources: ["ISO 14040", "SimaPro Docs"] },
          { title: "Material Flow Analysis',",         done: false, resources: ["STAN MFA Software", "EU MFA Docs"] },
          { title: "Industrial Symbiosis',",           done: false, resources: ["NISP Docs", "EMF Industrial Symbiosis"] },
          { title: "CE Business Case Development',",   done: false, resources: ["EMF CE Business Case Docs"] },
        ],
      },
      {
        phase:    "Phase 3",
        title:    "Implementation',",
        duration: "3 months",
        status:   "locked",
        milestones: [
          { title: "Product as a Service Models',",    done: false, resources: ["EMF Servitization Docs"] },
          { title: "Reverse Logistics',",              done: false, resources: ["CSCMP Reverse Logistics Docs"] },
          { title: "CE Policy & Regulations',",        done: false, resources: ["EU Green Deal Docs", "EPR Docs India"] },
          { title: "CE Consulting Project',",          done: false, resources: ["LinkedIn", "GitHub"] },
        ],
      },
      {
        phase:    "Phase 4",
        title:    "Certification & Career',",
        duration: "2 months",
        status:   "locked",
        milestones: [
          { title: "EMF CE Educator Certification',",  done: false, resources: ["Ellen MacArthur Foundation"] },
          { title: "ISO 14001 Basics',",               done: false, resources: ["ISO Docs", "BSI Group"] },
          { title: "Apply for CE Specialist Roles',",  done: false, resources: ["LinkedIn", "Green Jobs Network"] },
          { title: "CE Research Publication',",        done: false, resources: ["Journal of Cleaner Production", "Resources Conservation"] },
        ],
      },
    ],
  },
};

// ── Helper Functions ──────────────────────────────────────
export const getRoadmapByCareer = (careerTitle) => {
  return ROADMAPS[careerTitle] || null;
};

export const getAllRoadmapCareers = () => {
  return Object.keys(ROADMAPS);
};


