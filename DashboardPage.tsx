import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../api'
import { FaWindows, FaApple, FaLinux, FaDownload, FaCheck, FaSignOutAlt, FaTerminal, FaHome } from 'react-icons/fa'
import { SiFedora, SiUbuntu, SiArchlinux } from 'react-icons/si'

interface dashboard_props {
  user: UserInfo
  on_logout: () => void
}

export default function dashboard_page({ user, on_logout }: dashboard_props) {
  const navigate = useNavigate()
  const [active_tab, set_active_tab] = useState<'overview' | 'downloads'>('overview')
  const [selected_platform, set_selected_platform] = useState<string | null>(null)
  const [dependencies_downloaded, set_dependencies_downloaded] = useState(false)

  const handle_dependency_download = () => {
    const link = document.createElement('a')
    link.href = '/downloads/install_dependencies.sh'
    link.download = 'install_dependencies.sh'
    link.click()
    set_dependencies_downloaded(true)
  }

  const linux_packages = [
    { id: 'rpm', icon: SiFedora, color: '#51A2DA', name: 'RPM', desc: 'Fedora, RHEL, openSUSE', href: '/downloads/gs-music.rpm' },
    { id: 'deb', icon: SiUbuntu, color: '#E95420', name: 'DEB', desc: 'Ubuntu, Debian, Mint', href: '/downloads/gs-music.deb' },
    { id: 'aur', icon: SiArchlinux, color: '#1793D1', name: 'AUR', desc: 'Arch, Manjaro, Cachy OS', href: null, disabled: true },
    { id: 'appimage', icon: FaLinux, color: '#FCC624', name: 'AppImage', desc: 'Universal (Portable)', href: '/downloads/gs-music.AppImage' },
  ]

  const windows_packages = [
    { id: 'exe', name: 'Installer (.exe)', href: '/downloads/gs-music-setup.exe' },
    { id: 'zip', name: 'Portable (.zip)', href: '/downloads/gs-music-windows.zip' },
  ]

  const mac_packages = [
    { id: 'dmg', name: 'Disk Image (.dmg)', href: '/downloads/gs-music.dmg' },
    { id: 'zip', name: 'Portable (.zip)', href: '/downloads/gs-music-macos.zip' },
  ]

  const render_overview = () => (
    <div className="space-y-8">
      <div className="p-6 border border-zinc-800 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">welcome back, {user.username}</h2>
        <p className="text-sm text-zinc-500">
          last login: {user.last_login ? new Date(user.last_login).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'january 1, 2026'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 border border-zinc-800 rounded-lg">
          <h3 className="font-medium mb-2">account status</h3>
          <p className="text-2xl font-bold text-green-500">alpha tester</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-lg">
          <h3 className="font-medium mb-2">current version</h3>
          <p className="text-2xl font-bold">0.1.0</p>
        </div>
      </div>

      <div className="p-6 border border-zinc-800 rounded-lg">
        <h3 className="font-medium mb-4">quick links</h3>
        <div className="flex gap-3">
          <button
            onClick={() => set_active_tab('downloads')}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded hover:bg-zinc-200"
          >
            <FaDownload className="w-4 h-4" />
            download app
          </button>
          <button
            onClick={() => navigate('/troubleshooting')}
            className="flex items-center gap-2 px-4 py-2 border border-zinc-700 rounded hover:border-zinc-600"
          >
            troubleshooting
          </button>
        </div>
      </div>
    </div>
  )

  const render_downloads = () => (
    <div className="space-y-8">
      <div className="p-6 border border-zinc-800 rounded-lg">
        <div className="flex items-start gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            selected_platform ? 'bg-green-600' : 'bg-zinc-800'
          }`}>
            {selected_platform ? <FaCheck className="w-4 h-4" /> : '1'}
          </div>
          <div className="flex-1">
            <h2 className="font-semibold mb-1">select your platform</h2>
            <p className="text-sm text-zinc-500 mb-4">choose your operating system</p>
            <div className="flex gap-3">
              <button
                onClick={() => { set_selected_platform('linux'); set_dependencies_downloaded(false); }}
                className={`flex items-center gap-2 px-4 py-3 rounded border ${
                  selected_platform === 'linux'
                    ? 'border-white bg-zinc-900'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <FaLinux className="w-5 h-5 text-[#FCC624]" />
                Linux
              </button>
              <button
                onClick={() => { set_selected_platform('windows'); set_dependencies_downloaded(false); }}
                className={`flex items-center gap-2 px-4 py-3 rounded border ${
                  selected_platform === 'windows'
                    ? 'border-white bg-zinc-900'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <FaWindows className="w-5 h-5 text-[#0078D4]" />
                Windows
              </button>
              <button
                onClick={() => { set_selected_platform('mac'); set_dependencies_downloaded(false); }}
                className={`flex items-center gap-2 px-4 py-3 rounded border ${
                  selected_platform === 'mac'
                    ? 'border-white bg-zinc-900'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <FaApple className="w-5 h-5" />
                macOS
              </button>
            </div>
          </div>
        </div>
      </div>

      {selected_platform === 'linux' && (
        <div className={`p-6 border rounded-lg ${
          selected_platform ? 'border-zinc-800' : 'border-zinc-900 opacity-50'
        }`}>
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              dependencies_downloaded ? 'bg-green-600' : 'bg-zinc-800'
            }`}>
              {dependencies_downloaded ? <FaCheck className="w-4 h-4" /> : '2'}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold mb-1">install dependencies</h2>
              <p className="text-sm text-zinc-500 mb-4">
                gs-music requires mpv, yt-dlp, ffmpeg, and socat. run this script to install them.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handle_dependency_download}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded hover:bg-zinc-200"
                >
                  <FaTerminal className="w-4 h-4" />
                  download installer
                </button>
                <button
                  onClick={() => set_dependencies_downloaded(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-zinc-700 rounded hover:border-zinc-600 text-zinc-400 hover:text-white"
                >
                  i have already completed this step
                </button>
              </div>
              {dependencies_downloaded && (
                <p className="text-xs text-zinc-500 mt-3">
                  run with: <code className="bg-zinc-900 px-2 py-1 rounded">chmod +x install_dependencies.sh && ./install_dependencies.sh</code>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {selected_platform && (selected_platform !== 'linux' || dependencies_downloaded) && (
        <div className="p-6 border border-zinc-800 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold">
              {selected_platform === 'linux' ? '3' : '2'}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold mb-1">download gs-music</h2>
              <p className="text-sm text-zinc-500 mb-4">select your preferred package format</p>

              {selected_platform === 'linux' && (
                <div className="grid grid-cols-2 gap-3">
                  {linux_packages.map((pkg) => {
                    const Icon = pkg.icon
                    return pkg.disabled ? (
                      <div
                        key={pkg.id}
                        className="flex items-center gap-3 p-4 border border-zinc-900 rounded opacity-40 cursor-not-allowed"
                      >
                        <Icon className="w-5 h-5" style={{ color: pkg.color }} />
                        <div>
                          <div className="font-medium text-sm">{pkg.name}</div>
                          <div className="text-xs text-zinc-600">{pkg.desc}</div>
                        </div>
                      </div>
                    ) : (
                      <a
                        key={pkg.id}
                        href={pkg.href!}
                        className="flex items-center gap-3 p-4 border border-zinc-800 rounded hover:border-zinc-700 hover:bg-zinc-900/50"
                      >
                        <Icon className="w-5 h-5" style={{ color: pkg.color }} />
                        <div>
                          <div className="font-medium text-sm">{pkg.name}</div>
                          <div className="text-xs text-zinc-500">{pkg.desc}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              )}

              {selected_platform === 'windows' && (
                <div className="space-y-3">
                  {windows_packages.map((pkg) => (
                    <a
                      key={pkg.id}
                      href={pkg.href}
                      className="flex items-center gap-3 p-4 border border-zinc-800 rounded hover:border-zinc-700 hover:bg-zinc-900/50"
                    >
                      <FaDownload className="w-4 h-4 text-zinc-500" />
                      <span className="text-sm">{pkg.name}</span>
                    </a>
                  ))}
                </div>
              )}

              {selected_platform === 'mac' && (
                <div className="space-y-3">
                  {mac_packages.map((pkg) => (
                    <a
                      key={pkg.id}
                      href={pkg.href}
                      className="flex items-center gap-3 p-4 border border-zinc-800 rounded hover:border-zinc-700 hover:bg-zinc-900/50"
                    >
                      <FaDownload className="w-4 h-4 text-zinc-500" />
                      <span className="text-sm">{pkg.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-zinc-900 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-bold">GS-Music</span>
              <span className="text-[10px] text-zinc-600 uppercase tracking-wider">alpha</span>
            </div>
            <nav className="flex gap-1">
              <button
                onClick={() => set_active_tab('overview')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${
                  active_tab === 'overview'
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                <FaHome className="w-3 h-3" />
                overview
              </button>
              <button
                onClick={() => set_active_tab('downloads')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${
                  active_tab === 'downloads'
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                <FaDownload className="w-3 h-3" />
                downloads
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-500">{user.username}</span>
            <button
              onClick={on_logout}
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white"
            >
              <FaSignOutAlt className="w-3 h-3" />
              sign out
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{active_tab}</h1>
        </div>

        {active_tab === 'overview' && render_overview()}
        {active_tab === 'downloads' && render_downloads()}
      </main>

      <footer className="border-t border-zinc-900 py-6 px-6 mt-auto">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-zinc-600">
          <div className="flex gap-4">
            <button onClick={() => navigate('/troubleshooting')} className="hover:text-white">troubleshooting</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-white">privacy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-white">terms</button>
          </div>
          <span>© 2019-2026 GavinStrikes Software LLC</span>
        </div>
      </footer>
    </div>
  )
}
