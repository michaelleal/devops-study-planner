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
        <div className="animate-fade-scale">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block animate-bounce mb-4">
                <span className="text-6xl">🎉</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Parabéns!
              </h2>
              <div className="text-7xl font-black text-blue-600 mb-4 animate-glow">
                {quizScore}/{totalQuestions}
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
                {quizScore >= 12
                  ? '✨ Excelente! Você dominou os fundamentos de Python!'
                  : quizScore >= 10
                    ? '⭐ Ótimo trabalho! Continue praticando!'
                    : '💪 Bom esforço! Revise as aulas e tente novamente.'}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {quiz.map((question, index) => (
                <div
                  key={question.id}
                  className={`p-5 rounded-xl border-l-4 transition-smooth ${
                    quizAnswers[index] === question.correctAnswer
                      ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-500 shadow-md hover:shadow-lg'
                      : 'bg-gradient-to-r from-red-50 to-red-100 border-red-500 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">
                      {quizAnswers[index] === question.correctAnswer ? '✅' : '❌'}
                    </span>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 mb-2">
                        {index + 1}. {question.question}
                      </p>
                      <p className="text-sm text-gray-700 mb-2">
                        Sua resposta: <span className="font-semibold">{question.options[quizAnswers[index]]}</span>
                      </p>
                      <p className="text-sm font-semibold text-green-700 mb-3">
                        Resposta correta: {question.options[question.correctAnswer]}
                      </p>
                      <p className="text-sm text-gray-800 italic bg-white/50 p-3 rounded-lg">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={onQuizComplete}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-smooth hover:scale-105 inline-block"
              >
                ✅ Concluído com Sucesso
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-scale">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Quiz Final
          </h2>
          <p className="text-gray-600">Teste seus conhecimentos com 15 questões</p>
          <div className="mt-3 text-sm text-gray-500 font-semibold">
            Progresso: {quizAnswers.filter((a) => a !== -1).length} / {totalQuestions} respondidas
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {quiz.map((question, qIndex) => (
            <div key={question.id} className="border border-gray-200 rounded-xl p-5 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-smooth">
              <p className="font-semibold text-gray-900 mb-4 text-lg">
                {qIndex + 1}. {question.question}
              </p>
              <div className="space-y-3">
                {question.options.map((option, oIndex) => (
                  <label
                    key={oIndex}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition-smooth hover:bg-blue-50 ${
                      quizAnswers[qIndex] === oIndex ? 'bg-blue-100 border-2 border-blue-500' : 'border border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={oIndex}
                      checked={quizAnswers[qIndex] === oIndex}
                      onChange={() => handleQuizAnswer(qIndex, oIndex)}
                      className="mr-3 cursor-pointer w-5 h-5"
                    />
                    <span className="text-gray-700 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmitQuiz}
            disabled={quizAnswers.filter((a) => a !== -1).length < totalQuestions}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-smooth hover:scale-105 disabled:hover:scale-100 inline-block"
          >
            Enviar Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-scale">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Progresso do Módulo</h3>
          <span className="text-sm font-semibold text-blue-600">
            {currentModuleIndex + 1}/{modules.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 h-3 rounded-full transition-smooth"
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
      <div className="mb-8 pb-8 border-b-2 border-gray-200">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
          Módulo {currentModule.moduleNumber} de {modules.length}
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3">
          {currentModule.title}
        </h2>
        <h3 className="text-xl font-semibold text-gray-700">
          Aula {currentLessonIndex + 1}: {currentLesson.title}
        </h3>
      </div>

      {/* Lesson Content */}
      <div className="prose prose-sm max-w-none mb-10 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-base">{currentLesson.content}</div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4 mb-8 flex-wrap">
        <button
          onClick={handlePrevLesson}
          disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
          className="px-6 py-3 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-smooth hover:scale-105"
        >
          ← Anterior
        </button>

        <div className="text-center text-sm text-gray-600 font-semibold">
          Aula {currentLessonIndex + 1} de {currentModule.lessons.length}
        </div>

        <button
          onClick={handleNextLesson}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-smooth hover:scale-105"
        >
          {isLastLesson && isLastModule ? 'Iniciar Quiz →' : 'Próxima →'}
        </button>
      </div>

      {/* Module Navigation */}
      <div className="pt-8 border-t-2 border-gray-200">
        <p className="text-sm font-bold text-gray-800 mb-4">Pular para módulo:</p>
        <div className="flex flex-wrap gap-3">
          {modules.map((module, index) => (
            <button
              key={module.id}
              onClick={() => {
                setCurrentModuleIndex(index)
                setCurrentLessonIndex(0)
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-smooth ${
                currentModuleIndex === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-md'
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
