import { useNavigate } from 'react-router-dom'

export default function PrivacyPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b border-zinc-800">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/dashboard')}>GS-Music</h1>
                        <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Alpha</span>
                    </div>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-3 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                    >
                        back to home
                    </button>
                </div>
            </header>

            <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
                <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-tight">Privacy Policy</h2>

                <div className="space-y-8 text-zinc-400 leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                        <p>This policy outlines the limited data we collect and how it is used to provide the music service.</p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">Data Collection</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-zinc-200">Account Information:</strong> We store your username and a hashed version of your password. We do not store plain-text passwords.</li>
                            <li><strong className="text-zinc-200">Usage Data:</strong> We may collect data on streaming activity and search history to improve the service and provide features like "Recently Played".</li>
                            <li><strong className="text-zinc-200">Technical Data:</strong> We collect basic device information (OS version, app version) to help troubleshoot issues.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">Data Sharing</h3>
                        <p>We do not sell, trade, or otherwise transfer your personal data to outside parties. All data remains within GavinStrikes Software.</p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">Security</h3>
                        <p>We implement a variety of security measures to maintain the safety of your personal information, including token-based authentication and secure password hashing.</p>
                    </section>
                </div>
            </main>

            <footer className="mt-auto border-t border-zinc-900 bg-black/50 py-12">
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
                    <div className="flex gap-8 text-sm text-zinc-500">
                        <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Privacy</button>
                        <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">Terms</button>
                        <a href="#" className="hover:text-white transition-colors">Discord</a>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">© 2019 - 2026 GavinStrikes Software LLC • All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}
