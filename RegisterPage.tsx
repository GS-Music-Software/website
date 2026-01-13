import { useState } from 'react'
import { Link } from 'react-router-dom'
import { register, verify_token, UserInfo } from '../api'

interface RegisterPageProps {
  on_login: (token: string, user: UserInfo) => void
}

export default function RegisterPage({ on_login }: RegisterPageProps) {
  const [username, set_username] = useState('')
  const [password, set_password] = useState('')
  const [confirm_password, set_confirm_password] = useState('')
  const [invite_key, set_invite_key] = useState('')
  const [error, set_error] = useState('')
  const [loading, set_loading] = useState(false)

  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault()
    set_error('')

    if (password !== confirm_password) {
      set_error('passwords do not match')
      return
    }

    if (password.length < 6) {
      set_error('password must be at least 6 characters')
      return
    }

    set_loading(true)

    try {
      const res = await register(username, password, invite_key)
      if (res.success && res.token) {
        const verify_res = await verify_token(res.token)
        if (verify_res.valid && verify_res.user) {
          on_login(res.token, verify_res.user)
        } else {
          set_error('registration succeeded but verification failed')
        }
      } else {
        set_error(res.message || 'registration failed')
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
            <label className="block text-sm text-zinc-400 mb-1">invite key</label>
            <input
              type="text"
              value={invite_key}
              onChange={(e) => set_invite_key(e.target.value.toUpperCase())}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors font-mono"
              required
            />
          </div>

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

          <div>
            <label className="block text-sm text-zinc-400 mb-1">confirm password</label>
            <input
              type="password"
              value={confirm_password}
              onChange={(e) => set_confirm_password(e.target.value)}
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
            {loading ? 'creating account...' : 'create account'}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          already have an account?{' '}
          <Link to="/login" className="text-white hover:underline">
            sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
