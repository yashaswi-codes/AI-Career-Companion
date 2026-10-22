// ─── App Info ────────────────────────────────────────────────────────
export const APP_NAME    = 'AI Career Companion'
export const APP_TAGLINE = 'Your Personalized AI-Powered Career Guide'

// ─── Local Storage Keys ──────────────────────────────────────────────
export const STORAGE_KEYS = {
  TOKEN:     'acc_token',
  USER:      'acc_user',
  THEME:     'acc_theme',
  QUIZ_DATA: 'acc_quiz_data',
}

// ─── Routes ──────────────────────────────────────────────────────────
export const ROUTES = {
  HOME:          '/',
  LOGIN:         '/login',
  SIGNUP:        '/signup',
  QUIZ:          '/quiz',
  CAREER_RESULT: '/career-result',
  DASHBOARD:     '/dashboard',
  ROADMAP:       '/roadmap',
  RESOURCES:     '/resources',
  AI_TOOLS:      '/ai-tools',
  PLANNER:       '/planner',
  MENTORS:       '/mentors',
  CHATBOT:       '/chatbot',
  PROFILE:       '/profile',
  NOT_FOUND:     '*',
}

// ─── API Endpoints ───────────────────────────────────────────────────
export const ENDPOINTS = {
  REGISTER:        '/auth/register',
  LOGIN:           '/auth/login',
  LOGOUT:          '/auth/logout',
  ME:              '/auth/me',
  SUBMIT_QUIZ:     '/quiz/submit',
  GET_QUIZ_RESULT: '/quiz/result',
  GET_ROADMAP:     '/roadmap',
  GET_PLANNER:     '/planner',
  ADD_TASK:        '/planner/task',
  SEND_MESSAGE:    '/chatbot/message',
  GET_HISTORY:     '/chatbot/history',
}

// ─── Quiz Config ─────────────────────────────────────────────────────
export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 20,
  SECTIONS: [
    { id: 'personality',    label: 'Personality',       questions: 5 },
    { id: 'interests',      label: 'Interests',         questions: 7 },
    { id: 'learning_style', label: 'Learning Style',    questions: 4 },
    { id: 'goals',          label: 'Goals & Ambitions', questions: 4 },
  ],
}

// ─── Task Status & Priority ───────────────────────────────────────────
export const TASK_STATUS = {
  PENDING:     'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED:   'completed',
  SKIPPED:     'skipped',
}

export const TASK_PRIORITY = {
  LOW:    'low',
  MEDIUM: 'medium',
  HIGH:   'high',
}

// ─── Themes ───────────────────────────────────────────────────────────
export const THEMES = {
  LIGHT: 'light',
  DARK:  'dark',
}

// ─── Toast Messages ───────────────────────────────────────────────────
export const TOAST_MESSAGES = {
  LOGIN_SUCCESS:    '👋 Welcome back!',
  LOGIN_ERROR:      'Invalid credentials. Please try again.',
  REGISTER_SUCCESS: '🎉 Account created successfully!',
  LOGOUT_SUCCESS:   'Logged out successfully.',
  QUIZ_SUBMITTED:   '✅ Quiz submitted! Analyzing your results...',
  TASK_ADDED:       '✅ Task added successfully!',
  TASK_UPDATED:     '📝 Task updated!',
  TASK_DELETED:     '🗑️ Task deleted!',
  PROFILE_UPDATED:  '✅ Profile updated successfully!',
  ERROR_GENERIC:    'Something went wrong. Please try again.',
  NETWORK_ERROR:    'Network error. Please check your connection.',
}

// ─── Dashboard Nav Links ──────────────────────────────────────────────
export const DASHBOARD_NAV_LINKS = [
  { path: '/dashboard', label: 'Dashboard',  icon: 'MdDashboard'    },
  { path: '/roadmap',   label: 'Roadmap',    icon: 'MdMap'          },
  { path: '/resources', label: 'Resources',  icon: 'MdLibraryBooks' },
  { path: '/ai-tools',  label: 'AI Tools',   icon: 'MdSmartToy'     },
  { path: '/planner',   label: 'Planner',    icon: 'MdCalendarToday'},
  { path: '/mentors',   label: 'Mentors',    icon: 'MdPeople'       },
  { path: '/chatbot',   label: 'Chatbot',    icon: 'MdChat'         },
  { path: '/profile',   label: 'Profile',    icon: 'MdPerson'       },
]