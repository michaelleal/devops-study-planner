import React, { createContext, useContext, useEffect, useState } from 'react'
import { Phase, StudyContextType, StudyStatus } from '../types'
import { roadmapData } from '../data/roadmap'

const StudyContext = createContext<StudyContextType | undefined>(undefined)

const STORAGE_KEY = 'devops-study-planner'

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [phases, setPhases] = useState<Phase[]>(roadmapData)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setPhases(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load saved data:', e)
      }
    }
  }, [])

  // Save to localStorage whenever phases change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(phases))
  }, [phases])

  const updateTopicStatus = (phaseId: string, topicId: string, status: StudyStatus) => {
    setPhases((prevPhases) =>
      prevPhases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              topics: phase.topics.map((topic) =>
                topic.id === topicId ? { ...topic, status } : topic,
              ),
            }
          : phase,
      ),
    )
  }

  const updateTopicNotes = (phaseId: string, topicId: string, notes: string) => {
    setPhases((prevPhases) =>
      prevPhases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              topics: phase.topics.map((topic) =>
                topic.id === topicId ? { ...topic, notes } : topic,
              ),
            }
          : phase,
      ),
    )
  }

  const getProgressPercentage = (phaseId?: string): number => {
    const targetPhases = phaseId ? phases.filter((p) => p.id === phaseId) : phases
    const allTopics = targetPhases.flatMap((p) => p.topics)

    if (allTopics.length === 0) return 0

    const completed = allTopics.filter((t) => t.status === 'completed').length
    return Math.round((completed / allTopics.length) * 100)
  }

  const getTotalProgress = (): number => {
    const allTopics = phases.flatMap((p) => p.topics)
    if (allTopics.length === 0) return 0
    const completed = allTopics.filter((t) => t.status === 'completed').length
    return Math.round((completed / allTopics.length) * 100)
  }

  const value: StudyContextType = {
    phases,
    updateTopicStatus,
    updateTopicNotes,
    getProgressPercentage,
    getTotalProgress,
  }

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>
}

export const useStudy = (): StudyContextType => {
  const context = useContext(StudyContext)
  if (context === undefined) {
    throw new Error('useStudy must be used within a StudyProvider')
  }
  return context
}
