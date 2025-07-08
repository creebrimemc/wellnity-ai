"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import { SupportButton } from "@/components/support-button"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        const data = await response.json()
        setError(data.error || "Bir hata oluştu")
      }
    } catch (error) {
      setError("Şifre sıfırlama isteği gönderilirken bir hata oluştu")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Şifremi Unuttum</CardTitle>
              <CardDescription>
                {success
                  ? "Şifre sıfırlama bağlantısı gönderildi"
                  : "E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {success ? (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">E-posta Gönderildi</h3>
                    <p className="text-gray-600">
                      Eğer bu e-posta adresi sistemimizde kayıtlıysa, şifre sıfırlama bağlantısı gönderilmiştir. E-posta
                      kutunuzu kontrol edin.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/login">Giriş Sayfasına Dön</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSuccess(false)
                        setEmail("")
                      }}
                    >
                      Tekrar Dene
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {error && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta Adresi</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="ornek@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <Link href="/login" className="inline-flex items-center text-sm text-green-600 hover:underline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Giriş sayfasına dön
                    </Link>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <SupportButton />
    </div>
  )
}
