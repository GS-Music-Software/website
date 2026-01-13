import { useState } from 'react'
import { Link } from 'react-router-dom'
import { login, UserInfo } from '../api'

interface LoginPageProps {
  on_login: (token: string, user: UserInfo) => void
}

export default function LoginPage({ on_login }: LoginPageProps) {
  const [username, set_username] = useState('')
  const [password, set_password] = useState('')
  const [error, set_error] = useState('')
  const [loading, set_loading] = useState(false)

  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault()
    set_error('')
    set_loading(true)

    try {
      const res = await login(username, password)
      if (res.success && res.token && res.user) {
        on_login(res.token, res.user)
      } else {
        set_error(res.message || 'login failed')
      }
    } catch {
      set_error('connection error')
    } finally {
      set_loading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-8">GS-Music</h1>

        <form onSubmit={handle_submit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => set_username(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => set_password(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'signing in...' : 'sign in'}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          don't have an account?{' '}
          <Link to="/register" className="text-white hover:underline">
            register
          </Link>
        </p>
      </div>
    </div>
  )
}
