import { Leaf, User } from 'lucide-react'

export default function Navbar({ onAuthClick }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-green-100 text-green-700">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-800">AgriSense</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#predict" className="hover:text-gray-900">Predict</a>
          <a href="#auth" className="hover:text-gray-900">Account</a>
        </nav>
        <button
          onClick={onAuthClick}
          className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-3 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <User className="h-4 w-4" />
          Sign in
        </button>
      </div>
    </header>
  )
}
