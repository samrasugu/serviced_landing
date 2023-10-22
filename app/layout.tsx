import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'

const urbansit = Urbanist({ subsets: ['latin'], style: "normal", weight: '500' })

export const metadata: Metadata = {
  title: 'Serviced',
  description: 'Task Manager Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbansit.className}>{children}</body>
    </html>
  )
}
