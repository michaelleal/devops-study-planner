import { Phase } from '../types'
import { useStudy } from '../context/StudyContext'
import { TopicCard } from './TopicCard'

interface PhaseCardProps {
  phase: Phase
}

export const PhaseCard = ({ phase }: PhaseCardProps) => {
  const { getProgressPercentage } = useStudy()
  const progress = getProgressPercentage(phase.id)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      {/* Phase Header */}
      <div className={`${phase.color} text-white p-4`}>
        <h3 className="text-lg font-bold">{phase.title}</h3>
        <p className="text-sm opacity-90 mt-1">{phase.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-700">Progresso</span>
          <span className="text-xs font-bold text-gray-900">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${phase.color} h-2 rounded-full transition-all`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-3">
          {phase.topics.map((topic) => (
            <TopicCard key={topic.id} phaseId={phase.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  )
}
