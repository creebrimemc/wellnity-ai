"use client"

import type React from "react"

import { SessionProvider } from "next-auth/react"
import { LanguageProvider } from "@/hooks/use-language"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </SessionProvider>
  )
}
