import '../styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Providers from "./providers";
export const metadata: Metadata = {
  title: 'INSTITUTO ONE FOUR',
  description: 'Diplomados en informática, contabilidad y habilidades blandas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-background dark:text-white transition-colors duration-300">
        <Providers>{children}</Providers> {/* 👈 aquí usas el ThemeProvider */}
      </body>
    </html>
  )
}
