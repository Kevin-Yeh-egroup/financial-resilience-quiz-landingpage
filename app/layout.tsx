import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google'

import './globals.css'

const notoSans = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['300', '400', '500', '700'],
})

const notoSerif = Noto_Serif_TC({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: '財務韌性檢測 — 了解你現在的財務狀態',
  description:
    '用 10 題貼近日常的問題，陪你一起把目前的財務狀況整理清楚。不用輸入金額，沒有對錯，約 3-5 分鐘完成。',
}

export const viewport: Viewport = {
  themeColor: '#f0ebe4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
