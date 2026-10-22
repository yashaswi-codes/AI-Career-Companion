import { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { quizResult } = useQuiz();
  const { user, updateUser } = useAuth();

  const topCareer =
    localStorage.getItem("selectedCareer") ||
    localStorage.getItem("guestSelectedCareer") ||
    user?.targetCareer ||
    quizResult?.topCareers?.[0]?.career ||
    "Not Set";

  const learningStyle = quizResult?.learningStyle || "visual";

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState(() => ({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
    location: user?.location || "",
  }));

  const [editData, setEditData] = useState({ ...profile });
  const [saveMessage, setSaveMessage] = useState("");

  const handleSave = async () => {
    try {
      if (typeof updateUser === "function") {
        await updateUser({
          ...user,
          name: editData.name,
          bio: editData.bio,
          location: editData.location,
        });
      } else {
        setSaveMessage(
          "Profile saved for this session only. Persistent saving needs updateUser in AuthContext."
        );
      }

      setProfile({ ...editData });
      setIsEditing(false);

      if (typeof updateUser === "function") {
        setSaveMessage("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Profile update failed:", error);
      setSaveMessage("Could not save your profile. Please try again.");
    }
  };

  const handleCancel = () => {
    setEditData({ ...profile });
    setIsEditing(false);
    setSaveMessage("");
  };

  const streak = Number(user?.streak) || 0;
  const tasksDone = Number(user?.tasksDone) || 0;
  const resourcesRead = Number(user?.resourcesRead) || 0;
  const overallScore = Number(user?.overallScore) || 0;

  const stats = [
    { emoji: "🔥", label: "Day Streak", value: streak },
    { emoji: "✅", label: "Tasks Done", value: tasksDone },
    { emoji: "📚", label: "Resources Read", value: resourcesRead },
    {
      emoji: "⭐",
      label: "Overall Score",
      value: `${Math.min(100, overallScore)}%`,
    },
  ];

  const learningStyleInfo = {
    visual: {
      emoji: "👁️",
      label: "Visual Learner",
      desc: "You learn best through videos, diagrams and visual content.",
    },
    reading: {
      emoji: "📖",
      label: "Reading Learner",
      desc: "You learn best through articles, docs and written content.",
    },
    kinesthetic: {
      emoji: "🛠️",
      label: "Hands-on Learner",
      desc: "You learn best by building projects and practicing.",
    },
    auditory: {
      emoji: "🎧",
      label: "Auditory Learner",
      desc: "You learn best through podcasts, lectures and discussions.",
    },
  };

  const styleInfo =
    learningStyleInfo[learningStyle] || learningStyleInfo.visual;

  const inputClass =
    "w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
            My Profile 👤
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage your account and track your progress
          </p>
        </div>

        {saveMessage && (
          <div
            role="status"
            className="mb-5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-3 text-sm text-blue-700 dark:text-blue-300"
          >
            {saveMessage}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-5">
            {/* Avatar Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl mx-auto">
                  👤
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {profile.name || "Your Name"}
              </h2>

              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {profile.email}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                📍 {profile.location || "Location not set"}
              </p>

              <div className="mt-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-500 font-medium">
                  Target Career
                </p>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mt-0.5">
                  {topCareer}
                </p>
              </div>

              <button
                onClick={() => {
                  setEditData({ ...profile });
                  setIsEditing(true);
                  setSaveMessage("");
                }}
                className="w-full mt-4 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 text-sm"
              >
                Edit Profile
              </button>
            </div>

            {/* Learning Style */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                Learning Style
              </h3>

              <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <span className="text-2xl">{styleInfo.emoji}</span>
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-300 text-sm">
                    {styleInfo.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {styleInfo.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Career Snapshot */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Career Snapshot
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your current career focus
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                Keep learning consistently and take small steps toward your
                career goal by yourself. 
                        
                        Believe ✨ Achieve 🚀 Succeed 🏆
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-5">
            {isEditing ? (
              /* Edit Form */
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-700 shadow-lg">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5 text-lg">
                  Edit Profile
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value={editData.email}
                      disabled
                      className={`${inputClass} opacity-70 cursor-not-allowed`}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          location: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      About Me
                    </label>
                    <textarea
                      rows={4}
                      maxLength={500}
                      placeholder="Write a little about yourself..."
                      value={editData.bio}
                      onChange={(e) =>
                        setEditData({ ...editData, bio: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                    />
                    <p className="text-xs text-slate-400 text-right mt-1">
                      {editData.bio.length}/500
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={handleCancel}
                    className="flex-1 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-semibold py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Progress Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2">{stat.emoji}</div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* About Me */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      About Me
                    </h3>
                    <button
                      onClick={() => {
                        setEditData({ ...profile });
                        setIsEditing(true);
                        setSaveMessage("");
                      }}
                      className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Edit
                    </button>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
                    {profile.bio ||
                      "No bio added yet. Click Edit Profile to add one."}
                  </p>
                </div>
              </>
            )}

            {/* Daily Motivation */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl">
                  ✨
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Daily Motivation
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    A little motivation for your journey
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold text-slate-800 dark:text-white mt-3 mb-2">
                    Progress Over Perfection
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    You don't have to be perfect. Just keep taking small steps
                    toward your goals.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                  <span className="text-2xl">🚀</span>
                  <p className="font-semibold text-slate-800 dark:text-white mt-3 mb-2">
                    Build Your Future
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Every skill you learn today brings you one step closer to
                    your dream career.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                  <span className="text-2xl">🌱</span>
                  <p className="font-semibold text-slate-800 dark:text-white mt-3 mb-2">
                    Trust Your Journey
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Everyone grows at a different pace. Focus on becoming
                    better than yesterday.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                  <span className="text-2xl">💪</span>
                  <p className="font-semibold text-slate-800 dark:text-white mt-3 mb-2">
                    Never Give Up
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Difficult days are part of the journey. Keep showing up for
                    yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;