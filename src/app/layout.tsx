import '../styles/globals.css'  // ✅

import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Instituto ONE FOUR',
  description: 'Educación que transforma tu futuro.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-100 px-4">{children}</body>

    </html>
  )
}
