import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wellnity AI - Kişisel AI Fitness Koçunuz",
  description:
    "Kişiselleştirilmiş AI koçluğu, akıllı antrenman planları ve gerçek zamanlı form düzeltmesi ile fitness yolculuğunuzu dönüştürün.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
