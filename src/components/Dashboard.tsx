import { useStudy } from '../context/StudyContext'

export const Dashboard = () => {
  const { phases, getTotalProgress } = useStudy()

  const totalTopics = phases.reduce((acc, phase) => acc + phase.topics.length, 0)
  const completedTopics = phases.reduce(
    (acc, phase) =>
      acc + phase.topics.filter((topic) => topic.status === 'completed').length,
    0,
  )
  const inProgressTopics = phases.reduce(
    (acc, phase) =>
      acc + phase.topics.filter((topic) => topic.status === 'in-progress').length,
    0,
  )

  const totalProgress = getTotalProgress()

  return (
    <div className="bg-gradient-to-br from-devops-800 to-devops-900 text-white rounded-lg shadow-lg p-8 mb-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">DevOps Study Planner</h1>
        <p className="text-devops-200">Acompanhe seu progresso no roadmap DevOps</p>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {/* Total Progress */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
          <div className="text-sm font-medium text-devops-200 mb-2">Progresso Total</div>
          <div className="text-3xl font-bold mb-2">{totalProgress}%</div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>

        {/* Completed Topics */}
        <div className="bg-green-500/20 backdrop-blur rounded-lg p-4 border border-green-400/30">
          <div className="text-sm font-medium text-green-200 mb-2">✅ Concluídos</div>
          <div className="text-3xl font-bold">{completedTopics}</div>
          <div className="text-xs text-green-200 mt-2">de {totalTopics}</div>
        </div>

        {/* In Progress Topics */}
        <div className="bg-blue-500/20 backdrop-blur rounded-lg p-4 border border-blue-400/30">
          <div className="text-sm font-medium text-blue-200 mb-2">🔄 Em Andamento</div>
          <div className="text-3xl font-bold">{inProgressTopics}</div>
          <div className="text-xs text-blue-200 mt-2">de {totalTopics}</div>
        </div>

        {/* Phases Count */}
        <div className="bg-purple-500/20 backdrop-blur rounded-lg p-4 border border-purple-400/30">
          <div className="text-sm font-medium text-purple-200 mb-2">📚 Fases</div>
          <div className="text-3xl font-bold">{phases.length}</div>
          <div className="text-xs text-purple-200 mt-2">trilhas de aprendizado</div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <a
          href="#roadmap"
          className="inline-block bg-white text-devops-900 px-6 py-2 rounded-lg font-semibold hover:bg-devops-100 transition-colors"
        >
          ↓ Ver Roadmap Completo
        </a>
      </div>
    </div>
  )
}
