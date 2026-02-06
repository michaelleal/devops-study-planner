import { useState } from 'react'
import { useStudy } from '../context/StudyContext'
import { PhaseCard } from './PhaseCard'

export const Roadmap = () => {
  const { phases } = useStudy()
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null)

  return (
    <div id="roadmap" className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Roadmap Completo</h2>
        <p className="text-gray-600">
          Clique em qualquer fase para expandir ou recolher, e marque seus avanços.
        </p>
      </div>

      <div className="space-y-4">
        {phases.map((phase) => (
          <div key={phase.id}>
            <button
              onClick={() =>
                setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
              }
              className="w-full text-left mb-2 focus:outline-none"
            >
              <div className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <span className="text-lg">
                  {expandedPhase === phase.id ? '▼' : '▶'}
                </span>
                <span className="font-semibold text-gray-900 flex-1">{phase.title}</span>
                <span className="text-xs bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
                  {phase.topics.length} tópicos
                </span>
              </div>
            </button>

            {expandedPhase === phase.id && (
              <div className="ml-4 animate-in fade-in duration-200">
                <PhaseCard phase={phase} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
