export type StudyStatus = 'not-started' | 'in-progress' | 'completed'

export interface Course {
  id: string
  title: string
  url: string
  type: 'video' | 'article' | 'course' | 'book' | 'project'
  completed: boolean
}

export interface Topic {
  id: string
  title: string
  description: string
  status: StudyStatus
  notes: string
  courses: Course[]
  xp: number // XP gained when completed
}

export interface Phase {
  id: string
  title: string
  description: string
  color: string
  topics: Topic[]
  requiredProgress: number // e.g., 60 means need 60% previous phase
  isLocked: boolean
}

export interface RoadmapData {
  phases: Phase[]
}

export interface Lesson {
  id: string
  moduleId: string
  lessonNumber: number
  title: string
  content: string
  completed: boolean
}

export interface Module {
  id: string
  moduleNumber: number
  title: string
  description: string
  lessons: Lesson[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number // index of correct option
  explanation: string
}

export interface CourseWithLessons extends Course {
  modules?: Module[]
  quiz?: QuizQuestion[]
  quizCompleted?: boolean
}

export interface StudyContextType {
  phases: Phase[]
  userXP: number
  updateTopicStatus: (phaseId: string, topicId: string, status: StudyStatus) => void
  updateTopicNotes: (phaseId: string, topicId: string, notes: string) => void
  updateCourseStatus: (phaseId: string, topicId: string, courseId: string, completed: boolean) => void
  updateLessonStatus: (phaseId: string, topicId: string, courseId: string, moduleId: string, lessonId: string, completed: boolean) => void
  updateQuizCompletion: (phaseId: string, topicId: string, courseId: string, completed: boolean) => void
  getProgressPercentage: (phaseId?: string) => number
  getTotalProgress: () => number
  getPhaseLockedStatus: () => Phase[]
  getUserLevel: () => { level: number; currentXP: number; nextLevelXP: number }
}
