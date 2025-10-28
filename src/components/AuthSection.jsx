import { useState } from 'react'
import { Mail, Lock, UserPlus, LogIn, Shield } from 'lucide-react'

export default function AuthSection() {
  const [mode, setMode] = useState('login')

  return (
    <section id="auth" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Account</h2>
            <p className="text-gray-600">Sign in or create an account to save datasets and view predictions.</p>
          </div>
          <div className="inline-flex rounded-lg border p-1 bg-white">
            <button
              className={`px-3 py-1.5 text-sm rounded-md ${mode === 'login' ? 'bg-green-600 text-white' : 'text-gray-700'}`}
              onClick={() => setMode('login')}
            >
              Log in
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-md ${mode === 'signup' ? 'bg-green-600 text-white' : 'text-gray-700'}`}
              onClick={() => setMode('signup')}
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm">
            {mode === 'login' ? <LoginForm /> : <SignupForm />}
          </div>

          <aside className="bg-white border rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-green-50 text-green-700">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Secure access</p>
                <p className="text-sm text-gray-600">We use email verification and encrypted sessions to keep your data safe.</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Email verification link is sent after sign up</li>
              <li>Reset password via secure email flow</li>
              <li>Two-factor support coming soon</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

function LoginForm() {
  function onSubmit(e) {
    e.preventDefault()
    alert('This is a UI preview. Connect to the backend to enable login.')
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="email" required className="w-full pl-9 rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="mt-1 relative">
          <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="password" required className="w-full pl-9 rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="••••••••" />
        </div>
      </div>
      <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700">
        <LogIn className="h-4 w-4" /> Log in
      </button>
    </form>
  )
}

function SignupForm() {
  function onSubmit(e) {
    e.preventDefault()
    alert('This is a UI preview. Connect to the backend to enable sign up and email verification.')
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700">Full name</label>
        <div className="mt-1 relative">
          <UserPlus className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" required className="w-full pl-9 rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Jane Doe" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="email" required className="w-full pl-9 rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="mt-1 relative">
          <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="password" required className="w-full pl-9 rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Create a strong password" />
        </div>
      </div>
      <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700">
        <Mail className="h-4 w-4" /> Sign up & get verification link
      </button>
    </form>
  )
}
