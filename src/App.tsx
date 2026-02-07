import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Roadmap } from './components/Roadmap'
import { CoursePage } from './pages/CoursePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
              <div className="max-w-6xl mx-auto px-4 py-8">
                <Dashboard />
                <Roadmap />
              </div>

              {/* Footer */}
              <footer className="border-t border-gray-200 bg-white mt-12">
                <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
                  <p>
                    DevOps Study Planner • Dados salvos localmente no seu navegador •{' '}
                    <a
                      href="https://roadmap.sh/devops"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Baseado no roadmap.sh/devops
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          }
        />
        <Route path="/course/:courseId" element={<CoursePage />} />
      </Routes>
    </Router>
  )
}

export default App
