"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface LanguageToggleProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  className?: string
}

export function LanguageToggle({ currentLanguage, onLanguageChange, className = "" }: LanguageToggleProps) {
  const toggleLanguage = () => {
    const newLanguage: Language = currentLanguage === "en" ? "tr" : "en"
    onLanguageChange(newLanguage)
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className={`flex items-center gap-2 ${className}`}>
      <Globe className="h-4 w-4" />
      <span className="font-medium">{currentLanguage === "en" ? "TR" : "EN"}</span>
    </Button>
  )
}
