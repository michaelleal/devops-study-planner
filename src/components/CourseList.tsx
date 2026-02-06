import { useState } from 'react'
import { Course } from '../types'
import { useStudy } from '../context/StudyContext'

interface CourseListProps {
  phaseId: string
  topicId: string
  courses: Course[]
}

const typeIcons = {
  video: '🎥',
  article: '📄',
  course: '📚',
  book: '📖',
  project: '🛠️',
}

export const CourseList = ({ phaseId, topicId, courses }: CourseListProps) => {
  const { updateCourseStatus } = useStudy()
  const [isExpanded, setIsExpanded] = useState(false)

  if (courses.length === 0) return null

  const completedCount = courses.filter((c) => c.completed).length

  return (
    <div className="mt-3 border-t border-gray-200 pt-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
      >
        <span>{isExpanded ? '▼' : '▶'}</span>
        📚 Cursos ({completedCount}/{courses.length})
      </button>

      {isExpanded && (
        <div className="mt-2 space-y-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-start gap-2 p-2 rounded bg-blue-50 border border-blue-200"
            >
              <input
                type="checkbox"
                checked={course.completed}
                onChange={(e) =>
                  updateCourseStatus(phaseId, topicId, course.id, e.target.checked)
                }
                className="mt-1 cursor-pointer"
              />
              <div className="flex-1">
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  {typeIcons[course.type]} {course.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
