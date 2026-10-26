import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'NEXUS Institution OS', description: 'Executive management dashboard for institutional operations' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="th"><body>{children}</body></html> }
