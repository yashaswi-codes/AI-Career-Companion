
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash-lite"
});

const chatWithGemini = async (message, context = "", history = []) => {
  try {
    const chatHistory = [
      {
        role: "user",
        parts: [{
          text: `You are an expert AI Career Advisor for AI Career Companion.

Help students with career paths, skills, learning roadmaps, projects,
resumes, internships, interviews, job preparation and placements.

Personalize your guidance using this student context:
${context}

Give useful, specific answers. Use headings, bullet points and
step-by-step explanations when helpful. Avoid generic or repetitive
answers. Understand follow-up questions using conversation history.
Be encouraging, realistic and practical.`,
        }],
      },
      {
        role: "model",
        parts: [{
          text: "I will provide personalized, practical career guidance and use the conversation history to understand follow-up questions.",
        }],
      },
      ...history
        .filter(
          (item) =>
            ["user", "assistant"].includes(item.role) &&
            typeof item.text === "string" &&
            item.text.trim()
        )
        .slice(-12)
        .map((item) => ({
          role: item.role === "assistant" ? "model" : "user",
          parts: [{ text: item.text.slice(0, 4000) }],
        })),
    ];

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error.message);
    throw new Error("AI service error — please try again");
  }
};

// Career Recommendation
const getCareerRecommendation = async (
  topCareers,
  learningStyle,
  answers
) => {
  try {
    const prompt = `
You are an expert career counselor.

Top career matches:
${topCareers.map((c, i) =>
  `${i + 1}. ${c.career} (${c.percentage}% match)`
).join("\n")}

Learning style: ${learningStyle}

Explain in 3-4 paragraphs:
1. Why the top career fits
2. Relevant strengths
3. First steps
4. Encouraging closing advice

Address the student directly.
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Career Error:", error.message);
    throw new Error("AI service error");
  }
};

// Daily Motivation
const getDailyMotivation = async (career, streak, progress) => {
  try {
    const prompt = `
You are an encouraging AI study buddy.
Career: ${career}
Study streak: ${streak} days
Overall progress: ${progress}%

Write a specific, energetic motivational message in 2-3 sentences.
Use 1-2 emojis and stay under 50 words.
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Motivation Error:", error.message);
    return "Keep going! Every day of learning brings you closer to your dream career. 🚀";
  }
};

// Study Plan Generator
const generateStudyPlan = async (career, learningStyle, hoursPerDay) => {
  try {
    const prompt = `
Create a weekly study plan for ${career}.
Learning style: ${learningStyle}
Hours per day: ${hoursPerDay}

Return ONLY valid JSON:
{
  "weeklyPlan": [
    {
      "day": "Monday",
      "focus": "Topic name",
      "tasks": ["task1", "task2", "task3"],
      "duration": "2 hours"
    }
  ]
}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch (error) {
    console.error("Gemini Study Plan Error:", error.message);
    throw new Error("Could not generate study plan");
  }
};

module.exports = {
  chatWithGemini,
  getCareerRecommendation,
  getDailyMotivation,
  generateStudyPlan,
};
