import { useNavigate } from 'react-router-dom'

export default function TermsPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b border-zinc-800">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/dashboard')}>
                            GS-Music
                        </h1>
                        <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
                            Alpha
                        </span>
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
                <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-tight">
                    Terms of Service
                </h2>

                <div className="space-y-8 text-zinc-400 leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h3>
                        <p>
                            By accessing or using GS-Music (“the Service”), you agree to be bound by these
                            Terms of Service (“Terms”). The Service is operated by GavinStrikes Software LLC
                            (“we,” “us,” or “our”). If you do not agree to these Terms, you may not access or
                            use the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Eligibility</h3>
                        <p>
                            You must be at least 13 years old (or the minimum legal age in your jurisdiction)
                            to use the Service. By using the Service, you represent and warrant that you meet
                            these requirements and have the legal capacity to enter into these Terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Account Security & Sharing</h3>
                        <p className="mb-4">
                            Your account is for personal, non-commercial use only. You are responsible for
                            maintaining the confidentiality of your account credentials and for all activity
                            that occurs under your account.
                        </p>
                        <p className="mb-4">
                            You may not share, sell, transfer, sublicense, or otherwise provide access to
                            your account or the GS-Music application binaries to any unauthorized third party.
                        </p>
                        <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 font-medium">
                                Any violation of these policies may result in immediate termination of your
                                account and permanent revocation of access to all GavinStrikes Software LLC
                                services, at our sole discretion.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">4. Acceptable Use</h3>
                        <p>
                            You agree not to misuse the Service. This includes, but is not limited to,
                            attempting to gain unauthorized access, reverse engineering, scraping,
                            distributing malware, abusing APIs, or interfering with the normal operation
                            of the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">5. Prohibited Conduct</h3>
                        <p>
                            You may not use the Service for any unlawful purpose, to violate any applicable
                            laws or regulations, or to infringe upon the rights of others. We reserve the
                            right to investigate and take appropriate action against violations.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">6. Termination of Access</h3>
                        <p>
                            We may suspend or terminate your access to the Service at any time, with or
                            without notice, for any reason, including but not limited to violations of
                            these Terms or conduct we determine to be harmful to the Service, other users,
                            or us.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">7. Alpha Version Disclaimer</h3>
                        <p>
                            GS-Music is provided as an alpha release and may contain bugs, errors, or
                            incomplete features. The Service is provided “as is” and “as available,”
                            without warranties of any kind.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">8. Third-Party Services</h3>
                        <p>
                            The Service may integrate with or rely on third-party services. We are not
                            responsible for the content, availability, or practices of any third-party
                            services, and your use of them is subject to their respective terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">9. Intellectual Property</h3>
                        <p>
                            All content, software, trademarks, and intellectual property related to the
                            Service are owned by GavinStrikes Software LLC or its licensors. You are granted
                            no rights except those expressly provided under these Terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">10. Limitation of Liability</h3>
                        <p>
                            To the maximum extent permitted by law, GavinStrikes Software LLC shall not be
                            liable for any indirect, incidental, consequential, or punitive damages arising
                            out of or related to your use of the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">11. Indemnification</h3>
                        <p>
                            You agree to indemnify and hold harmless GavinStrikes Software LLC from any
                            claims, liabilities, damages, losses, and expenses arising out of your use
                            of the Service or violation of these Terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">12. Changes to These Terms</h3>
                        <p>
                            We reserve the right to modify these Terms at any time. Continued use of the
                            Service after changes become effective constitutes acceptance of the revised
                            Terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">13. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of
                            the United States and the applicable state or jurisdiction in which
                            GavinStrikes Software LLC operates, without regard to conflict of law principles.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-white mb-3">14. Contact Information</h3>
                        <p>
                            If you have any questions about these Terms, you may contact us through the
                            official GS-Music Discord or other published support channels.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="mt-auto border-t border-zinc-900 bg-black/50 py-12">
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
                    <div className="flex gap-8 text-sm text-zinc-500">
                        <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">
                            Privacy
                        </button>
                        <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">
                            Terms
                        </button>
                        <a href="#" className="hover:text-white transition-colors">
                            Discord
                        </a>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                        © 2019 – 2026 GavinStrikes Software LLC • All rights reserved
                    </p>
                </div>
            </footer>
        </div>
    )
}
