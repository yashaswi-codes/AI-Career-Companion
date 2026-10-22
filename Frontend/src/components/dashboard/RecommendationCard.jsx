// Career ke baare mein info
const CAREER_INFO = {
  "Software Development":   { emoji: "💻", description: "Build apps, websites & software systems.", skills: ["JavaScript", "React", "Node.js", "DSA"] },
  "Data Science & ML":      { emoji: "📊", description: "Extract insights from data using AI & ML.", skills: ["Python", "ML", "Statistics", "SQL"] },
  "UI/UX Design":           { emoji: "🎨", description: "Design beautiful & intuitive user experiences.", skills: ["Figma", "Prototyping", "User Research"] },
  "Cybersecurity":          { emoji: "🔐", description: "Protect systems & data from cyber threats.", skills: ["Networking", "Ethical Hacking", "Linux"] },
  "Cloud Computing":        { emoji: "☁️", description: "Build & manage scalable cloud infrastructure.", skills: ["AWS", "Docker", "Kubernetes", "DevOps"] },
  "Product Management":     { emoji: "🚀", description: "Lead product strategy & cross-functional teams.", skills: ["Roadmapping", "Agile", "Analytics"] },
  "Digital Marketing":      { emoji: "📱", description: "Grow brands & audiences through digital channels.", skills: ["SEO", "Social Media", "Analytics"] },
  "Content Creation":       { emoji: "✍️", description: "Create engaging content for digital platforms.", skills: ["Writing", "Video Editing", "SEO"] },
  "Business Analysis":      { emoji: "📈", description: "Analyze business processes & drive decisions.", skills: ["Excel", "SQL", "Communication"] },
  "DevOps & Infrastructure":{ emoji: "⚙️", description: "Automate & manage software delivery pipelines.", skills: ["CI/CD", "Linux", "Docker", "AWS"] },
}

const rankColors = {
  1: "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10",
  2: "border-slate-400 bg-slate-50 dark:bg-slate-800/50",
  3: "border-orange-400 bg-orange-50 dark:bg-orange-900/10",
}

const rankLabels = {
  1: "🥇 Best Match",
  2: "🥈 Great Match",
  3: "🥉 Good Match",
}

const RecommendationCard = ({ career, percentage, rank }) => {
  // Career info lo — default fallback ke saath
  const info = CAREER_INFO[career] || {
    emoji: "🎯",
    description: "An exciting career path tailored for you.",
    skills: [],
  }

  return (
    <div className={`
      bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6
      border-2 ${rankColors[rank] || "border-slate-200"}
      hover:scale-105 transition duration-300
    `}>

      {/* Rank Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
          {rankLabels[rank] || "✅ Match"}
        </span>
        <span className="text-3xl">{info.emoji}</span>
      </div>

      {/* Career Name */}
      <h2 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
        {career}
      </h2>

      {/* Description */}
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
        {info.description}
      </p>

      {/* Score Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Match Score</span>
          <span className="font-bold text-blue-600">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-dark-600 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Skills */}
      <h3 className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-300">
        Key Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {info.skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
};

export default RecommendationCard;