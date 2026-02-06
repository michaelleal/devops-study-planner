import './App.css'
import { Dashboard } from './components/Dashboard'
import { Roadmap } from './components/Roadmap'

function App() {
  return (
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
  )
}

export default App
