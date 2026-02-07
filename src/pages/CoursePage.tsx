import { useNavigate, useParams } from 'react-router-dom'
import { LessonViewer } from '../components/LessonViewer'
import { pythonModules, pythonQuiz } from '../data/pythonCourse'
import { useStudy } from '../context/StudyContext'

export const CoursePage = () => {
  const navigate = useNavigate()
  const { courseId } = useParams()
  const { updateQuizCompletion, updateTopicStatus } = useStudy()

  const getCourseContent = () => {
    switch (courseId) {
      case 'python-basics':
        return {
          title: 'Python Basics for Beginners',
          modules: pythonModules,
          quiz: pythonQuiz,
          phaseId: 'fundamentals',
          topicId: 'python-basics',
        }
      default:
        return null
    }
  }

  const course = getCourseContent()

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Curso não encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Voltar para Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold flex items-center gap-2"
        >
          ← Voltar para Dashboard
        </button>

        <LessonViewer
          modules={course.modules}
          quiz={course.quiz}
          onQuizComplete={() => {
            updateQuizCompletion(course.phaseId, course.topicId, courseId!, true)
            updateTopicStatus(course.phaseId, course.topicId, 'completed')
            navigate('/')
          }}
        />
      </div>
    </div>
  )
}
