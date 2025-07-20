import '../styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'INSTITUTO ONE FOUR',
  description: 'Diplomados en informática, contabilidad y habilidades blandas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-primary font-sans">
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  )
}
