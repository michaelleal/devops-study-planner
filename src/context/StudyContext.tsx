import React, { createContext, useContext, useEffect, useState } from 'react'
import { Phase, StudyContextType, StudyStatus } from '../types'
import { roadmapData } from '../data/roadmap'

const StudyContext = createContext<StudyContextType | undefined>(undefined)

const STORAGE_KEY = 'devops-study-planner'

const calculateLockedPhases = (phases: Phase[]): Phase[] => {
  return phases.map((phase, index) => {
    if (index === 0) {
      return { ...phase, isLocked: false }
    }
    const previousPhase = phases[index - 1]
    const previousProgress = calculatePhaseProgress(previousPhase)
    const isUnlocked = previousProgress >= previousPhase.requiredProgress
    return { ...phase, isLocked: !isUnlocked }
  })
}

const calculatePhaseProgress = (phase: Phase): number => {
  if (phase.topics.length === 0) return 0
  const completed = phase.topics.filter((t) => t.status === 'completed').length
  return Math.round((completed / phase.topics.length) * 100)
}

const calculateTotalXP = (phases: Phase[]): number => {
  return phases.reduce((total, phase) => {
    return (
      total +
      phase.topics.reduce((topicTotal, topic) => {
        if (topic.status === 'completed') {
          return topicTotal + topic.xp
        }
        return topicTotal
      }, 0)
    )
  }, 0)
}

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [phases, setPhases] = useState<Phase[]>(
    calculateLockedPhases(roadmapData),
  )
  const [userXP, setUserXP] = useState(0)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPhases(calculateLockedPhases(parsed.phases || roadmapData))
        setUserXP(parsed.userXP || 0)
      } catch (e) {
        console.error('Failed to load saved data:', e)
      }
    }
  }, [])

  // Save to localStorage whenever phases change
  useEffect(() => {
    const xp = calculateTotalXP(phases)
    setUserXP(xp)
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ phases, userXP: xp }))
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

  const updateCourseStatus = (
    phaseId: string,
    topicId: string,
    courseId: string,
    completed: boolean,
  ) => {
    setPhases((prevPhases) =>
      prevPhases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              topics: phase.topics.map((topic) =>
                topic.id === topicId
                  ? {
                      ...topic,
                      courses: topic.courses.map((course) =>
                        course.id === courseId ? { ...course, completed } : course,
                      ),
                    }
                  : topic,
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

  const getPhaseLockedStatus = (): Phase[] => {
    return calculateLockedPhases(phases)
  }

  const getUserLevel = () => {
    const XP_PER_LEVEL = 1000
    const level = Math.floor(userXP / XP_PER_LEVEL) + 1
    const currentLevelXP = userXP % XP_PER_LEVEL
    const nextLevelXP = XP_PER_LEVEL

    return { level, currentXP: currentLevelXP, nextLevelXP }
  }

  const value: StudyContextType = {
    phases: getPhaseLockedStatus(),
    userXP,
    updateTopicStatus,
    updateTopicNotes,
    updateCourseStatus,
    getProgressPercentage,
    getTotalProgress,
    getPhaseLockedStatus,
    getUserLevel,
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
