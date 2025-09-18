import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Industrial Design Portfolio - Nizamuddin NS',
  description: 'Passionate Industrial Designer from Kochi, Kerala, focusing on creating innovative, user-centric solutions.',
  keywords: 'industrial design, product design, 3D modeling, Kerala, India, Nizamuddin NS',
  authors: [{ name: 'Nizamuddin NS' }],
  creator: 'Nizamuddin NS',
  openGraph: {
    type: 'website',
    title: 'Industrial Design Portfolio - Nizamuddin NS',
    description: 'Passionate Industrial Designer focusing on creating innovative, user-centric solutions.',
    siteName: 'Nizamuddin NS Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Design Portfolio - Nizamuddin NS',
    description: 'Passionate Industrial Designer focusing on creating innovative, user-centric solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}