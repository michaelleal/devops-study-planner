import { useState } from 'react'
import { Module, QuizQuestion } from '../types'

interface LessonViewerProps {
  modules: Module[]
  quiz: QuizQuestion[]
  onQuizComplete: () => void
}

export const LessonViewer = ({ modules, quiz, onQuizComplete }: LessonViewerProps) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>(new Array(quiz.length).fill(-1))
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const currentModule = modules[currentModuleIndex]
  const currentLesson = currentModule.lessons[currentLessonIndex]
  const isLastLesson = currentLessonIndex === currentModule.lessons.length - 1
  const isLastModule = currentModuleIndex === modules.length - 1

  const handleNextLesson = () => {
    if (isLastLesson) {
      if (isLastModule) {
        setShowQuiz(true)
      } else {
        setCurrentModuleIndex(currentModuleIndex + 1)
        setCurrentLessonIndex(0)
      }
    } else {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1)
      setCurrentLessonIndex(modules[currentModuleIndex - 1].lessons.length - 1)
    }
  }

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = answerIndex
    setQuizAnswers(newAnswers)
  }

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true)
  }

  const calculateQuizScore = () => {
    let correct = 0
    quiz.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const quizScore = calculateQuizScore()
  const totalQuestions = quiz.length

  if (showQuiz) {
    if (quizSubmitted) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-devops-900 mb-4">Quiz Completed! 🎉</h2>
            <div className="text-5xl font-bold text-blue-600 mb-4">{quizScore}/{totalQuestions}</div>
            <p className="text-lg text-gray-600 mb-4">
              {quizScore >= 12
                ? 'Excellent! You mastered Python basics!'
                : quizScore >= 10
                  ? 'Great job! Keep practicing!'
                  : 'Good effort! Review the lessons and try again.'}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {quiz.map((question, index) => (
              <div
                key={question.id}
                className={`p-4 rounded-lg border-l-4 ${
                  quizAnswers[index] === question.correctAnswer
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                }`}
              >
                <p className="font-semibold text-gray-900 mb-2">
                  {index + 1}. {question.question}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Your answer: {question.options[quizAnswers[index]] || 'Not answered'}
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
                <p className="text-sm text-gray-700 mt-2 italic">{question.explanation}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onQuizComplete}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ✅ Mark as Completed
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-devops-900 mb-2">Final Quiz</h2>
          <p className="text-gray-600">Test your knowledge with 15 questions</p>
          <div className="mt-2 text-sm text-gray-500">
            Progress: {quizAnswers.filter((a) => a !== -1).length} / {totalQuestions} answered
          </div>
        </div>

        <div className="space-y-6">
          {quiz.map((question, qIndex) => (
            <div key={question.id} className="border rounded-lg p-5 bg-gray-50">
              <p className="font-semibold text-gray-900 mb-4">
                {qIndex + 1}. {question.question}
              </p>
              <div className="space-y-2">
                {question.options.map((option, oIndex) => (
                  <label key={oIndex} className="flex items-center p-3 rounded cursor-pointer hover:bg-gray-100">
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={oIndex}
                      checked={quizAnswers[qIndex] === oIndex}
                      onChange={() => handleQuizAnswer(qIndex, oIndex)}
                      className="mr-3 cursor-pointer"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmitQuiz}
            disabled={quizAnswers.filter((a) => a !== -1).length < totalQuestions}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-700">Module Progress</h3>
          <span className="text-sm text-gray-600">
            {currentModuleIndex + 1}/{modules.length} modules
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${(
                ((currentModuleIndex + (currentLessonIndex + 1) / currentModule.lessons.length) / modules.length) *
                100
              ).toFixed(1)}%`,
            }}
          />
        </div>
      </div>

      {/* Module and Lesson Info */}
      <div className="mb-6 pb-6 border-b">
        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
          Module {currentModule.moduleNumber}
        </div>
        <h2 className="text-3xl font-bold text-devops-900 mb-2">{currentModule.title}</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Lesson {currentLessonIndex + 1}: {currentLesson.title}
        </h3>
      </div>

      {/* Lesson Content */}
      <div className="prose prose-sm max-w-none mb-8">
        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{currentLesson.content}</div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevLesson}
          disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
          className="px-6 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
        >
          ← Previous
        </button>

        <div className="text-center text-sm text-gray-600">
          Lesson {currentLessonIndex + 1} of {currentModule.lessons.length}
        </div>

        <button
          onClick={handleNextLesson}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {isLastLesson && isLastModule ? 'Take Quiz →' : 'Next Lesson →'}
        </button>
      </div>

      {/* Module Navigation */}
      <div className="mt-6 pt-6 border-t">
        <p className="text-sm text-gray-600 mb-3 font-semibold">Jump to module:</p>
        <div className="flex flex-wrap gap-2">
          {modules.map((module, index) => (
            <button
              key={module.id}
              onClick={() => {
                setCurrentModuleIndex(index)
                setCurrentLessonIndex(0)
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentModuleIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              M{module.moduleNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
