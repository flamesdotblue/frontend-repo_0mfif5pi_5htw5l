import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CropPredictor from './components/CropPredictor'
import AuthSection from './components/AuthSection'

function App() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar onAuthClick={() => {
        setShowAuth(true)
        const el = document.getElementById('auth')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }} />

      <main className="flex-1">
        <Hero />
        <CropPredictor />
        <AuthSection />
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AgriSense. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#predict" className="hover:text-gray-900">Predict</a>
            <a href="#auth" className="hover:text-gray-900">Account</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
