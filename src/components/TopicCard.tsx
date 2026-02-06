import { useState } from 'react'
import { Topic } from '../types'
import { useStudy } from '../context/StudyContext'
import { CourseList } from './CourseList'

interface TopicCardProps {
  phaseId: string
  topic: Topic
}

export const TopicCard = ({ phaseId, topic }: TopicCardProps) => {
  const { updateTopicStatus, updateTopicNotes } = useStudy()
  const [isEditingNotes, setIsEditingNotes] = useState(false)
  const [notes, setNotes] = useState(topic.notes)

  const statusColors = {
    'not-started': 'bg-gray-100 text-gray-700 border-gray-300',
    'in-progress': 'bg-blue-100 text-blue-700 border-blue-300',
    'completed': 'bg-green-100 text-green-700 border-green-300',
  }

  const statusLabels = {
    'not-started': 'Não iniciado',
    'in-progress': 'Em andamento',
    'completed': 'Concluído',
  }

  const statusIcons = {
    'not-started': '⭕',
    'in-progress': '🔄',
    'completed': '✅',
  }

  const handleSaveNotes = () => {
    updateTopicNotes(phaseId, topic.id, notes)
    setIsEditingNotes(false)
  }

  const completedCourses = topic.courses.filter((c) => c.completed).length

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{topic.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{topic.description}</p>
        </div>
      </div>

      {/* XP Badge */}
      {topic.status === 'completed' && (
        <div className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-2">
          ⭐ +{topic.xp} XP
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3 items-center justify-between">
        <div className="flex gap-1">
          {(['not-started', 'in-progress', 'completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => updateTopicStatus(phaseId, topic.id, status)}
              className={`px-2 py-1 rounded text-xs font-medium border transition-all ${
                topic.status === status
                  ? `${statusColors[status]} border-opacity-100 ring-2 ring-offset-1`
                  : 'bg-gray-50 text-gray-600 border-gray-200'
              }`}
              title={statusLabels[status]}
            >
              {statusIcons[status]}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsEditingNotes(!isEditingNotes)}
          className="px-2 py-1 text-xs text-blue-600 hover:bg-blue-50 rounded transition-colors"
        >
          📝 Notas
        </button>
      </div>

      {/* Cursos */}
      <CourseList phaseId={phaseId} topicId={topic.id} courses={topic.courses} />

      {isEditingNotes && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Adicione suas notas sobre este tópico..."
            className="w-full p-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSaveNotes}
              className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
            >
              Salvar
            </button>
            <button
              onClick={() => {
                setNotes(topic.notes)
                setIsEditingNotes(false)
              }}
              className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {!isEditingNotes && notes && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-600 italic">{notes}</p>
        </div>
      )}
    </div>
  )
}
