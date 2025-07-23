"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye, EyeOff, User, Mail, Lock, AlertCircle } from "lucide-react"
import SupportButton from "@/components/support-button"
import { useLanguage } from "@/hooks/use-language"

export default function SignUpPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fitnessLevel: "",
    goals: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match") // This should be translated too
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("You must agree to the terms of service") // This should be translated too
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fitnessLevel: formData.fitnessLevel,
          goals: formData.goals,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "An error occurred during registration")
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred during registration")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navigation />
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.auth.signup.success.title}</h2>
                <p className="text-gray-600 mb-4">{t.auth.signup.success.message}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
        <SupportButton />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">{t.auth.signup.badge}</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.auth.signup.title}</h1>
                <p className="text-xl text-gray-600">{t.auth.signup.subtitle}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.auth.signup.features.aiCoaching.title}</h3>
                    <p className="text-gray-600">{t.auth.signup.features.aiCoaching.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.auth.signup.features.formCorrection.title}</h3>
                    <p className="text-gray-600">{t.auth.signup.features.formCorrection.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.auth.signup.features.progressTracking.title}</h3>
                    <p className="text-gray-600">{t.auth.signup.features.progressTracking.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.auth.signup.features.communitySupport.title}</h3>
                    <p className="text-gray-600">{t.auth.signup.features.communitySupport.description}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">{t.auth.signup.benefits.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.auth.signup.benefits.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.auth.signup.title}</CardTitle>
                <CardDescription>{t.auth.signup.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t.auth.signup.firstName}</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t.auth.signup.lastName}</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">{t.auth.signup.username}</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="username"
                        placeholder={t.auth.signup.usernamePlaceholder}
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.auth.signup.email}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.auth.signup.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">{t.auth.signup.password}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder={t.auth.signup.passwordPlaceholder}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">{t.auth.signup.passwordRequirements}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">{t.auth.signup.confirmPassword}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={t.auth.signup.confirmPasswordPlaceholder}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fitnessLevel">{t.auth.signup.fitnessLevel}</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, fitnessLevel: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.auth.signup.fitnessLevelPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">{t.auth.signup.fitnessLevels.beginner}</SelectItem>
                        <SelectItem value="intermediate">{t.auth.signup.fitnessLevels.intermediate}</SelectItem>
                        <SelectItem value="advanced">{t.auth.signup.fitnessLevels.advanced}</SelectItem>
                        <SelectItem value="athlete">{t.auth.signup.fitnessLevels.athlete}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">{t.auth.signup.goals}</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, goals: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.auth.signup.goalsPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">{t.auth.signup.goalOptions["weight-loss"]}</SelectItem>
                        <SelectItem value="muscle-gain">{t.auth.signup.goalOptions["muscle-gain"]}</SelectItem>
                        <SelectItem value="endurance">{t.auth.signup.goalOptions.endurance}</SelectItem>
                        <SelectItem value="strength">{t.auth.signup.goalOptions.strength}</SelectItem>
                        <SelectItem value="general">{t.auth.signup.goalOptions.general}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      {t.auth.signup.agreeToTerms}{" "}
                      <Link href="/terms" className="text-green-600 hover:underline">
                        {t.auth.signup.termsOfService}
                      </Link>{" "}
                      {t.auth.signup.and}{" "}
                      <Link href="/privacy" className="text-green-600 hover:underline">
                        {t.auth.signup.privacyPolicy}
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? t.auth.signup.creatingAccount : t.auth.signup.createAccount}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    {t.auth.signup.alreadyHaveAccount}{" "}
                    <Link href="/login" className="text-green-600 hover:underline font-medium">
                      {t.auth.signup.signIn}
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <SupportButton />
    </div>
  )
}
