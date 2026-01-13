import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown, FaArrowLeft } from 'react-icons/fa'

export default function TroubleshootingPage() {
  const navigate = useNavigate()
  const [expanded, set_expanded] = useState<number | null>(null)

  const faqs = [
    {
      question: "the app won't open on linux",
      answer: "if you're using the AppImage, make sure you've given it execute permissions: chmod +x gs-music.AppImage. on newer distros like Ubuntu 22.04+, you may also need to install libfuse2: sudo apt install libfuse2"
    },
    {
      question: "i'm getting 'unauthorized' errors",
      answer: "this usually means your session has expired. try signing out and signing back in. if the issue persists, clear your browser/app cache."
    },
    {
      question: "windows is flagging the installer as unsafe",
      answer: "we can't afford a windows code signing certificate so antivirus software may flag gs-music as potentially unsafe. you can safely add it as an exclusion - the app is built with rust and is open source."
    },
    {
      question: "audio isn't playing",
      answer: "make sure you have the required dependencies installed: mpv, yt-dlp, ffmpeg, and socat. you can run the install_dependencies.sh script from the downloads page to install them automatically."
    },
    {
      question: "songs are taking a long time to load",
      answer: "this is usually caused by slow network or youtube throttling. try using a vpn or waiting a few minutes. if the issue persists, try updating yt-dlp: pip install -U yt-dlp"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-zinc-900 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold">GS-Music</span>
            <span className="text-[10px] text-zinc-600 uppercase tracking-wider">alpha</span>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white"
          >
            <FaArrowLeft className="w-3 h-3" />
            back to dashboard
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">troubleshooting</h1>
          <p className="text-zinc-500 mt-2">common issues and how to fix them</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => set_expanded(expanded === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-900/50"
              >
                <span className="font-medium">{faq.question}</span>
                <FaChevronDown
                  className={`w-4 h-4 text-zinc-500 transition-transform ${
                    expanded === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expanded === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-zinc-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-zinc-800 rounded-lg">
          <h2 className="font-semibold mb-2">still need help?</h2>
          <p className="text-sm text-zinc-500 mb-4">
            join our discord server for community support or to report bugs
          </p>
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] rounded hover:bg-[#4752c4]"
          >
            join discord
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-6 px-6 mt-auto">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-zinc-600">
          <div className="flex gap-4">
            <button onClick={() => navigate('/privacy')} className="hover:text-white">privacy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-white">terms</button>
          </div>
          <span>© 2019-2026 GavinStrikes Software LLC</span>
        </div>
      </footer>
    </div>
  )
}
