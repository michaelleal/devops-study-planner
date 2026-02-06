export type StudyStatus = 'not-started' | 'in-progress' | 'completed'

export interface Topic {
  id: string
  title: string
  description: string
  status: StudyStatus
  notes: string
}

export interface Phase {
  id: string
  title: string
  description: string
  color: string
  topics: Topic[]
}

export interface RoadmapData {
  phases: Phase[]
}

export interface StudyContextType {
  phases: Phase[]
  updateTopicStatus: (phaseId: string, topicId: string, status: StudyStatus) => void
  updateTopicNotes: (phaseId: string, topicId: string, notes: string) => void
  getProgressPercentage: (phaseId?: string) => number
  getTotalProgress: () => number
}
