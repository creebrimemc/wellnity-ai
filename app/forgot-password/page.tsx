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
import SupportButton from "@/components/support-button"
import { useLanguage } from "@/hooks/use-language"

export default function ForgotPasswordPage() {
  const { t } = useLanguage()
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
        setError(data.error || "An error occurred")
      }
    } catch (error) {
      setError("An error occurred while sending password reset request")
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
              <CardTitle className="text-2xl">{t.auth.forgotPassword.title}</CardTitle>
              <CardDescription>
                {success ? t.auth.forgotPassword.successSubtitle : t.auth.forgotPassword.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {success ? (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{t.auth.forgotPassword.success.title}</h3>
                    <p className="text-gray-600">{t.auth.forgotPassword.success.message}</p>
                  </div>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/login">{t.auth.forgotPassword.backToLogin}</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSuccess(false)
                        setEmail("")
                      }}
                    >
                      {t.auth.forgotPassword.tryAgain}
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
                      <Label htmlFor="email">{t.auth.forgotPassword.email}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder={t.auth.forgotPassword.emailPlaceholder}
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
                      {isLoading ? t.auth.forgotPassword.sending : t.auth.forgotPassword.sendResetLink}
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <Link href="/login" className="inline-flex items-center text-sm text-green-600 hover:underline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {t.auth.forgotPassword.backToLogin}
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
