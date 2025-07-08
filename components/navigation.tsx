"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              Hakkımızda
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors">
              Fiyatlandırma
            </Link>
            <Link href="/download" className="text-gray-700 hover:text-green-600 transition-colors">
              İndir
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link href="/login">Giriş Yap</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/signup">Başlayın</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fiyatlandırma
              </Link>
              <Link
                href="/download"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                İndir
              </Link>
              <div className="pt-4 pb-2 space-y-2">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Giriş Yap
                  </Link>
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Başlayın
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
