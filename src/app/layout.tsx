import RecoilContextProvider from '@/lib/RecoilContextProvider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Tasks',
  description: 'This is the awesome App.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="bg-[#F0FFFB]">
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  )
}
